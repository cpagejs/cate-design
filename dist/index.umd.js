(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("vue"));
	else
		root["index"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 118:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 184:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 256:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;
﻿
__webpack_unused_export__ = ({ value: true });
var type_1 = __webpack_require__(879);
/**
 * 深层次克隆
 * @param data {any} 数据源
 * @returns {any} any
 */
function deepClone(data) {
    var t = type_1.default(data), o, i, ni;
    if (t === 'array') {
        o = [];
    }
    else if (t === 'object') {
        o = {};
    }
    else {
        return data;
    }
    if (t === 'array') {
        for (i = 0, ni = data.length; i < ni; i++) {
            o.push(deepClone(data[i]));
        }
        return o;
    }
    else if (t === 'object') {
        for (i in data) {
            o[i] = deepClone(data[i]);
        }
        return o;
    }
}
exports.Z = deepClone;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
﻿
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * 判断数据类型
 * @param ele {any} 元素
 * @returns {string} boolean/number/string/function/array/date/regExp/undefined/null/object/map/set/symbol
 */
function type(ele) {
    var toString = Object.prototype.toString, map = {
        "[object Boolean]": "boolean",
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
        '[object Map]': 'map',
        '[object Set]': 'set',
        '[object Symbol]': 'symbol'
    };
    return map[toString.call(ele)];
}
exports["default"] = type;


/***/ }),

/***/ 594:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABTlJREFUaAXlmz9rHEcYxnVxsEEQUthRIkLA4ML500VtEp8aE1cppA8iUNLkA7hJPoIKVaoFBpHOxDaYGJIqwTEkqHATSIqAwODEzuX325s57/1ZaXduVie0Dzw3s7Mz7/s+N3ezs7OzvaWWMBgMljH9CVyD1wPfIX0jkGTpKPAP0ieBP5I+6PV6z0jPNhC5ArfgPfgcpsK22tDWSk7VvRzGCOoz7HwFP4evB5svSX+C9+GvgU9JY6+SHfX2e+TfD/yU9GN4AYoX8Dv4Db1+z4KFAaHr8D6M+IfMPtyAb6YGZlu4CbWlzQh99VPtJrfD6Srci1GQPoO34eVkoxUNsXkl2NZHhL5XK5rkLcbRLfh38PyCdAe+m9fLtDV9BF/6FMZwa7pmxhIcbMOXUBzADzOar2VKn8E3SRHLdq2GTSph+BLc1QP4D37dpH0bdY0hxEJSxHYpix+MXYO/aRUcwS+yGM5gxFhCTCRFjNfmMosRe/Z3rQGvjV5+zhSMKcRGUsSa3tMYiD/jOIn4mbK3zopiY4HGJGKMu0nxYcABSvgz9luMhs+EaOIpizUmYzRW0Wwgo4GXHkdjB6jiP0s66WBhPV0Vi7FCYzb2epcsKjqpiNfZsdGY8oWLPikGzjt6CzWcPDmhUpxBHcz6L3B+YaLr+qaecwSxN0vDqIwK/aLaYOBspnJSwblTF93Ep7HDOCPrjwROZqgUbwR2Js9NHjcJYLJt0+MUX7TZgcK7tWlw4oZngZP0WnNj6rXe06k+1ADjDceNKcWcvAPF7amTxxRQvzXR89pWCxR3xiRQsAL/hd57Nr7Fo0120TlsYuMKVJPaXq2ccLAFxf7YN9HggLbZRGe2ta8wsDWSw4HrR2JjVJiQof3conPYKIeOvU0ohstDZJah81CH8eRlmegEG8mi52kb/U+maoJqU+PyEh83ofhhsnLqMbYai05pUzc+bD+C4uZrNFoLDR/UNXBSPVYX/6TOOvwFfgTv4qxy7h3O3Q11bbMebJDNgngtXlOwi+Ti8TDJ81lX9CmILWu77k/6IRSuB2cHdit/3sedyxmI2qB4qOBDc+BqTidlW9ieEj2rrNwmZ15tUBwq+K8imzDhaBIUPsqiH3MsResLCvi4XHhCq4IdrsXFJgJS6uJD0VGoPs1XDmYpPma1wcdFnYHnDlrdAqo795M+tK/B1ba6Gtvl/2/xn51V1qL/sUGrU5cl/8M+eRdxAjI8yvBpL2KmcgZVd3KSIRSfPYsnZcEfDMvyfJ4kNno5JdEjwV6W4s3DoxjEvGnK/zOlTd04sT26eVBwt24P/ZYQHRcANut+a7Pq5eilHDbKsWFvfAHAkxR2bomnW4t4oZe7s0wbBPu4UZzHhfjZD/IR251HLaGX3WgmXOU7/w/Tgui9QjKPHD2eBOembgQm67R1XNc39Q6ChuMflxooFVehD5PF+X8gHkR3Z8tD/DnSu9tFH3dhU0tJ9G4QHde9Wl9wi77rpMRWHk9ijLt12s6sg8FubUzzW0B0d7Yexm4PPR1/3u6DGhu9Y73TTI0BGoswtvQth1WBY9SBzE1fwmtd5eSkysa85foMvkla2j5cDhIn3dkgHoUj2slJnJGRPcevAETRpgjtw3jDoXA3kLinYgMm7yawLXSlQlvajNBXvxxD03yu13jcB/UlnHyNp3jpinKfPbsc/BQeBZKMvcbjMrErp/HlrgtWAPE1nm9Z4fx+WHRGPvn234YuF7lGFicCZBvDttrQ1qvtRhl0ZunhWXEQ6DLlsbfsPbnwV/H+B+4rZUQIwnDPAAAAAElFTkSuQmCC";

/***/ }),

/***/ 203:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cAutoComplete": function() { return /* reexport */ cAutoComplete; },
  "cBar": function() { return /* reexport */ components_cBar; },
  "cButton": function() { return /* reexport */ components_cButton; },
  "cButtonFooter": function() { return /* reexport */ components_cButtonFooter; },
  "cCheckBox": function() { return /* reexport */ components_cCheckBox; },
  "cCircle": function() { return /* reexport */ components_cCircle; },
  "cConfirm": function() { return /* reexport */ components_cConfirm; },
  "cForm": function() { return /* reexport */ components_cForm; },
  "cFormItem": function() { return /* reexport */ components_cFormItem; },
  "cHeaderBack": function() { return /* reexport */ components_cHeaderBack; },
  "cInput": function() { return /* reexport */ components_cInput; },
  "cInputPassword": function() { return /* reexport */ components_cInputPassword; },
  "cItem": function() { return /* reexport */ components_cItem; },
  "cLoading": function() { return /* reexport */ components_cLoading; },
  "cMenu": function() { return /* reexport */ components_cMenu; },
  "cMenuItem": function() { return /* reexport */ cMenuItem; },
  "cSlide": function() { return /* reexport */ components_cSlide; },
  "cSubItem": function() { return /* reexport */ cSubMenu; },
  "cTabPane": function() { return /* reexport */ cTabPane; },
  "cTabs": function() { return /* reexport */ cTabs; },
  "cTree": function() { return /* reexport */ components_cTree; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./src/components/cBar/cBar.tsx

 // import { barProps } from "./types";

 // const props = barProps();

/* harmony default export */ var cBar = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cBar",
  props: {
    percent: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#FF6E4E"
    }
  },

  setup(props) {
    const percentData = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("0%");
    const color = props.color || "#f90";
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      percentData.value = "0%";
      setTimeout(() => {
        percentData.value = Number(props.percent) > 100 ? 100 : Number(props.percent) + "%";
      }, 1000);
    });
    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-progress-bar"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("span", {
        "style": {
          width: percentData.value,
          backgroundColor: color
        }
      }, null)]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cBar/index.ts


cBar.install = app => {
  app.component(cBar.name, cBar);
};

/* harmony default export */ var components_cBar = (cBar);
;// CONCATENATED MODULE: ./src/components/cButton/types.ts
const buttonProps = () => ({
  text: String,
  backgroundColor: String,
  textColor: String,
  disabled: {
    type: Boolean,
    defalut: false
  },
  size: String,
  type: {
    type: String,
    default: "primary"
  },
  href: String
});


// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/cButton/cButton.tsx





const props = buttonProps();
/* harmony default export */ var cButton = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cButton",
  props: props,
  emits: ["onClick"],

  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const classes = classnames_default()("c-btn", {
      [`btn-${props.type}`]: props.type,
      [`btn-${props.size}`]: props.size,
      [`btn-disabled`]: props.disabled
    });
    const styles = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      backgroundColor: props.backgroundColor,
      color: props.textColor
    });

    const buttonClick = () => {
      emit("onClick");
    };

    return () => {
      const {
        href,
        text
      } = props;

      if (href) {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("a", {
          "href": href,
          "class": classes,
          "style": styles
        }, [text || ""]);
      } else {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
          "class": classes,
          "style": styles,
          "onClick": buttonClick
        }, [text || ""]);
      }
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cButton/index.ts


cButton.install = app => {
  app.component(cButton.name, cButton);
};

/* harmony default export */ var components_cButton = (cButton);
;// CONCATENATED MODULE: ./src/components/cButtonFooter/types.ts
const buttonFooterProps = () => ({
  text: {
    type: String,
    default: ""
  },
  textColor: {
    type: String,
    default: "#fff"
  },
  backgroungColor: {
    type: String,
    default: "#448FF2"
  },
  disabled: {
    type: Boolean,
    default: false
  }
});


;// CONCATENATED MODULE: ./src/components/cButtonFooter/cButtonFooter.tsx





const cButtonFooter_props = buttonFooterProps();
/* harmony default export */ var cButtonFooter = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cButtonFooter",
  props: cButtonFooter_props,
  emits: ["onClick"],

  setup(props, {
    emit
  }) {
    const classes = classnames_default()("c-button-footer", {
      [`c-button-footer_disabled`]: props.disabled
    });
    const styles = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      backgroundColor: props.disabled ? "#D0D0D0" : props.backgroungColor,
      color: props.textColor
    });

    const btnClick = () => {
      emit("onClick");
    };

    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("h1", {
        "class": classes,
        "style": styles,
        "onClick": btnClick
      }, [props.text]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cButtonFooter/index.ts


cButtonFooter.install = app => {
  app.component(cButtonFooter.name, cButtonFooter);
};

/* harmony default export */ var components_cButtonFooter = (cButtonFooter);
;// CONCATENATED MODULE: ./src/components/cCircle/types.ts
const circleProps = () => ({
  percent: {
    type: String,
    default: "0"
  }
});


;// CONCATENATED MODULE: ./src/components/cCircle/cCircle.tsx


/**
 * 圆环进度条组件
 */



const cCircle_props = circleProps();
/* harmony default export */ var cCircle = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cCircle",
  props: cCircle_props,

  setup(props) {
    const showProcess = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(true);
    const numText = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("");
    const width0 = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(true);
    const number = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
    const clipAuto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      const percentdata = Number(props.percent);
      let percent = 0;

      if (percentdata >= 100) {
        showProcess.value = false;
        numText.value = "100%";
      } else {
        const loading = setInterval(() => {
          if (percent >= percentdata) {
            number.value = percentdata;
            clearInterval(loading);
          } else if (percent > 50) {
            clipAuto.value = true;
            width0.value = false;
          }

          number.value = percent;
          percent++;
        }, 50);
      }
    });
    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-circle"
      }, [showProcess.value && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-circle-process"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": ["circle", {
          "clip-auto": clipAuto
        }]
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "percent left",
        "style": {
          transform: "rotate(" + (360 - 18 / 5 * Number(number.value)) + "deg)"
        }
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": ["percent right", {
          width0: width0
        }]
      }, null)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "num"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("span", null, [number.value]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("%")])]), !showProcess.value && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-circle-status"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle"
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "num"
      }, [numText.value])])]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cCircle/index.ts


cCircle.install = app => {
  app.component(cCircle.name, cCircle);
};

/* harmony default export */ var components_cCircle = (cCircle);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-87.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cConfirm/cConfirm.vue?vue&type=template&id=373568ff

const _hoisted_1 = {
  key: 0,
  class: "c-confirm-container"
};
const _hoisted_2 = {
  key: 0,
  class: "confirm-content"
};
const _hoisted_3 = {
  class: "confirm-inner"
};
const _hoisted_4 = {
  key: 0,
  class: "confirm-content-footer"
};
const _hoisted_5 = {
  key: 1
};
const _hoisted_6 = {
  key: 1,
  class: "confirm-content confirm-content2"
};
const _hoisted_7 = {
  class: "confirm-header"
};
const _hoisted_8 = {
  class: "confirm-content-body"
};
const _hoisted_9 = {
  key: 0,
  class: "confirm-content-footer2"
};
const _hoisted_10 = {
  key: 1
};
const _hoisted_11 = {
  key: 2,
  class: "confirm-content confirm-content3"
};
const _hoisted_12 = {
  class: "confirm-close"
};
const _hoisted_13 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.isShow ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_.Transition, {
    name: "confirm-fade"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "screen-fixed confirm-wrapper",
      onClick: _cache[5] || (_cache[5] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withModifiers)($event => $options.closeConfirm($event), ["prevent"]))
    }, [$props.type == 1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "confirm-content-body",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)($props.innerStyle)
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "inner")], 4), $props.showBtn ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_4, [$props.showCancelBtn ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
      key: 0,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.cancel && $options.cancel(...args)),
      class: "operate-btn left"
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.cancelText), 1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
      class: "operate-btn"
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.confirmText), 1)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), !$props.showBtn ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "btn")])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)])])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $props.type == 2 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_7, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "header")]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "confirm-inner",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)($props.innerStyle)
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_8, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "inner")]), $props.showBtn ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_9, [$props.showCancelBtn ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
      key: 0,
      onClick: _cache[2] || (_cache[2] = (...args) => $options.cancel && $options.cancel(...args)),
      class: "operate-btn left",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)($props.cancelBtnStyle)
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.cancelText), 5)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      onClick: _cache[3] || (_cache[3] = (...args) => $options.confirm && $options.confirm(...args)),
      class: "operate-btn right",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)($props.confirmBtnStyle)
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.confirmText), 5)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), !$props.showBtn ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_10, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "btn")])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 4)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $props.type == 3 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_11, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "confirm-inner",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)($props.innerStyle)
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "inner")], 4), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_12, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
      src: $data.closeImg,
      alt: "",
      onClick: _cache[4] || (_cache[4] = (...args) => $options.closeImgFn && $options.closeImgFn(...args))
    }, null, 8, _hoisted_13)])])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)])]),
    _: 3
  }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: "screen-fixed confirm-bg",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      backgroundColor: $props.bgColor
    })
  }, null, 4), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $props.showBg && $props.isShow]])])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true);
}
;// CONCATENATED MODULE: ./src/components/cConfirm/cConfirm.vue?vue&type=template&id=373568ff

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-87.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cConfirm/cConfirm.vue?vue&type=script&lang=js
/* harmony default export */ var cConfirmvue_type_script_lang_js = ({
  name: "cConfirm",
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    type: {
      type: Number,
      default: 1
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnStyle: {
      type: Object,
      default: function () {
        return {};
      }
    },
    confirmBtnStyle: {
      type: Object,
      default: function () {
        return {};
      }
    },
    innerStyle: {
      type: Object,
      default: function () {
        return {};
      }
    },
    showBg: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: "rgba(0,0,0,0.4)"
    }
  },

  data() {
    return {
      openConfirm: false,
      closeImg: __webpack_require__(594)
    };
  },

  created() {
    this.showConfirm = this.show;
    console.log(123456);
  },

  methods: {
    show() {
      this.openConfirm = true;
    },

    hide() {
      this.openConfirm = false;
    },

    cancel() {
      this.hide();
      this.$emit("cancel");
    },

    confirm() {
      this.hide();
      this.$emit("confirm");
    },

    closeConfirm(e) {
      if (e.target.children.length && e.target.children[0].getAttribute("class") && e.target.children[0].getAttribute("class").indexOf("confirm-content") > -1) {
        this.hide();
      }
    },

    closeImgFn() {
      this.hide();
    }

  }
});
;// CONCATENATED MODULE: ./src/components/cConfirm/cConfirm.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-69.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-69.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-69.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-69.use[3]!./node_modules/style-resources-loader/lib/index.js??clonedRuleSet-69.use[4]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cConfirm/cConfirm.vue?vue&type=style&index=0&id=373568ff&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/cConfirm/cConfirm.vue?vue&type=style&index=0&id=373568ff&lang=scss

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(118);
;// CONCATENATED MODULE: ./src/components/cConfirm/cConfirm.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(cConfirmvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var cConfirm = (__exports__);
;// CONCATENATED MODULE: ./src/components/cConfirm/index.ts


cConfirm.install = app => {
  app.component(cConfirm.name, cConfirm);
};

/* harmony default export */ var components_cConfirm = (cConfirm);
;// CONCATENATED MODULE: ./src/components/cHeaderBack/types.ts
const headerBackProps = () => ({
  title: {
    default: ""
  }
});


;// CONCATENATED MODULE: ./src/components/cHeaderBack/cHeaderBack.tsx


/** 导航条--返回
 * @author 夏小宅
 */



const cHeaderBack_props = headerBackProps();
/* harmony default export */ var cHeaderBack = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cHeaderBack",
  props: cHeaderBack_props,
  emits: ["onBack"],

  setup(props, ctx) {
    const handleClickBack = () => {
      ctx.emit("onBack");
    };

    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("header", {
        "class": "c-header-back"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("i", {
        "class": "icon_left",
        "onClick": handleClickBack
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "ellipsis"
      }, [props.title])]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cHeaderBack/index.ts


cHeaderBack.install = app => {
  app.component(cHeaderBack.name, cHeaderBack);
};

/* harmony default export */ var components_cHeaderBack = (cHeaderBack);
;// CONCATENATED MODULE: ./src/components/cInput/types.ts
const inputProps = () => ({
  disabled: Boolean,
  size: {
    type: String,
    default: "sm"
  },
  prepend: String,
  append: String,
  style: Object,
  modelValue: {
    type: String || Object,
    default: ""
  },
  onChange: {
    type: Function
  },
  onKeydown: {
    type: Function
  }
});


;// CONCATENATED MODULE: ./src/components/cInput/cInput.tsx




const cInput_props = inputProps();
/* harmony default export */ var cInput = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cInput",
  props: cInput_props,
  emits: ["update:modelValue", "change", "keydown"],

  setup(props, {
    emit,
    attrs
  }) {
    const classes = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      return {
        "c-input-wrapper": true,
        [`input-size-${props.size}`]: props.size,
        "is-disabled": props.disabled,
        "input-group": props.prepend || props.append,
        "input-group-append": !!props.append,
        "input-group-prepend": !!props.prepend
      };
    });

    const handleChange = e => {
      if (e.target.value !== props.modelValue) {
        emit("update:modelValue", e.target.value);
        emit("change", e.target.value);
      }
    };

    return () => {
      const {
        prepend,
        disabled,
        append,
        style,
        ...restProps
      } = props;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "style": style,
        "class": classes.value
      }, [prepend && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-input-group-prepend"
      }, [prepend]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("input", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)(restProps, attrs, {
        "value": props.modelValue,
        "onInput": handleChange,
        "class": "c-input-inner",
        "disabled": disabled
      }), null), append && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-input-group-append"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" "), append])]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cInput/index.ts


cInput.install = app => {
  app.component(cInput.name, cInput);
};

/* harmony default export */ var components_cInput = (cInput);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-87.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cInputPassword/cInputPassword.vue?vue&type=template&id=2efc7612

const cInputPasswordvue_type_template_id_2efc7612_hoisted_1 = ["value", "length", "placeholder"];
const cInputPasswordvue_type_template_id_2efc7612_hoisted_2 = ["value", "length", "placeholder"];
function cInputPasswordvue_type_template_id_2efc7612_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["c-input-password", {
      disabled: $props.disabled
    }])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.label), 1), $data.showPwd ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("input", {
    key: 0,
    type: "password",
    ref: "input",
    value: $props.value,
    onInput: _cache[0] || (_cache[0] = $event => $options._input()),
    onBlur: _cache[1] || (_cache[1] = $event => $options._blur()),
    length: $props.length,
    placeholder: $props.placeholder,
    autocapitalize: "off",
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)({
      disabled: $props.disabled
    })
  }, null, 42, cInputPasswordvue_type_template_id_2efc7612_hoisted_1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), !$data.showPwd ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("input", {
    key: 1,
    type: "text",
    ref: "input",
    value: $props.value,
    onInput: _cache[2] || (_cache[2] = $event => $options._input()),
    onBlur: _cache[3] || (_cache[3] = $event => $options._blur()),
    length: $props.length,
    placeholder: $props.placeholder,
    autocapitalize: "off",
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)({
      disabled: $props.disabled
    })
  }, null, 42, cInputPasswordvue_type_template_id_2efc7612_hoisted_2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $props.showToggle ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("em", {
    key: 2,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["input-pwd-eye", {
      invisible: $data.invisible
    }]),
    onClick: _cache[4] || (_cache[4] = (...args) => $options.toggle && $options.toggle(...args))
  }, null, 2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 2);
}
;// CONCATENATED MODULE: ./src/components/cInputPassword/cInputPassword.vue?vue&type=template&id=2efc7612

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-87.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cInputPassword/cInputPassword.vue?vue&type=script&lang=js
/* harmony default export */ var cInputPasswordvue_type_script_lang_js = ({
  name: "cInputPassword",
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      default: "",
      type: String
    },
    length: {
      default: 20,
      type: Number
    },
    placeholder: {
      default: "请输入密码",
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showToggle: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      showPwd: {
        type: Boolean,
        default: true
      },
      invisible: false
    };
  },

  methods: {
    _input() {
      this.$emit("onInput", this.$refs.input.value);
    },

    _blur() {
      this.$emit("onBlur", this.$refs.input.value);
    },

    focus() {
      this.$refs.input.focus();
    },

    val() {
      return this.$refs.input.value;
    },

    toggle() {
      const val = this.$refs.input.value;
      this.showPwd = !this.showPwd;
      this.invisible = !this.invisible;
      setTimeout(() => {
        this.$refs.input.value = val;
      }, 0);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/cInputPassword/cInputPassword.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/cInputPassword/cInputPassword.vue




;
const cInputPassword_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(cInputPasswordvue_type_script_lang_js, [['render',cInputPasswordvue_type_template_id_2efc7612_render]])

/* harmony default export */ var cInputPassword = (cInputPassword_exports_);
;// CONCATENATED MODULE: ./src/components/cInputPassword/index.ts


cInputPassword.install = app => {
  app.component(cInputPassword.name, cInputPassword);
};

/* harmony default export */ var components_cInputPassword = (cInputPassword);
;// CONCATENATED MODULE: ./src/components/cCheckBox/types.ts
const checkBoxProps = () => ({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  halfChecked: {
    type: Boolean,
    default: false
  },
  onChange: Function
});


;// CONCATENATED MODULE: ./src/components/cCheckBox/cCheckBox.tsx




const cCheckBox_props = checkBoxProps();
/* harmony default export */ var cCheckBox = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cCheckbox",
  props: cCheckBox_props,
  emits: ["update:modelValue", "onChange"],

  setup(props, {
    emit,
    slots
  }) {
    const rootCls = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      let result = "c-checkbox";

      if (props.modelValue) {
        result += " checked";
      } else if (props.halfChecked) {
        result += " half-checked";
      }

      if (props.disabled) {
        result += " disabled";
      }

      return result;
    });

    const handleClick = event => {
      event.stopPropagation();

      if (!props.disabled) {
        emit("update:modelValue", !props.modelValue);
        emit("onChange", !props.modelValue);
      }
    };

    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": rootCls.value,
        "onClick": handleClick
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "inner"
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "content"
      }, [slots.default && slots.default()])]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cCheckBox/index.ts


cCheckBox.install = app => {
  app.component(cCheckBox.name, cCheckBox);
};

/* harmony default export */ var components_cCheckBox = (cCheckBox);
;// CONCATENATED MODULE: ./src/components/cItem/types.ts
const itemProps = () => ({
  avatar: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  rightText: {
    type: String,
    default: ""
  },
  rightArrow: {
    type: Boolean,
    default: true
  }
});


;// CONCATENATED MODULE: ./src/components/cItem/cItem.tsx


/** item组件
 * @author 夏小宅
 */



const cItem_props = itemProps();
/* harmony default export */ var cItem = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cItem",
  props: cItem_props,
  emits: ["onClick"],

  setup(props, ctx) {
    const onClickFn = () => {
      ctx.emit("onClick");
    };

    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-cell-item",
        "onClick": onClickFn
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "cell-left"
      }, [props.avatar && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("img", {
        "src": props.avatar,
        "class": "cell-left-icon"
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "cell-left-info"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "cell-left-title"
      }, [props.title]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "cell-left-desc"
      }, [props.description]), [[(0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDirective)("if"), "description"]])])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "cell-right"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("span", {
        "class": "right-text"
      }, [props.rightText]), props.rightArrow && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("em", {
        "class": "icon"
      }, null)])]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cItem/index.ts


cItem.install = app => {
  app.component(cItem.name, cItem);
};

/* harmony default export */ var components_cItem = (cItem);
;// CONCATENATED MODULE: ./src/components/cLoading/types.ts
const loadingProps = () => ({
  color: {
    type: String,
    default: "#6284e2"
  },
  styleLoading: {
    type: Object,

    default() {
      return {};
    }

  }
});


;// CONCATENATED MODULE: ./src/components/cLoading/cLoading.tsx


/** 导航条--返回
 * @author 夏小宅
 */



const cLoading_props = loadingProps();
/* harmony default export */ var cLoading = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cHeaderBack",
  props: cLoading_props,

  setup(props, ctx) {
    const colorStyle = {
      backgroundColor: props.color
    };
    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-loading",
        "style": props.styleLoading
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "loading-container container1"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle1",
        "style": colorStyle
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle2",
        "style": colorStyle
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle3",
        "style": colorStyle
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle4",
        "style": colorStyle
      }, null)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "loading-container container2"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle1",
        "style": colorStyle
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle2",
        "style": colorStyle
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle3",
        "style": colorStyle
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle4",
        "style": colorStyle
      }, null)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "loading-container container3"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle1",
        "style": colorStyle
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle2",
        "style": colorStyle
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle3",
        "style": colorStyle
      }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "circle4",
        "style": colorStyle
      }, null)])]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cLoading/index.ts


cLoading.install = app => {
  app.component(cLoading.name, cLoading);
};

/* harmony default export */ var components_cLoading = (cLoading);
;// CONCATENATED MODULE: ./src/components/cSlide/types.ts
const types_loadingProps = () => ({
  color: {
    type: String,
    default: "#6284e2"
  },
  styleLoading: {
    type: Object,

    default() {
      return {};
    }

  }
});


;// CONCATENATED MODULE: ./src/components/cSlide/cSlide.tsx


/** 侧滑组件
 * @author 夏小宅
 */



const cSlide_props = types_loadingProps();
/* harmony default export */ var cSlide = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cHeaderBack",
  props: cSlide_props,
  emits: ["onBgClick"],

  setup(props, ctx) {
    const slideShow = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);

    const hide = e => {
      e.stopPropagation();
      ctx.emit("onBgClick");
    };

    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("section", {
        "class": "c-slide-container"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("transition"), {
        "name": "slide-fade"
      }, {
        default: () => [slideShow.value && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
          "class": "slide-inner"
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("slot", null, null)])]
      }), slideShow.value && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "slide-bg",
        "onClick": hide
      }, null)]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cSlide/index.ts


cSlide.install = app => {
  app.component(cSlide.name, cSlide);
};

/* harmony default export */ var components_cSlide = (cSlide);
;// CONCATENATED MODULE: ./src/components/cFormItem/types.ts
const FormItemKey = "formItemkey";
const FormKey = "formKey";

;// CONCATENATED MODULE: ./src/components/cForm/cForm.tsx



/* harmony default export */ var cForm = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cForm",
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },

  setup(props, {
    emit,
    slots
  }) {
    const formItems = [];

    const addItem = item => {
      formItems.push(item);
    };

    const removeItem = id => {
      if (formItems.length) {
        const index = formItems.findIndex(item => item.id == id);

        if (index > -1) {
          formItems.splice(index, 1);
        }
      }
    };

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(FormKey, {
      model: props.model,
      rules: props.rules,
      addItem,
      removeItem
    });

    const validate = callback => {
      const res = formItems.filter(item => item.prop).every(item => {
        return item.validate(props.model[item.prop]);
      });

      if (callback) {
        callback(res);
      }

      return true;
    };

    const instance = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.getCurrentInstance)();
    Object.assign(instance?.proxy, {
      validate
    });
    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-form"
      }, [slots.default()]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cForm/index.ts


cForm.install = app => {
  app.component(cForm.name, cForm);
};

/* harmony default export */ var components_cForm = (cForm);
;// CONCATENATED MODULE: ./src/components/cFormItem/cFormItem.tsx




let id = 0;

function generateId() {
  return "form-item-" + id++;
}

/* harmony default export */ var cFormItem = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "FormItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    },
    rules: {
      type: [Object, Array]
    }
  },

  setup(props, {
    emit,
    slots
  }) {
    const errMsg = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("");
    const currentId = generateId();
    const parent = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(FormKey);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      parent?.addItem({
        id: currentId,
        prop: props.prop,
        validate
      });
    }); // console.log(parent);

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeUnmount)(() => {
      parent?.removeItem(currentId);
    }); // form表单可以接受规则，formitem也可以，所以需判断获取谁的规则

    const getRules = trigger => {
      const rules = props.rules || parent?.rules[props.prop];

      if (rules) {
        const ruleArr = Array.isArray(rules) ? rules : [rules];

        if (trigger) {
          const validateRules = ruleArr.filter(rule => rule.trigger === trigger);
          return validateRules;
        }

        return ruleArr;
      }

      return [];
    };

    const validate = (value, rules) => {
      // console.log(rules);
      const resRules = rules || getRules();
      resRules.forEach(rule => {
        rule.validateFunc.validate(value).then(valid => {
          return true;
        }).catch(err => {
          errMsg.value = err.errors;
          return false;
        });
      });
      return true;
    };

    const handleInputChange = value => {
      const inputRules = getRules("input");
      validate(value, inputRules);
    };

    const handleInputBlur = value => {
      const blurRules = getRules("blur");
      validate(value, blurRules);
    };

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(FormItemKey, {
      handleInputChange,
      handleInputBlur
    });

    const renderLabel = () => {
      return slots.label ? slots.label() : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("label", {
        "class": "item-label"
      }, [props.label]);
    };

    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-form-item"
      }, [renderLabel(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "item-content"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "item-control-wrap"
      }, [slots.default()]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("p", {
        "class": "item-error"
      }, [errMsg.value]), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, errMsg]])])]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cFormItem/index.ts


cFormItem.install = app => {
  app.component(cFormItem.name, cFormItem);
};

/* harmony default export */ var components_cFormItem = (cFormItem);
;// CONCATENATED MODULE: ./src/components/cMenu/types.ts
const MenuKey = "menuKey";

const MenuProps = () => ({
  defaultIndex: {
    type: String,
    default: "0"
  },
  mode: {
    type: String,
    default: "horizontal"
  },
  onSelect: Function
});

const MenuItemProps = () => ({
  index: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const SubMenuProps = () => ({
  index: String,
  title: String
});


;// CONCATENATED MODULE: ./src/components/cMenu/cMenu.tsx





const cMenu_props = MenuProps();
/* harmony default export */ var cMenu = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cMenu",
  props: cMenu_props,

  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const currentActive = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.defaultIndex);

    const handleClick = index => {
      currentActive.value = index;

      if (props.onSelect) {
        props.onSelect(index);
      }
    };

    const passedContext = {
      index: currentActive.value,
      onSelect: handleClick,
      mode: props.mode
    };
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(MenuKey, passedContext);

    const renderChildren = () => {
      return slots.default().map((item, index) => {
        if (item.type.name === "MenuItem" || item.type.name === "SubMenu") {
          // 拷贝一个节点
          return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.cloneVNode)(item, {
            index: index.toString()
          });
        } else {
          console.error("Warning:Menu's child must be MenuItem or SubMenu");
        }
      });
    };

    return () => {
      const {
        mode,
        defaultIndex,
        onSelect
      } = props;
      const classes = classnames_default()("c-menu", {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical"
      });
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("ul", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)(attrs, {
        "class": classes
      }), [renderChildren()]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cMenu/index.ts


cMenu.install = app => {
  app.component(cMenu.name, cMenu);
};

/* harmony default export */ var components_cMenu = (cMenu);
;// CONCATENATED MODULE: ./src/components/cMenu/menuItem.tsx




const menuItem_props = MenuItemProps();
const MenuItem = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cMenuItem",
  props: menuItem_props,

  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const parentContext = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(MenuKey);
    return () => {
      const {
        index,
        disabled
      } = props;

      const handleClick = () => {
        if (parentContext?.onSelect && !disabled) {
          parentContext.onSelect(index);
        }
      };

      const classes = classnames_default()("menu-item", {
        "is-disabled": disabled,
        "is-active": parentContext?.index == index
      });
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("li", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)(attrs, {
        "class": classes,
        "onClick": handleClick
      }), [slots.default()]);
    };
  }

});
MenuItem.playName = "cMenuItem";
/* harmony default export */ var menuItem = (MenuItem);
;// CONCATENATED MODULE: ./src/components/cMenuItem/index.ts


menuItem.install = app => {
  app.component(menuItem.name, menuItem);
};

/* harmony default export */ var cMenuItem = (menuItem);
;// CONCATENATED MODULE: ./src/components/cMenu/subMenu.tsx




const subMenu_props = SubMenuProps();
/* harmony default export */ var subMenu = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cSubMenu",
  props: subMenu_props,

  setup(props, {
    emit,
    attrs,
    slots
  }) {
    const parentCtx = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(MenuKey);
    const menuOpen = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    const subClass = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      "c-submenu": true,
      "menu-opened": parentCtx?.mode !== "vertical" ? menuOpen.value : !menuOpen.value
    });

    const handleClick = e => {
      e.preventDefault(); // menuOpen.value = !menuOpen.value;

      subClass["menu-opened"] = !subClass["menu-opened"];
    };

    let timer;

    const handleMouse = (e, toggle) => {
      console.log("handleMouse", toggle);
      clearTimeout(timer);
      e.preventDefault();
      timer = setTimeout(() => {
        subClass["menu-opened"] = toggle;
      }, 100);
    };

    console.log(parentCtx?.mode !== "vertical");
    const clickEvents = parentCtx?.mode === "vertical" ? {
      onClick: handleClick
    } : {};
    const hoverEvents = parentCtx?.mode !== "vertical" ? {
      onMouseenter: e => {
        handleMouse(e, true);
      },
      onMouseleave: e => {
        handleMouse(e, false);
      }
    } : {};
    return () => {
      const renderChildren = () => {
        const items = slots.default().map((item, index) => {
          if (item.type.name === "MenuItem") {
            return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.cloneVNode)(item, {
              index: `${props.index}-${index.toString()}`
            });
          } else {
            console.error("must be a MenuItem");
          }
        });
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("ul", {
          "class": subClass
        }, [items]);
      };

      const {
        index,
        title
      } = props;
      const classes = classnames_default()("menu-item submenu-item", {
        "is-active": parentCtx.index === index
      });
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("li", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)(attrs, {
        "key": index,
        "class": classes
      }, hoverEvents), [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        "class": "submenu-title"
      }, clickEvents, {
        "onClick": handleClick
      }), [title]), renderChildren()]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cSubMenu/index.ts


subMenu.install = app => {
  app.component(subMenu.name, subMenu);
};

/* harmony default export */ var cSubMenu = (subMenu);
;// CONCATENATED MODULE: ./src/components/cTabs/types.ts
const tabPaneProps = () => ({
  name: String
});

const tabsProps = () => ({
  modelValue: {
    type: String,
    default: ""
  }
});


;// CONCATENATED MODULE: ./src/components/cTabs/tabs.tsx




const tabs_props = tabsProps();
/* harmony default export */ var tabs = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cTabs",
  props: tabs_props,
  emits: ["update:modelValue"],

  setup(props, {
    emit,
    slots
  }) {
    const currentTabName = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.modelValue);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.modelValue, newVal => {
      currentTabName.value = newVal;
    });

    const clickTab = tabName => {
      if (currentTabName.value !== tabName) {
        emit("update:modelValue", tabName);
      }
    };

    const renderNavs = () => {
      return slots.default().map((pane, index) => {
        const extraCls = pane.props.name === currentTabName.value ? "active" : "";
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
          "class": "c-tab-pane " + extraCls,
          "onClick": clickTab.bind(null, pane.props.name)
        }, [pane.children.title ? pane.children.title() : pane.props.name]);
      });
    };

    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-tabs"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "navs"
      }, [renderNavs()]), slots.default()]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cTabs/index.ts


tabs.install = app => {
  app.component(tabs.name, tabs);
};

/* harmony default export */ var cTabs = (tabs);
;// CONCATENATED MODULE: ./src/components/cTabs/tabPane.tsx



const tabPane_props = tabPaneProps();
/* harmony default export */ var tabPane = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cTabPane",
  props: tabPane_props,

  setup(props, {
    emit,
    slots
  }) {
    const parentNode = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.getCurrentInstance)()?.parent;
    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "pane"
      }, [slots.default()]), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, parentNode?.props.modelValue === props.name]]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cTabPane/index.ts


tabPane.install = app => {
  app.component(tabPane.name, tabPane);
};

/* harmony default export */ var cTabPane = (tabPane);
;// CONCATENATED MODULE: ./src/components/cAutoComplete/type.ts


const AutoCompleteProps = () => ({ ...inputProps(),
  fetchSuggestions: {
    type: Function,
    required: true
  },
  onSelect: Function,
  renderOption: Function
});


;// CONCATENATED MODULE: ./src/hooks/useClickOutside.tsx

function useClickOutside(ref, handler) {
  const listener = event => {
    if (!ref.value || ref.value.contains(event.target)) {
      return;
    }

    handler();
  };

  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
    document.addEventListener("click", listener);
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
    document.removeEventListener("click", listener);
  });
}
;// CONCATENATED MODULE: ./src/components/cAutoComplete/cAutoComplete.tsx








const cAutoComplete_props = AutoCompleteProps();
/* harmony default export */ var cAutoComplete = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "AutoComplete",
  props: cAutoComplete_props,
  components: {
    cInput: cInput
  },
  emits: ["update:modelValue"],

  setup(props, {
    emit,
    attrs
  }) {
    const suggestions = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);
    const isLoading = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    const inputModelValue = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.modelValue);
    const highlightIndex = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(-1);
    const componentRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const triggerSearch = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(true);
    useClickOutside(componentRef, () => {
      suggestions.value = [];
    });

    const debounced = (fn, delay = 500) => {
      let timer = null;
      return (...args) => {
        if (timer) {
          clearInterval(timer);
        }

        timer = setTimeout(() => {
          fn.apply(this, args);
          timer = null;
        }, delay);
      };
    };

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.modelValue, debounced(newValue => {
      if (triggerSearch.value) {
        console.log(triggerSearch.value);
        const res = props.fetchSuggestions(newValue);

        if (res instanceof Promise) {
          isLoading.value = true;
          res.then(data => {
            isLoading.value = false;
            suggestions.value = data;
          });
        } else {
          suggestions.value = res;
        }

        highlightIndex.value = -1;
      }
    }), {
      immediate: true
    });

    const handleChange = value => {
      triggerSearch.value = true;

      if (value !== props.modelValue) {
        emit("update:modelValue", value);
      }
    };

    const handleSelect = item => {
      triggerSearch.value = false;
      inputModelValue.value = item.value;
      suggestions.value = [];

      if (props.onSelect) {
        props.onSelect(item);
      }
    };

    const renderTemplate = item => {
      return props.renderOption ? props.renderOption(item) : item.value;
    };

    const generateDropdown = () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("ul", {
        "class": "c-suggestion-list"
      }, [suggestions.value.map((item, index) => {
        const cnames = classnames_default()("suggestion-item", {
          "is-active": index === highlightIndex.value
        });
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("li", {
          "key": index,
          "class": cnames,
          "onClick": handleSelect.bind(null, item)
        }, [renderTemplate(item)]);
      })]);
    };

    const highlight = index => {
      if (index < 0) index = 0;

      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1;
      }

      highlightIndex.value = index;
    };

    const handleKeyDown = e => {
      console.log(e.keyCode);

      switch (e.keyCode) {
        case 13:
          if (suggestions.value[highlightIndex.value]) {
            handleSelect(suggestions.value[highlightIndex.value]);
          }

          break;

        case 38:
          highlight(highlightIndex.value - 1);
          break;

        case 40:
          highlight(highlightIndex.value + 1);
          break;

        case 27:
          suggestions.value = [];
          break;

        default:
          break;
      }
    };

    return () => {
      const {
        onSelect,
        modelValue,
        style
      } = props;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-auto-complete",
        "style": style,
        "ref": componentRef
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("c-Input"), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)(attrs, {
        "modelValue": inputModelValue.value,
        "onChange": handleChange,
        "onKeydown": handleKeyDown
      }), null), isLoading.value && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("ul", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("span", {
        "class": "iconfont icon-loading spinner"
      }, null)]), suggestions.value.length > 0 && generateDropdown()]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cTree/types.ts
const TreeProps = () => ({
  source: {
    type: Array,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  checkStrictly: {
    type: Boolean,
    default: false
  },
  render: Function,
  lazyLoad: Function
});

const TreeNodePorps = () => ({
  node: {
    type: Object,
    required: true
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  checkStrictly: {
    type: Boolean,
    default: false
  },
  onCheckChange: Function,
  iconSlot: Function,
  render: Function,
  onSelectChange: Function,
  onToggleExpand: Function
});

const renderNodeProps = () => ({
  node: {
    type: Object,
    required: true
  },
  render: {
    type: Function,
    required: true
  }
});


;// CONCATENATED MODULE: ./src/components/cTree/render.tsx


const render_props = renderNodeProps();
/* harmony default export */ var cTree_render = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "RenderNode",
  props: render_props,

  setup(props, {
    emit
  }) {
    return () => {
      return props.render(props.node);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cTree/node.tsx







function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,external_commonjs_vue_commonjs2_vue_root_Vue_.isVNode)(s);
}

const node_props = TreeNodePorps();
/* harmony default export */ var cTree_node = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "TreeNode",
  props: node_props,
  emits: ["toggle-expand", "select-change", "check-change"],
  components: {
    cCheckbox: cCheckBox
  },

  setup(props, {
    emit,
    expose
  }) {
    const halfChecked = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      let res = false;

      if (!props.checkStrictly && props.node?.hasChildren) {
        console.log("props:", props.checkStrictly, props.node?.hasChildren);
        const {
          children
        } = props.node;
        const checkedChildren = children.filter(item => item.checked);
        res = checkedChildren.length > 0 && checkedChildren.length < children.length;
      }

      return res;
    });
    expose({
      node: props.node,
      // halfchecked变量 只有给方法才是响应式的
      halfChecked: () => halfChecked.value
    });
    return () => {
      const {
        node,
        render,
        iconSlot,
        showCheckbox
      } = props;

      const handleCheckChange = checked => {
        emit("check-change", [checked, props.node]);
      };

      const handleExpand = () => {
        emit("toggle-expand", props.node);
      };

      const renderArrow = () => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
          "class": ["node-arrow", props.node?.expanded ? "expanded" : ""]
        }, [node.hasChildren ? iconSlot ? iconSlot(node?.loading) : node?.loading ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("i", {
          "class": "iconfont iconloading ico-loading"
        }, null) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("i", {
          "class": "iconfont iconExpand"
        }, null) : null]);
      };

      const titleClasses = classnames_default()("node-title", {
        disabled: node?.disabled,
        selected: node?.selected && !showCheckbox
      });

      const handleSelect = e => {
        e.stopPropagation(); //组织展开事件触发

        e.preventDefault();

        if (!node?.disabled) {
          emit("select-change", props.node);
        }
      };

      const sameContent = () => {
        return render ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(cTree_render, {
          "render": render,
          "node": node
        }, null) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
          "class": titleClasses
        }, [node.name]);
      };

      const renderContent = () => {
        if (showCheckbox) {
          let _slot;

          return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("c-Checkbox"), {
            "disabled": node?.disabled,
            "modelValue": node?.checked,
            "halfChecked": halfChecked.value,
            "onChange": handleCheckChange,
            "class": "node-content node-checkbox"
          }, _isSlot(_slot = sameContent()) ? _slot : {
            default: () => [_slot]
          });
        }

        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
          "onClick": handleSelect,
          "class": "node-content node-text"
        }, [sameContent()]);
      };

      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-tree-node",
        "style": {
          paddingLeft: node.level * 18 + "px"
        },
        "key": node.nodeKey,
        "onClick": handleExpand
      }, [renderArrow(), renderContent()]);
    };
  }

}));
// EXTERNAL MODULE: ./node_modules/project-libs/build/data/deepClone.js
var deepClone = __webpack_require__(256);
;// CONCATENATED MODULE: ./src/components/cTree/utlils.ts
// 向下递归更新节点的勾选状态
function updateDownWards(checked, node) {
  const update = children => {
    if (children.length) {
      children.forEach(child => {
        child.checked = checked;

        if (child.children.length) {
          update(child.children);
        }
      });
    }
  };

  update(node.children);
}
function updateUpwards(node, flatList) {
  const update = currentNode => {
    if (currentNode.parentKey) {
      const parentNode = flatList.find(item => item.nodeKey === currentNode.parentKey);

      if (parentNode) {
        // 看是否全部被勾选
        const parentChecked = !parentNode.children.some(child => !child.checked);

        if (parentChecked !== parentNode.checked) {
          parentNode.checked = parentChecked;
          update(parentNode);
        }
      }
    }
  };

  update(node);
}
;// CONCATENATED MODULE: ./src/components/cTree/cTree.tsx




 // import { cloneDeep } from "lodash";



const cTree_props = TreeProps();
/* harmony default export */ var cTree = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "cTree",
  props: cTree_props,
  components: {
    TreeNode: cTree_node
  },
  emits: ["select-change", "check-change"],

  setup(props, {
    emit,
    slots,
    expose
  }) {
    const flatList = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]); // 泛型推导优先

    const loading = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    const selectKey = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("");

    function falttenTree(source) {
      const res = [];

      const recursion = (list, level = 0, parent = null) => {
        return list.map(item => {
          const node = { ...item,
            level,
            loading: false,
            disabled: item.disabled || false,
            expanded: item.expanded || false,
            selected: item.selected || false,
            checked: item.checked || parent?.checked || false,
            hasChildren: item.hasChildren || false,
            parentKey: parent?.nodeKey || null,
            children: item.children || []
          };

          if (node.selected) {
            selectKey.value = node.nodeKey;
          }

          res.push(node);

          if (node.children.length && item.expanded) {
            // 要展开是才渲染 所以需要判断展开
            node.children = recursion(node.children, level + 1, node);
          }

          return node;
        });
      };

      if (source.length) {
        recursion(source);
      }

      return res;
    }

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.source, newVal => {
      flatList.value = falttenTree(newVal);
    }, {
      immediate: true
    });

    const expandNode = (node, children) => {
      // 深拷贝
      const trueChildren = children?.length ? children : (0,deepClone/* default */.Z)(node.children);
      node.children = trueChildren.map(item => {
        return { ...item,
          level: item.level || node.level + 1,
          loading: false,
          disabled: item.disabled || false,
          expanded: item.expanded || false,
          selected: item.selected || false,
          // false也是和法治  不能用  ?? 更严格的或  只有前面是null和undefined才会走到后面去
          checked: item.checked || false,
          hasChildren: item.hasChildren || false,
          parentKey: node.nodeKey || null,
          children: item.children || []
        };
      });
      const targetIndex = flatList.value.findIndex(item => item.nodeKey === node.nodeKey);

      if (targetIndex > -1) {
        flatList.value.splice(targetIndex + 1, 0, ...node.children);
        console.log("flatList:", flatList.value);
      }
    }; // 收起


    const collapseNode = node => {
      const delKeys = [];

      const recursion = currentNode => {
        if (currentNode.children.length) {
          currentNode.children.forEach(item => {
            delKeys.push(item.nodeKey);

            if (item.expanded) {
              // 需要收起
              item.expanded = false;
              recursion(item);
            }
          });
        }
      };

      recursion(node);

      if (delKeys.length) {
        flatList.value = flatList.value.filter(item => !delKeys.includes(item.nodeKey));
      }
    };

    expose({
      getSelectedNode: () => {
        return flatList.value.find(item => item.selected);
      },
      getCheckedNodes: () => {
        return flatList.value.filter(item => item.checked);
      },
      getHalfCheckedNodes: () => {
        return nodeRefs.value.filter(item => item.halfChecked()).map(item => item.node);
      }
    }); // 获取for循环下面的ref节点

    const nodeRefs = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);

    const setNodesRef = (index, node) => {
      if (node) {
        nodeRefs.value[index] = node; // console.log('nodesRef:', nodeRefs.value);
      }
    };

    const handleToggleExpand = node => {
      if (loading.value) return;
      node.expanded = !node.expanded;

      if (node.expanded) {
        // 展开此node下面的children  首次展开是 用户可能自带children
        if (node.children.length) {
          expandNode(node);
        } else {
          // 懒加 载
          if (props.lazyLoad && node.hasChildren) {
            node.loading = true; // 控制图标

            loading.value = true; //防止重复

            props.lazyLoad(node, children => {
              console.log("懒加载后的children:", children);

              if (children.length) {
                expandNode(node, children);
              }

              node.loading = false; // 控制图标

              loading.value = false; //防止重复
            });
          } else {
            node.expanded = !node.expanded;
            console.error("没有children且懒加载数据也没有");
          }
        }
      } else {
        // 收起
        collapseNode(node);
      }
    };

    const handleSelectChange = node => {
      node.selected = !node.selected; // 选中逻辑

      if (selectKey.value === node.nodeKey) {
        selectKey.value = "";
      } else {
        const preSelectedIndex = flatList.value.findIndex(item => item.nodeKey === selectKey.value);

        if (preSelectedIndex > -1) {
          flatList.value[preSelectedIndex].selected = false;
        }

        selectKey.value = node.nodeKey;
      }

      emit("select-change", node);
    };

    const handleCheckChange = ([checked, node]) => {
      node.checked = checked;
      console.log("checkStrick", props.checkStrictly);

      if (!props.checkStrictly) {
        // 向下更新子节点勾选
        updateDownWards(checked, node); // 向上更新父节点半选

        updateUpwards(node, flatList.value);
      }

      emit("check-change", node);
    };

    const renderChildren = () => {
      return flatList.value.map((node, index) => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(cTree_node, {
          "key": node.nodeKey,
          "node": node,
          "onToggleExpand": handleToggleExpand,
          "onSelectChange": handleSelectChange,
          "render": props.render,
          "iconSlot": slots.icon,
          "showCheckbox": props.showCheckbox,
          "onCheckChange": handleCheckChange,
          "checkStrictly": props.checkStrictly,
          "ref": setNodesRef.bind(null, index)
        }, null);
      });
    };

    return () => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-tree-wrap"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
        "class": "c-tree"
      }, [renderChildren()])]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/cTree/index.ts


cTree.install = app => {
  app.component(cTree.name, cTree);
};

/* harmony default export */ var components_cTree = (cTree);
;// CONCATENATED MODULE: ./src/components/index.ts





















const components = [components_cBar, components_cButton, components_cButtonFooter, components_cCircle, components_cConfirm, components_cHeaderBack, components_cInput, components_cInputPassword, components_cCheckBox, components_cItem, components_cLoading, components_cSlide, components_cForm, components_cFormItem, components_cMenu, cMenuItem, cSubMenu, cTabs, cTabPane, cAutoComplete, components_cTree];

/* harmony default export */ function src_components(app) {
  components.forEach(item => {
    app.component(item.name, item);
  });
}
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_components);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.umd.js.map