(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{69:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t,i=d(s(3)),o=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,s):{};t.get||t.set?Object.defineProperty(a,s,t):a[s]=e[s]}return a.default=e,a}(s(0)),r=d(s(2)),n=d(s(82));function d(e){return e&&e.__esModule?e:{default:e}}function l(e,a,s,i){t||(t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={children:void 0}),a&&o)for(var n in o)void 0===a[n]&&(a[n]=o[n]);else a||(a=o||{});if(1===r)a.children=i;else if(r>1){for(var d=new Array(r),l=0;l<r;l++)d[l]=arguments[l+3];a.children=d}return{$$typeof:t,type:e,key:void 0===s?null:""+s,ref:null,props:a,_owner:null}}function c(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e}).apply(this,arguments)}function p(e,a){if(null==e)return{};var s,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],a.indexOf(s)>=0||(i[s]=e[s]);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}const u=e=>{let{to:a}=e,s=p(e,["to"]);return a.includes("http")?o.default.createElement("a",h({},e,{href:a})):("#"===a[0]&&(a=i.default.join("/Ignite/","pages/IncludedPlugins.html")+a),o.default.createElement("a",h({},s,{href:a,onClick:s=>{s.preventDefault();const t=new URL(i.default.join(window.location.origin,a));window.history.pushState((e=>({pathname:e.pathname,hash:e.hash,query:e.query}))(t),null,a),e.onClick();const o=new CustomEvent("changeLocation",{detail:t});return dispatchEvent(o),!1}})))};u.defaultProps={href:"",onClick:()=>{}};class m extends o.Component{constructor(...e){super(...e),c(this,"state",{open:this.props.open})}render(){return l("details",{open:this.state.open},void 0,this.props.children)}}var g=l("span",{},void 0,"CSS"),v=l("span",{},void 0,"HTML"),b=l("span",{},void 0,"JS"),f=l("pre",{},void 0,l("code",{"data-index":"1",className:"language-css"},void 0,l("span",{className:"hljs-selector-class"},void 0,".className")," {",l("br",{}),"  ",l("span",{className:"hljs-attribute"},void 0,"background"),": red;",l("br",{}),"}",l("br",{}))),N=l("pre",{},void 0,l("code",{"data-index":"2",className:"language-html"},void 0,l("span",{className:"hljs-tag"},void 0,"<",l("span",{className:"hljs-name"},void 0,"div")," ",l("span",{className:"hljs-attr"},void 0,"class"),"=",l("span",{className:"hljs-string"},void 0,'"className"'),">"),l("br",{}))),k=l("pre",{},void 0,l("code",{"data-index":"3",className:"language-javascript"},void 0,l("span",{className:"hljs-function"},void 0,l("span",{className:"hljs-keyword"},void 0,"function")," ",l("span",{className:"hljs-title"},void 0,"doSomething"),"(",l("span",{className:"hljs-params"}),") "),"{",l("br",{}),"  ",l("span",{className:"hljs-keyword"},void 0,"return")," ",l("span",{className:"hljs-string"},void 0,"'foo'"),";",l("br",{}),"}",l("br",{})));const P={"https://media.tenor.com/images/cb12bc24511449db821768715e85b0d9/tenor.gif":()=>Promise.resolve({default:{src:{src:"https://media.tenor.com/images/cb12bc24511449db821768715e85b0d9/tenor.gif"},preSrc:"https://media.tenor.com/images/cb12bc24511449db821768715e85b0d9/tenor.gif",height:208,width:220}})};const j=e=>{var a,s;return s=a=class extends o.default.Component{constructor(...e){super(...e),c(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?o.default.createElement(e,this.props,null):null}},c(a,"defaultProps",{shouldLoad:!0}),s},w=(j(()=>s.e(21).then(s.bind(null,60))),j(()=>s.e(21).then(s.bind(null,81))));var y=l("h1",{},void 0,"Included Plugins"),O=l("p",{},void 0,"Format = [SERVICE|ARGS]"),T=l("p",{},void 0,"Supported Embeds:"),x=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"[github|ID:FILE]",l("br",{}),l("br",{}),"[youtube|id]",l("br",{}),l("br",{}),"[twitter|ID]",l("br",{}),l("br",{}),"[soundcloud|id]",l("br",{}))),S=l("p",{},void 0,"OUTPUT:"),C=l("p",{},void 0,l(w,{id:"989197113648037888"})),U=l("p",{},void 0,"Make a set of elements collapsible. If first word is 'open' the elements will default to being shown."),I=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"::: collapse Title For Collapse Area",l("br",{}),"Some text",l("br",{}),":::",l("br",{}))),L=l("p",{},void 0,"OUTPUT:"),E=l("summary",{className:"collapse-summary"},void 0,l("p",{},void 0,"Title For Collapse Area")),_=l("p",{},void 0,"Some text"),M=l("p",{},void 0,"Collapse in the sidebar defaults to open."),A=l("p",{},void 0,"It is possible to make a list or sub-list collapsible too. The ending ",l("code",{},void 0,":::")," is not needed in this case."),F=l("pre",{},void 0,l("code",{},void 0,"* ::: collapse [:package: Publishing](/Ignite/pages/pages/Publishing.html)",l("br",{}),"  * [Setup](/Ignite/pages/pages/Publishing.html#setup-branch)",l("br",{}),"  * [Continuous Integration](/Ignite/pages/pages/Publishing.html#Continuous-integration)",l("br",{}))),H=l("p",{},void 0,"Structure: : [TYPE] - [ICON] :"),D=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,":fas-bomb:",l("br",{}))),B=l("p",{},void 0,"OUTPUT:",l("i",{className:"fas fa-bomb"})),J=l("p",{},void 0,"Structure: : [EMOJI] :"),R=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,":banana: :)",l("br",{}))),Y=l("p",{},void 0,"OUTPUT: \ud83c\udf4c \ud83d\ude03"),q=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`javascript",l("br",{}),"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`",l("br",{}))),$=l("p",{},void 0,"You can group multiple markdown code blocks into a tabbed code block."),G=l("p",{},void 0,"1 word currently supported."),V=l("p",{},void 0,"FORMAT: codeTabs First Second Third Title"),z=l("p",{},void 0,"Also must include the matching index of the title on the code block."),K=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"::: codeTabs CSS HTML JS",l("br",{}),l("br",{}),"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`css [0]",l("br",{}),".className {",l("br",{}),"  background: red;",l("br",{}),"}",l("br",{}),"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`",l("br",{}),l("br",{}),"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`html [1]",l("br",{}),l("span",{className:"xml"},void 0,l("span",{className:"hljs-tag"},void 0,"<",l("span",{className:"hljs-name"},void 0,"div")," ",l("span",{className:"hljs-attr"},void 0,"class"),"=",l("span",{className:"hljs-string"},void 0,'"className"'),">")),l("br",{}),"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`",l("br",{}),l("br",{}),"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`javascript [2]",l("br",{}),"function doSomething() {",l("br",{}),"  return 'foo';",l("br",{}),"}",l("br",{}),"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`",l("br",{}),l("br",{}),":::",l("br",{}))),Q=l("p",{},void 0,"OUTPUT:"),W=l(class extends o.default.Component{constructor(...e){super(...e),c(this,"state",{tabIndex:0}),c(this,"onClick",e=>()=>{this.setState({tabIndex:e})})}render(){return l("div",{className:"codeTabs"},void 0,l("div",{className:"tabs is-boxed"},void 0,l("ul",{},void 0,l("li",{className:0===this.state.tabIndex?"is-active":void 0,onClick:this.onClick(0)},void 0,l(u,{currentPage:(this&&this.props||props).currentPage,to:""},void 0,g)),l("li",{className:1===this.state.tabIndex?"is-active":void 0,onClick:this.onClick(1)},void 0,l(u,{currentPage:(this&&this.props||props).currentPage,to:""},void 0,v)),l("li",{className:2===this.state.tabIndex?"is-active":void 0,onClick:this.onClick(2)},void 0,l(u,{currentPage:(this&&this.props||props).currentPage,to:""},void 0,b)))),l("div",{className:""},void 0,l("div",{className:"codeBlocks",style:{left:-100*this.state.tabIndex+"%"}},void 0,f,N,k)))}},{}),X=l("p",{},void 0,"You can call attention to specific lines in your code by including the lines in the block definition."),Z=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`javascript {2}",l("br",{}),"function foo() {",l("br",{}),"  return bar().then(res => {",l("br",{}),l("span",{className:"hljs-code"},void 0,"    return res.doSomething();"),l("br",{}),"  });",l("br",{}),"}",l("br",{}),"\\",l("span",{className:"hljs-code"},void 0,"`\\`"),"\\`",l("br",{}))),ee=l("p",{},void 0,"OUTPUT:"),ae=l("pre",{className:"language-javascript"},void 0,l("code",{className:"language-javascript"},void 0,l("span",{className:"hljs-function"},void 0,l("span",{className:"hljs-keyword"},void 0,"function")," ",l("span",{className:"hljs-title"},void 0,"foo"),"(",l("span",{className:"hljs-params"}),") "),"{",l("br",{}),l("span",{className:"highlighted-line hero is-primary"},void 0,"  ",l("span",{className:"hljs-keyword"},void 0,"return")," bar().then(",l("span",{className:"hljs-function"},void 0,l("span",{className:"hljs-params"},void 0,"res")," =>")," {"),"    ",l("span",{className:"hljs-keyword"},void 0,"return")," res.doSomething();",l("br",{}),"  });",l("br",{}),"}")),se=l("p",{},void 0,"Adds a caption to an image and centers it within the page."),te=l("p",{},void 0,l("strong",{},void 0,l("em",{},void 0,"Must have 'caption' alt text for styles to work"))),ie=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"![",l("span",{className:"hljs-string"},void 0,"caption"),"](",l("span",{className:"hljs-link"},void 0,"https://media.tenor.com/images/cb12bc24511449db821768715e85b0d9/tenor.gif"),")",l("br",{}),l("span",{className:"hljs-emphasis"},void 0,"_image caption_"),l("br",{}))),oe=l("p",{},void 0,"OUTPUT:",l(class extends o.default.Component{constructor(...e){super(...e),c(this,"state",{image:null,ImageProvider:P[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e?o.default.createElement(n.default,h({},this.props,{className:(0,r.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{},t=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(a){c(e,a,s[a])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):null}},{src:"https://media.tenor.com/images/cb12bc24511449db821768715e85b0d9/tenor.gif",alt:"caption"}),l("em",{},void 0,"image caption")),re=l("p",{},void 0,"Add characters printed above or below the line."),ne=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"29^th^ H~2~0",l("br",{}))),de=l("p",{},void 0,"OUTPUT: 29",l("sup",{},void 0,"th")," H",l("sub",{},void 0,"2"),"0"),le=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"++underline++",l("br",{}))),ce=l("p",{},void 0,"OUTPUT: ",l("ins",{},void 0,"underline")),he=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"==highlight==",l("br",{}))),pe=l("p",{},void 0,"OUTPUT: ",l("mark",{},void 0,"highlight")),ue=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"[ ] unchecked",l("br",{}),"[x] checked",l("br",{}))),me=l("p",{},void 0,"OUTPUT:"),ge=l("p",{},void 0,l("div",{className:"field"},void 0,l("input",{type:"checkbox",readOnly:!0,className:"is-checkradio",id:"checkbox1"}),l("label",{htmlFor:"field1"},void 0,"unchecked")),l("div",{className:"field"},void 0,l("input",{type:"checkbox",readOnly:!0,className:"is-checkradio",id:"checkbox0",checked:"true"}),l("label",{htmlFor:"field0"},void 0,"checked"))),ve=l("p",{},void 0,"Some times you just need a break."),be=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"paragraph 1",l("br",{}),l("br",{}),l("span",{className:"xml"},void 0,l("span",{className:"hljs-tag"},void 0,"<",l("span",{className:"hljs-name"},void 0,"br"),">")),l("br",{}),l("br",{}),"paragraph 1",l("br",{}))),fe=l("p",{},void 0,"OUTPUT:"),Ne=l("p",{},void 0,"paragraph 1"),ke=l("p",{},void 0,l("br",{})),Pe=l("p",{},void 0,"paragraph 1"),je=l("p",{},void 0,"Add a class, id, or attribute to an element."),we=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,l("span",{className:"hljs-section"},void 0,"# Title /.has-text-danger\\"),l("br",{}))),ye=l("p",{},void 0,"OUTPUT:"),Oe=l("h1",{className:"has-text-danger"},void 0,"Title");var Te=e=>l("div",{className:e.className},void 0,l("section",{},void 0,y,l("h2",{id:"embed"},void 0,"Embed ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#embed","aria-hidden":"true"})),O,T,x,S,C,l("h2",{id:"collapse"},void 0,"Collapse ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#collapse","aria-hidden":"true"})),U,I,L,l(m,{open:[].find(a=>a===e.currentPage||"/Ignite/"===e.currentPage&&a===window.configuration.currentFirstPage.replace(".md",".html"))},void 0,E,_),M,A,F,l("h2",{id:"font-awesome"},void 0,"Font awesome ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#font-awesome","aria-hidden":"true"})),l("p",{},void 0,"All icons listed ",l(u,{currentPage:e.currentPage,target:"_blank",to:"https://fontawesome.com/icons/bomb?style=solid",className:"external-link"},void 0,"here"),"."),H,D,B,l("h2",{id:"emoji"},void 0,"Emoji ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#emoji","aria-hidden":"true"})),l("p",{},void 0,"All emoji listed ",l(u,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",className:"external-link"},void 0,"here"),"."),J,l("p",{},void 0,"Transforms ascii emotes as ",l(u,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/shortcuts.js",className:"external-link"},void 0,"well"),"."),R,Y,l("h2",{id:"code-highlighting"},void 0,"Code Highlighting ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#code-highlighting","aria-hidden":"true"})),l("p",{},void 0,"Code blocks are colored with ",l(u,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/isagalaev/highlight.js",className:"external-link"},void 0,"Highlight.js"),". You must provide a language like this:"),q,l("h2",{id:"tabbed-code-blocks"},void 0,"Tabbed Code Blocks ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#tabbed-code-blocks","aria-hidden":"true"})),$,G,V,z,K,Q,W,l("h2",{id:"highlight-specific-lines"},void 0,"Highlight Specific lines ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#highlight-specific-lines","aria-hidden":"true"})),X,Z,ee,ae,l("h2",{id:"image-captions"},void 0,"Image Captions ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#image-captions","aria-hidden":"true"})),se,te,ie,oe,l("h2",{id:"(super%7Csub)script"},void 0,"(Super|Sub)script ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#(super%7Csub)script","aria-hidden":"true"})),re,ne,de,l("h2",{id:"underline"},void 0,"Underline ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#underline","aria-hidden":"true"})),le,ce,l("h2",{id:"highlight"},void 0,"Highlight ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#highlight","aria-hidden":"true"})),he,pe,l("h2",{id:"check-boxes-and-task-lists"},void 0,"Check Boxes and Task Lists ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#check-boxes-and-task-lists","aria-hidden":"true"})),ue,me,ge,l("h2",{id:"breaks"},void 0,"Breaks ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#breaks","aria-hidden":"true"})),ve,be,fe,Ne,ke,Pe,l("h2",{id:"html-attributes"},void 0,"HTML Attributes ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#html-attributes","aria-hidden":"true"})),je,l("p",{},void 0,"More documentation ",l(u,{currentPage:e.currentPage,target:"_blank",to:"https://www.npmjs.com/package/markdown-it-attrs",className:"external-link"},void 0,"here"),"."),we,ye,Oe,l("article",{className:"message column is-success is-8 is-offset-2 has-text-centered"},void 0,l("div",{className:"message-body"},void 0,l("p",{},void 0,"TIP: Use with ",l(u,{currentPage:e.currentPage,to:"/Ignite/pages/BulmaPlugins.html#useful-helpers"},void 0,"Bulma Helpers")," to style your page perfectly!")))));a.default=Te,e.exports=a.default}}]);
//# sourceMappingURL=IncludedPlugins.js.map