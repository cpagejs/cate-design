!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.kesuMobile=e():t.kesuMobile=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=118)}({0:function(t,e){t.exports=function(t,e,n,s,o,i){var r,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o);var c;if(i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):s&&(c=s),c){var d=l.functional,f=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(t,e){return c.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:a,options:l}}},118:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(119);const o={install:function(t,e){document.getElementsByClassName("alert-container").length||(t.prototype.$toast=function(e){let n=new(t.extend(s.a)),o=n.$mount().$el;document.body.appendChild(o),"string"==typeof e?n.text=e:"object"==typeof e&&Object.assign(n,e),n.show=!0,setTimeout(function(){n.show=!1},n.delay||1500)})}};e.default=o},119:function(t,e,n){"use strict";var s=n(31),o=n(121),i=!1;var r=function(t){i||n(120)},a=n(0)(s.a,o.a,!1,r,null,null);a.options.__file="src\\components\\cToast\\toast.vue",e.a=a.exports},120:function(t,e){},121:function(t,e,n){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:this.fadeIn}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"alert-container",class:this.position},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showBg,expression:"showBg"}],staticClass:"alert-mask"}),this._v(" "),e("transition",{attrs:{name:this.translate}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"alert-box",class:["alert-shape-"+this.shape]},["square"==this.shape&&"info"!=this.type?e("em",{staticClass:"alert-type",class:["alert-type-"+this.type]}):this._e(),this._v(" "),e("div",{staticClass:"text"},[e("p",[this._v(this._s(this.text))])])])])],1)])};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},31:function(t,e,n){"use strict";e.a={name:"Alert",data:()=>({}),props:{show:{default:!1},text:{default:"loading"},type:{type:String,default:"info"},shape:{type:String,default:"square"},position:{default:"center"},showBg:{default:!1},delay:{default:1500},transition:{default:!0}},mounted(){},computed:{translate(){return this.transition?"top"===this.position?"translate-top":"middle"===this.position?"translate-middle":"bottom"===this.position?"translate-bottom":void 0:""},fadeIn(){return this.transition?"fadeIn":""}}}}})});