!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.kesuMobile=i():t.kesuMobile=i()}("undefined"!=typeof self?self:this,function(){return function(t){var i={};function e(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=87)}({0:function(t,i){t.exports=function(t,i,e,s,o,n){var r,h=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,h=t.default);var l="function"==typeof h?h.options:h;i&&(l.render=i.render,l.staticRenderFns=i.staticRenderFns,l._compiled=!0),e&&(l.functional=!0),o&&(l._scopeId=o);var c;if(n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):s&&(c=s),c){var p=l.functional,u=p?l.render:l.beforeCreate;p?(l._injectStyles=c,l.render=function(t,i){return c.call(i),u(t,i)}):l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:r,exports:h,options:l}}},23:function(t,i,e){"use strict";var s=e(8),o=e(3);i.a={name:"cScrollX",data:()=>({width:"",height:""}),props:{},created(){},mounted(){this.setWidth(),this.setHeight(),setTimeout(()=>{this._initScroll()},20)},methods:{_initScroll(){this.scroll=new s.a(this.$refs.myScrollX,{probeType:1,scrollX:!0,click:!0})},setWidth(){const t=this.$refs.myScrollX,i=t.querySelectorAll(".scroll-x-container .scroll-x-inner>div");let e=0;for(let t=0;t<i.length;t++)e+=o.a.width(i[t]);this.width=e+20},setHeight(){const t=this.$refs.myScrollX,i=t.querySelectorAll(".scroll-x-container .scroll-x-inner>div");let e=0;for(let t=0;t<i.length;t++){let s=o.a.height(i[t]);e=s>e?s:e}this.height=e}}}},3:function(t,i,e){"use strict";const s=new class{constructor(){}setSize(){function t(){const t=document.documentElement.clientWidth/7.5;document.documentElement.style.fontSize=t+"px"}t(),window.onresize=function(){t()}}checkPhone(t){return!!/^1[34578]\d{9}$/.test(t)}formatDateTime(t){if(void 0==t)return"";var i=new Date(1e3*parseInt(t)),e=i.getFullYear(),s=i.getMonth()+1;s=s<10?"0"+s:s;var o=i.getDate();o=o<10?"0"+o:o;var n=i.getHours();n=n<10?"0"+n:n;var r=i.getMinutes(),h=i.getSeconds();return e+"-"+s+"-"+o+" "+n+":"+(r=r<10?"0"+r:r)+":"+(h=h<10?"0"+h:h)}getHour(){const t=new Date;let i=t.getHours();return i=i<10?"0"+i:i}getTime(t){var i=new Date,e=i.getFullYear(),s=i.getMonth()+1;s=s<10?"0"+s:s;var o=i.getDate(),n=t.split(" ")[0],r=t.split(" ")[1],h=e+"/"+s+"/"+(o=(o="今天"==n?o:o+1)<10?"0"+o:o)+" "+r+":00",a=Date.parse(new Date(h));return a/=1e3}getTimeStamp(t){return Date.parse(t)/1e3}getNowStamp(t){return Date.parse(new Date)/1e3}mergeArray(){return Array.prototype.concat.apply([],arguments)}};i.a=s},8:function(t,i,e){"use strict";var s=function(){return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],s=!0,o=!1,n=void 0;try{for(var r,h=t[Symbol.iterator]();!(s=(r=h.next()).done)&&(e.push(r.value),!i||e.length!==i);s=!0);}catch(t){o=!0,n=t}finally{try{!s&&h.return&&h.return()}finally{if(o)throw n}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)};var n=navigator.userAgent.toLowerCase(),r=/wechatdevtools/.test(n),h=n.indexOf("android")>0;function a(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function l(t){for(var i=arguments.length,e=Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];for(var o=0;o<e.length;o++){var n=e[o];for(var r in n)t[r]=n[r]}return t}var c=document.createElement("div").style,p=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==c[t[i]])return i;return!1}();function u(t){return!1!==p&&("standard"===p?"transitionEnd"===t?"transitionend":t:p+t.charAt(0).toUpperCase()+t.substr(1))}function d(t,i,e,s){t.addEventListener(i,e,{passive:!1,capture:!!s})}function f(t,i,e,s){t.removeEventListener(i,e,{passive:!1,capture:!!s})}function m(t){for(var i=0,e=0;t;)i-=t.offsetLeft,e-=t.offsetTop,t=t.offsetParent;return{left:i,top:e}}var g=u("transform"),v=u("perspective")in c,y="ontouchstart"in window||r,w=!1!==g,x=u("transition")in c,T={transform:g,transitionTimingFunction:u("transitionTimingFunction"),transitionDuration:u("transitionDuration"),transitionProperty:u("transitionProperty"),transitionDelay:u("transitionDelay"),transformOrigin:u("transformOrigin"),transitionEnd:u("transitionEnd")},b=1,S={touchstart:b,touchmove:b,touchend:b,mousedown:2,mousemove:2,mouseup:2};function _(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function X(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}function P(t,i){t.removeChild(i)}var M={startX:0,startY:0,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:700,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.001,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:y,disableTouch:!y,observeDOM:!0,autoBlur:!0,wheel:!1,snap:!1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1};var Y={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}};function D(t,i,e,s,o,n){var r=t-i,h=Math.abs(r)/e,a=n.deceleration,l=n.itemHeight,c=n.swipeBounceTime,p=n.wheel,u=n.swipeTime,d=p?4:15,f=t+h/a*(r<0?-1:1);return p&&l&&(f=Math.round(f/l)*l),f<s?(f=o?s-o/d*h:s,u=c):f>0&&(f=o?o/d*h:0,u=c),{destination:Math.round(f),duration:u}}var E=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)},k=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)},H=1,C=-1,L=1,W=-1;function O(t){console.error("[BScroll warn]: "+t)}function z(t){var i=document.createElement("div"),e=document.createElement("div");return i.style.cssText="position:absolute;z-index:9999;pointerEvents:none",e.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",e.className="bscroll-indicator","horizontal"===t?(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",e.style.height="100%",i.className="bscroll-horizontal-scrollbar"):(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",e.style.width="100%",i.className="bscroll-vertical-scrollbar"),i.style.cssText+=";overflow:hidden",i.appendChild(e),i}function A(t,i){this.wrapper=i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.direction=i.direction,i.fade?(this.visible=0,this.wrapperStyle.opacity="0"):this.visible=1}A.prototype.refresh=function(){this.transitionTime(),this._calculate(),this.updatePosition()},A.prototype.fade=function(t,i){var e=this;if(!i||this.visible){var s=t?250:500;t=t?"1":"0",this.wrapperStyle[T.transitionDuration]=s+"ms",clearTimeout(this.fadeTimeout),this.fadeTimeout=setTimeout(function(){e.wrapperStyle.opacity=t,e.visible=+t},0)}},A.prototype.updatePosition=function(){if("vertical"===this.direction){var t=Math.round(this.sizeRatioY*this.scroller.y);if(t<0){this.transitionTime(500);var i=Math.max(this.indicatorHeight+3*t,8);this.indicatorStyle.height=i+"px",t=0}else if(t>this.maxPosY){this.transitionTime(500);var e=Math.max(this.indicatorHeight-3*(t-this.maxPosY),8);this.indicatorStyle.height=e+"px",t=this.maxPosY+this.indicatorHeight-e}else this.indicatorStyle.height=this.indicatorHeight+"px";this.y=t,this.scroller.options.useTransform?this.indicatorStyle[T.transform]="translateY("+t+"px)"+this.scroller.translateZ:this.indicatorStyle.top=t+"px"}else{var s=Math.round(this.sizeRatioX*this.scroller.x);if(s<0){this.transitionTime(500);var o=Math.max(this.indicatorWidth+3*s,8);this.indicatorStyle.width=o+"px",s=0}else if(s>this.maxPosX){this.transitionTime(500);var n=Math.max(this.indicatorWidth-3*(s-this.maxPosX),8);this.indicatorStyle.width=n+"px",s=this.maxPosX+this.indicatorWidth-n}else this.indicatorStyle.width=this.indicatorWidth+"px";this.x=s,this.scroller.options.useTransform?this.indicatorStyle[T.transform]="translateX("+s+"px)"+this.scroller.translateZ:this.indicatorStyle.left=s+"px"}},A.prototype.transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.indicatorStyle[T.transitionDuration]=t+"ms"},A.prototype.transitionTimingFunction=function(t){this.indicatorStyle[T.transitionTimingFunction]=t},A.prototype.remove=function(){this.wrapper.parentNode.removeChild(this.wrapper)},A.prototype._calculate=function(){if("vertical"===this.direction){var t=this.wrapper.clientHeight;this.indicatorHeight=Math.max(Math.round(t*t/(this.scroller.scrollerHeight||t||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=t-this.indicatorHeight,this.sizeRatioY=this.maxPosY/this.scroller.maxScrollY}else{var i=this.wrapper.clientWidth;this.indicatorWidth=Math.max(Math.round(i*i/(this.scroller.scrollerWidth||i||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=i-this.indicatorWidth,this.sizeRatioX=this.maxPosX/this.scroller.maxScrollX}};function I(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||O("can not resolve the wrapper dom"),this.scroller=this.wrapper.children[0],this.scroller||O("the wrapper need at least one child element to be scroller"),this.scrollerStyle=this.scroller.style,this._init(t,i)}(F=I).prototype._init=function(t,i){this._handleOptions(i),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this.options.observeDOM&&this._initDOMObserver(),this.options.autoBlur&&this._handleAutoBlur(),this.refresh(),this.options.snap||this.scrollTo(this.options.startX,this.options.startY),this.enable()},F.prototype._handleOptions=function(t){this.options=l({},M,t),this.translateZ=this.options.HWCompositing&&v?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&x,this.options.useTransform=this.options.useTransform&&w,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap")},F.prototype._addDOMEvents=function(){var t=d;this._handleDOMEvents(t)},F.prototype._removeDOMEvents=function(){var t=f;this._handleDOMEvents(t)},F.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),y&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,T.transitionEnd,this)},F.prototype._initExtFeatures=function(){this.options.snap&&this._initSnap(),this.options.scrollbar&&this._initScrollbar(),this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown(),this.options.wheel&&this._initWheel()},F.prototype._watchTransition=function(){if("function"==typeof Object.defineProperty){var t=this,i=!1;Object.defineProperty(this,"isInTransition",{get:function(){return i},set:function(e){i=e;for(var s=t.scroller.children.length?t.scroller.children:[t.scroller],o=i&&!t.pulling?"none":"auto",n=0;n<s.length;n++)s[n].style.pointerEvents=o}})}},F.prototype._handleAutoBlur=function(){this.on("beforeScrollStart",function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur()})},F.prototype._initDOMObserver=function(){var t=this;if("undefined"!=typeof MutationObserver){var i=void 0,e=new MutationObserver(function(e){if(!t._shouldNotRefresh()){for(var s=!1,o=!1,n=0;n<e.length;n++){var r=e[n];if("attributes"!==r.type){s=!0;break}if(r.target!==t.scroller){o=!0;break}}s?t.refresh():o&&(clearTimeout(i),i=setTimeout(function(){t._shouldNotRefresh()||t.refresh()},60))}}),s={attributes:!0,childList:!0,subtree:!0};e.observe(this.scroller,s),this.on("destroy",function(){e.disconnect()})}else this._checkDOMUpdate()},F.prototype._shouldNotRefresh=function(){var t=this.x>0||this.x<this.maxScrollX||this.y>0||this.y<this.maxScrollY;return this.isInTransition||this.stopFromTransition||t},F.prototype._checkDOMUpdate=function(){var t=_(this.scroller),i=t.width,e=t.height;function s(){var o=this;setTimeout(function(){(function(){if(!this.destroyed){var o=(t=_(this.scroller)).width,n=t.height;i===o&&e===n||this.refresh(),i=o,e=n,s.call(this)}}).call(o)},1e3)}s.call(this)},F.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(X(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation()))}},F.prototype.refresh=function(){var t=_(this.wrapper);this.wrapperWidth=t.width,this.wrapperHeight=t.height;var i=_(this.scroller);this.scrollerWidth=i.width,this.scrollerHeight=i.height;var e=this.options.wheel;e?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.scrollerHeight/this.items.length:0,void 0===this.selectedIndex&&(this.selectedIndex=e.selectedIndex||0),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=m(this.wrapper),this.trigger("refresh"),this.resetPosition()},F.prototype.enable=function(){this.enabled=!0},F.prototype.disable=function(){this.enabled=!1};var F;(R=I).prototype._start=function(t){var i=S[t.type];if((i===b||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!X(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=a(),this.options.wheel&&(this.target=t.target),this.stop();var e=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.trigger("beforeScrollStart")}},R.prototype._move=function(t){if(this.enabled&&!this.destroyed&&S[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i=t.touches?t.touches[0]:t,e=i.pageX-this.pointX,s=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=e,this.distY+=s;var o=Math.abs(this.distX),n=Math.abs(this.distY),r=a();if(!(r-this.endTime>this.options.momentumLimitTime&&n<this.options.momentumLimitDistance&&o<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(o>n+this.options.directionLockThreshold?this.directionLocked="h":n>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);s=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);e=0}e=this.hasHorizontalScroll?e:0,s=this.hasVerticalScroll?s:0,this.movingDirectionX=e>0?W:e<0?L:0,this.movingDirectionY=s>0?C:s<0?H:0;var h=this.x+e,l=this.y+s;(h>0||h<this.maxScrollX)&&(h=this.options.bounce?this.x+e/3:h>0?0:this.maxScrollX),(l>0||l<this.maxScrollY)&&(l=this.options.bounce?this.y+s/3:l>0?0:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(h,l),r-this.startTime>this.options.momentumLimitTime&&(this.startTime=r,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>1&&this.trigger("scroll",{x:this.x,y:this.y});var c=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,p=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,u=this.pointX-c,d=this.pointY-p;(u>document.documentElement.clientWidth-this.options.momentumLimitDistance||u<this.options.momentumLimitDistance||d<this.options.momentumLimitDistance||d>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}},R.prototype._end=function(t){if(this.enabled&&!this.destroyed&&S[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!X(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.trigger("touchEnd",{x:this.x,y:this.y}),this.isInTransition=!1;var i=Math.round(this.x),e=Math.round(this.y),s=i-this.absStartX,o=e-this.absStartY;if(this.directionX=s>0?W:s<0?L:0,this.directionY=o>0?C:o<0?H:0,!this.options.pullDownRefresh||!this._checkPullDown())if(this._checkClick(t))this.trigger("scrollCancel");else if(!this.resetPosition(this.options.bounceTime,Y.bounce)){this.scrollTo(i,e),this.endTime=a();var n=this.endTime-this.startTime,r=Math.abs(i-this.startX),h=Math.abs(e-this.startY);if(this._events.flick&&n<this.options.flickLimitTime&&r<this.options.flickLimitDistance&&h<this.options.flickLimitDistance)this.trigger("flick");else{var l=0;if(this.options.momentum&&n<this.options.momentumLimitTime&&(h>this.options.momentumLimitDistance||r>this.options.momentumLimitDistance)){var c=this.hasHorizontalScroll?D(this.x,this.startX,n,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options):{destination:i,duration:0},p=this.hasVerticalScroll?D(this.y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options):{destination:e,duration:0};i=c.destination,e=p.destination,l=Math.max(c.duration,p.duration),this.isInTransition=!0}else this.options.wheel&&(e=Math.round(e/this.itemHeight)*this.itemHeight,l=this.options.wheel.adjustTime||400);var u=Y.swipe;if(this.options.snap){var d=this._nearestSnap(i,e);this.currentPage=d,l=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(i-d.x),1e3),Math.min(Math.abs(e-d.y),1e3)),300),i=d.x,e=d.y,this.directionX=0,this.directionY=0,u=this.options.snap.easing||Y.bounce}if(i!==this.x||e!==this.y)return(i>0||i<this.maxScrollX||e>0||e<this.maxScrollY)&&(u=Y.swipeBounce),void this.scrollTo(i,e,l,u);this.options.wheel&&(this.selectedIndex=Math.round(Math.abs(this.y/this.itemHeight))),this.trigger("scrollEnd",{x:this.x,y:this.y})}}}},R.prototype._checkClick=function(t){var i=this.stopFromTransition&&!this.pulling;if(this.stopFromTransition=!1,!this.moved){if(this.options.wheel){if(this.target&&this.target.className===this.options.wheel.wheelWrapperClass){var e=Math.abs(Math.round(this.y/this.itemHeight)),s=Math.round((this.pointY+m(this.target).top-this.itemHeight/2)/this.itemHeight);this.target=this.items[e+s]}return this.scrollToElement(this.target,this.options.wheel.adjustTime||400,!0,!0,Y.swipe),!0}return!i&&(this.options.tap&&function(t,i){var e=document.createEvent("Event");e.initEvent(i,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)}(t,this.options.tap),this.options.click&&!X(t.target,this.options.preventDefaultException)&&function(t){var i=void 0;"mouseup"===t.type||"mousecancel"===t.type?i=t:"touchend"!==t.type&&"touchcancel"!==t.type||(i=t.changedTouches[0]);var e={};i&&(e.screenX=i.screenX||0,e.screenY=i.screenY||0,e.clientX=i.clientX||0,e.clientY=i.clientY||0);var s=void 0;"undefined"!=typeof MouseEvent?s=new MouseEvent("click",l({bubbles:!0,cancelable:!1},e)):((s=document.createEvent("Event")).initEvent("click",!0,!1),l(s,e)),s._constructed=!0,t.target.dispatchEvent(s)}(t),!0)}return!1},R.prototype._resize=function(){var t=this;this.enabled&&(h&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling))},R.prototype._startProbe=function(){k(this.probeTimer),this.probeTimer=E(function i(){var e=t.getComputedPosition();t.trigger("scroll",e),t.isInTransition?t.probeTimer=E(i):t.trigger("scrollEnd",e)});var t=this},R.prototype._transitionProperty=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";this.scrollerStyle[T.transitionProperty]=t},R.prototype._transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.scrollerStyle[T.transitionDuration]=t+"ms",this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[T.transitionDuration]=t+"ms";if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTime(t)},R.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[T.transitionTimingFunction]=t,this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[T.transitionTimingFunction]=t;if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTimingFunction(t)},R.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.pulling||this.resetPosition(this.options.bounceTime,Y.bounce)||(this.isInTransition=!1,3!==this.options.probeType&&this.trigger("scrollEnd",{x:this.x,y:this.y})))},R.prototype._translate=function(t,i){if(this.options.useTransform?this.scrollerStyle[T.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.options.wheel)for(var e=this.options.wheel.rotate,s=void 0===e?25:e,o=0;o<this.items.length;o++){var n=s*(i/this.itemHeight+o);this.items[o].style[T.transform]="rotateX("+n+"deg)"}if(this.x=t,this.y=i,this.indicators)for(var r=0;r<this.indicators.length;r++)this.indicators[r].updatePosition()},R.prototype._animate=function(t,i,e,s){var o=this,n=this.x,r=this.y,h=a(),l=h+e;this.isAnimating=!0,k(this.animateTimer),function c(){var p=a();if(p>=l)return o.isAnimating=!1,o._translate(t,i),void(o.pulling||o.resetPosition(o.options.bounceTime)||o.trigger("scrollEnd",{x:o.x,y:o.y}));var u=s(p=(p-h)/e),d=(t-n)*u+n,f=(i-r)*u+r;o._translate(d,f),o.isAnimating&&(o.animateTimer=E(c)),3===o.options.probeType&&o.trigger("scroll",{x:o.x,y:o.y})}()},R.prototype.scrollBy=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Y.bounce;t=this.x+t,i=this.y+i,this.scrollTo(t,i,e,s)},R.prototype.scrollTo=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Y.bounce;this.isInTransition=this.options.useTransition&&e>0&&(t!==this.x||i!==this.y),!e||this.options.useTransition?(this._transitionProperty(),this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i),e&&3===this.options.probeType&&this._startProbe(),this.options.wheel&&(i>0?this.selectedIndex=0:i<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=Math.round(Math.abs(i/this.itemHeight)))):this._animate(t,i,e,s.fn)},R.prototype.scrollToElement=function(t,i,e,s,o){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||t.className===this.options.wheel.wheelItemClass)){var n=m(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===e&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=e||0,n.top-=s||0,n.left=n.left>0?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>0?0:n.top<this.maxScrollY?this.maxScrollY:n.top,this.options.wheel&&(n.top=Math.round(n.top/this.itemHeight)*this.itemHeight),this.scrollTo(n.left,n.top,i,o)}},R.prototype.resetPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y.bounce,e=this.x,s=Math.round(e);!this.hasHorizontalScroll||s>0?e=0:s<this.maxScrollX&&(e=this.maxScrollX);var o=this.y,n=Math.round(o);return!this.hasVerticalScroll||n>0?o=0:n<this.maxScrollY&&(o=this.maxScrollY),(e!==this.x||o!==this.y)&&(this.scrollTo(e,o,t,i),!0)},R.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null),i=void 0,e=void 0;return this.options.useTransform?(i=+((t=t[T.transform].split(")")[0].split(", "))[12]||t[4]),e=+(t[13]||t[5])):(i=+t.left.replace(/[^-\d.]/g,""),e=+t.top.replace(/[^-\d.]/g,"")),{x:i,y:e}},R.prototype.stop=function(){if(this.options.useTransition&&this.isInTransition){this.isInTransition=!1;var t=this.getComputedPosition();this._translate(t.x,t.y),this.options.wheel?this.target=this.items[Math.round(-t.y/this.itemHeight)]:this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0}else!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0)},R.prototype.destroy=function(){this.destroyed=!0,this.trigger("destroy"),this._removeDOMEvents(),this._events={}};var R;(N=I).prototype.on=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,e])},N.prototype.once=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;function s(){this.off(t,s),i.apply(e,arguments)}s.fn=i,this.on(t,s)},N.prototype.off=function(t,i){var e=this._events[t];if(e)for(var s=e.length;s--;)(e[s][0]===i||e[s][0]&&e[s][0].fn===i)&&(e[s][0]=void 0)},N.prototype.trigger=function(t){var i=this._events[t];if(i)for(var e=i.length,n=[].concat(o(i)),r=0;r<e;r++){var h=n[r],a=s(h,2),l=a[0],c=a[1];l&&l.apply(c,[].slice.call(arguments,1))}};var N;(U=I).prototype._initSnap=function(){var t=this;this.currentPage={};var i=this.options.snap;if(i.loop){var e=this.scroller.children;e.length>0&&(function(t,i){i.firstChild?(e=t,(s=i.firstChild).parentNode.insertBefore(e,s)):i.appendChild(t);var e,s}(e[e.length-1].cloneNode(!0),this.scroller),this.scroller.appendChild(e[1].cloneNode(!0)))}var s=i.el;"string"==typeof s&&(s=this.scroller.querySelectorAll(s)),this.on("refresh",function(){if(t.pages=[],t.wrapperWidth&&t.wrapperHeight&&t.scrollerWidth&&t.scrollerHeight){var e=i.stepX||t.wrapperWidth,o=i.stepY||t.wrapperHeight,n=0,r=void 0,h=void 0,a=void 0,l=0,c=void 0,p=0,u=void 0,d=void 0;if(s)for(c=s.length,u=-1;l<c;l++)d=_(s[l]),(0===l||d.left<=_(s[l-1]).left)&&(p=0,u++),t.pages[p]||(t.pages[p]=[]),n=Math.max(-d.left,t.maxScrollX),r=Math.max(-d.top,t.maxScrollY),h=n-Math.round(d.width/2),a=r-Math.round(d.height/2),t.pages[p][u]={x:n,y:r,width:d.width,height:d.height,cx:h,cy:a},n>t.maxScrollX&&p++;else for(h=Math.round(e/2),a=Math.round(o/2);n>-t.scrollerWidth;){for(t.pages[l]=[],c=0,r=0;r>-t.scrollerHeight;)t.pages[l][c]={x:Math.max(n,t.maxScrollX),y:Math.max(r,t.maxScrollY),width:e,height:o,cx:n-h,cy:r-a},r-=o,c++;n-=e,l++}var f=i.loop?1:0;t._goToPage(t.currentPage.pageX||f,t.currentPage.pageY||0,0);var m=i.threshold;m%1==0?(t.snapThresholdX=m,t.snapThresholdY=m):(t.snapThresholdX=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width*m),t.snapThresholdY=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height*m))}}),this.on("scrollEnd",function(){i.loop&&(0===t.currentPage.pageX&&t._goToPage(t.pages.length-2,t.currentPage.pageY,0),t.currentPage.pageX===t.pages.length-1&&t._goToPage(1,t.currentPage.pageY,0))}),!1!==i.listenFlick&&this.on("flick",function(){var e=i.speed||Math.max(Math.max(Math.min(Math.abs(t.x-t.startX),1e3),Math.min(Math.abs(t.y-t.startY),1e3)),300);t._goToPage(t.currentPage.pageX+t.directionX,t.currentPage.pageY+t.directionY,e)}),this.on("destroy",function(){if(i.loop){var e=t.scroller.children;e.length>2&&(P(t.scroller,e[e.length-1]),P(t.scroller,e[0]))}})},U.prototype._nearestSnap=function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0;if(Math.abs(t-this.absStartX)<=this.snapThresholdX&&Math.abs(i-this.absStartY)<=this.snapThresholdY)return this.currentPage;t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);for(var s=this.pages.length;e<s;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}s=this.pages[e].length;for(var o=0;o<s;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return e===this.currentPage.pageX&&((e+=this.directionX)<0?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),o===this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:e,pageY:o}},U.prototype._goToPage=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments[2],s=arguments[3],o=this.options.snap;if(o&&this.pages&&(s=s||o.easing||Y.bounce,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),this.pages[t])){i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;e=void 0===e?o.speed||Math.max(Math.max(Math.min(Math.abs(n-this.x),1e3),Math.min(Math.abs(r-this.y),1e3)),300):e,this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,e,s)}},U.prototype.goToPage=function(t,i,e,s){var o=this.options.snap;if(o){if(o.loop){var n=this.pages.length-2;t>=n?t=n-1:t<0&&(t=0),t+=1}this._goToPage(t,i,e,s)}},U.prototype.next=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;++e>=this.pages.length&&this.hasVerticalScroll&&(e=0,s++),this._goToPage(e,s,t,i)},U.prototype.prev=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;--e<0&&this.hasVerticalScroll&&(e=0,s--),this._goToPage(e,s,t,i)},U.prototype.getCurrentPage=function(){var t=this.options.snap;return t?t.loop?l({},this.currentPage,{pageX:this.currentPage.pageX-1}):this.currentPage:null};var U;(B=I).prototype.wheelTo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y))},B.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},B.prototype._initWheel=function(){var t=this.options.wheel;t.wheelWrapperClass||(t.wheelWrapperClass="wheel-scroll"),t.wheelItemClass||(t.wheelItemClass="wheel-item"),void 0===t.selectedIndex&&(t.selectedIndex=0,O("wheel option selectedIndex is required!"))};var B;(j=I).prototype._initScrollbar=function(){var t=this,i=this.options.scrollbar.fade,e=void 0===i||i;this.indicators=[];var s=void 0;this.options.scrollX&&(s={el:z("horizontal"),direction:"horizontal",fade:e},this._insertScrollBar(s.el),this.indicators.push(new A(this,s))),this.options.scrollY&&(s={el:z("vertical"),direction:"vertical",fade:e},this._insertScrollBar(s.el),this.indicators.push(new A(this,s))),this.on("refresh",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].refresh()}),e&&(this.on("scrollEnd",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollCancel",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0)}),this.on("beforeScrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0,!0)})),this.on("destroy",function(){t._removeScrollBars()})},j.prototype._insertScrollBar=function(t){this.wrapper.appendChild(t)},j.prototype._removeScrollBars=function(){for(var t=0;t<this.indicators.length;t++)this.indicators[t].remove()};var j;(V=I).prototype._initPullDown=function(){this.options.probeType=3},V.prototype._checkPullDown=function(){var t=this.options.pullDownRefresh,i=t.threshold,e=void 0===i?90:i,s=t.stop,o=void 0===s?40:s;return!(this.directionY!==C||this.y<e)&&(this.pulling||(this.pulling=!0,this.trigger("pullingDown")),this.scrollTo(this.x,o,this.options.bounceTime,Y.bounce),this.pulling)},V.prototype.finishPullDown=function(){this.pulling=!1,this.resetPosition(this.options.bounceTime,Y.bounce)};var V;(q=I).prototype._initPullUp=function(){this.options.probeType=3,this.pullupWatching=!1,this._watchPullUp()},q.prototype._watchPullUp=function(){this.pullupWatching=!0;var t=this.options.pullUpLoad.threshold,i=void 0===t?0:t;this.on("scroll",function t(e){var s=this;this.movingDirectionY===H&&e.y<=this.maxScrollY+i&&(this.once("scrollEnd",function(){s.pullupWatching=!1}),this.trigger("pullingUp"),this.off("scroll",t))})},q.prototype.finishPullUp=function(){var t=this;this.pullupWatching?this.once("scrollEnd",function(){t._watchPullUp()}):this._watchPullUp()};var q;I.Version="1.7.2",i.a=I},87:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(88);s.a.install=function(t){t.component("cScrollX",s.a)},i.default=s.a},88:function(t,i,e){"use strict";var s=e(23),o=e(90),n=!1;var r=function(t){n||e(89)},h=e(0)(s.a,o.a,!1,r,null,null);h.options.__file="src\\components\\cScrollX\\cScrollX.vue",i.a=h.exports},89:function(t,i){},90:function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("section",{ref:"myScrollX",staticClass:"c-scroll-x-container",style:{height:this.height+"px"}},[i("div",{staticClass:"c-scroll-x-inner",style:{width:this.width+"px"}},[this._t("default")],2)])};s._withStripped=!0;var o={render:s,staticRenderFns:[]};i.a=o}})});