(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=i(n(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));i(n(2)),i(n(73));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u=e=>{let{to:t}=e,n=c(e,["to"]);return t.includes("http")?a.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=o.default.join("/Ignite/","pages/GettingStarted.html")+t),a.default.createElement("a",d({},n,{href:t,onClick:n=>{if(n.preventDefault(),"#"===e.to)return!1;const r=new URL(o.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(a),!1}})))};u.defaultProps={href:"",onClick:()=>{}};const p=e=>{var t,n;return n=t=class extends a.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),n};p(()=>n.e(25).then(n.bind(null,52))),p(()=>n.e(25).then(n.bind(null,74)));var f=s("h1",{},void 0,"Getting Started"),h=s("pre",{},void 0,s("code",{className:"language-bash"},void 0,"yarn add -D ignite",s("br",{}))),v=s("p",{},void 0,"Add ",s("code",{},void 0,"docs")," script to package.json"),g=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",s("br",{}),"    ",s("span",{className:"hljs-attr"},void 0,'"docs"'),": ",s("span",{className:"hljs-string"},void 0,'"ignite"'),",",s("br",{}),"    ",s("span",{className:"hljs-attr"},void 0,'"docs:watch"'),": ",s("span",{className:"hljs-string"},void 0,'"ignite -w"'),s("br",{}),"  }",s("br",{}),"}",s("br",{}))),b=s("p",{},void 0,"If your docs are set up according to the default configuration a folder ",s("code",{},void 0,"_ignite")," will contain a bundled documentation website.");var m=e=>s("div",{className:e.className},void 0,s("section",{},void 0,f,s("h2",{id:"installation"},void 0,"Installation ",s(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#installation","aria-hidden":"true"})),h,s("h2",{id:"add-scripts"},void 0,"Add scripts ",s(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#add-scripts","aria-hidden":"true"})),v,g,b,s("p",{},void 0,"More information about configuration can be found at ",s(u,{currentPage:e.currentPage,to:"/Ignite/pages/Options.html"},void 0,"Options"))));t.default=m,e.exports=t.default}}]);
//# sourceMappingURL=GettingStarted.js.map