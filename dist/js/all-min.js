!function(t,e){function n(e){setTimeout(function(){var e=document.documentElement.clientWidth,n=document.documentElement.clientHeight,i=t*n/e,a=e/t;r.style.cssText="width: "+t+"px;height: "+i+"px;position: relative;top: 50%;left: 50%;margin: -"+i/2+"px 0 0 -"+t/2+"px;-webkit-transform: scale("+a+");transform: scale("+a+");"},"number"==typeof e?e:100)}var r=document.getElementById("wrap");n(100),e&&window.addEventListener("onorientationchange"in window?"orientationchange":"resize",n,!1)}(640,!0);var Zepto=function(){function t(t){return null==t?String(t):H[U.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function a(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function o(t){return"number"==typeof t.length}function s(t){return P.call(t,function(t){return null!=t})}function u(t){return t.length>0?E.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in O?O[t]:O[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||M[c(t)]?e:e+"px"}function p(t){var e,n;return A[t]||(e=N.createElement(t),N.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),A[t]=n),A[t]}function h(t){return"children"in t?Z.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(T in e)n&&(a(e[T])||G(e[T]))?(a(e[T])&&!a(t[T])&&(t[T]={}),G(e[T])&&!G(t[T])&&(t[T]=[]),d(t[T],e[T],n)):e[T]!==x&&(t[T]=e[T])}function m(t,e){return null==e?E(t):E(t).filter(e)}function g(t,n,r,i){return e(n)?n.call(t,r,i):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,r=n&&n.baseVal!==x;return e===x?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function w(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?E.parseJSON(t):t:e):t}catch(n){return t}}function b(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)b(t.childNodes[n],e)}var x,T,E,C,j,S,k=[],Z=k.slice,P=k.filter,N=window.document,A={},O={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,X=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,I=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Y=/^(?:body|html)$/i,D=/([A-Z])/g,_=["val","css","html","text","data","width","height","offset"],$=["after","prepend","before","append"],R=N.createElement("table"),F=N.createElement("tr"),z={tr:N.createElement("tbody"),tbody:R,thead:R,tfoot:R,td:F,th:F,"*":N.createElement("div")},B=/complete|loaded|interactive/,q=/^[\w-]*$/,H={},U=H.toString,W={},V=N.createElement("div"),J={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,a=!i;return a&&(i=V).appendChild(t),r=~W.qsa(i,e).indexOf(t),a&&V.removeChild(t),r},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var r,i,o;return X.test(t)&&(r=E(N.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(I,"<$1></$2>")),e===x&&(e=L.test(t)&&RegExp.$1),e in z||(e="*"),o=z[e],o.innerHTML=""+t,r=E.each(Z.call(o.childNodes),function(){o.removeChild(this)})),a(n)&&(i=E(r),E.each(n,function(t,e){_.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},W.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){var r;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&L.test(t))r=W.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return E(n).find(t);r=W.qsa(N,t)}else{if(e(t))return E(N).ready(t);if(W.isZ(t))return t;if(G(t))r=s(t);else if(i(t))r=[t],t=null;else if(L.test(t))r=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return E(n).find(t);r=W.qsa(N,t)}}return W.Z(r,t)},E=function(t,e){return W.init(t,e)},E.extend=function(t){var e,n=Z.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},W.qsa=function(t,e){var n,i="#"==e[0],a=!i&&"."==e[0],o=i||a?e.slice(1):e,s=q.test(o);return r(t)&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:Z.call(s&&!i?a?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=N.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=G,E.isPlainObject=a,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return k.indexOf.call(e,t,n)},E.camelCase=j,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,r,i,a=[];if(o(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&a.push(n);else for(i in t)n=e(t[i],i),null!=n&&a.push(n);return u(a)},E.each=function(t,e){var n,r;if(o(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},E.grep=function(t,e){return P.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){H["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:k.forEach,reduce:k.reduce,push:k.push,sort:k.sort,indexOf:k.indexOf,concat:k.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(Z.apply(this,arguments))},ready:function(t){return B.test(N.readyState)&&N.body?t(E):N.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===x?Z.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return k.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E(P.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return E(S(this.concat(E(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):o(t)&&e(t.item)?Z.call(t):E(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return i(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:E(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?E(t).filter(function(){var t=this;return k.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):[]},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=E(t));n&&!(i?i.indexOf(n)>=0:W.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(S(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return Z.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return P.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=E(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=E(this),i=r.contents(),a=n?t.call(this,e):t;i.length?i.wrapAll(a):r.append(a)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;E(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(T in t)v(this,T,t[T]);else v(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&v(this,t)})},prop:function(t,e){return t=J[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(D,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?w(r):x},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=E(this),r=g(this,t,e,n.offset()),i=n.offsetParent().offset(),a={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(a.position="relative"),n.css(a)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r=this[0],i=getComputedStyle(r,"");if(!r)return;if("string"==typeof e)return r.style[j(e)]||i.getPropertyValue(e);if(G(e)){var a={};return E.each(G(e)?e:[e],function(t,e){a[e]=r.style[j(e)]||i.getPropertyValue(e)}),a}}var o="";if("string"==t(e))n||0===n?o=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(T in e)e[T]||0===e[T]?o+=c(T)+":"+f(T,e[T])+";":this.each(function(){this.style.removeProperty(c(T))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?k.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){C=[];var n=y(this),r=g(this,t,e,n);r.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||C.push(t)},this),C.length&&y(this,n+(n?" ":"")+C.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===x?y(this,""):(C=y(this),g(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(l(t)," ")}),void y(this,C.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var r=E(this),i=g(this,t,n,y(this));i.split(/\s+/g).forEach(function(t){(e===x?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=Y.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,r.top+=parseFloat(E(e[0]).css("border-top-width"))||0,r.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!Y.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});E.fn[t]=function(i){var a,o=this[0];return i===x?n(o)?o["inner"+e]:r(o)?o.documentElement["scroll"+e]:(a=this.offset())&&a[t]:this.each(function(e){o=E(this),o.css(t,g(this,i,e,o[t]()))})}}),$.forEach(function(e,n){var r=n%2;E.fn[e]=function(){var e,i,a=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:W.fragment(n)}),o=this.length>1;return a.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=E.contains(N.documentElement,i);a.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!i)return E(t).remove();i.insertBefore(t,e),s&&b(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),W.Z.prototype=E.fn,W.uniq=S,W.deserializeValue=w,E.zepto=W,E}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=p++)}function n(t,n,a,o){if(n=r(n),n.ns)var s=i(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||a&&e(t.fn)!==e(a)||o&&t.sel!=o)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function a(t,e){return t.del&&!y&&t.e in w||!!e}function o(t){return b[t]||y&&w[t]||t}function s(n,i,s,u,l,p,h){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in b&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=p;var d=p||s;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(o(i.e),i.proxy,a(i,h))})}function u(t,r,i,s,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(o(e.e),e.proxy,a(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(C,function(t,r){var i=n[t];e[t]=function(){return this[r]=x,i&&i.apply(n,arguments)},e[r]=T}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,p=1,h=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,r){var i=2 in arguments&&h.call(arguments,2);if(d(n)){var a=function(){return n.apply(r,i?i.concat(h.call(arguments)):arguments)};return a._zid=e(n),a}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var x=function(){return!0},T=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,a){var o,c,p=this;return e&&!m(e)?(t.each(e,function(t,e){p.on(t,n,r,e,a)}),p):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=T),p.each(function(f,p){a&&(o=function(t){return u(p,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,a=t(e.target).closest(n,p).get(0);return a&&a!==p?(r=t.extend(l(e),{currentTarget:a,liveFired:p}),(o||i).apply(a,[r].concat(h.call(arguments,1)))):void 0}),s(p,e,i,r,n,c||o)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=T),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,a;return this.each(function(o,s){i=l(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return a=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),a},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function a(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function o(t,e,r,i){var a=r.context,o="success";r.success.call(a,t,o,e),i&&i.resolveWith(a,[t,o,e]),n(r,a,"ajaxSuccess",[e,r,t]),u(o,e,r)}function s(t,e,r,i,a){var o=i.context;i.error.call(o,r,e,t),a&&a.rejectWith(o,[r,e,t]),n(i,o,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var a=r.context;r.complete.call(a,e,t),n(r,a,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==T?"json":b.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function h(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var a,o=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){a=t.type(u),i&&(n=r?i:i+"["+(s||"object"==a||"array"==a?n:"")+"]"),!i&&o?e.add(u.name,u.value):"array"==a||!r&&"object"==a?d(e,u,r,n):e.add(n,u)})}var m,g,v=0,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,T="application/json",E="text/html",C=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),f=window[c],p=function(e){t(l).triggerHandler("error",e||"abort")},h={abort:p};return n&&n.promise(h),t(l).on("load error",function(a,u){clearTimeout(i),t(l).off().remove(),"error"!=a.type&&r?o(r[0],h,e,n):s(null,u||"error",h,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),a(h,e)===!1?(p("abort"),h):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){p("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),i=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);r(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),p(n);var u=n.dataType,h=/\?.+=\?/.test(n.url);if(h&&(u="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(n.url=f(n.url,"_="+Date.now())),"jsonp"==u)return h||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,i);var d,v=n.accepts[u],y={},w=function(t,e){y[t.toLowerCase()]=[t,e]},b=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,x=n.xhr(),T=x.setRequestHeader;if(i&&i.promise(x),n.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",v||"*/*"),(v=n.mimeType||v)&&(v.indexOf(",")>-1&&(v=v.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(v)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&w("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(g in n.headers)w(g,n.headers[g]);if(x.setRequestHeader=w,x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=c,clearTimeout(d);var e,r=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==b){u=u||l(n.mimeType||x.getResponseHeader("content-type")),e=x.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=x.responseXML:"json"==u&&(e=C.test(e)?null:t.parseJSON(e))}catch(a){r=a}r?s(r,"parsererror",x,n,i):o(e,x,n,i)}else s(x.statusText||null,x.status?"error":"abort",x,n,i)}},a(x,n)===!1)return x.abort(),s(null,"abort",x,n,i),x;if(n.xhrFields)for(g in n.xhrFields)x[g]=n.xhrFields[g];var E="async"in n?n.async:!0;x.open(n.type,n.url,E,n.username,n.password);for(g in y)T.apply(x,y[g]);return n.timeout>0&&(d=setTimeout(function(){x.onreadystatechange=c,x.abort(),s(null,"timeout",x,n,i)},n.timeout)),x.send(n.data?n.data:null),x},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,a=this,o=e.split(/\s/),s=h(e,n,r),u=s.success;return o.length>1&&(s.url=o[0],i=o[1]),s.success=function(e){a.html(i?t("<div>").html(e.replace(w,"")).find(i):e),u&&u.apply(a,arguments)},t.ajax(s),this};var j=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(j(t)+"="+j(e))},d(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var r=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t,e,n,r){var i="data-animate",a="data-autoRender",o=n.createElement("style"),s="",u={},c={animationDefs:{duration:1e3,"function":"ease",fillMode:"both",infinite:!1,alternate:!1},slide:{defs:{startX:0,startY:0,startZ:0,targetX:0,targetY:0,targetZ:0},style:"@-webkit-keyframes #animationClass# {\n                            0% {\n                                -webkit-transform: translate3d(#startX#, #startY#, #startZ#);\n                                transform: translate3d(#startX#, #startY#, #startZ#);\n                            }\n                            100% {\n                                -webkit-transform: translate3d(#targetX#, #targetY#, #targetZ#);\n                                transform: translate3d(#targetX#, #targetY#, #targetZ#);\n                            }\n                        }\n                        @keyframes #animationClass# {\n                            0% {\n                                -webkit-transform: translate3d(#startX#, #startY#, #startZ#);\n                                transform: translate3d(#startX#, #startY#, #startZ#);\n                            }\n                            100% {\n                                -webkit-transform: translate3d(#targetX#, #targetY#, #targetZ#);\n                                transform: translate3d(#targetX#, #targetY#, #targetZ#);\n                            }\n                        }"},fadeIn:{defs:{startX:0,startY:0,startZ:0,targetX:0,targetY:0,targetZ:0},style:"@-webkit-keyframes #animationClass# {\n                            0% {\n                                opacity: 0;\n                                -webkit-transform: translate3d(#startX#, #startY#, #startZ#);\n                                transform: translate3d(#startX#, #startY#, #startZ#);\n                            }\n                            100% {\n                                opacity: 1;\n                                -webkit-transform: translate3d(#targetX#, #targetY#, #targetZ#);\n                                transform: translate3d(#targetX#, #targetY#, #targetZ#);\n                            }\n                        }\n                        @keyframes #animationClass# {\n                            0% {\n                                opacity: 0;\n                                -webkit-transform: translate3d(#startX#, #startY#, #startZ#);\n                                transform: translate3d(#startX#, #startY#, #startZ#);\n                            }\n                            100% {\n                                opacity: 1;\n                                -webkit-transform: translate3d(#targetX#, #targetY#, #targetZ#);\n                                transform: translate3d(#targetX#, #targetY#, #targetZ#);\n                            }\n                        }"}};t.extend(c,{fadeInLeft:{defs:{startX:"-100%",startY:0,startZ:0,targetX:0,targetY:0,targetZ:0},style:c.fadeIn.style}});var l=function(){var e=this;e.defs={},e.styleInfo={},t.extend(e.defs,c.animationDefs)};l.prototype.handleStyle=function(t,e){var n=this,r=t.replace(/(#\w+#)/g,function(t){var r=t.replace(/#/g,"");return"animationClass"!=r?n.defs[r]:e});return r},l.prototype.getStyle=function(){return this.styleInfo},l.prototype.addAnimate=function(e){var n,r,i,a,o,s=this,u=s.defs,l=e.animation,f=l,p=c[l];return t.extend(u,p.defs),t.extend(u,e.details),n=u.duration,r=u["function"],i=u.fillMode,a=u.infinite?"-webkit-animation-iteration-count:infinite; animation-iteration-count:infinite;\n":"",o=u.alternate?"-webkit-animation-direction:alternate; animation-direction:alternate;\n":"",t.each(u,function(t,e){f+=e}),f=f.replace(/%/g,"percent"),s.styleInfo={animationClass:f,style:"\n"+s.handleStyle(p.style,f)+"\n.active>."+f+" {\n                                -webkit-animation-name: "+f+";\n                                animation-name: "+f+";\n                                -webkit-animation-timing-function: "+r+";\n                                animation-timing-function: "+r+";\n                                -webkit-animation-duration: "+n+"ms;\n                                animation-duration: "+n+"ms;\n                                -webkit-animation-fill-mode: "+i+";\n                                animation-fill-mode: "+i+";\n                                "+a+o+"\n                            }"},s},l.prototype.resetConfig=function(){var e=this;e.defs={},e.styleInfo={},t.extend(e.defs,c.animationDefs)},l.prototype.strToJson=function(t){return new Function("return "+t)()},l.prototype.extendTemplate=function(e){return t.extend(c,e),this},l.prototype.render=function(){var e,n,r=this;e=arguments.length>1?t(arguments[0],arguments[1]):t(arguments[0]),n=e.find("["+i+"]"),t(e.concat(n)).each(function(){r.resetConfig();var e,n,a,o=t(this),c=r.strToJson(o.attr(i));c&&(e=r.addAnimate(c).getStyle(),n=e.animationClass,a=e.style,o.addClass(n),u[n]||(s+=a,u[n]=a))}),o.innerHTML=s,t(o).remove(),t("head").append(o)};var f=new l;e.jerryAnimate=function(){return 0!=arguments.length&&(arguments.length>1?f.render(arguments[0],arguments[1]):f.render(arguments[0])),f},jerryAnimate.template=c,t(n).ready(function(){t("body").find("["+a+"]").each(function(){var e=t(this);return"true"==e.attr(a)?void jerryAnimate("body").render():void 0})})}(Zepto,window,document),function(t){t().extendTemplate({rotate:{defs:{startAngle:0,targetAngle:0},style:"@-webkit-keyframes #animationClass# {\n                            0% {\n                                -webkit-transform-origin: center;\n                                transform-origin: center;\n                                -webkit-transform: rotate(#startAngle#);\n                                transform: rotate(#startAngle#);\n                            }\n                            100% {\n                                -webkit-transform-origin: center;\n                                transform-origin: center;\n                                -webkit-transform: rotate(#targetAngle#);\n                                transform: rotate(#targetAngle#);\n                            }\n                        }\n                        @keyframes #animationClass# {\n                            0% {\n                                -webkit-transform-origin: center;\n                                transform-origin: center;\n                                -webkit-transform: rotate(#startAngle#);\n                                transform: rotate(#startAngle#);\n                            }\n                            100% {\n                                -webkit-transform-origin: center;\n                                transform-origin: center;\n                                -webkit-transform: rotate(#targetAngle#);\n                                transform: rotate(#targetAngle#);\n                            }\n                        }"
}})}(jerryAnimate),function(t){t.fn.lazyLoading=function(e){function n(){l=!0,100>s?(s!=o[0]&&o.length>0&&(s=o.shift()),i.trigger("progress",s),100!=s?setTimeout(n,u):i.trigger("callBack")):i.trigger("callBack")}function r(e){function n(){o++,i&&i(Math.floor(o/s*100)),o==s&&a&&a()}var r=e.$imgs,i=e.progressFn,a=e.callBackFn,o=0,s=r.length;r.each(function(e,r){var i=new Image;i.onload=n,i.onerror=n,i.src=t(r).attr("src")})}var i=t(this),a=i.find("img"),o=[],s=0,u=30,c=0,l=!1,f=null;return i.concat=function(e){var n=[];return e.forEach(function(t){var e=new Image;e.src=t,n.push(e)}),r({$imgs:t(a.concat(n)),progressFn:function(t){o.push(t)}}),i},i.progress=function(t){return i.on("progress",function(e){t&&t.call(i,e._args)}),i},i.callBack=function(t){return i.on("callBack",function(){t&&t.call(i)}),i},f=setInterval(function(){c>35&&(u=150,!l&&n()),c++,o[o.length-1]>=100&&(clearInterval(f),u=30,!l&&n())},50),i}}(Zepto||jQuery),function(t){function e(t,e,n,r){return Math.abs(t-e)>=Math.abs(n-r)?t-e>0?"Left":"Right":n-r>0?"Up":"Down"}function n(){l=null,p.last&&(p.el.trigger("longTap"),p={})}function r(){l&&clearTimeout(l),l=null}function i(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,p={}}function a(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function o(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,p={},h=750;t(document).ready(function(){var d,m,g,v,y=0,w=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(p.el.trigger("swipe"),p.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(!(v=o(e,"down"))||a(e))&&(g=v?e:e.touches[0],e.touches&&1===e.touches.length&&p.x2&&(p.x2=void 0,p.y2=void 0),d=Date.now(),m=d-(p.last||d),p.el=t("tagName"in g.target?g.target:g.target.parentNode),s&&clearTimeout(s),p.x1=g.pageX,p.y1=g.pageY,m>0&&250>=m&&(p.isDoubleTap=!0),p.last=d,l=setTimeout(n,h),f&&v&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(v=o(t,"move"))||a(t))&&(g=v?t:t.touches[0],r(),p.x2=g.pageX,p.y2=g.pageY,y+=Math.abs(p.x1-p.x2),w+=Math.abs(p.y1-p.y2))}).on("touchend MSPointerUp pointerup",function(n){(!(v=o(n,"up"))||a(n))&&(r(),p.x2&&Math.abs(p.x1-p.x2)>30||p.y2&&Math.abs(p.y1-p.y2)>30?c=setTimeout(function(){p.el.trigger("swipe"),p.el.trigger("swipe"+e(p.x1,p.x2,p.y1,p.y2)),p={}},0):"last"in p&&(30>y&&30>w?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=i,p.el.trigger(e),p.isDoubleTap?(p.el&&p.el.trigger("doubleTap"),p={}):s=setTimeout(function(){s=null,p.el&&p.el.trigger("singleTap"),p={}},250)},0):p={}),y=w=0)}).on("touchcancel MSPointerCancel pointercancel",i),t(window).on("scroll",i)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function r(t){return i?i+t:t.toLowerCase()}var i,a,o,s,u,c,l,f,p,h,d="",m={Webkit:"webkit",Moz:"",O:"o"},g=window.document,v=g.createElement("div"),y=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,w={};t.each(m,function(t,n){return v.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",i=n,!1):void 0}),a=d+"transform",w[o=d+"transition-property"]=w[s=d+"transition-duration"]=w[c=d+"transition-delay"]=w[u=d+"transition-timing-function"]=w[l=d+"animation-name"]=w[f=d+"animation-duration"]=w[h=d+"animation-delay"]=w[p=d+"animation-timing-function"]="",t.fx={off:i===e&&v.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},t.fn.animate=function(n,r,i,a,o){return t.isFunction(r)&&(a=r,i=e,r=e),t.isFunction(i)&&(a=i,i=e),t.isPlainObject(r)&&(i=r.easing,a=r.complete,o=r.delay,r=r.duration),r&&(r=("number"==typeof r?r:t.fx.speeds[r]||t.fx.speeds._default)/1e3),o&&(o=parseFloat(o)/1e3),this.anim(n,r,i,a,o)},t.fn.anim=function(r,i,d,m,g){var v,b,x,T={},E="",C=this,j=t.fx.transitionEnd,S=!1;if(i===e&&(i=t.fx.speeds._default/1e3),g===e&&(g=0),t.fx.off&&(i=0),"string"==typeof r)T[l]=r,T[f]=i+"s",T[h]=g+"s",T[p]=d||"linear",j=t.fx.animationEnd;else{b=[];for(v in r)y.test(v)?E+=v+"("+r[v]+") ":(T[v]=r[v],b.push(n(v)));E&&(T[a]=E,b.push(a)),i>0&&"object"==typeof r&&(T[o]=b.join(", "),T[s]=i+"s",T[c]=g+"s",T[u]=d||"linear")}return x=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(j,x)}else t(this).unbind(j,x);S=!0,t(this).css(w),m&&m.call(this)},i>0&&(this.bind(j,x),setTimeout(function(){S||x.call(C)},1e3*i+25)),this.size()&&this.get(0).clientLeft,this.css(T),0>=i&&setTimeout(function(){C.each(function(){x.call(this)})},0),this},v=null}(Zepto);var CssSprite=function(t){var e=this;e.defs={stage:null,commonClass:"icons",classPrefix:"b",frames:60,time:5e3,waitTime:0,loop:0},e.extend(e.defs,t),e.index=0,e.timer=null,e.timerWait=null,e.speed=parseInt(e.defs.time/e.defs.frames)};CssSprite.prototype.extend=function(t,e){for(var n in t)"undefined"!=typeof e[n]&&(t[n]=e[n]);return this},CssSprite.prototype.play=function(){function t(){e.index<e.defs.frames?(e.index++,e.toTarget()):(clearInterval(e.timer),e.defs.loop&&(clearTimeout(e.timerWait),e.timerWait=setTimeout(function(){e.index=1,e.toTarget(),e.timer=setInterval(t,e.speed)},e.defs.waitTime)))}var e=this;return clearInterval(e.timer),e.timer=setInterval(t,e.speed),e},CssSprite.prototype.toTarget=function(){var t=this;return t.defs.stage.className=t.defs.commonClass+" "+t.defs.classPrefix+t.index,t},CssSprite.prototype.stop=function(){var t=this;return clearInterval(t.timer),clearTimeout(t.timerWait),t},function(t){jerryAnimate("body").render(),t.extend(t.fn,{fadeIn:function(e){var n=t(this);e&&e.addClass&&n.addClass(e.addClass),n.css("opacity","0").animate({opacity:1},e&&e.time||500,"",function(){e&&e.callBack&&e.callBack.call(n)})},fadeOut:function(e){var n=t(this);n.css("opacity","1").animate({opacity:0},e&&e.time||500,"",function(){e.removeClass&&n.removeClass(e.removeClass),e&&e.callBack&&e.callBack.call(n)})}}),function(){function e(){o=setInterval(function(){s++,u>s?a.removeClass("show").eq(s).addClass("show"):clearInterval(o)},60)}var n=t(".page2"),r=n.find(".scan"),i=n.find(".layer"),a=i.find("img"),o=null,s=0,u=a.length;r.one("webkitAnimationEnd animationEnd",function(){i.fadeIn({addClass:"active",callBack:e})})}()}(Zepto);