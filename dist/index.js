module.exports=function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e),n.d(e,"default",function(){return r});var r=function(){function n(t){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=t,this.listener=!0,this.start=!1,this.startMousePositionX=0,this.startMousePositionY=0,this.startScrollPositionX=0,this.startScrollPositionY=0,this.element.addEventListener("mousedown",function(t){t.preventDefault(),e.startMousePositionX=t.screenX,e.startMousePositionY=t.screenY,e.startScrollPositionX=e.element.scrollLeft,e.startScrollPositionY=e.element.scrollTop,e.start=!0}),document.documentElement.addEventListener("mouseup",function(t){t.preventDefault(),e.startMousePositionX=0,e.startMousePositionY=0,e.startScrollPositionX=0,e.startScrollPositionY=0,e.start=!1}),this.element.addEventListener("mousemove",function(t){e.listener&&e.start&&(t.preventDefault(),e.element.scrollTo(e.startScrollPositionX+(e.startMousePositionX-t.screenX),e.startScrollPositionY+(e.startMousePositionY-t.screenY)))})}return function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(n,[{key:"enable",value:function(){this.listener=!0}},{key:"disable",value:function(){this.listener=!1}}]),n}()}]);
//# sourceMappingURL=index.js.map