!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("katex")):"function"==typeof define&&define.amd?define(["katex"],t):"object"==typeof exports?exports.renderMathInElement=t(require("katex")):e.renderMathInElement=t(e.katex)}("undefined"!=typeof self?self:this,(function(e){return function(){"use strict";var t={974:function(t){t.exports=e}},r={};function n(e){if(r[e])return r[e].exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var a={};return function(){n.d(a,{default:function(){return s}});var e=n(974),t=n.n(e),r=function(e,t,r){for(var n=r,a=0,i=e.length;n<t.length;){var o=t[n];if(a<=0&&t.slice(n,n+i)===e)return n;"\\"===o?n++:"{"===o?a++:"}"===o&&a--,n++}return-1},i=/^\\begin{/,o=function(e,t){for(var n,a=[],o=new RegExp("("+t.map((function(e){return e.left.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")})).join("|")+")");-1!==(n=e.search(o));){n>0&&(a.push({type:"text",data:e.slice(0,n)}),e=e.slice(n));var l=t.findIndex((function(t){return e.startsWith(t.left)}));if(-1===(n=r(t[l].right,e,t[l].left.length)))break;var d=e.slice(0,n+t[l].right.length),s=i.test(d)?d:e.slice(t[l].left.length,n);a.push({type:"math",data:s,rawData:d,display:t[l].display}),e=e.slice(n+t[l].right.length)}return""!==e&&a.push({type:"text",data:e}),a},l=function(e,r){var n=o(e,r.delimiters);if(1===n.length&&"text"===n[0].type)return null;for(var a=document.createDocumentFragment(),i=0;i<n.length;i++)if("text"===n[i].type)a.appendChild(document.createTextNode(n[i].data));else{var l=document.createElement("span"),d=n[i].data;r.displayMode=n[i].display;try{r.preProcess&&(d=r.preProcess(d)),t().render(d,l,r)}catch(e){if(!(e instanceof t().ParseError))throw e;r.errorCallback("KaTeX auto-render: Failed to parse `"+n[i].data+"` with ",e),a.appendChild(document.createTextNode(n[i].rawData));continue}a.appendChild(l)}return a},d=function e(t,r){for(var n=0;n<t.childNodes.length;n++){var a=t.childNodes[n];if(3===a.nodeType){var i=l(a.textContent,r);i&&(n+=i.childNodes.length-1,t.replaceChild(i,a))}else 1===a.nodeType&&function(){var t=" "+a.className+" ";-1===r.ignoredTags.indexOf(a.nodeName.toLowerCase())&&r.ignoredClasses.every((function(e){return-1===t.indexOf(" "+e+" ")}))&&e(a,r)}()}},s=function(e,t){if(!e)throw new Error("No element provided to render");var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);r.delimiters=r.delimiters||[{left:"$$",right:"$$",display:!0},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}],r.ignoredTags=r.ignoredTags||["script","noscript","style","textarea","pre","code","option"],r.ignoredClasses=r.ignoredClasses||[],r.errorCallback=r.errorCallback||console.error,r.macros=r.macros||{},d(e,r)}}(),a=a.default}()}));