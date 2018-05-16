#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import ghpages from 'gh-pages';
import register from 'babel-register';

import config from '../webpack.config';
import packageJSON from '../package';

register(packageJSON.babel || {});

export const defaults = {
  mode: 'production',
  src: 'docs/',
  dst: '_ignite/',
  index: 'index.md',
  port: 8008,
  title: 'Documentation',
  codeStyle: 'foundation',
  color: 'auto',
  selectedColor: 'auto',
  logo: 'logo.svg',
  bulmaTheme: 'flatly'
};

async function initPlugins(options) {
  options.plugins.forEach(async plugin => {
    const [, pluginPath, pluginOptions] = plugin;
    const initFile = path.join(pluginPath, 'init.js');
    if (fs.existsSync(initFile)) {
      try {
        pluginOptions._initData = await require(path.resolve(initFile))(
          pluginOptions
        );
      } catch (err) {
        console.log(err);
      }
    }
  });

  return options;
}

export default async function build(options, user) {
  options = Object.assign({}, defaults, options);

  if (options.plugins) {
    options = await initPlugins(options);
  }

  if (options.watch) {
    options = Object.assign({}, options, {
      mode: 'development',
      compilationSuccessInfo: {
        messages: [
          `You documentation is running here http://localhost:${options.port}`
        ]
      }
    });
  } else {
    options = Object.assign(options, {
      compilationSuccessInfo: {
        messages: ['Documentation built!'],
        notes: [
          `Bundled documentation stored in '${options.dst}'.`,
          'Run `ignite --publish` to publish documentation to github-pages.'
        ]
      }
    });
  }

  const webpackConfig = config(options);
  const compiler = webpack(webpackConfig);

  if (options.publish) {
    if (!options.githubURL) {
      console.log('Need to provide githubURL option to publish');
      return;
    }

    if (!user.name) {
      console.log('Need author.name in package.json to publish');
      return;
    }

    if (!user.email) {
      console.log('Need author.email in package.json to publish');
      return;
    }
  }

  if (options.watch) {
    const devServerOptions = Object.assign({}, webpackConfig.devServer, {
      quiet: true
    });
    const server = new WebpackDevServer(compiler, devServerOptions);

    server.listen(options.port, '127.0.0.1', () => {
      console.log(`Starting server on http://localhost:${options.port}`);
    });
  } else {
    compiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }

      stats.hasWarnings();

      if (stats.hasErrors()) {
        return;
      }

      if (options.publish) {
        if (options.githubURL.includes('http')) {
          [, options.githubURL] = options.githubURL.split('//');
        }

        ghpages.publish(
          options.dst,
          {
            message: ':memo: Update Documentation',
            repo: `https://username:${process.env.GITHUB_KEY}@${
              options.githubURL
            }`,
            user
          },
          err => {
            if (err) {
              console.log(err);
              return;
            }

            console.log('Documentation published to github-pages!');
          }
        );
      }
    });
  }
}
