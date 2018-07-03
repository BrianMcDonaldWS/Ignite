(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{73:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=i(a(3)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}(a(0));i(a(2)),i(a(82));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:r,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const c=e=>{let{to:t}=e,a=u(e,["to"]);return t.includes("http")?n.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=o.default.join("/Ignite/","pages/Blog.html")+t),n.default.createElement("a",d({},a,{href:t,onClick:a=>{a.preventDefault();const r=new URL(o.default.join(window.location.origin,t));window.history.pushState((e=>({pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(n),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,a;return a=t=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,null):null}},l(t,"defaultProps",{shouldLoad:!0}),a};h(()=>a.e(21).then(a.bind(null,60))),h(()=>a.e(21).then(a.bind(null,81)));var p=s("h1",{},void 0,"Blog"),f=s("p",{},void 0,"To setup a blog for your documentation website all you have to do is create a ",s("code",{},void 0,"blog/")," folder in your src and start writing blog posts. That's it."),g=s("p",{},void 0,"At the Start of each blog post you must have a front matter. This sections specifies metadata about your blog post that will also be used to render the header."),m=s("pre",{},void 0,s("code",{className:"language-markdown"},void 0,"---",s("br",{}),s("span",{className:"hljs-section"},void 0,"title: First Post",s("br",{}),"---"),s("br",{}))),b=s("p",{},void 0,"Control the background of the hero on the blog. Works better with wide images. (Twitter banners work great!)"),v=s("pre",{},void 0,s("code",{className:"language-markdown"},void 0,"---",s("br",{}),s("span",{className:"hljs-section"},void 0,"image: https://pbs.twLazyImageComponent.com/profile_banners/7547562/1516584955/1500x500",s("br",{}),"---"),s("br",{}))),w=s("pre",{},void 0,s("code",{className:"language-markdown"},void 0,"---",s("br",{}),s("span",{className:"hljs-section"},void 0,"author: Andrew Lisowski",s("br",{}),"---"),s("br",{}))),y=s("pre",{},void 0,s("code",{className:"language-markdown"},void 0,"---",s("br",{}),"author:",s("br",{}),"  name: Andrew Lisowski",s("br",{}),s("span",{className:"hljs-section"},void 0,"  email: suacy.badger@gmail.com",s("br",{}),"---"),s("br",{}))),k=s("p",{},void 0,"Have your name link to any website."),P=s("pre",{},void 0,s("code",{className:"language-markdown"},void 0,"---",s("br",{}),"author:",s("br",{}),"  name: Andrew Lisowski",s("br",{}),s("span",{className:"hljs-section"},void 0,"  link: https://github.intuit.com/alisowski",s("br",{}),"---"),s("br",{})));var O=e=>s("div",{className:e.className},void 0,s("section",{},void 0,p,f,s("h2",{id:"blog-front-matter"},void 0,"Blog Front Matter ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#blog-front-matter","aria-hidden":"true"})),g,s("h2",{id:"title"},void 0,"Title ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#title","aria-hidden":"true"})),m,s("h2",{id:"hero-image"},void 0,"Hero Image ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#hero-image","aria-hidden":"true"})),b,v,s("h2",{id:"author"},void 0,"Author ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#author","aria-hidden":"true"})),w,s("h3",{id:"profile-pic"},void 0,"Profile Pic ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#profile-pic","aria-hidden":"true"})),s("p",{},void 0,"Ignite uses ",s(c,{currentPage:e.currentPage,target:"_blank",to:"http://en.gravatar.com/",className:"external-link"},void 0,"gravatar")," to find a profile pic for your blog posts."),y,s("h3",{id:"name-link"},void 0,"Name Link ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#name-link","aria-hidden":"true"})),k,P));t.default=O,e.exports=t.default}}]);
//# sourceMappingURL=Blog.js.map