(self.webpackChunkeduxio=self.webpackChunkeduxio||[]).push([[536],{3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(7325),i=n(107),s="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5",m=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,a.Z)(e,m),p=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},d,{className:(0,l.Z)("anchor",p?u:s),id:n}),d.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},d,{id:void 0}))}},8254:function(e,t,n){"use strict";n.d(t,{Z:function(){return fe}});var r=n(7294),a=n(4137),o=n(7462),l=n(3366),c=n(1514),i=["mdxType","originalType"];var s=n(1048),u=n(6010),m=n(9200),d=n(107);function p(){var e=(0,d.L)().prism,t=(0,m.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var f=n(6528),v=n(7594),g=n.n(v),h=(0,f.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),y=(0,f.Z)(/\{([\d,-]+)\}/,{range:1}),b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){var n=e.map((function(e){var n=b[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function E(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,o=t.metastring;if(o&&y.test(o)){var l=o.match(y).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=a[0].className,i=g()(l).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(b),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),v=0;v<u.length;){var h=u[v].match(s);if(h){var E=h.slice(1).find((function(e){return void 0!==e}));d[E]?m[d[E]].range+=v+",":p[E]?m[p[E]].start=v:f[E]&&(m[f[E]].range+=m[f[E]].start+"-"+(v-1)+","),u.splice(v,1)}else v+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;g()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}var N=n(3702),L="codeBlockContainer_Ckt0",C=["as"];function B(e){var t=e.as,n=(0,l.Z)(e,C),a=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(p());return r.createElement(t,(0,o.Z)({},n,{style:a,className:(0,u.Z)(n.className,L,N.k.common.codeBlock)}))}var Z={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function x(e){var t=e.children,n=e.className;return r.createElement(B,{as:"pre",tabIndex:0,className:(0,u.Z)(Z.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:Z.codeBlockLines},t))}var T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},_={Prism:n(7410).Z,theme:T};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var H=/\r\n|\r|\n/,S=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},O=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},A=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=w({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=w({},n,{backgroundColor:null}),a};function I(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var P=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),j(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?A(e.theme,e.language):void 0;return t.themeDict=n})),j(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=w({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?w({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),j(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),j(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=w({},I(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?w({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),j(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=O(u,m.type),m.alias&&(u=O(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(H),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)S(c),i.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return S(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),M=P,z="codeLine_lJS_",R="codeLineNumber_Tfdd",D="codeLineContent_feaV";function V(e){var t=e.line,n=e.classNames,a=e.showLineNumbers,l=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=l({line:t,className:(0,u.Z)(n,a&&z)}),s=t.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},c({token:e,key:t})))}));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:R}),r.createElement("span",{className:D},s)):r.createElement(r.Fragment,null,s,r.createElement("br",null)))}var W=n(7325),q={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function F(e){var t=e.code,n=e.className,a=(0,r.useState)(!1),o=a[0],l=a[1],c=(0,r.useRef)(void 0),i=(0,r.useCallback)((function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(t),l(!0),c.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),r.createElement("button",{type:"button","aria-label":o?(0,W.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,W.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,W.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,q.copyButton,o&&q.copyButtonCopied),onClick:i},r.createElement("span",{className:q.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:q.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:q.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var $="wordWrapButtonIcon_Bwma",G="wordWrapButtonEnabled_EoeP";function U(e){var t=e.className,n=e.onClick,a=e.isEnabled,o=(0,W.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,a&&G),"aria-label":o,title:o},r.createElement("svg",{className:$,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Y(e){var t,n,a,l,c,i,s,m,f,v,g,y=e.children,b=e.className,k=void 0===b?"":b,N=e.metastring,L=e.title,C=e.showLineNumbers,x=e.language,T=(0,d.L)().prism,j=T.defaultLanguage,w=T.magicComments,H=null!=(t=null!=x?x:null==(n=k.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:j,S=p(),O=(a=(0,r.useState)(!1),l=a[0],c=a[1],i=(0,r.useState)(!1),s=i[0],m=i[1],f=(0,r.useRef)(null),v=(0,r.useCallback)((function(){var e=f.current.querySelector("code");l?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",c((function(e){return!e}))}),[f,l]),g=(0,r.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(t)}),[f]),(0,r.useEffect)((function(){g()}),[l,g]),(0,r.useEffect)((function(){return window.addEventListener("resize",g,{passive:!0}),function(){window.removeEventListener("resize",g)}}),[g]),{codeBlockRef:f,isEnabled:l,isCodeScrollable:s,toggle:v}),A=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(h))?void 0:n.groups.title)?t:""}(N)||L,I=E(y,{metastring:N,language:H,magicComments:w}),P=I.lineClassNames,z=I.code,R=null!=C?C:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(N);return r.createElement(B,{as:"div",className:(0,u.Z)(k,H&&!k.includes("language-"+H)&&"language-"+H)},A&&r.createElement("div",{className:Z.codeBlockTitle},A),r.createElement("div",{className:Z.codeBlockContent},r.createElement(M,(0,o.Z)({},_,{theme:S,code:z,language:null!=H?H:"text"}),(function(e){var t=e.className,n=e.tokens,a=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:O.codeBlockRef,className:(0,u.Z)(t,Z.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,u.Z)(Z.codeBlockLines,R&&Z.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(V,{key:t,line:e,getLineProps:a,getTokenProps:o,classNames:P[t],showLineNumbers:R})}))))})),r.createElement("div",{className:Z.buttonGroup},(O.isEnabled||O.isCodeScrollable)&&r.createElement(U,{className:Z.codeButton,onClick:function(){return O.toggle()},isEnabled:O.isEnabled}),r.createElement(F,{className:Z.codeButton,code:z}))))}var J=["children"];function K(e){var t=e.children,n=(0,l.Z)(e,J),a=(0,s.Z)(),c=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof c?Y:x;return r.createElement(i,(0,o.Z)({key:String(a)},n),c)}var Q=n(3699);var X=n(4639),ee="details_lb9f",te="isBrowser_bmU9",ne="collapsibleContent_i85q",re=["summary","children"];function ae(e){return!!e&&("SUMMARY"===e.tagName||ae(e.parentElement))}function oe(e,t){return!!e&&(e===t||oe(e.parentElement,t))}function le(e){var t=e.summary,n=e.children,a=(0,l.Z)(e,re),c=(0,s.Z)(),i=(0,r.useRef)(null),m=(0,X.u)({initialState:!a.open}),d=m.collapsed,p=m.setCollapsed,f=(0,r.useState)(a.open),v=f[0],g=f[1];return r.createElement("details",(0,o.Z)({},a,{ref:i,open:v,"data-collapsed":d,className:(0,u.Z)(ee,c&&te,a.className),onMouseDown:function(e){ae(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ae(t)&&oe(t,i.current)&&(e.preventDefault(),d?(p(!1),g(!0)):p(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(X.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){p(e),g(!e)}},r.createElement("div",{className:ne},n)))}var ce="details_b_Ee";function ie(e){var t=Object.assign({},e);return r.createElement(le,(0,o.Z)({},t,{className:(0,u.Z)("alert alert--info",ce,t.className)}))}var se=n(3899);function ue(e){return r.createElement(se.Z,e)}var me="containsTaskList_mC6p";var de="img_ev3q";var pe={head:function(e){var t=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,a=(n.mdxType,n.originalType,(0,l.Z)(n,i));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(c.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(K,e)},a:function(e){return r.createElement(Q.Z,e)},pre:function(e){var t;return r.createElement(K,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ie,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&me))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,de))}));var t},h1:function(e){return r.createElement(ue,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(ue,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(ue,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(ue,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(ue,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(ue,(0,o.Z)({as:"h6"},e))}};function fe(e){var t=e.children;return r.createElement(a.Zo,{components:pe},t)}},2728:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7462),a=n(3366),o=n(7294),l=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,o=(0,a.Z)(e,l);n>=0?t[n].children.push(o):r.push(o)})),r}function i(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}var s=n(107);function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,t){var n,r,a=t.anchorTopOffset,o=e.find((function(e){return u(e).top>=a}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,o.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){var t=(0,o.useRef)(void 0),n=d();(0,o.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,l=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],a=t;a<=n;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),i=m(c,{anchorTopOffset:n.current}),s=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function f(e){var t=e.toc,n=e.className,r=e.linkClassName,a=e.isChild;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var v=o.memo(f),g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,y=e.maxHeadingLevel,b=(0,a.Z)(e,g),k=(0,s.L)(),E=null!=h?h:k.tableOfContents.minHeadingLevel,N=null!=y?y:k.tableOfContents.maxHeadingLevel,L=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,o.useMemo)((function(){return i({toc:c(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:E,maxHeadingLevel:N});return p((0,o.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:E,maxHeadingLevel:N}}),[m,f,E,N])),o.createElement(v,(0,r.Z)({toc:L,className:l,linkClassName:m},b))}},7086:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(2728),i="tableOfContents_bqdL",s=["className"];function u(e){var t=e.className,n=(0,a.Z)(e,s);return o.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},o.createElement(c.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);