(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{75:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=n(s(3)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,s):{};a.get||a.set?Object.defineProperty(t,s,a):t[s]=e[s]}return t.default=e,t}(s(0)),o=n(s(2)),u=n(s(82));function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t,s,i){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&r)for(var u in r)void 0===t[u]&&(t[u]=r[u]);else t||(t=r||{});if(1===o)t.children=i;else if(o>1){for(var n=new Array(o),l=0;l<o;l++)n[l]=arguments[l+3];t.children=n}return{$$typeof:a,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var s,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(i[s]=e[s]);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)s=o[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}const p=e=>{let{to:t}=e,s=d(e,["to"]);return t.includes("http")?r.default.createElement("a",m({},e,{href:t})):("#"===t[0]&&(t=i.default.join("/Ignite/","blog/FirstPost.html")+t),r.default.createElement("a",m({},s,{href:t,onClick:s=>{s.preventDefault();const a=new URL(i.default.join(window.location.origin,t));window.history.pushState((e=>({pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,t),e.onClick();const r=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(r),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const v={"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40":()=>Promise.resolve({default:{src:{src:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40"},preSrc:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",height:80,width:80}})};class h extends r.default.Component{constructor(...e){super(...e),c(this,"state",{image:null,ImageProvider:v[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e?r.default.createElement(u.default,m({},this.props,{className:(0,o.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),a.forEach(function(t){c(e,t,s[t])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):null}}const f=e=>{var t,s;return s=t=class extends r.default.Component{constructor(...e){super(...e),c(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?r.default.createElement(e,this.props,null):null}},c(t,"defaultProps",{shouldLoad:!0}),s};f(()=>s.e(21).then(s.bind(null,60))),f(()=>s.e(21).then(s.bind(null,81)));var b=l(h,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),g=l("p",{className:"title blogTitle"},void 0,"First Post"),w=l("span",{},void 0," on May 17, 2018",l("span",{})),N=l("div",{className:"blogBody"},void 0,l("p",{},void 0,"I am the first post"),l("p",{},void 0,"Pellentesque et pulvinar quam. Integer et metus non felis laoreet interdum quis id justo. Proin scelerisque diam eget lorem viverra lacinia. Nulla et convallis sapien. Ut mauris nisi, ultrices quis dui sit amet, rhoncus auctor arcu. Fusce et velit molestie, posuere est vitae, dictum est. Fusce vel risus ac libero maximus luctus. Sed fermentum augue in mauris pretium vestibulum. Proin dolor lacus, volutpat in nisi sit amet, laoreet accumsan magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam et tempus neque. Maecenas tortor tortor, auctor ac risus et, egestas sagittis elit. Morbi ac massa augue. Phasellus bibendum nulla diam, nec tempus urna congue vel. Donec ullamcorper turpis et ligula volutpat, placerat consectetur est hendrerit. Aliquam eget viverra metus."),l("p",{},void 0,"This is our implementation of a font-awesome 5 plugin. It matches tags in the markdown the look like ",l("code",{},void 0,":far-flag:")," and replaces them with the html representation."),l("div",{className:"has-text-centered learnMore"},void 0,l(p,{to:"/Ignite/blog/FirstPost.html"},void 0,"Read More"))),y=l(h,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),j=l("p",{className:"title blogTitle"},void 0,"First Post"),P=l("span",{},void 0," on May 17, 2018",l("span",{})),q=l("div",{className:"blogBody"},void 0,l("div",{},void 0,l("p",{},void 0,"I am the first post"),l("p",{},void 0,"Pellentesque et pulvinar quam. Integer et metus non felis laoreet interdum quis id justo. Proin scelerisque diam eget lorem viverra lacinia. Nulla et convallis sapien. Ut mauris nisi, ultrices quis dui sit amet, rhoncus auctor arcu. Fusce et velit molestie, posuere est vitae, dictum est. Fusce vel risus ac libero maximus luctus. Sed fermentum augue in mauris pretium vestibulum. Proin dolor lacus, volutpat in nisi sit amet, laoreet accumsan magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam et tempus neque. Maecenas tortor tortor, auctor ac risus et, egestas sagittis elit. Morbi ac massa augue. Phasellus bibendum nulla diam, nec tempus urna congue vel. Donec ullamcorper turpis et ligula volutpat, placerat consectetur est hendrerit. Aliquam eget viverra metus."),l("p",{},void 0,"This is our implementation of a font-awesome 5 plugin. It matches tags in the markdown the look like ",l("code",{},void 0,":far-flag:")," and replaces them with the html representation."),l("pre",{},void 0,l("code",{className:"language-js"},void 0,l("span",{className:"hljs-keyword"},void 0,"import")," makePlugin ",l("span",{className:"hljs-keyword"},void 0,"from")," ",l("span",{className:"hljs-string"},void 0,"'markdown-it-regexp'"),";",l("br",{}),l("br",{}),l("span",{className:"hljs-keyword"},void 0,"export")," ",l("span",{className:"hljs-keyword"},void 0,"default")," ",l("span",{className:"hljs-function"},void 0,l("span",{className:"hljs-keyword"},void 0,"function")," ",l("span",{className:"hljs-title"},void 0,"fontawesomePlugin"),"(",l("span",{className:"hljs-params"},void 0,"md"),") "),"{",l("br",{}),"  md.use(",l("br",{}),"    makePlugin(",l("span",{className:"hljs-regexp"},void 0,"/:[a-z]{2,}-[a-z]{2,}:/"),", match => {",l("br",{}),"      ",l("span",{className:"hljs-keyword"},void 0,"const")," [type, icon] = match[",l("span",{className:"hljs-number"},void 0,"0"),"].split(",l("span",{className:"hljs-string"},void 0,"':'"),")[",l("span",{className:"hljs-number"},void 0,"1"),"].split(",l("span",{className:"hljs-string"},void 0,"'-'"),");",l("br",{}),"      ",l("span",{className:"hljs-keyword"},void 0,"return")," \\",l("span",{className:"hljs-string"},void 0,'`<i className="',l("span",{className:"hljs-subst"},void 0,"${type}")," fa-",l("span",{className:"hljs-subst"},void 0,"${icon}"),'"></i>\\`;',l("br",{}),"    })",l("br",{}),"  );",l("br",{}),"}",l("br",{})))),l("p",{},void 0,"Etiam tincidunt est tortor, sed consectetur augue pellentesque et. Sed sit amet elementum purus. Nunc et leo quis justo ultrices faucibus et eu arcu. Nulla facilisi. Vestibulum et nisi vitae urna vulputate faucibus. In cursus iaculis aliquam. Fusce tempor facilisis eleifend."),l("p",{},void 0,"Curabitur viverra elementum dolor, nec dapibus quam vulputate nec. Fusce laoreet velit ut est pulvinar porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut lacinia dui. Aenean nec erat blandit, efficitur mi at, dictum turpis. Suspendisse potenti. Mauris at nibh pulvinar, semper diam sit amet, egestas tellus. Nam varius tellus quis enim varius, eget pretium turpis condimentum. Integer cursus neque mattis libero rutrum mollis. Aliquam at suscipit est, eu rutrum mauris. Quisque in urna quam. Donec porta ligula nec magna auctor dictum. Etiam ut fermentum purus, id tristique nisl. Nunc porttitor, mauris interdum tincidunt dictum, est lectus feugiat nulla, nec cursus purus metus nec magna. Ut sed ipsum at libero finibus elementum et et magna. Sed ac facilisis purus, mattis dignissim sapien."),l("p",{},void 0,"Donec mollis diam sit amet sodales faucibus. Integer rhoncus lacus nunc, in tincidunt lorem auctor nec. Integer porta magna quis eros sollicitudin, vel lobortis nisl interdum. Quisque fringilla dolor sit amet justo posuere placerat. Duis feugiat velit eu velit vulputate, sit amet interdum diam cursus. Curabitur varius velit vitae diam tempus, non faucibus dui porta. Etiam imperdiet sit amet justo a varius. Suspendisse quis odio lacus. Aliquam quis viverra nisi, id ullamcorper turpis. Fusce non feugiat quam. Aliquam varius euismod turpis at fermentum."),l("p",{},void 0,"Tags:",l("span",{className:"tag is-info is-medium"},void 0,"first post"),l("span",{className:"tag is-info is-medium"},void 0,"lorem ipsum"))));var k=class extends r.default.Component{componentDidMount(){this.props.atIndex||window.configuration.setBlogHero("https://pbs.twimg.com/profile_banners/7547562/1516584955/1500x500")}render(){return l("div",{className:(0,o.default)("blogPost",this.props.className)},void 0,l("p",{},void 0,this.props.heroUrl),l("section",{},void 0,this.props.stub?l("div",{className:"card"},void 0,l("div",{className:"card-content"},void 0,l("div",{className:"media blogHeader"},void 0,l("div",{className:"media-content has-text-centered"},void 0,b,g,l("p",{className:"subtitle is-6 blogSubtitle"},void 0,l(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.intuit.com/alisowski"},void 0,"Andrew Lisowski"),w))),N)):l("div",{className:"card"},void 0,l("div",{className:"card-content"},void 0,l("div",{className:"media blogHeader"},void 0,l("div",{className:"media-content has-text-centered"},void 0,y,j,l("p",{className:"subtitle is-6 blogSubtitle"},void 0,l(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.intuit.com/alisowski"},void 0,"Andrew Lisowski"),P))),q))))}};t.default=k,e.exports=t.default}}]);
//# sourceMappingURL=FirstPost.js.map