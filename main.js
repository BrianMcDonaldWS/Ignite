!function(e){function t(t){for(var r,o,a=t[0],s=t[1],u=t[2],c=0,f=[];c<a.length;c++)o=a[c],i[o]&&f.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);f.length;)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={23:0},i={23:0},l=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{26:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var r=e+".css",i=a.p+r,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var u=(d=l[s]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===r||u===i))return t()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){var d;if((u=(d=c[s]).getAttribute("data-href"))===r||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.request=r,delete o[e],f.parentNode.removeChild(f),n(l)},f.href=i,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){o[e]=0}));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=r);var l,s=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(e){return a.p+""+({0:"vendors~Blog~BulmaPlugins~FirstPost~GettingStarted~IgnitePlugins~IncludedPlugins~Introduction~Option~d59fe128",1:"vendors~plugin-AlphaPicker",2:"Blog",3:"BulmaPlugins",4:"FirstPost",5:"GettingStarted",6:"IgnitePlugins",7:"IncludedPlugins",8:"Introduction",9:"Options",10:"Plugins",11:"ProjectStructure",12:"Publishing",13:"ShorterPost",14:"Theming",15:"home",16:"image-blog.png",17:"image-component.png",18:"image-config.png",19:"image-deploy.png",20:"image-doggo.gif",21:"image-markdown.png",22:"index",24:"plugin-Gist",25:"plugin-embed",26:"plugin-test",27:"search-files"}[e]||e)+".js"}(e),l=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");l.type=r,l.request=o,n[1](l)}i[e]=void 0}};var c=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,s.appendChild(u)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Ignite/",a.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=u;l.push([13,28]),n()}([function(e,t){e.exports=React},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(3)),o=l(n(0)),i=l(n(10));function l(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const s=e=>o.default.createElement("a",a({},e,{href:e.to,onClick:t=>{t.preventDefault();const n=new URL(r.default.join(window.location.origin,e.to));history.pushState((0,i.default)(n),null,e.to),e.onClick();const o=new CustomEvent("changeLocation",{detail:n});return dispatchEvent(o),!1}}));s.defaultProps={to:"",onClick:()=>{}};var u=s;t.default=u,e.exports=t.default},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query});t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(n(0));var r,o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}const l=({type:e,icon:t,className:n})=>(function(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}})("i",{className:(0,o.default)(e,`fa-${t}`,n)});l.defaultProps={type:"far",icon:"question-circle",className:null};var a=l;t.default=a,e.exports=t.default},,function(e,t,n){n(14),n(15),e.exports=n(19)},function(e,t,n){e.exports=n.p+"docs/logo.svg"},,,,,function(e,t,n){"use strict";s(n(0));var r,o=n(20),i=s(n(21)),l=s(n(22)),a=s(n(23));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}const c=(0,l.default)(a.default);(0,o.render)(u(i.default,{},void 0,u(c,{})),document.getElementById("index"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=(r=n(10))&&r.__esModule?r:{default:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=class extends o.Component{constructor(e){super(e),l(this,"state",{location:window.location}),l(this,"changeLocation",e=>{this.setState({location:(0,i.default)(e.state||e.detail)})}),window.history.replaceState((0,i.default)(window.location),null,window.location.pathname)}componentDidMount(){window.addEventListener("popstate",this.changeLocation),window.addEventListener("changeLocation",this.changeLocation)}componentWillUnmount(){window.removeEventListener("popstate",this.changeLocation),window.removeEventListener("changeLocation",this.changeLocation)}render(){const{children:e}=this.props,t=o.default.Children.map(e,e=>o.default.cloneElement(e,{location:this.state.location}));return o.default.createElement("div",{ref:e=>{this.router=e},style:{height:"100%"}},t)}};t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=e=>(class extends r.Component{constructor(e){super(e),this.state={searchIndex:window.configuration.searchIndex,markdown:window.configuration.markdown,plugins:window.configuration.plugins,blogHeroImage:null},window.configuration.setFirstLink=this.setFirstLink.bind(this),window.configuration.setSearchIndex=this.setSearchIndex.bind(this),window.configuration.setBlogHero=this.setBlogHeader.bind(this)}setBlogHeader(e){this.setState({blogHeroImage:e})}setSearchIndex(e){this.setState({searchIndex:e})}setFirstLink(e,t){const n=this.state.markdown.map(n=>(n[0]===e&&(n[3]=t),n));this.setState({markdown:n})}render(){return r.default.createElement(e,o({},this.props,{searchIndex:this.state.searchIndex,markdown:this.state.markdown,plugins:this.state.plugins,blogHero:this.state.blogHeroImage}))}});t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),l=(r=n(24))&&r.__esModule?r:{default:r};function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=e=>e.reduce((e,[t,n,r,o])=>(e[t]=n,r&&(e.indexFiles=a({},e.indexFiles,{[t]:o})),e),{}),c=e=>e.reduce((e,[t,n,r,o])=>Object.assign({},e,{[t]:{name:t,component:n,options:r,provider:o}}),{});class d extends i.Component{constructor(...e){super(...e),s(this,"state",{markdown:u(this.props.markdown),plugins:c(this.props.plugins)})}static getDerivedStateFromProps(e,t){return a({},t,{markdown:u(e.markdown),searchIndex:e.searchIndex})}render(){return function(e,t,n,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=r;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}(l.default,{searchIndex:this.props.searchIndex,markdown:this.state.markdown,location:this.props.location,plugins:this.state.plugins,blogHero:this.props.blogHero})}}s(d,"defaultProps",{blogHero:null,markdown:[],plugins:[],searchIndex:[]});var f=d;t.default=f,e.exports=t.default},function(e,t,n){"use strict";(function(r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=p(n(3)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=p(n(27)),s=p(n(31)),u=p(n(36)),c=p(n(40)),d=p(n(49)),f=n(50);function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t,n,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=r;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class v extends l.Component{constructor(...e){super(...e),m(this,"state",{searchResults:[]}),m(this,"jumpToHash",()=>{r(()=>{let{hash:e,href:t}=this.props.location;(e=e.slice(1))&&document.getElementById(e)?document.getElementById(e).scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"}):e||t.includes("#")||document.querySelector("body").scrollIntoView({block:"start",inline:"nearest"})})}),m(this,"setSearchResults",e=>{this.setState({searchResults:e})})}componentDidMount(){document.title="Ignite"}componentDidUpdate(){this.jumpToHash()}render(){const{markdown:e,location:t,index:n}=this.props,r=t.pathname.includes("blog/"),o=t.pathname===i.default.join("/Ignite/","/home.html"),l=(0,f.determinePage)(e,t,n);return h("div",{className:d.default.root},void 0,h(c.default,{location:this.props.location,setSearchResults:this.setSearchResults,searchIndex:this.props.searchIndex}),this.state.searchResults.length>0?h(s.default,{searchResults:this.state.searchResults,setResults:this.setSearchResults}):o?h(l,{plugins:this.props.plugins,className:d.default.Page}):r?h(u.default,{className:d.default.App,Page:l,plugins:this.props.plugins,location:t,blogHero:this.props.blogHero}):h(a.default,{className:d.default.App,SidebarComponent:(0,f.determineSidebar)(e,t,n),Page:l,location:t,plugins:this.props.plugins}))}}v.defaultProps={plugins:[],searchIndex:[],blogHero:null,index:"index.md"};var g=v;t.default=g,e.exports=t.default}).call(this,n(25).setImmediate)},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n(0));var r,o=a(n(2)),i=a(n(28)),l=a(n(30));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}const u=({Page:e,SidebarComponent:t,location:n,plugins:r,className:a})=>s("div",{id:"root",className:(0,o.default)(l.default.contentArea)},void 0,s("div",{className:(0,o.default)(a,"columns")},void 0,s(i.default,{className:"column is-one-third-tablet is-one-quarter-desktop box",content:t,currentPage:`${n.pathname}${n.hash?n.hash:""}`}),s("div",{className:(0,o.default)(l.default.content,"column","content","is-two-thirds-tablet","is-three-quarters-desktop")},void 0,s(e,{plugins:r,className:l.default.Page}))));u.defaultProps={plugins:[],className:null};var c=u;t.default=c,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Sidebar=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=s(n(2)),l=s(n(11)),a=s(n(29));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=u(l.default,{type:"fas",icon:"angle-left"}),f=u(l.default,{type:"fas",icon:"angle-right"});class p extends o.Component{constructor(...e){super(...e),c(this,"state",{open:!1}),c(this,"handleClickOutside",e=>{this.sidebar&&this.sidebar.contains(e.target)||this.setState({open:!1})}),c(this,"toggleSidebar",()=>{const{open:e}=this.state;this.setState({open:!e})})}componentDidMount(){document.addEventListener("mousedown",this.handleClickOutside,!1)}componentUnWillMount(){document.removeEventListener("mousedown",this.handleClickOutside,!1)}render(){return this.props.content?u("div",{className:(0,i.default)(a.default.root,"menu-list",this.props.className,this.state.open&&a.default.open)},void 0,o.default.createElement("div",{ref:e=>{this.sidebar=e},className:a.default.sticky},u("button",{className:(0,i.default)("is-hidden-tablet","button","is-white",a.default.toggle),type:"button",onClick:this.toggleSidebar},void 0,this.state.open?d:f),this.props.content&&u(this.props.content,{className:a.default.sidebar,currentPage:this.props.currentPage,onClick:this.handleClickOutside}))):null}}t.Sidebar=p,c(p,"defaultProps",{className:null,currentPage:null,content:null});var h=p;t.default=h},function(e,t,n){e.exports={root:"_0889",sidebar:"afb7",sticky:"_9991",toggle:"_7702",open:"bd87"}},function(e,t,n){e.exports={contentArea:"b231",content:"c38f",Page:"_6f89"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n(0));var r,o=a(n(2)),i=a(n(32)),l=a(n(35));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}const u=({searchResults:e,setResults:t})=>s("div",{className:(0,o.default)(l.default.searchResults)},void 0,e.map(([e,n])=>s(i.default,{setResults:t,fileName:e,results:n},e)));u.defaultProps={setResults:()=>{},searchResults:[]};var c=u;t.default=c,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=u(n(3)),i=(u(n(0)),u(n(2))),l=u(n(33)),a=u(n(5)),s=u(n(34));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var d=c("br",{});const f=({fileName:e,baseURL:t,results:n,setResults:r})=>c("div",{className:"card"},e,c("div",{className:"card-content"},e,c(a.default,{className:(0,i.default)("subtitle","has-text-link",s.default.title),to:o.default.join(t,e.replace(".md",".html")),onClick:()=>setTimeout(()=>r({}),10)},void 0,e),[...n].map(e=>c("div",{},e,c("p",{dangerouslySetInnerHTML:{__html:(0,l.default)(e)}}),d))));f.defaultProps={setResults:()=>{},baseURL:"/Ignite/",results:[]};var p=f;t.default=p,e.exports=t.default},,function(e,t,n){e.exports={title:"a08f"}},function(e,t,n){e.exports={searchResults:"c120"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n(0));var r,o=a(n(2)),i=a(n(37)),l=a(n(39));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}const u=({Page:e,location:t,plugins:n,blogHero:r,className:a})=>s("div",{},void 0,s(i.default,{location:t,blogHero:r},"hero"),s("div",{className:(0,o.default)(a,"columns",l.default.blog)},void 0,s("div",{className:(0,o.default)("column","content","is-two-thirds-tablet","is-three-quarters-desktop")},void 0,s(e,{plugins:n,className:l.default.Page}))));u.defaultProps={plugins:[],blogHero:null,className:null};var c=u;t.default=c,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;l(n(0));var r,o=l(n(2)),i=l(n(38));function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}const s=({location:e,blogHero:t})=>a("section",{className:(0,o.default)("hero is-info is-medium is-bold",i.default.blogHero),style:t&&"undefined"!==t?{maxWidth:1800,margin:"auto",background:`url(${t})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}:{}},void 0,a("div",{className:"hero-body"},void 0,a("div",{className:"container has-text-centered"},void 0,a("h1",{className:"title",style:e.pathname.includes("blog/index.md")?{}:{opacity:0}},void 0,"Blog"))));s.defaultProps={blogHero:null};var u=s;t.default=u,e.exports=t.default},function(e,t,n){e.exports={blogHero:"fb37"}},function(e,t,n){e.exports={blog:"b6c0",Page:"_5d1a"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=f(n(3)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),l=f(n(2)),a=f(n(5)),s=f(n(41)),u=f(n(42)),c=f(n(11)),d=f(n(48));function f(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}const v=(e="index.md")=>e.replace(".md",".html"),g={className:null,onClick:()=>{}},b=({githubURL:e,onClick:t})=>e?m("a",{className:"navbar-item",href:e,rel:"noopener noreferrer",target:"_blank",onClick:t},void 0,"GitHub",m(c.default,{className:d.default.icon,type:"fab",icon:"github"})):null;b.defaultProps=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}({},g,{githubURL:null});const y=({className:e,onClick:t})=>(()=>Object.values(window.configuration.markdown).find(([e])=>e.includes("blog/")))()?m(s.default,{location:location,className:e,item:["Blog",o.default.join("/Ignite/","/blog/index.html")],icon:m(c.default,{className:d.default.icon,type:"fas",icon:"rss"}),onClick:t}):null;y.defaultProps=g;const O=({className:e,onClick:t})=>m(s.default,{location:location,className:e,item:["Docs",o.default.join("/Ignite/",v())],icon:m(c.default,{className:d.default.icon,type:"fas",icon:"book"}),onClick:t});O.defaultProps=g;var w=m("span",{"aria-hidden":"true"}),P=m("span",{"aria-hidden":"true"}),x=m("span",{"aria-hidden":"true"});class _ extends i.Component{constructor(...e){super(...e),h(this,"state",{menuOpen:!1}),h(this,"closeMenu",()=>{this.setState({menuOpen:!1}),this.props.setSearchResults({})}),h(this,"onClickHamburger",()=>{const{menuOpen:e}=this.state;this.setState({menuOpen:!e})})}render(){const e=window.configuration.markdown.find(([e])=>e===o.default.join("/Ignite/","home.md"));return m("nav",{className:(0,l.default)("main-nav navbar",d.default.nav),role:"navigation","aria-label":"main navigation"},void 0,m("div",{className:(0,l.default)("container",d.default.container)},void 0,m("div",{className:"navbar-brand"},void 0,m(a.default,{to:o.default.join("/Ignite/",e?"/home.html":"/"),className:(0,l.default)(d.default.title,"navbar-item",d.default.brandBasis),onClick:this.closeMenu},void 0,this.props.logo&&m("img",{src:this.props.logo,alt:"logo",className:d.default.logo}),m("h1",{className:(0,l.default)("is-hidden-mobile",d.default.titleText)},void 0,this.props.title)),m("a",{role:"button",className:(0,l.default)("navbar-burger",this.state.menuOpen&&"is-active"),"aria-label":"menu","aria-expanded":"false",onClick:this.onClickHamburger},void 0,w,P,x)),m("div",{className:(0,l.default)("navbar-menu",this.state.menuOpen&&"is-active")},void 0,m("div",{className:"navbar-end"},void 0,m(u.default,{searchIndex:this.props.searchIndex,setSearchResults:this.props.setSearchResults,endSearch:this.closeMenu}),this.props.navItems?Object.entries(this.props.navItems).map(e=>i.default.createElement(s.default,p({key:e[0],item:e},this.props))):m(O,{className:!this.props.location.pathname.includes("blog/")&&!("/"===this.props.location.pathname&&!window.configuration.markdown["home.md"])&&"is-active",onClick:this.closeMenu}),m(y,{className:this.props.location.pathname.includes("blog/")&&"is-active",onClick:this.closeMenu}),m(b,{githubURL:this.props.githubURL,onClick:this.closeMenu})))))}}_.defaultProps={setSearchResults:()=>{},title:"Ignite",logo:"/Ignite/docs/logo.svg",searchIndex:[],navItems:void 0,githubURL:"https://github.com/intuit/Ignite",location:{pathname:"",hash:""}};var j=_;t.default=j,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;l(n(0));var r,o=l(n(2)),i=l(n(5));function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s=e=>{const t=((e="index.md")=>e.replace(".md",".html"))();return"/"===e?t:e.includes(t)?e:`${e}/${t}`},u=e=>{let t,{item:[n,l]}=e,u=a(e,["item"]);if(u.navItems){const e=Object.values(u.navItems).filter(e=>"/"!==e);("/"!==l&&u.location.pathname.includes(l)||"/"===u.location.pathname&&u.navItems.root===l||"/"===l&&!e.find(e=>u.location.pathname.includes(e))&&!u.location.pathname.includes("blog/"))&&(t=!0)}return"root"!==n&&function(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}(i.default,{className:(0,o.default)("navbar-item",t&&"is-active"),to:s(l),onClick:u.onClick},n,n,u.icon)};u.defaultProps={navItems:void 0,icon:null,onClick:()=>{}};var c=u;t.default=c,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getLines=t.lineWithCodeBlock=t.indexOfAll=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=d(n(2)),l=n(43),a=d(n(44)),s=d(n(45)),u=d(n(46)),c=d(n(47));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),u=0;u<l;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=(e,t)=>{const n=[];let r=e.toLowerCase().indexOf(t);for(;-1!==r;)n.push(r),r=e.indexOf(t,r+1);return n};t.indexOfAll=h;const m=(e,t)=>{let n=e.indexOf("`"),r=e.indexOf(t);for(;-1!==r;)if(r<n||-1===n)r=(e=(0,u.default)(e,t,`**${t}**`,r)).indexOf(t,r+3),-1!==n&&(n+=4);else if(e.indexOf("`",n+1)<r){const t=e.indexOf("`",n+1);n=-1===t?e.indexOf("`",n+1):e.indexOf("`",t+1)}else r=e.indexOf(t,r+1);return e};function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}t.lineWithCodeBlock=m;const g=(e,t,n)=>new Set(t.map(t=>{const r=(0,s.default)(e,t);let o=e.split("\n")[r-1];return o.indexOf("`")>-1?o=m(o,n):-1===o.indexOf("![")&&(o=(o=o.replace(new RegExp(`${n}`),`**${n}**`)).replace(new RegExp(`${v(n)}`,"g"),`**${v(n)}**`)),o}));t.getLines=g;class b extends o.Component{constructor(e){super(e),p(this,"constructIndex",()=>{this.props.searchIndex.forEach(e=>{this.index.indexDocument(e.id,e.body)})}),p(this,"componentDidUpdate",()=>{this.constructIndex()}),p(this,"search",(0,l.throttle)(500,async e=>{if(""===e)return this.props.setSearchResults([]);const t=await this.index.search(e),n=[];t.forEach(t=>{const r=this.props.searchIndex.find(e=>e.id===t),o=h(r.body,e);0!==o.length&&n.push([r.id,g(r.body,o,e)])}),this.props.setSearchResults(n)})),p(this,"keyDown",e=>{13===e.keyCode&&this.search(e.target.value),8===e.keyCode&&this.search(e.target.value)}),this.index=new a.default,this.constructIndex()}render(){return f("div",{className:(0,i.default)("navbar-item",c.default.root)},void 0,f("div",{className:"control"},void 0,f("input",{className:"input",type:"text",placeholder:"Search",onChange:e=>this.search(e.target.value),onKeyDown:this.keyDown})))}}p(b,"defaultProps",{searchIndex:[],setSearchResults:()=>{}});var y=b;t.default=y},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){return e.slice(0,r)+e.slice(r,r+t.length).replace(t,n)+e.slice(r+t.length)},e.exports=t.default},function(e,t,n){e.exports={root:"a59e"}},function(e,t,n){e.exports={icon:"b001",nav:"f59e",container:"_1e29",title:"_95dd",titleText:"_9d2b",brandBasis:"_9975",logo:"f29f"}},function(e,t,n){e.exports={Page:"_009e",root:"_7c48",App:"_9934"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.determinePage=t.determineSidebar=void 0;var r=i(n(3)),o=i(n(51));function i(e){return e&&e.__esModule?e:{default:e}}const l=(e,t,n)=>e.indexFiles&&Object.entries(e.indexFiles).find(([e])=>{const i=n.includes(".md")?r.default.dirname(n):n;return Object.values(t).includes(r.default.dirname(e))&&(0,o.default)(r.default.dirname(e),"/")===(0,o.default)(i,"/")});t.determineSidebar=((e,t,n,o)=>{const i=t.pathname.replace(".html",".md"),a=r.default.join("/Ignite/",n);let s=e[a],u=e.indexFiles[a];if(o){const[t,a]=l(e,o,i)||[];if(t&&(s=e[t],u=a),!s&&e.indexFiles){const t=r.default.join(o.root,n);s=e[t],u=e.indexFiles[t]}}return window.configuration.currentFirstPage=u,s});t.determinePage=((e,t,n,o)=>{const i=t.pathname.replace(".html",".md");if(i.includes("blog/"))return e[i];let a=e[i];if(o){const[,t]=l(e,o,i)||[];if(!t||a&&!i.includes(n)||(a=e[t]),!a&&e.indexFiles){const t=r.default.join(o.root,n);a=e[e.indexFiles[t]]}}const s=r.default.join("/Ignite/",n);return a&&s!==i||!e.indexFiles||(a=e[e.indexFiles[s]]),a||(()=>null)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){"]"===t&&(t="\\]");"\\"===t&&(t="\\\\");return e.replace(new RegExp("^["+t+"]+|["+t+"]+$","g"),"")},e.exports=t.default}]);
//# sourceMappingURL=main.js.map