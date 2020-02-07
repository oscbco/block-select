!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.BlockSelect=t(require("react")):e.BlockSelect=t(e.React)}(window,function(r){return a={},o.m=n=[function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var N=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(2)),n=o(r(3)),x=r(6),S=r(7),j=o(r(8)),O=o(r(9)),k="/home/darkcode/Projects/libraries/block-select/source/Select/Select.js";function o(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(o){var e,t=P((0,N.useState)(!1),2),a=t[0],r=t[1],n=P((0,N.useState)(null),2),u=n[0],i=n[1],l=P((0,N.useState)(o.defaultItem&&o.defaultItem.value),2),c=l[0],s=l[1],f=P((0,N.useState)(-1),2),d=f[0],p=f[1],m=P((0,N.useState)(!1),2),y=m[0],b=m[1],h=P((0,N.useState)(!1),2),v=h[0],_=h[1],g=(0,N.useCallback)(function(e){if(e){var t=e.querySelector('[data-section="menu"]').getBoundingClientRect(),r=e.querySelector('[data-section="menu-wrapper"]').getBoundingClientRect();if(t.height=Math.min(t.height,window.innerHeight/2.2),!0===a&&b(r.top+t.height>window.innerHeight),!u){var n=e.querySelector('[data-section="arrow"]').getBoundingClientRect(),o=e.getBoundingClientRect();t.width=o.width>t.width?o.width:t.width+n.width,i(t)}}},[a]),w=o.items.map(function(e,t){var r=e.label?e.label:(0,j.default)(e.value),n=e.value===c?N.default.createElement("div",{className:O.default.icon,__source:{fileName:k,lineNumber:89}},N.default.createElement("svg",{width:"100%",viewBox:"0 0 24 21",__source:{fileName:k,lineNumber:89}},N.default.createElement("path",{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z",__source:{fileName:k,lineNumber:89}}))):"";return N.default.createElement("div",{className:O.default.option+" "+(o.classes.option||" oscbco-select-option"),"data-is-active":t===d,key:e.value,"data-value":e.value,__source:{fileName:k,lineNumber:92}},r," ",n)});return N.default.createElement("div",{ref:g,tabIndex:-1,"data-opened":a,"data-focused":v,"data-direction":y?"top":"down",className:O.default.select+" "+(o.classes.select||" oscbco-select"),onClick:function(e){if(_(!0),"header"===e.target.dataset.section||"arrow"===e.target.dataset.section)r(!a);else if(e.target.dataset.value){var t=e.target.dataset.value;s(t),p(t),r(!1),o.onChange(t)}},onKeyDown:function(e){[38,40,13,27].includes(e.keyCode)&&e.preventDefault(),!0===a?(0,x.isKeyUp)(e.keyCode)?p((0,S.getPrevItem)(o.items,d)):(0,x.isKeyDown)(e.keyCode)?p((0,S.getNextItem)(o.items,d)):(0,x.isKeyEnter)(e.keyCode)&&-1!==d?o.items[d]&&s(o.items[d].value):(0,x.isKeyEsc)(e.keyCode)&&r(!1):(0,x.isKeyDown)(e.keyCode)&&r(!0)},onBlur:function(){r(!1),_(!1)},style:{minWidth:u?u.width+"px":"70px"},__source:{fileName:k,lineNumber:99}},N.default.createElement("div",{"data-section":"header",className:O.default.header+" "+(o.classes.header||" oscbco-select-header"),__source:{fileName:k,lineNumber:100}},N.default.createElement("span",{"data-section":"header",className:O.default.title+" "+(o.classes.title||" oscbco-select-title"),__source:{fileName:k,lineNumber:101}},void 0===(e=o.items.find(function(e){return e.value===c}))?o.placeholder:e.label?e.label:(0,j.default)(e.value)),N.default.createElement("span",{"data-section":"arrow",className:O.default.arrow+" "+(o.classes.arrow||" oscbco-select-arrow"),__source:{fileName:k,lineNumber:104}},N.default.createElement("svg",{"data-section":"arrow",width:"100%",viewBox:"0 0 24 24",__source:{fileName:k,lineNumber:105}},N.default.createElement("path",{"data-section":"arrow",d:"M12 21l-12-18h24z",__source:{fileName:k,lineNumber:106}})))),N.default.createElement("div",{"data-section":"menu-wrapper",className:O.default.menuWrapper+" "+(o.classes.menuWrapper||" oscbco-select-menu-wrapper"),style:{height:a?u.height+"px":"0px"},__source:{fileName:k,lineNumber:110}},N.default.createElement("div",{style:{height:u?u.height+"px":"100%"},__source:{fileName:k,lineNumber:111}},N.default.createElement("div",{"data-section":"menu",className:O.default.menu+" "+(o.classes.menu||" oscbco-select-menu"),style:{minWidth:u?u.width+"px":"70px"},__source:{fileName:k,lineNumber:112}},w))))}a.defaultProps={classes:{},placeholder:" ",defaultItem:{},items:[],onChange:function(){}},a.propTypes={placeholder:n.default.string,items:n.default.array,onChange:n.default.func,classes:n.default.object,defaultItem:n.default.object}},function(e,t){e.exports=r},function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";var i=r(5);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,o,a){if(a!==i){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}var r={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return r.PropTypes=r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isKeyDown=function(e){return 40===e},t.isKeyUp=function(e){return 38===e},t.isKeyEnter=function(e){return 13===e},t.isKeyEsc=function(e){return 27===e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNextItem=t.getPrevItem=void 0;t.getPrevItem=function(e,t){return t-1<0?e.length:t-1};t.getNextItem=function(e,t){return t+1>e.length?0:t+1}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.charAt(0).toUpperCase()+e.replace(/_/g," ").substring(1)}},function(e,t,r){e.exports={select:"cXjQJ-VIbQqCwDeSscRk3",header:"bd7H9k0tSbBAADx7ynVOx",title:"_1rD5tmA3lK7kxxdu3XveZL",arrow:"_1g4YJ5__D0-tJ5KKj6lEsy","menu-wrapper":"_1-c3kHSSspNJGjpm4ki7hC",menuWrapper:"_1-c3kHSSspNJGjpm4ki7hC",menu:"Rcx9fdkolTXSMp8oGviKh",option:"_34G2InuqOKAiHV0u5WRepB",icon:"atOBrN-kgxJx5xht0hroG",opened:"_1qqsXbSkT91_VNwe91-4sI"}}],o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o(o.s=0);function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,a});