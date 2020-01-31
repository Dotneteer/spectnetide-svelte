/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/renderer/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/global.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/global.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\r\n\tbox-sizing: border-box;\r\n  }\r\n  \r\n  html,\r\n  body {\r\n\tfont-family: -apple-system, BlinkMacSystemFont, Segoe WPC, Segoe UI,\r\n\t  HelveticaNeue-Light, Ubuntu, Droid Sans, sans-serif;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\theight: 100%;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbackground-color: var(--shell-canvas-background-color);\r\n  \r\n\tmin-width: 100px;\r\n\tmin-height: 300px;\r\n  }\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/App.svelte.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/App.svelte.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "main.svelte-rtr3k2{margin:0;padding:0;display:flex;flex-direction:column;height:100%;flex-shrink:0;user-select:none;background-color:var(--shell-canvas-background-color)}.main-panel.svelte-rtr3k2{display:flex;flex-direction:row;flex-grow:1;flex-shrink:1;height:100%;width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/ActivityBar.svelte.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/ActivityBar.svelte.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "aside.svelte-93y0f{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;height:100%;width:48px;background-color:var(--activity-bar-background-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/AppCaption.svelte.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/AppCaption.svelte.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.svelte-8budp8{display:flex;flex-grow:1;flex-shrink:1;justify-content:center;font-size:0.8em}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MainCanvas.svelte.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MainCanvas.svelte.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.svelte-xh9mt6{display:block;height:100%;width:100%;overflow-x:hidden;z-index:10}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuBar.svelte.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuBar.svelte.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.svelte-zf9mpb{display:flex;flex-grow:0;height:100%;-webkit-app-region:no-drag}div.svelte-zf9mpb:focus{outline:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuButton.svelte.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuButton.svelte.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.svelte-127wor7{display:flex;height:100%;align-items:center;padding:2px 8px;border:1px solid transparent}div.pointed.svelte-127wor7{background-color:var(--menu-active-background-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuItem.svelte.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuItem.svelte.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".menu-item.svelte-cf01s4.svelte-cf01s4{display:flex;align-items:center;flex-grow:1;height:100%;width:100%;min-width:0;padding:2px 24px 2px 6px;color:var(--menu-text-color)}.menu-item.selected.svelte-cf01s4.svelte-cf01s4{background:var(--menu-selected-background)}.menu-item.disabled.svelte-cf01s4.svelte-cf01s4{opacity:0.3}.menu-item.svelte-cf01s4 .label.svelte-cf01s4{flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.menu-item.submenu.svelte-cf01s4.svelte-cf01s4{padding-right:8px}.icon-placeholder.svelte-cf01s4.svelte-cf01s4{width:18px}.separator.svelte-cf01s4.svelte-cf01s4{border:none;height:1px;border-bottom:1px solid #ffffff;margin:4px 10px;opacity:0.3}.accelerator.svelte-cf01s4.svelte-cf01s4{display:flex;flex-shrink:0;flex-grow:1;justify-content:flex-end;margin-left:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuPane.svelte.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuPane.svelte.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".menu-pane.svelte-go6z9r{position:absolute;left:100px;top:50px;background-color:var(--menu-pane-background-color);box-shadow:var(--menu-pane-shadow);display:flex;flex-direction:column;padding:8px 0px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuText.svelte.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuText.svelte.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.svelte-1usy3t1.svelte-1usy3t1{font-size:0}div.svelte-1usy3t1 span.svelte-1usy3t1{font-size:14px}div.svelte-1usy3t1 .access-key.highlight.svelte-1usy3t1{text-decoration:underline}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/SideBar.svelte.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/SideBar.svelte.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "aside.svelte-l8zike{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;height:100%;width:192px;background-color:var(--sidebar-background-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/Statusbar.svelte.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/Statusbar.svelte.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.svelte-15fw261.svelte-15fw261{display:flex;flex-shrink:0;width:100%;color:white;align-content:start;justify-items:start;padding:8px 12px;background-color:var(--status-bar-background-color)}div.svelte-15fw261 h3.svelte-15fw261{flex-shrink:0;margin:-4px 0 0 0;font-size:0.8em;color:var(--status-bar-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/Titlebar.svelte.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/components/Titlebar.svelte.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component.svelte-nhh3r9{display:flex;flex-shrink:0;height:30px;color:white;box-sizing:border-box;align-items:center;justify-content:start;font-size:0.9em;-webkit-app-region:drag}.logo.svelte-nhh3r9{display:flex;align-items:center;justify-content:center;width:30px;height:30px;margin:0px 8px}.title-buttons.svelte-nhh3r9{display:flex;flex-grow:0;flex-shrink:0;height:100%;-webkit-app-region:no-drag}.window-control.svelte-nhh3r9{display:flex;width:45px;align-items:center;justify-content:center}.window-control.svelte-nhh3r9:hover{background-color:var(--menu-active-background-color)}.window-control:hover.close.svelte-nhh3r9{background-color:#d71526}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/controls/SvgIcon.svelte.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/controls/SvgIcon.svelte.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "svg.svelte-jt1837{display:flex}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/*! exports provided: SvelteComponent, afterUpdate, beforeUpdate, createEventDispatcher, getContext, onDestroy, onMount, setContext, tick */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["afterUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["beforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["createEventDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onDestroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["tick"]; });




/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/*! exports provided: HtmlTag, SvelteComponent, SvelteComponentDev, SvelteElement, action_destroyer, add_attribute, add_classes, add_flush_callback, add_location, add_render_callback, add_resize_listener, add_transform, afterUpdate, append, append_dev, assign, attr, attr_dev, beforeUpdate, bind, binding_callbacks, blank_object, bubble, check_outros, children, claim_component, claim_element, claim_space, claim_text, clear_loops, component_subscribe, createEventDispatcher, create_animation, create_bidirectional_transition, create_component, create_in_transition, create_out_transition, create_slot, create_ssr_component, current_component, custom_event, dataset_dev, debug, destroy_block, destroy_component, destroy_each, detach, detach_after_dev, detach_before_dev, detach_between_dev, detach_dev, dirty_components, dispatch_dev, each, element, element_is, empty, escape, escaped, exclude_internal_props, fix_and_destroy_block, fix_and_outro_and_destroy_block, fix_position, flush, getContext, get_binding_group_value, get_current_component, get_slot_changes, get_slot_context, get_spread_object, get_spread_update, get_store_value, globals, group_outros, handle_promise, has_prop, identity, init, insert, insert_dev, intros, invalid_attribute_name_character, is_client, is_function, is_promise, listen, listen_dev, loop, loop_guard, measure, missing_component, mount_component, noop, not_equal, now, null_to_empty, object_without_properties, onDestroy, onMount, once, outro_and_destroy_block, prevent_default, prop_dev, query_selector_all, raf, run, run_all, safe_not_equal, schedule_update, select_multiple_value, select_option, select_options, select_value, self, setContext, set_attributes, set_current_component, set_custom_element_data, set_data, set_data_dev, set_input_type, set_input_value, set_now, set_raf, set_store_value, set_style, set_svg_attributes, space, spread, stop_propagation, subscribe, svg_element, text, tick, time_ranges_to_array, to_number, toggle_class, transition_in, transition_out, update_keyed_each, validate_component, validate_store, xlink_attr */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return HtmlTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action_destroyer", function() { return action_destroyer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_attribute", function() { return add_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_classes", function() { return add_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_transform", function() { return add_transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_dev", function() { return append_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr_dev", function() { return attr_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_component", function() { return claim_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_space", function() { return claim_space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component_subscribe", function() { return component_subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_component", function() { return create_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset_dev", function() { return dataset_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_after_dev", function() { return detach_after_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_before_dev", function() { return detach_before_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_between_dev", function() { return detach_between_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_dev", function() { return detach_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch_dev", function() { return dispatch_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_is", function() { return element_is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_destroy_block", function() { return fix_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_current_component", function() { return get_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_context", function() { return get_slot_context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_object", function() { return get_spread_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has_prop", function() { return has_prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_dev", function() { return insert_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen_dev", function() { return listen_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop_guard", function() { return loop_guard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null_to_empty", function() { return null_to_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop_dev", function() { return prop_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query_selector_all", function() { return query_selector_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data_dev", function() { return set_data_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_value", function() { return set_input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_store_value", function() { return set_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_svg_attributes", function() { return set_svg_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_in", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_out", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function validate_store(store, name) {
    if (!store || typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, callback) {
    const unsub = store.subscribe(callback);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if (typeof $$scope.dirty === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}
function set_store_value(store, ret, value = ret) {
    store.set(value);
    return ret;
}
const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * For testing purposes only!
 */
function clear_loops() {
    tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    const target = {};
    for (const k in obj) {
        if (has_prop(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
        attr(node, key, attributes[key]);
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group) {
    const value = [];
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.push(group[i].__value);
    }
    return value;
}
function to_number(value) {
    return value === '' ? undefined : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function claim_element(nodes, name, attributes, svg) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeName === name) {
            for (let j = 0; j < node.attributes.length; j += 1) {
                const attribute = node.attributes[j];
                if (!attributes[attribute.name])
                    node.removeAttribute(attribute.name);
            }
            return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
        }
    }
    return svg ? svg_element(name) : element(name);
}
function claim_text(nodes, data) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 3) {
            node.data = '' + data;
            return nodes.splice(i, 1)[0];
        }
    }
    return text(data);
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function set_data(text, data) {
    data = '' + data;
    if (text.data !== data)
        text.data = data;
}
function set_input_value(input, value) {
    if (value != null || input.value) {
        input.value = value;
    }
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
function add_resize_listener(element, fn) {
    if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
    }
    const object = document.createElement('object');
    object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
    object.setAttribute('aria-hidden', 'true');
    object.type = 'text/html';
    object.tabIndex = -1;
    let win;
    object.onload = () => {
        win = object.contentDocument.defaultView;
        win.addEventListener('resize', fn);
    };
    if (/Trident/.test(navigator.userAgent)) {
        element.appendChild(object);
        object.data = 'about:blank';
    }
    else {
        object.data = 'about:blank';
        element.appendChild(object);
    }
    return {
        cancel: () => {
            win && win.removeEventListener && win.removeEventListener('resize', fn);
            element.removeChild(object);
        }
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}
function query_selector_all(selector, parent = document.body) {
    return Array.from(parent.querySelectorAll(selector));
}
class HtmlTag {
    constructor(html, anchor = null) {
        this.e = element('div');
        this.a = anchor;
        this.u(html);
    }
    m(target, anchor = null) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(target, this.n[i], anchor);
        }
        this.t = target;
    }
    u(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    p(html) {
        this.d();
        this.u(html);
        this.m(this.t, this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}

let stylesheet;
let active = 0;
let current_rules = {};
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    if (!current_rules[name]) {
        if (!stylesheet) {
            const style = element('style');
            document.head.appendChild(style);
            stylesheet = style.sheet;
        }
        current_rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    node.style.animation = (node.style.animation || '')
        .split(', ')
        .filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    )
        .join(', ');
    if (name && !--active)
        clear_rules();
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        let i = stylesheet.cssRules.length;
        while (i--)
            stylesheet.deleteRule(i);
        current_rules = {};
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        callbacks.slice().forEach(fn => fn(event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
function flush() {
    const seen_callbacks = new Set();
    do {
        // first, call beforeUpdate functions
        // and update components
        while (dirty_components.length) {
            const component = dirty_components.shift();
            set_current_component(component);
            update(component.$$);
        }
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                callback();
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            info.blocks[i] = null;
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
        if (needs_flush) {
            flush();
        }
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = promise;
    }
}

const globals = (typeof window !== 'undefined' ? window : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function measure(blocks) {
    const rects = {};
    let i = blocks.length;
    while (i--)
        rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
    return rects;
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, classes_to_add) {
    const attributes = Object.assign({}, ...args);
    if (classes_to_add) {
        if (attributes.class == null) {
            attributes.class = classes_to_add;
        }
        else {
            attributes.class += ' ' + classes_to_add;
        }
    }
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === true)
            str += " " + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
            if (value)
                str += " " + name;
        }
        else if (value != null) {
            str += ` ${name}="${String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;')}"`;
        }
    });
    return str;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const prop_values = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, prop_values, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if ($$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(children(options.target));
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === 'function') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    };
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set() {
        // overridden by instance, if it has props
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.17.1' }, detail)));
}
function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", { target, node });
    append(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", { node });
    detach(node);
}
function detach_between_dev(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
    }
}
function detach_before_dev(after) {
    while (after.previousSibling) {
        detach_dev(after.previousSibling);
    }
}
function detach_after_dev(before) {
    while (before.nextSibling) {
        detach_dev(before.nextSibling);
    }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
    else
        dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev("SvelteDOMSetProperty", { node, property, value });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev("SvelteDOMSetDataset", { node, property, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.data === data)
        return;
    dispatch_dev("SvelteDOMSetData", { node: text, data });
    text.data = data;
}
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error(`'target' is a required option`);
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn(`Component was already destroyed`); // eslint-disable-line no-console
        };
    }
}
function loop_guard(timeout) {
    const start = Date.now();
    return () => {
        if (Date.now() - start > timeout) {
            throw new Error(`Infinite loop detected`);
        }
    };
}




/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./public/assets/spectnet-logo.png":
/*!*****************************************!*\
  !*** ./public/assets/spectnet-logo.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "public/assets/spectnet-logo.png");

/***/ }),

/***/ "./public/global.css":
/*!***************************!*\
  !*** ./public/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./public/global.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/main/utils/electron-utils.ts":
/*!******************************************!*\
  !*** ./src/main/utils/electron-utils.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests if the current Electron shell application runs in development mode
 */
exports.__DEV__ = "development" === "development";
/**
 * Tests if the current Electron shell application runs on Windows
 */
exports.__WIN32__ = process.platform === "win32";
/**
 * Tests if the current Electron shell application runs on Mac OS
 */
exports.__DARWIN__ = process.platform === "darwin";
/**
 * Tests if the current Electron shell application runs on Linux
 */
exports.__LINUX__ = process.platform === "linux";


/***/ }),

/***/ "./src/renderer/App.svelte":
/*!*********************************!*\
  !*** ./src/renderer/App.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_Titlebar_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Titlebar.svelte */ "./src/renderer/components/Titlebar.svelte");
/* harmony import */ var _components_ActivityBar_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ActivityBar.svelte */ "./src/renderer/components/ActivityBar.svelte");
/* harmony import */ var _components_SideBar_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SideBar.svelte */ "./src/renderer/components/SideBar.svelte");
/* harmony import */ var _components_MainCanvas_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MainCanvas.svelte */ "./src/renderer/components/MainCanvas.svelte");
/* harmony import */ var _components_Statusbar_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Statusbar.svelte */ "./src/renderer/components/Statusbar.svelte");
/* harmony import */ var _themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themes/ThemeService */ "./src/renderer/themes/ThemeService.ts");
/* harmony import */ var _themes_ThemeService__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _themes_light_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themes/light-theme */ "./src/renderer/themes/light-theme.ts");
/* harmony import */ var _themes_light_theme__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_themes_light_theme__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _themes_dark_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themes/dark-theme */ "./src/renderer/themes/dark-theme.ts");
/* harmony import */ var _themes_dark_theme__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_themes_dark_theme__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_App_svelte_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/renderer/App.svelte.css */ "./src/renderer/App.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_App_svelte_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_App_svelte_css__WEBPACK_IMPORTED_MODULE_9__);
/* src\renderer\App.svelte generated by Svelte v3.17.1 */











function create_fragment(ctx) {
	let main;
	let t0;
	let div;
	let t1;
	let t2;
	let t3;
	let main_class_value;
	let current;
	const titlebar = new _components_Titlebar_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({});
	const activitybar = new _components_ActivityBar_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({});
	const sidebar = new _components_SideBar_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({});
	const maincanvas = new _components_MainCanvas_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({});
	const statusbar = new _components_Statusbar_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({});

	return {
		c() {
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(titlebar.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(activitybar.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(sidebar.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(maincanvas.$$.fragment);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(statusbar.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "main-panel svelte-rtr3k2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "style", /*themeStyle*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "class", main_class_value = "" + (Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(/*themeClass*/ ctx[1]) + " svelte-rtr3k2"));
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, main, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(titlebar, main, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(activitybar, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(sidebar, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(maincanvas, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(statusbar, main, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*themeStyle*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "style", /*themeStyle*/ ctx[0]);
			}

			if (!current || dirty & /*themeClass*/ 2 && main_class_value !== (main_class_value = "" + (Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(/*themeClass*/ ctx[1]) + " svelte-rtr3k2"))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "class", main_class_value);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(titlebar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(activitybar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(sidebar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(maincanvas.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(statusbar.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(titlebar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(activitybar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(sidebar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(maincanvas.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(statusbar.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(main);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(titlebar);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(activitybar);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(sidebar);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(maincanvas);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(statusbar);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let themeStyle = "";
	let themeClass = "";

	_themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__["ThemeService"].themeChanged.on(theme => {
		let styleValue = "";

		for (const key in theme.properties) {
			styleValue += `${key}:${theme.properties[key]};`;
		}

		$$invalidate(0, themeStyle = styleValue.trimRight());
		$$invalidate(1, themeClass = `${theme.name}-theme`);
	});

	_themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__["ThemeService"].registerTheme(_themes_light_theme__WEBPACK_IMPORTED_MODULE_7__["lightTheme"]);
	_themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__["ThemeService"].registerTheme(_themes_dark_theme__WEBPACK_IMPORTED_MODULE_8__["darkTheme"]);
	_themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__["ThemeService"].setTheme("dark");
	return [themeStyle, themeClass];
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (App);




/***/ }),

/***/ "./src/renderer/App.svelte.css":
/*!*************************************!*\
  !*** ./src/renderer/App.svelte.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./App.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/App.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/ActivityBar.svelte":
/*!****************************************************!*\
  !*** ./src/renderer/components/ActivityBar.svelte ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _rendererProcessStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendererProcessStore */ "./src/renderer/rendererProcessStore.ts");
/* harmony import */ var _rendererProcessStore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rendererProcessStore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_ActivityBar_svelte_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/renderer/components/ActivityBar.svelte.css */ "./src/renderer/components/ActivityBar.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_ActivityBar_svelte_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_ActivityBar_svelte_css__WEBPACK_IMPORTED_MODULE_2__);
/* src\renderer\components\ActivityBar.svelte generated by Svelte v3.17.1 */




function create_fragment(ctx) {
	let aside;

	return {
		c() {
			aside = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("aside");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(aside, "class", "svelte-93y0f");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, aside, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(aside);
		}
	};
}

class ActivityBar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (ActivityBar);




/***/ }),

/***/ "./src/renderer/components/ActivityBar.svelte.css":
/*!********************************************************!*\
  !*** ./src/renderer/components/ActivityBar.svelte.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./ActivityBar.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/ActivityBar.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/AppCaption.svelte":
/*!***************************************************!*\
  !*** ./src/renderer/components/AppCaption.svelte ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_AppCaption_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/renderer/components/AppCaption.svelte.css */ "./src/renderer/components/AppCaption.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_AppCaption_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_AppCaption_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src\renderer\components\AppCaption.svelte generated by Svelte v3.17.1 */


function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div.innerHTML = `<span>Zx Spectrum IDE</span>`;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "svelte-8budp8");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
		}
	};
}

class AppCaption extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (AppCaption);




/***/ }),

/***/ "./src/renderer/components/AppCaption.svelte.css":
/*!*******************************************************!*\
  !*** ./src/renderer/components/AppCaption.svelte.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./AppCaption.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/AppCaption.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/MainCanvas.svelte":
/*!***************************************************!*\
  !*** ./src/renderer/components/MainCanvas.svelte ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MainCanvas_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/renderer/components/MainCanvas.svelte.css */ "./src/renderer/components/MainCanvas.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MainCanvas_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MainCanvas_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src\renderer\components\MainCanvas.svelte generated by Svelte v3.17.1 */


function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "svelte-xh9mt6");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
		}
	};
}

class MainCanvas extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (MainCanvas);




/***/ }),

/***/ "./src/renderer/components/MainCanvas.svelte.css":
/*!*******************************************************!*\
  !*** ./src/renderer/components/MainCanvas.svelte.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./MainCanvas.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MainCanvas.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/MenuBar.svelte":
/*!************************************************!*\
  !*** ./src/renderer/components/MenuBar.svelte ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _MenuButton_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuButton.svelte */ "./src/renderer/components/MenuButton.svelte");
/* harmony import */ var _MenuPane_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuPane.svelte */ "./src/renderer/components/MenuPane.svelte");
/* harmony import */ var _rendererProcessStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rendererProcessStore */ "./src/renderer/rendererProcessStore.ts");
/* harmony import */ var _rendererProcessStore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rendererProcessStore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_state_redux_menu_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/state/redux-menu-state */ "./src/shared/state/redux-menu-state.ts");
/* harmony import */ var _shared_state_redux_menu_state__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shared_state_redux_menu_state__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu/menu-bar-logic */ "./src/renderer/menu/menu-bar-logic.ts");
/* harmony import */ var _menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuBar_svelte_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/renderer/components/MenuBar.svelte.css */ "./src/renderer/components/MenuBar.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuBar_svelte_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuBar_svelte_css__WEBPACK_IMPORTED_MODULE_7__);
/* src\renderer\components\MenuBar.svelte generated by Svelte v3.17.1 */












function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[14] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	child_ctx[14] = i;
	return child_ctx;
}

// (73:2) {#if appMenu}
function create_if_block(ctx) {
	let t;
	let if_block_anchor;
	let current;
	let each_value_1 = /*appMenu*/ ctx[1].menu.items;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block = /*appMenu*/ ctx[1].openPanes && create_if_block_1(ctx);

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*appMenu, titleColor, handleButtonMounted, handleButtonMouseEnter, handleButtonClick*/ 3) {
				each_value_1 = /*appMenu*/ ctx[1].menu.items;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
						each_blocks[i].m(t.parentNode, t);
					}
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (/*appMenu*/ ctx[1].openPanes) {
				if (if_block) {
					if_block.p(ctx, dirty);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i]);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i]);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
		}
	};
}

// (74:4) {#each appMenu.menu.items as item, index}
function create_each_block_1(ctx) {
	let current;

	function buttonmounted_handler(...args) {
		return /*buttonmounted_handler*/ ctx[5](/*index*/ ctx[14], ...args);
	}

	function pointed_handler(...args) {
		return /*pointed_handler*/ ctx[6](/*index*/ ctx[14], ...args);
	}

	function clicked_handler(...args) {
		return /*clicked_handler*/ ctx[7](/*index*/ ctx[14], ...args);
	}

	const menubutton = new _MenuButton_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				text: /*item*/ ctx[15].label,
				highlight: /*appMenu*/ ctx[1].highlightAccessKeys || false,
				pointed: /*appMenu*/ ctx[1].selectedIndex === /*index*/ ctx[14],
				titleColor: /*titleColor*/ ctx[0]
			}
		});

	menubutton.$on("buttonmounted", buttonmounted_handler);
	menubutton.$on("pointed", pointed_handler);
	menubutton.$on("clicked", clicked_handler);

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(menubutton.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(menubutton, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const menubutton_changes = {};
			if (dirty & /*appMenu*/ 2) menubutton_changes.text = /*item*/ ctx[15].label;
			if (dirty & /*appMenu*/ 2) menubutton_changes.highlight = /*appMenu*/ ctx[1].highlightAccessKeys || false;
			if (dirty & /*appMenu*/ 2) menubutton_changes.pointed = /*appMenu*/ ctx[1].selectedIndex === /*index*/ ctx[14];
			if (dirty & /*titleColor*/ 1) menubutton_changes.titleColor = /*titleColor*/ ctx[0];
			menubutton.$set(menubutton_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(menubutton.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(menubutton.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(menubutton, detaching);
		}
	};
}

// (84:4) {#if appMenu.openPanes}
function create_if_block_1(ctx) {
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	let each_value = /*appMenu*/ ctx[1].openPanes;
	const get_key = ctx => /*pane*/ ctx[12].id;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const each_value = /*appMenu*/ ctx[1].openPanes;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
			each_blocks = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_keyed_each"])(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["outro_and_destroy_block"], create_each_block, each_1_anchor, get_each_context);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(each_1_anchor);
		}
	};
}

// (85:6) {#each appMenu.openPanes as pane, index (pane.id)}
function create_each_block(key_1, ctx) {
	let first;
	let current;

	function panemounted_handler(...args) {
		return /*panemounted_handler*/ ctx[8](/*index*/ ctx[14], ...args);
	}

	function paneitemmounted_handler(...args) {
		return /*paneitemmounted_handler*/ ctx[9](/*index*/ ctx[14], ...args);
	}

	const menupane = new _MenuPane_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				depth: /*index*/ ctx[14],
				items: /*pane*/ ctx[12].items,
				highlight: /*appMenu*/ ctx[1].highlightAccessKeys || false,
				selectedIndex: /*pane*/ ctx[12].selectedIndex,
				leftPos: /*pane*/ ctx[12].leftPos,
				topPos: /*pane*/ ctx[12].topPos
			}
		});

	menupane.$on("panemounted", panemounted_handler);
	menupane.$on("paneitemmounted", paneitemmounted_handler);
	menupane.$on("itempointed", /*itempointed_handler*/ ctx[10]);
	menupane.$on("itemclicked", /*itemclicked_handler*/ ctx[11]);

	return {
		key: key_1,
		first: null,
		c() {
			first = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(menupane.$$.fragment);
			this.first = first;
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, first, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(menupane, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const menupane_changes = {};
			if (dirty & /*appMenu*/ 2) menupane_changes.depth = /*index*/ ctx[14];
			if (dirty & /*appMenu*/ 2) menupane_changes.items = /*pane*/ ctx[12].items;
			if (dirty & /*appMenu*/ 2) menupane_changes.highlight = /*appMenu*/ ctx[1].highlightAccessKeys || false;
			if (dirty & /*appMenu*/ 2) menupane_changes.selectedIndex = /*pane*/ ctx[12].selectedIndex;
			if (dirty & /*appMenu*/ 2) menupane_changes.leftPos = /*pane*/ ctx[12].leftPos;
			if (dirty & /*appMenu*/ 2) menupane_changes.topPos = /*pane*/ ctx[12].topPos;
			menupane.$set(menupane_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(menupane.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(menupane.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(first);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(menupane, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let current;
	let dispose;
	let if_block = /*appMenu*/ ctx[1] && create_if_block(ctx);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block) if_block.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "tabindex", "0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "svelte-zf9mpb");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			if (if_block) if_block.m(div, null);
			current = true;

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(window, "keydown", _menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__["handleKeyDown"]),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(window, "keyup", _menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__["handleKeyUp"])
			];
		},
		p(ctx, [dirty]) {
			if (/*appMenu*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(div, null);
				}
			} else if (if_block) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if (if_block) if_block.d();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { titleColor } = $$props;
	let appMenu;
	const stateAware = Object(_rendererProcessStore__WEBPACK_IMPORTED_MODULE_4__["createRendererProcessStateAware"])("appMenu");

	stateAware.onStateChanged.on(state => {
		$$invalidate(1, appMenu = state);
	});

	const focusAware = Object(_rendererProcessStore__WEBPACK_IMPORTED_MODULE_4__["createRendererProcessStateAware"])("appHasFocus");

	focusAware.onStateChanged.on(state => {
		if (!state) {
			focusAware.dispatch(Object(_shared_state_redux_menu_state__WEBPACK_IMPORTED_MODULE_5__["menuCloseAllAction"])());
		}
	});

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onDestroy"])(() => {
		stateAware.onStateChanged.release();
		focusAware.onStateChanged.release();
	});

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
		stateAware.dispatch(Object(_shared_state_redux_menu_state__WEBPACK_IMPORTED_MODULE_5__["refreshMenuAction"])());
	});

	let panes = [];
	const buttonmounted_handler = (index, e) => Object(_menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__["handleButtonMounted"])(index, e.detail);
	const pointed_handler = index => Object(_menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__["handleButtonMouseEnter"])(index);
	const clicked_handler = index => Object(_menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__["handleButtonClick"])(index);
	const panemounted_handler = (index, ev) => Object(_menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__["handlePaneMounted"])(index, ev.detail);
	const paneitemmounted_handler = (index, ev) => Object(_menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__["handlePaneItemMounted"])(index, ev.detail.index, ev.detail.rectangle);
	const itempointed_handler = ev => Object(_menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__["handleItemPointed"])(ev.detail);
	const itemclicked_handler = ev => Object(_menu_menu_bar_logic__WEBPACK_IMPORTED_MODULE_6__["handleItemClicked"])(ev.detail);

	$$self.$set = $$props => {
		if ("titleColor" in $$props) $$invalidate(0, titleColor = $$props.titleColor);
	};

	return [
		titleColor,
		appMenu,
		stateAware,
		focusAware,
		panes,
		buttonmounted_handler,
		pointed_handler,
		clicked_handler,
		panemounted_handler,
		paneitemmounted_handler,
		itempointed_handler,
		itemclicked_handler
	];
}

class MenuBar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { titleColor: 0 });
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (MenuBar);




/***/ }),

/***/ "./src/renderer/components/MenuBar.svelte.css":
/*!****************************************************!*\
  !*** ./src/renderer/components/MenuBar.svelte.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./MenuBar.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuBar.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/MenuButton.svelte":
/*!***************************************************!*\
  !*** ./src/renderer/components/MenuButton.svelte ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _MenuText_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuText.svelte */ "./src/renderer/components/MenuText.svelte");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuButton_svelte_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/renderer/components/MenuButton.svelte.css */ "./src/renderer/components/MenuButton.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuButton_svelte_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuButton_svelte_css__WEBPACK_IMPORTED_MODULE_3__);
/* src\renderer\components\MenuButton.svelte generated by Svelte v3.17.1 */






function create_fragment(ctx) {
	let div;
	let current;
	let dispose;

	const menutext = new _MenuText_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				text: /*text*/ ctx[0],
				highlight: /*highlight*/ ctx[1]
			}
		});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(menutext.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "color", /*titleColor*/ ctx[3]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "svelte-127wor7");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "pointed", /*pointed*/ ctx[2]);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(menutext, div, null);
			/*div_binding*/ ctx[6](div);
			current = true;

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "mouseenter", /*mouseenter_handler*/ ctx[7]),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", /*click_handler*/ ctx[8])
			];
		},
		p(ctx, [dirty]) {
			const menutext_changes = {};
			if (dirty & /*text*/ 1) menutext_changes.text = /*text*/ ctx[0];
			if (dirty & /*highlight*/ 2) menutext_changes.highlight = /*highlight*/ ctx[1];
			menutext.$set(menutext_changes);

			if (!current || dirty & /*titleColor*/ 8) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "color", /*titleColor*/ ctx[3]);
			}

			if (dirty & /*pointed*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "pointed", /*pointed*/ ctx[2]);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(menutext.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(menutext.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(menutext);
			/*div_binding*/ ctx[6](null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { text } = $$props;
	let { highlight = false } = $$props;
	let { pointed = false } = $$props;
	let { titleColor } = $$props;
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();
	let hostElement;

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => dispatch("buttonmounted", {
		left: hostElement.offsetLeft,
		top: hostElement.offsetTop,
		width: hostElement.offsetWidth,
		height: hostElement.offsetHeight
	}));

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? "unshift" : "push"](() => {
			$$invalidate(4, hostElement = $$value);
		});
	}

	const mouseenter_handler = () => dispatch("pointed");
	const click_handler = () => dispatch("clicked");

	$$self.$set = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
		if ("highlight" in $$props) $$invalidate(1, highlight = $$props.highlight);
		if ("pointed" in $$props) $$invalidate(2, pointed = $$props.pointed);
		if ("titleColor" in $$props) $$invalidate(3, titleColor = $$props.titleColor);
	};

	return [
		text,
		highlight,
		pointed,
		titleColor,
		hostElement,
		dispatch,
		div_binding,
		mouseenter_handler,
		click_handler
	];
}

class MenuButton extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {
			text: 0,
			highlight: 1,
			pointed: 2,
			titleColor: 3
		});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (MenuButton);




/***/ }),

/***/ "./src/renderer/components/MenuButton.svelte.css":
/*!*******************************************************!*\
  !*** ./src/renderer/components/MenuButton.svelte.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./MenuButton.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuButton.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/MenuItem.svelte":
/*!*************************************************!*\
  !*** ./src/renderer/components/MenuItem.svelte ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _controls_SvgIcon_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/SvgIcon.svelte */ "./src/renderer/controls/SvgIcon.svelte");
/* harmony import */ var _MenuText_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuText.svelte */ "./src/renderer/components/MenuText.svelte");
/* harmony import */ var _menu_menu_item_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu-item-logic */ "./src/renderer/menu/menu-item-logic.ts");
/* harmony import */ var _menu_menu_item_logic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_menu_menu_item_logic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuItem_svelte_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/renderer/components/MenuItem.svelte.css */ "./src/renderer/components/MenuItem.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuItem_svelte_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuItem_svelte_css__WEBPACK_IMPORTED_MODULE_5__);
/* src\renderer\components\MenuItem.svelte generated by Svelte v3.17.1 */








function create_else_block(ctx) {
	let div1;
	let current_block_type_index;
	let if_block0;
	let t0;
	let div0;
	let t1;
	let t2;
	let current;
	const if_block_creators = [create_if_block_3, create_else_block_1];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*item*/ ctx[0].checked) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx, -1);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const menutext = new _MenuText_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				text: /*item*/ ctx[0].label,
				highlight: /*highlight*/ ctx[1]
			}
		});

	let if_block1 = /*item*/ ctx[0].items.length > 0 && /*item*/ ctx[0].accelerator && create_if_block_2(ctx);
	let if_block2 = /*item*/ ctx[0].items.length > 0 && create_if_block_1(ctx);

	return {
		c() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if_block0.c();
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(menutext.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block2) if_block2.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "label svelte-cf01s4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "menu-item svelte-cf01s4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "disabled", !/*item*/ ctx[0].enabled);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "checked", /*item*/ ctx[0].checked);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "submenu", /*item*/ ctx[0].items.length > 0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "selected", /*selected*/ ctx[2]);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			if_blocks[current_block_type_index].m(div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(menutext, div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t1);
			if (if_block1) if_block1.m(div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t2);
			if (if_block2) if_block2.m(div1, null);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block0 = if_blocks[current_block_type_index];

				if (!if_block0) {
					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block0.c();
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0, 1);
				if_block0.m(div1, t0);
			}

			const menutext_changes = {};
			if (dirty & /*item*/ 1) menutext_changes.text = /*item*/ ctx[0].label;
			if (dirty & /*highlight*/ 2) menutext_changes.highlight = /*highlight*/ ctx[1];
			menutext.$set(menutext_changes);

			if (/*item*/ ctx[0].items.length > 0 && /*item*/ ctx[0].accelerator) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					if_block1.m(div1, t2);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*item*/ ctx[0].items.length > 0) {
				if (!if_block2) {
					if_block2 = create_if_block_1(ctx);
					if_block2.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2, 1);
					if_block2.m(div1, null);
				} else {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2, 1);
				}
			} else if (if_block2) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (dirty & /*item*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "disabled", !/*item*/ ctx[0].enabled);
			}

			if (dirty & /*item*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "checked", /*item*/ ctx[0].checked);
			}

			if (dirty & /*item*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "submenu", /*item*/ ctx[0].items.length > 0);
			}

			if (dirty & /*selected*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "selected", /*selected*/ ctx[2]);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(menutext.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(menutext.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block2);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			if_blocks[current_block_type_index].d();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(menutext);
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
		}
	};
}

// (106:2) {#if item.separator}
function create_if_block(ctx) {
	let div;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "separator svelte-cf01s4");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
		}
	};
}

// (121:6) {:else}
function create_else_block_1(ctx) {
	let div;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "icon-placeholder svelte-cf01s4");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
		}
	};
}

// (115:6) {#if item.checked}
function create_if_block_3(ctx) {
	let current;

	const svgicon = new _controls_SvgIcon_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				class: "icon",
				iconName: /*item*/ ctx[0].checked ? "check" : null,
				width: 14,
				height: 14
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(svgicon.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(svgicon, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const svgicon_changes = {};
			if (dirty & /*item*/ 1) svgicon_changes.iconName = /*item*/ ctx[0].checked ? "check" : null;
			svgicon.$set(svgicon_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(svgicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(svgicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(svgicon, detaching);
		}
	};
}

// (127:6) {#if item.items.length > 0 && item.accelerator}
function create_if_block_2(ctx) {
	let div;
	let t_value = Object(_menu_menu_item_logic__WEBPACK_IMPORTED_MODULE_4__["friendlyAcceleratorText"])(/*item*/ ctx[0].accelerator) + "";
	let t;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "accelerator svelte-cf01s4");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*item*/ 1 && t_value !== (t_value = Object(_menu_menu_item_logic__WEBPACK_IMPORTED_MODULE_4__["friendlyAcceleratorText"])(/*item*/ ctx[0].accelerator) + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
		}
	};
}

// (132:6) {#if item.items.length > 0}
function create_if_block_1(ctx) {
	let current;

	const svgicon = new _controls_SvgIcon_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				xclass: "submenu-icon",
				iconName: "submenu-arrow",
				width: 14,
				height: 14
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(svgicon.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(svgicon, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(svgicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(svgicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(svgicon, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let current_block_type_index;
	let if_block;
	let current;
	let dispose;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*item*/ ctx[0].separator) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if_block.c();
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			/*div_binding*/ ctx[5](div);
			current = true;

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "mouseenter", /*mouseenter_handler*/ ctx[6]),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "mouseleave", /*mouseleave_handler*/ ctx[7]),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", /*click_handler*/ ctx[8])
			];
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(div, null);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if_blocks[current_block_type_index].d();
			/*div_binding*/ ctx[5](null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { item } = $$props;
	let { highlight } = $$props;
	let { selected } = $$props;
	let hostElement;
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
		if (!item.separator) {
			dispatch("itemmounted", {
				left: hostElement.offsetLeft,
				top: hostElement.offsetTop,
				width: hostElement.offsetWidth,
				height: hostElement.offsetHeight
			});
		}
	});

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? "unshift" : "push"](() => {
			$$invalidate(3, hostElement = $$value);
		});
	}

	const mouseenter_handler = () => dispatch("pointed", true);
	const mouseleave_handler = () => dispatch("pointed", false);
	const click_handler = () => dispatch("clicked");

	$$self.$set = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
		if ("highlight" in $$props) $$invalidate(1, highlight = $$props.highlight);
		if ("selected" in $$props) $$invalidate(2, selected = $$props.selected);
	};

	return [
		item,
		highlight,
		selected,
		hostElement,
		dispatch,
		div_binding,
		mouseenter_handler,
		mouseleave_handler,
		click_handler
	];
}

class MenuItem extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { item: 0, highlight: 1, selected: 2 });
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);




/***/ }),

/***/ "./src/renderer/components/MenuItem.svelte.css":
/*!*****************************************************!*\
  !*** ./src/renderer/components/MenuItem.svelte.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./MenuItem.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuItem.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/MenuPane.svelte":
/*!*************************************************!*\
  !*** ./src/renderer/components/MenuPane.svelte ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _MenuItem_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem.svelte */ "./src/renderer/components/MenuItem.svelte");
/* harmony import */ var _menu_menu_pane_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu-pane-logic */ "./src/renderer/menu/menu-pane-logic.ts");
/* harmony import */ var _menu_menu_pane_logic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu_menu_pane_logic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuPane_svelte_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/renderer/components/MenuPane.svelte.css */ "./src/renderer/components/MenuPane.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuPane_svelte_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuPane_svelte_css__WEBPACK_IMPORTED_MODULE_4__);
/* src\renderer\components\MenuPane.svelte generated by Svelte v3.17.1 */







function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	child_ctx[15] = i;
	return child_ctx;
}

// (66:2) {#if groupItems}
function create_if_block(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*groupItems*/ ctx[6];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*groupItems, highlight, selectedIndex, dispatch, depth*/ 211) {
				each_value = /*groupItems*/ ctx[6];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(each_1_anchor);
		}
	};
}

// (67:4) {#each groupItems as item, index}
function create_each_block(ctx) {
	let current;

	function itemmounted_handler(...args) {
		return /*itemmounted_handler*/ ctx[9](/*item*/ ctx[13], ...args);
	}

	function pointed_handler(...args) {
		return /*pointed_handler*/ ctx[10](/*index*/ ctx[15], ...args);
	}

	function clicked_handler(...args) {
		return /*clicked_handler*/ ctx[11](/*index*/ ctx[15], ...args);
	}

	const menuitem = new _MenuItem_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				item: /*item*/ ctx[13],
				highlight: /*highlight*/ ctx[1],
				selected: /*selectedIndex*/ ctx[4] === /*index*/ ctx[15]
			}
		});

	menuitem.$on("itemmounted", itemmounted_handler);
	menuitem.$on("pointed", pointed_handler);
	menuitem.$on("clicked", clicked_handler);

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(menuitem.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(menuitem, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const menuitem_changes = {};
			if (dirty & /*groupItems*/ 64) menuitem_changes.item = /*item*/ ctx[13];
			if (dirty & /*highlight*/ 2) menuitem_changes.highlight = /*highlight*/ ctx[1];
			if (dirty & /*selectedIndex*/ 16) menuitem_changes.selected = /*selectedIndex*/ ctx[4] === /*index*/ ctx[15];
			menuitem.$set(menuitem_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(menuitem.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(menuitem.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(menuitem, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let current;
	let if_block = /*groupItems*/ ctx[6] && create_if_block(ctx);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block) if_block.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "menu-pane svelte-go6z9r");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "z-index", /*depth*/ ctx[0] + 100);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "top", /*topPos*/ ctx[3] + "px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "left", /*leftPos*/ ctx[2] + "px");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			if (if_block) if_block.m(div, null);
			/*div_binding*/ ctx[12](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*groupItems*/ ctx[6]) {
				if (if_block) {
					if_block.p(ctx, dirty);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(div, null);
				}
			} else if (if_block) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (!current || dirty & /*depth*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "z-index", /*depth*/ ctx[0] + 100);
			}

			if (!current || dirty & /*topPos*/ 8) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "top", /*topPos*/ ctx[3] + "px");
			}

			if (!current || dirty & /*leftPos*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "left", /*leftPos*/ ctx[2] + "px");
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if (if_block) if_block.d();
			/*div_binding*/ ctx[12](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { depth } = $$props;
	let { items } = $$props;
	let { highlight } = $$props;
	let { leftPos } = $$props;
	let { topPos } = $$props;
	let { selectedIndex } = $$props;
	let hostElement;
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
		dispatch("panemounted", {
			left: hostElement.offsetLeft,
			top: hostElement.offsetTop,
			width: hostElement.offsetWidth,
			height: hostElement.offsetHeight
		});
	});

	const itemmounted_handler = (item, ev) => {
		dispatch("paneitemmounted", { index: item.index, rectangle: ev.detail });
	};

	const pointed_handler = (index, ev) => dispatch("itempointed", { depth, flatIndex: ev.detail ? index : -1 });
	const clicked_handler = (index, ev) => dispatch("itemclicked", { depth, flatIndex: index });

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? "unshift" : "push"](() => {
			$$invalidate(5, hostElement = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("depth" in $$props) $$invalidate(0, depth = $$props.depth);
		if ("items" in $$props) $$invalidate(8, items = $$props.items);
		if ("highlight" in $$props) $$invalidate(1, highlight = $$props.highlight);
		if ("leftPos" in $$props) $$invalidate(2, leftPos = $$props.leftPos);
		if ("topPos" in $$props) $$invalidate(3, topPos = $$props.topPos);
		if ("selectedIndex" in $$props) $$invalidate(4, selectedIndex = $$props.selectedIndex);
	};

	let groupItems;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*items*/ 256) {
			$: $$invalidate(6, groupItems = Object(_menu_menu_pane_logic__WEBPACK_IMPORTED_MODULE_3__["flattenCommandGroup"])(items));
		}
	};

	return [
		depth,
		highlight,
		leftPos,
		topPos,
		selectedIndex,
		hostElement,
		groupItems,
		dispatch,
		items,
		itemmounted_handler,
		pointed_handler,
		clicked_handler,
		div_binding
	];
}

class MenuPane extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {
			depth: 0,
			items: 8,
			highlight: 1,
			leftPos: 2,
			topPos: 3,
			selectedIndex: 4
		});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (MenuPane);




/***/ }),

/***/ "./src/renderer/components/MenuPane.svelte.css":
/*!*****************************************************!*\
  !*** ./src/renderer/components/MenuPane.svelte.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./MenuPane.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuPane.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/MenuText.svelte":
/*!*************************************************!*\
  !*** ./src/renderer/components/MenuText.svelte ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuText_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/renderer/components/MenuText.svelte.css */ "./src/renderer/components/MenuText.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuText_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_MenuText_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src\renderer\components\MenuText.svelte generated by Svelte v3.17.1 */


function create_if_block(ctx) {
	let t0;
	let t1;
	let if_block2_anchor;
	let if_block0 = /*menuText*/ ctx[1].preText !== "" && create_if_block_3(ctx);
	let if_block1 = /*menuText*/ ctx[1].accessKeyText !== "" && /*menuText*/ ctx[1].accessKeyText != null && create_if_block_2(ctx);
	let if_block2 = /*menuText*/ ctx[1].postText !== "" && create_if_block_1(ctx);

	return {
		c() {
			if (if_block0) if_block0.c();
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block2) if_block2.c();
			if_block2_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			if (if_block1) if_block1.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			if (if_block2) if_block2.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block2_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*menuText*/ ctx[1].preText !== "") {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					if_block0.m(t0.parentNode, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*menuText*/ ctx[1].accessKeyText !== "" && /*menuText*/ ctx[1].accessKeyText != null) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					if_block1.m(t1.parentNode, t1);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*menuText*/ ctx[1].postText !== "") {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block_1(ctx);
					if_block2.c();
					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}
		},
		d(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
			if (if_block1) if_block1.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (if_block2) if_block2.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block2_anchor);
		}
	};
}

// (51:4) {#if menuText.preText !== ''}
function create_if_block_3(ctx) {
	let span;
	let t_value = /*menuText*/ ctx[1].preText + "";
	let t;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "margin", "0px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-1usy3t1");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*menuText*/ 2 && t_value !== (t_value = /*menuText*/ ctx[1].preText + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
		}
	};
}

// (54:4) {#if menuText.accessKeyText !== '' && menuText.accessKeyText != null}
function create_if_block_2(ctx) {
	let span;
	let t_value = /*menuText*/ ctx[1].accessKeyText + "";
	let t;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "margin", "0px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "aria-hidden", "true");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "access-key svelte-1usy3t1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(span, "highlight", /*highlight*/ ctx[0]);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*menuText*/ 2 && t_value !== (t_value = /*menuText*/ ctx[1].accessKeyText + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);

			if (dirty & /*highlight*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(span, "highlight", /*highlight*/ ctx[0]);
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
		}
	};
}

// (63:4) {#if menuText.postText !== ''}
function create_if_block_1(ctx) {
	let span;
	let t_value = /*menuText*/ ctx[1].postText + "";
	let t;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "margin", "0px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "aria-hidden", "true");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-1usy3t1");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*menuText*/ 2 && t_value !== (t_value = /*menuText*/ ctx[1].postText + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let if_block = /*menuText*/ ctx[1] && create_if_block(ctx);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block) if_block.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "svelte-1usy3t1");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			if (if_block) if_block.m(div, null);
		},
		p(ctx, [dirty]) {
			if (/*menuText*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if (if_block) if_block.d();
		}
	};
}

function splitText(title) {
	let preText = "";
	let accessKeyText = "";
	let postText = "";

	if (title) {
		const m = title.match(/^(.*?)?(?:&([^&]))(.*)?$/);

		if (!m) {
			preText = title;
		} else {
			if (m[1]) {
				preText = unescape(m[1]);
			}

			accessKeyText = m[2];

			if (m[3]) {
				postText = unescape(m[3]);
			}
		}
	}

	return { preText, accessKeyText, postText };
}

function unescape(accessText) {
	return accessText.replace("&&", "&");
}

function instance($$self, $$props, $$invalidate) {
	let { text = "" } = $$props;
	let { highlight = false } = $$props;

	$$self.$set = $$props => {
		if ("text" in $$props) $$invalidate(2, text = $$props.text);
		if ("highlight" in $$props) $$invalidate(0, highlight = $$props.highlight);
	};

	let menuText;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*text*/ 4) {
			$: $$invalidate(1, menuText = splitText(text));
		}
	};

	return [highlight, menuText, text];
}

class MenuText extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { text: 2, highlight: 0 });
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (MenuText);




/***/ }),

/***/ "./src/renderer/components/MenuText.svelte.css":
/*!*****************************************************!*\
  !*** ./src/renderer/components/MenuText.svelte.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./MenuText.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/MenuText.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/SideBar.svelte":
/*!************************************************!*\
  !*** ./src/renderer/components/SideBar.svelte ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_SideBar_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/renderer/components/SideBar.svelte.css */ "./src/renderer/components/SideBar.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_SideBar_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_SideBar_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src\renderer\components\SideBar.svelte generated by Svelte v3.17.1 */


function create_fragment(ctx) {
	let aside;

	return {
		c() {
			aside = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("aside");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(aside, "class", "svelte-l8zike");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, aside, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(aside);
		}
	};
}

class SideBar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (SideBar);




/***/ }),

/***/ "./src/renderer/components/SideBar.svelte.css":
/*!****************************************************!*\
  !*** ./src/renderer/components/SideBar.svelte.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./SideBar.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/SideBar.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/Statusbar.svelte":
/*!**************************************************!*\
  !*** ./src/renderer/components/Statusbar.svelte ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_Statusbar_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/renderer/components/Statusbar.svelte.css */ "./src/renderer/components/Statusbar.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_Statusbar_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_Statusbar_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src\renderer\components\Statusbar.svelte generated by Svelte v3.17.1 */


function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div.innerHTML = `<h3 class="svelte-15fw261">Statusbar</h3>`;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "svelte-15fw261");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
		}
	};
}

class Statusbar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Statusbar);




/***/ }),

/***/ "./src/renderer/components/Statusbar.svelte.css":
/*!******************************************************!*\
  !*** ./src/renderer/components/Statusbar.svelte.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Statusbar.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/Statusbar.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/components/Titlebar.svelte":
/*!*************************************************!*\
  !*** ./src/renderer/components/Titlebar.svelte ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _public_assets_spectnet_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/assets/spectnet-logo.png */ "./public/assets/spectnet-logo.png");
/* harmony import */ var _controls_SvgIcon_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls/SvgIcon.svelte */ "./src/renderer/controls/SvgIcon.svelte");
/* harmony import */ var _MenuBar_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuBar.svelte */ "./src/renderer/components/MenuBar.svelte");
/* harmony import */ var _AppCaption_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppCaption.svelte */ "./src/renderer/components/AppCaption.svelte");
/* harmony import */ var _themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themes/ThemeService */ "./src/renderer/themes/ThemeService.ts");
/* harmony import */ var _themes_ThemeService__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_state_redux_window_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/state/redux-window-state */ "./src/shared/state/redux-window-state.ts");
/* harmony import */ var _shared_state_redux_window_state__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shared_state_redux_window_state__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _rendererProcessStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rendererProcessStore */ "./src/renderer/rendererProcessStore.ts");
/* harmony import */ var _rendererProcessStore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_rendererProcessStore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_Titlebar_svelte_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/renderer/components/Titlebar.svelte.css */ "./src/renderer/components/Titlebar.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_Titlebar_svelte_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_components_Titlebar_svelte_css__WEBPACK_IMPORTED_MODULE_9__);
/* src\renderer\components\Titlebar.svelte generated by Svelte v3.17.1 */













function create_else_block(ctx) {
	let div;
	let current;
	let dispose;

	const svgicon = new _controls_SvgIcon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				iconName: "maximize",
				fill: "white",
				width: "10",
				height: "10"
			}
		});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(svgicon.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "window-control svelte-nhh3r9");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(svgicon, div, null);
			current = true;
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", /*click_handler_2*/ ctx[7]);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(svgicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(svgicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(svgicon);
			dispose();
		}
	};
}

// (106:4) {#if windowState !== 'normal'}
function create_if_block(ctx) {
	let div;
	let current;
	let dispose;

	const svgicon = new _controls_SvgIcon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				iconName: "restore",
				fill: "white",
				width: "10",
				height: "10"
			}
		});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(svgicon.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "window-control svelte-nhh3r9");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(svgicon, div, null);
			current = true;
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", /*click_handler_1*/ ctx[6]);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(svgicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(svgicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(svgicon);
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div4;
	let div0;
	let t0;
	let t1;
	let t2;
	let div3;
	let div1;
	let t3;
	let current_block_type_index;
	let if_block;
	let t4;
	let div2;
	let current;
	let dispose;

	const menubar = new _MenuBar_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: { titleColor: /*titleColor*/ ctx[0] }
		});

	const appcaption = new _AppCaption_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({});

	const svgicon0 = new _controls_SvgIcon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				iconName: "minimize",
				fill: "white",
				width: "10",
				height: "10"
			}
		});

	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*windowState*/ ctx[2] !== "normal") return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const svgicon1 = new _controls_SvgIcon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				iconName: "close-lean",
				fill: "white",
				width: "10",
				height: "10"
			}
		});

	return {
		c() {
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0.innerHTML = `<img alt="logo" src="./public/assets/spectnet-logo.png">`;
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(menubar.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(appcaption.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(svgicon0.$$.fragment);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if_block.c();
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(svgicon1.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "logo svelte-nhh3r9");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "window-control svelte-nhh3r9");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "window-control close svelte-nhh3r9");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "title-buttons svelte-nhh3r9");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div4, "class", "component svelte-nhh3r9");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div4, "color", /*titleColor*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div4, "background-color", /*backgroundColor*/ ctx[1]);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(menubar, div4, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(appcaption, div4, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(svgicon0, div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t3);
			if_blocks[current_block_type_index].m(div3, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(svgicon1, div2, null);
			current = true;
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div1, "click", /*click_handler*/ ctx[5]);
		},
		p(ctx, [dirty]) {
			const menubar_changes = {};
			if (dirty & /*titleColor*/ 1) menubar_changes.titleColor = /*titleColor*/ ctx[0];
			menubar.$set(menubar_changes);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(div3, t4);
			}

			if (!current || dirty & /*titleColor*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div4, "color", /*titleColor*/ ctx[0]);
			}

			if (!current || dirty & /*backgroundColor*/ 2) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div4, "background-color", /*backgroundColor*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(menubar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(appcaption.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(svgicon0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(svgicon1.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(menubar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(appcaption.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(svgicon0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(svgicon1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(menubar);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(appcaption);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(svgicon0);
			if_blocks[current_block_type_index].d();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(svgicon1);
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let titleColor;
	let backgroundColor;
	calculateColors(true);
	let windowState = "normal";
	var stateAware = Object(_rendererProcessStore__WEBPACK_IMPORTED_MODULE_8__["createRendererProcessStateAware"])();

	stateAware.onStateChanged.on(state => {
		$$invalidate(2, windowState = state.windowState);
		calculateColors(state.appHasFocus);
	});

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onDestroy"])(() => stateAware.onStateChanged.release());

	function calculateColors(focused) {
		let propName = focused
		? "--titlebar-focused-background-color"
		: "--titlebar-background-color";

		$$invalidate(1, backgroundColor = _themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__["ThemeService"].getProperty(propName));

		propName = focused
		? "--titlebar-focused-text-color"
		: "--titlebar-text-color";

		$$invalidate(0, titleColor = _themes_ThemeService__WEBPACK_IMPORTED_MODULE_6__["ThemeService"].getProperty(propName));
	}

	const click_handler = () => stateAware.dispatch(Object(_shared_state_redux_window_state__WEBPACK_IMPORTED_MODULE_7__["minimizeAppWindowAction"])());
	const click_handler_1 = () => stateAware.dispatch(Object(_shared_state_redux_window_state__WEBPACK_IMPORTED_MODULE_7__["restoreAppWindowAction"])());
	const click_handler_2 = () => stateAware.dispatch(Object(_shared_state_redux_window_state__WEBPACK_IMPORTED_MODULE_7__["maximizeAppWindowAction"])());

	return [
		titleColor,
		backgroundColor,
		windowState,
		stateAware,
		calculateColors,
		click_handler,
		click_handler_1,
		click_handler_2
	];
}

class Titlebar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Titlebar);




/***/ }),

/***/ "./src/renderer/components/Titlebar.svelte.css":
/*!*****************************************************!*\
  !*** ./src/renderer/components/Titlebar.svelte.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Titlebar.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/components/Titlebar.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/controls/SvgIcon.svelte":
/*!**********************************************!*\
  !*** ./src/renderer/controls/SvgIcon.svelte ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _themes_ThemeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/ThemeService */ "./src/renderer/themes/ThemeService.ts");
/* harmony import */ var _themes_ThemeService__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_themes_ThemeService__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_controls_SvgIcon_svelte_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/renderer/controls/SvgIcon.svelte.css */ "./src/renderer/controls/SvgIcon.svelte.css");
/* harmony import */ var C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_controls_SvgIcon_svelte_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_dotne_source_repos_spectnetide_svelte_src_renderer_controls_SvgIcon_svelte_css__WEBPACK_IMPORTED_MODULE_2__);
/* src\renderer\controls\SvgIcon.svelte generated by Svelte v3.17.1 */




function create_fragment(ctx) {
	let svg;
	let path;
	let path_d_value;
	let svg_class_value;
	let svg_viewBox_value;

	return {
		c() {
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("svg");
			path = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("path");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(path, "d", path_d_value = /*iconInfo*/ ctx[2].path);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "class", svg_class_value = "" + (Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(/*xclass*/ ctx[0]) + " svelte-jt1837"));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "xmlns", "http://www.w3.org/2000/svg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "style", /*styleValue*/ ctx[1]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "viewBox", svg_viewBox_value = "0 0 " + /*iconInfo*/ ctx[2].width + "\r\n  " + /*iconInfo*/ ctx[2].height);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, svg, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(svg, path);
		},
		p(ctx, [dirty]) {
			if (dirty & /*iconInfo*/ 4 && path_d_value !== (path_d_value = /*iconInfo*/ ctx[2].path)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(path, "d", path_d_value);
			}

			if (dirty & /*xclass*/ 1 && svg_class_value !== (svg_class_value = "" + (Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(/*xclass*/ ctx[0]) + " svelte-jt1837"))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "class", svg_class_value);
			}

			if (dirty & /*styleValue*/ 2) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "style", /*styleValue*/ ctx[1]);
			}

			if (dirty & /*iconInfo*/ 4 && svg_viewBox_value !== (svg_viewBox_value = "0 0 " + /*iconInfo*/ ctx[2].width + "\r\n  " + /*iconInfo*/ ctx[2].height)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "viewBox", svg_viewBox_value);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(svg);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { xclass = "" } = $$props;
	let { iconName } = $$props;
	let { width } = $$props;
	let { height } = $$props;
	let { fill } = $$props;
	let { rotate = 0 } = $$props;

	$$self.$set = $$props => {
		if ("xclass" in $$props) $$invalidate(0, xclass = $$props.xclass);
		if ("iconName" in $$props) $$invalidate(3, iconName = $$props.iconName);
		if ("width" in $$props) $$invalidate(4, width = $$props.width);
		if ("height" in $$props) $$invalidate(5, height = $$props.height);
		if ("fill" in $$props) $$invalidate(6, fill = $$props.fill);
		if ("rotate" in $$props) $$invalidate(7, rotate = $$props.rotate);
	};

	let fillValue;
	let styleValue;
	let iconInfo;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*fill*/ 64) {
			$: $$invalidate(8, fillValue = fill === null || fill === undefined
			? "white"
			: fill.startsWith("--")
				? _themes_ThemeService__WEBPACK_IMPORTED_MODULE_1__["ThemeService"].getProperty(fill)
				: fill);
		}

		if ($$self.$$.dirty & /*width, height, fillValue, rotate*/ 432) {
			$: $$invalidate(1, styleValue = `width:${width === undefined
			? _themes_ThemeService__WEBPACK_IMPORTED_MODULE_1__["ThemeService"].getProperty("--icon-default-size")
			: width}px;` + `height:${height === undefined
			? _themes_ThemeService__WEBPACK_IMPORTED_MODULE_1__["ThemeService"].getProperty("--icon-default-size")
			: height}px;` + `fill:${fillValue};` + `transform:rotate(${rotate}deg)`);
		}

		if ($$self.$$.dirty & /*iconName*/ 8) {
			$: $$invalidate(2, iconInfo = _themes_ThemeService__WEBPACK_IMPORTED_MODULE_1__["ThemeService"].getIcon(iconName));
		}
	};

	return [xclass, styleValue, iconInfo, iconName, width, height, fill, rotate];
}

class SvgIcon extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {
			xclass: 0,
			iconName: 3,
			width: 4,
			height: 5,
			fill: 6,
			rotate: 7
		});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (SvgIcon);




/***/ }),

/***/ "./src/renderer/controls/SvgIcon.svelte.css":
/*!**************************************************!*\
  !*** ./src/renderer/controls/SvgIcon.svelte.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./SvgIcon.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/renderer/controls/SvgIcon.svelte.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/renderer/main.js":
/*!******************************!*\
  !*** ./src/renderer/main.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ "./src/renderer/App.svelte");
/* harmony import */ var _public_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @public/global.css */ "./public/global.css");
/* harmony import */ var _public_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_global_css__WEBPACK_IMPORTED_MODULE_1__);


const app = new _App_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({ target: document.body });

/* harmony default export */ __webpack_exports__["default"] = (app);


/***/ }),

/***/ "./src/renderer/menu/menu-bar-logic.ts":
/*!*********************************************!*\
  !*** ./src/renderer/menu/menu-bar-logic.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = __webpack_require__(/*! ../../shared/state/actions */ "./src/shared/state/actions.ts");
const rendererProcessStore_1 = __webpack_require__(/*! ../rendererProcessStore */ "./src/renderer/rendererProcessStore.ts");
const redux_menu_state_1 = __webpack_require__(/*! ../../shared/state/redux-menu-state */ "./src/shared/state/redux-menu-state.ts");
const menu_pane_logic_1 = __webpack_require__(/*! ./menu-pane-logic */ "./src/renderer/menu/menu-pane-logic.ts");
// --- This is the store we use to dispatch redux actions
const store = rendererProcessStore_1.rendererProcessStore;
// --- Index of menu pade marked for delayed remove
let delayedRemove = -1;
// ---
let lastSubmenuParent = -1;
// --- Menu button boundary information
const menuButtons = [];
// --- Pane information of open panes
const panes = [];
// --- Menu item boundary information
// --- (first index: pane, second index: item within a pane)
const paneItems = [];
// --- Create a new sequence number for a new pane
let nextPaneId = 0;
// --- Store information about the last mouse entered event
let lastMouseEntered;
/**
 * Handles the event when a MenuButton instance is displayed.
 * @param index MenuButton index
 * @param rectangle MenuButton rectangle
 */
function handleButtonMounted(index, rectangle) {
    menuButtons[index] = rectangle;
}
exports.handleButtonMounted = handleButtonMounted;
/**
 * Handles the event when a menu pane has been displayed
 * @param index Pane index
 * @param rectangle Pane information
 */
function handlePaneMounted(index, rectangle) {
    panes[index] = rectangle;
}
exports.handlePaneMounted = handlePaneMounted;
/**
 * Hanldes the event when a menu pane item has been displayed
 * @param paneIndex Index of the pane
 * @param itemIndex Index of the item within a pane
 * @param rectangle MenuItem rectangle
 */
function handlePaneItemMounted(paneIndex, itemIndex, rectangle) {
    if (paneItems[paneIndex] === undefined) {
        paneItems[paneIndex] = [];
    }
    paneItems[paneIndex][itemIndex] = rectangle;
}
exports.handlePaneItemMounted = handlePaneItemMounted;
/**
 * Handles the event when a menu item has been pointed.
 */
function handleItemPointed(args) {
    if (lastMouseEntered &&
        lastMouseEntered.depth === args.depth &&
        lastMouseEntered.flatIndex === args.flatIndex) {
        // --- No change, event is raised because of re-rendering
        return;
    }
    lastMouseEntered = args;
    // --- Check for delayed remove
    const state = store.getState().appMenu;
    if (delayedRemove < 0 && args.depth < state.openPanes.length - 1) {
        // --- We're about to remove a displayed submenu pane. Let allow the user move
        // --- with the mouse for a little time before hiding the submenu item.
        delayedRemove = state.openPanes.length - 1;
        lastSubmenuParent = state.openPanes[delayedRemove].parentIndex;
        setTimeout(() => {
            // --- We remove the last submenu if the last mouse point is not on the submenu or
            // --- the parent menu item.
            const state = store.getState().appMenu;
            if (lastMouseEntered &&
                lastMouseEntered.depth < delayedRemove &&
                state.openPanes[delayedRemove - 1].selectedIndex !== lastSubmenuParent) {
                store.dispatch(redux_menu_state_1.menuKeepPaneAction(lastMouseEntered.depth));
            }
            delayedRemove = -1;
        }, 400);
    }
    // --- Select the pointed menu item
    store.dispatch(redux_menu_state_1.menuItemPointAction(args.depth, args.flatIndex));
    let parentIndex = state.openPanes[args.depth].parentIndex;
    for (let i = args.depth - 1; i >= 0; i--) {
        store.dispatch(redux_menu_state_1.menuItemPointAction(i, parentIndex));
        parentIndex = state.openPanes[i].parentIndex;
    }
    // --- Open submenu, if the current item has it -- with a little delay
    setTimeout(() => {
        const subMenuPane = getSubmenuPane();
        if (subMenuPane) {
            store.dispatch(redux_menu_state_1.menuPaneOpenAction(subMenuPane, false));
            return;
        }
    }, 600);
}
exports.handleItemPointed = handleItemPointed;
/**
 * Handles the event when a menu item has been clicked.
 */
function handleItemClicked(args) {
    const state = store.getState().appMenu;
    const item = menu_pane_logic_1.flattenCommandGroup(state.openPanes[args.depth].items)[args.flatIndex];
    if (item.visible && item.enabled) {
        executeMenuItem(item);
    }
}
exports.handleItemClicked = handleItemClicked;
/**
 * Handles the event when a key has been pressed down
 */
function handleKeyDown(ev) {
    if (ev.code === "AltLeft") {
        store.dispatch(actions_1.menuAltPressed());
    }
    // --- No button is pointed, no more action
    const state = store.getState().appMenu;
    if (state.selectedIndex < 0) {
        return;
    }
    // --- From this point on, we use the keyboard.
    // --- Here, we allow the mouse to delay submenu removal.
    delayedRemove = -1;
    // --- "Escape" removes the focus
    if (ev.code === "Escape") {
        store.dispatch(redux_menu_state_1.menuPaneCloseAction());
        return;
    }
    // --- Move one step to left or close the open pane
    if (ev.code === "ArrowLeft") {
        // --- More than one menu pane is open, close the last one
        if (state.openPanes.length > 1) {
            store.dispatch(redux_menu_state_1.menuPaneCloseAction());
            return;
        }
        // --- Move to the left
        let index = state.selectedIndex - 1;
        if (index < 0) {
            index = state.menu.items.length - 1;
        }
        // --- Open the pane of the menu button
        const pane = state.openPanes.length > 0 ? getButtonPane(index) : undefined;
        store.dispatch(redux_menu_state_1.menuButtonSetAction(index, pane, true));
        return;
    }
    // --- Move one step to right or open a submenu pane
    if (ev.code === "ArrowRight") {
        // --- Try to open the submenu of the current item and complete if succeeded
        if (tryOpenSubmenuPane()) {
            return;
        }
        // --- We're not in the first menu pane
        if (state.openPanes.length > 1) {
            return;
        }
        // --- We're in the first menu pane, move to the right
        let index = state.selectedIndex + 1;
        if (index > state.menu.items.length - 1) {
            index = 0;
        }
        // --- Open the pane of the menu button
        const pane = state.openPanes.length > 0 ? getButtonPane(index) : undefined;
        store.dispatch(redux_menu_state_1.menuButtonSetAction(index, pane, true));
        lastMouseEntered = undefined;
        return;
    }
    if (ev.code === "Enter") {
        menuItemAction();
        return;
    }
    if (ev.code === "ArrowDown") {
        // --- Open the button's pane, provided none is open
        if (state.openPanes.length === 0) {
            store.dispatch(redux_menu_state_1.menuButtonSetAction(state.selectedIndex, getButtonPane(state.selectedIndex), true));
            return;
        }
        // --- Move down one item
        store.dispatch(redux_menu_state_1.menuItemDownAction());
        return;
    }
    if (ev.code === "ArrowUp") {
        // --- Move up one item
        store.dispatch(redux_menu_state_1.menuItemUpAction());
        return;
    }
    // --- Do we need to check accelarator keys?
    if (!state.highlightAccessKeys) {
        return;
    }
    if (state.openPanes.length > 0) {
        const pane = state.openPanes[state.openPanes.length - 1];
        const pressedIndex = findAccKey(ev.code, menu_pane_logic_1.flattenCommandGroup(pane.items));
        if (pressedIndex >= 0) {
            store.dispatch(redux_menu_state_1.menuItemSelectAction(pressedIndex));
            setTimeout(() => {
                menuItemAction();
            }, 100);
        }
    }
    else {
        // --- We're looking for the accelerator key of a main menu item.
        const pressedIndex = findAccKey(ev.code, state.menu.items);
        if (pressedIndex >= 0) {
            // --- Accelerator key found, set the main menu item to display
            let pane = state.openPanes.length === 0 ? getButtonPane(pressedIndex) : undefined;
            store.dispatch(redux_menu_state_1.menuButtonSetAction(pressedIndex, pane, true));
            return;
        }
    }
}
exports.handleKeyDown = handleKeyDown;
/**
 * Handles the event when a key has been released down
 */
function handleKeyUp(ev) {
    if (ev.code === "AltLeft") {
        store.dispatch(actions_1.menuAltReleased());
    }
}
exports.handleKeyUp = handleKeyUp;
/**
 * Handles the event when the mouse enters a menu button.
 * @param index Button index
 */
function handleButtonMouseEnter(index) {
    const state = store.getState().appMenu;
    const pane = state.openPanes.length > 0 ? getButtonPane(index) : undefined;
    store.dispatch(redux_menu_state_1.menuButtonSetAction(index, pane, false));
    lastMouseEntered = undefined;
}
exports.handleButtonMouseEnter = handleButtonMouseEnter;
/**
 * Handles the event when a menu button is clicked.
 * @param index button index
 */
function handleButtonClick(index) {
    store.dispatch(redux_menu_state_1.menuButtonClickAction(store.getState().appMenu.openPanes.length > 0
        ? undefined
        : getButtonPane(index), index));
}
exports.handleButtonClick = handleButtonClick;
// ============================================================================
// Helpers
/**
 * Try to opens the submenu pane of the current item.
 * @returns True, if submenu opened; otherwise, false
 */
function tryOpenSubmenuPane() {
    const subMenuPane = getSubmenuPane();
    if (subMenuPane) {
        store.dispatch(redux_menu_state_1.menuPaneOpenAction(subMenuPane, true));
        lastMouseEntered = undefined;
        return true;
    }
    return false;
}
/**
 * Gets the menu pain information for the specified button.
 * @param button Button to get the pane information for
 */
function getButtonPane(index) {
    const state = store.getState().appMenu;
    const buttonRect = menuButtons[index];
    const pane = {
        id: nextPaneId++,
        parentIndex: -1,
        items: state.menu.items[index].items,
        leftPos: buttonRect.left,
        topPos: buttonRect.top + buttonRect.height,
        selectedIndex: -1
    };
    if (state.keyboardAction) {
        setFirstMenuItemIndex(pane);
    }
    return pane;
}
/**
 * Gets the pane information about the currently pointed submenu item.
 */
function getSubmenuPane() {
    const state = store.getState().appMenu;
    if (state.openPanes.length === 0) {
        // --- No menu panes open
        return null;
    }
    const pane = state.openPanes.slice(0).pop();
    if (pane.selectedIndex < 0) {
        // --- No selected item
        return null;
    }
    const item = menu_pane_logic_1.flattenCommandGroup(pane.items)[pane.selectedIndex];
    if (item.items.length === 0) {
        // --- Selected item is not submenu
        return null;
    }
    // --- Create the new menu pane
    const position = getSelectedItemPosition();
    if (!position) {
        return null;
    }
    // --- Get MenuPane position
    const paneDim = panes[state.openPanes.length - 1];
    const newPane = {
        id: nextPaneId++,
        parentIndex: pane.selectedIndex,
        items: item.items,
        leftPos: pane.leftPos + paneDim.width,
        topPos: position.top + paneDim.top - 8,
        selectedIndex: -1
    };
    if (state.keyboardAction) {
        setFirstMenuItemIndex(newPane);
    }
    return newPane;
}
/**
 * Gets the position of the selected item
 * @returns Left and top position of the selected item, if there is any
 * item selected; otherwise, null.
 */
function getSelectedItemPosition() {
    const state = store.getState().appMenu;
    if (state.openPanes.length === 0) {
        return null;
    }
    const pane = state.openPanes.slice(0).pop();
    if (pane.selectedIndex < 0) {
        return null;
    }
    const flattened = menu_pane_logic_1.flattenCommandGroup(pane.items);
    const { left, top } = paneItems[state.openPanes.length - 1][flattened[pane.selectedIndex].index];
    return {
        left,
        top
    };
}
/**
 * Gets the index of the first available menu item
 * @param pane Menu pane information
 */
function setFirstMenuItemIndex(pane) {
    const items = menu_pane_logic_1.flattenCommandGroup(pane.items);
    let selectedIndex = -1;
    for (let i = 0; i < items.length; i++) {
        if (!items[i].separator && items[i].enabled) {
            selectedIndex = i;
            break;
        }
    }
    pane.selectedIndex = selectedIndex;
}
/**
 * Finds the item that has a particular access key.
 * @param code Access key code
 * @param items Items to search
 */
function findAccKey(code, items) {
    code = code.toLowerCase();
    return items.findIndex(item => item.accessKey &&
        ("key" + item.accessKey.toLowerCase() === code ||
            "digit" + item.accessKey.toLowerCase() === code ||
            "numpad" + item.accessKey.toLowerCase() === code));
}
/**
 * Executes the action of the currently selected menu item
 */
function menuItemAction() {
    // --- Try to open the submenu of the current item and complete if succeeded
    if (tryOpenSubmenuPane()) {
        return;
    }
    // --- Open the top level menu pane
    const state = store.getState().appMenu;
    if (state.openPanes.length === 0) {
        store.dispatch(redux_menu_state_1.menuButtonSetAction(state.selectedIndex, getButtonPane(state.selectedIndex), true));
        return;
    }
    // --- Get the current menu item
    const pane = state.openPanes[state.openPanes.length - 1];
    if (pane.selectedIndex < 0) {
        // --- No selected item
        return;
    }
    // --- Execute the selected and enabled menu item.
    executeMenuItem(menu_pane_logic_1.flattenCommandGroup(pane.items)[pane.selectedIndex]);
    return;
}
/**
 * Executes the specified menu item, provided, it is executable.
 * @param item Menu item to executes
 */
function executeMenuItem(item) {
    console.log("executeMenuItem");
    console.log(item);
    if (item.items.length === 0 && !item.separator) {
        store.dispatch(redux_menu_state_1.menuCloseAllAction());
        // executeMenuItem(item.id);
    }
}


/***/ }),

/***/ "./src/renderer/menu/menu-item-logic.ts":
/*!**********************************************!*\
  !*** ./src/renderer/menu/menu-item-logic.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const electron_utils_1 = __webpack_require__(/*! ../../main/utils/electron-utils */ "./src/main/utils/electron-utils.ts");
/**
 * Returns a platform specific human readable version of an Electron
 * accelerator string. See getPlatformSpecificNameOrSymbolForModifier
 * for more information.
 */
function friendlyAcceleratorText(accelerator) {
    return accelerator
        .split("+")
        .map(getPlatformSpecificNameOrSymbolForModifier)
        .join(electron_utils_1.__DARWIN__ ? "" : "+");
    /**
     * Converts Electron accelerator modifiers to their platform specific
     * name or symbol.
     *
     * Example: CommandOrControl becomes either '⌘' or 'Ctrl' depending on platform.
     *
     * See https://github.com/electron/electron/blob/fb74f55/docs/api/accelerator.md
     */
    function getPlatformSpecificNameOrSymbolForModifier(modifier) {
        switch (modifier.toLowerCase()) {
            case "cmdorctrl":
            case "commandorcontrol":
                return electron_utils_1.__DARWIN__ ? "⌘" : "Ctrl";
            case "ctrl":
            case "control":
                return electron_utils_1.__DARWIN__ ? "⌃" : "Ctrl";
            case "shift":
                return electron_utils_1.__DARWIN__ ? "⇧" : "Shift";
            case "alt":
                return electron_utils_1.__DARWIN__ ? "⌥" : "Alt";
            // Mac only
            case "cmd":
            case "command":
                return "⌘";
            case "option":
                return "⌥";
            // Special case space because no one would be able to see it
            case " ":
                return "Space";
        }
        // Not a known modifier, likely a normal key
        return modifier;
    }
}
exports.friendlyAcceleratorText = friendlyAcceleratorText;


/***/ }),

/***/ "./src/renderer/menu/menu-pane-logic.ts":
/*!**********************************************!*\
  !*** ./src/renderer/menu/menu-pane-logic.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ui_menu_item_1 = __webpack_require__(/*! ../../shared/menu/ui-menu-item */ "./src/shared/menu/ui-menu-item.ts");
function flattenCommandGroup(items) {
    if (!items)
        return [];
    const flattened = [];
    let lastItemWasGroup = false;
    let groupJustEnded = false;
    let index = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // --- Provide separator between groups
        if ((i > 0 && item.items.length > 0 !== lastItemWasGroup) ||
            groupJustEnded) {
            flattened.push(new ui_menu_item_1.SeparatorMenuItem());
        }
        lastItemWasGroup = item.items.length > 0;
        groupJustEnded = false;
        if (item.items.length > 0) {
            for (let j = 0; j < item.items.length; j++) {
                const subitem = item.items[j];
                flattened.push(Object.assign({}, subitem, { index }));
                index++;
            }
            groupJustEnded = true;
        }
        else {
            flattened.push(Object.assign({}, item, { index }));
            index++;
        }
    }
    return flattened;
}
exports.flattenCommandGroup = flattenCommandGroup;


/***/ }),

/***/ "./src/renderer/rendererProcessStore.ts":
/*!**********************************************!*\
  !*** ./src/renderer/rendererProcessStore.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const app_reducers_1 = __webpack_require__(/*! ../shared/state/app-reducers */ "./src/shared/state/app-reducers.ts");
const redux_core_1 = __webpack_require__(/*! ../shared/state/redux-core */ "./src/shared/state/redux-core.ts");
const StateAwareObject_1 = __webpack_require__(/*! ../shared/state/StateAwareObject */ "./src/shared/state/StateAwareObject.ts");
const spectNetApp = redux_1.combineReducers(app_reducers_1.appReducers);
const initialState = redux_core_1.getInitialStateRenderer();
const store = redux_1.createStore(spectNetApp, initialState, redux_1.applyMiddleware(redux_core_1.forwardToMain));
redux_core_1.replayActionRenderer(store);
/**
 * This is the store we can use in the renderer process
 */
exports.rendererProcessStore = store;
/**
 * Creates an object that is aware about the renderer process store's state
 * @param propName AppState property name
 */
exports.createRendererProcessStateAware = (propName = null) => new StateAwareObject_1.StateAwareObject(exports.rendererProcessStore, propName);


/***/ }),

/***/ "./src/renderer/themes/IconDefs.ts":
/*!*****************************************!*\
  !*** ./src/renderer/themes/IconDefs.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Definition of stock icons
 */
exports.IconDefs = [
    {
        name: "save-state",
        path: "M576 304v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48zm-48-80a79.557 79.557 0 0 1 30.777 6.165L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L17.223 230.165A79.557 79.557 0 0 1 48 224h480zm-48 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm-96 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z",
        width: 576,
        height: 512
    },
    {
        name: "open-state",
        path: "M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z",
        width: 576,
        height: 512
    },
    {
        name: "step-into",
        path: "M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z",
        width: 448,
        height: 512
    },
    {
        name: "step-over",
        path: "M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z",
        width: 512,
        height: 512
    },
    {
        name: "restart",
        path: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z",
        width: 512,
        height: 512
    },
    {
        name: "code",
        path: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z",
        width: 640,
        height: 512
    },
    {
        name: "tape",
        path: "M224 192c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm400 224H380.6c41.5-40.7 67.4-97.3 67.4-160 0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h400c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400-64c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z",
        width: 640,
        height: 512
    },
    {
        name: "sync",
        path: "M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z",
        width: 512,
        height: 512
    },
    {
        name: "try",
        path: "M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16 0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0 1 12 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 0 1 2.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0 0 16 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 0 1 1.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0 0 14 8.02c0-1.65-.67-3.16-1.75-4.25z",
        width: 16,
        height: 16
    },
    {
        name: "unmute",
        path: "M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16 0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0 1 12 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 0 1 2.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0 0 16 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 0 1 1.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0 0 14 8.02c0-1.65-.67-3.16-1.75-4.25z",
        width: 16,
        height: 16
    },
    {
        name: "tools",
        path: "M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z",
        width: 16,
        height: 16
    },
    {
        name: "thums-up",
        path: "M14 14c-.05.69-1.27 1-2 1H5.67L4 14V8c1.36 0 2.11-.75 3.13-1.88 1.23-1.36 1.14-2.56.88-4.13-.08-.5.5-1 1-1 .83 0 2 2.73 2 4l-.02 1.03c0 .69.33.97 1.02.97h2c.63 0 .98.36 1 1l-1 6L14 14zm0-8h-2.02l.02-.98C12 3.72 10.83 0 9 0c-.58 0-1.17.3-1.56.77-.36.41-.5.91-.42 1.41.25 1.48.28 2.28-.63 3.28-1 1.09-1.48 1.55-2.39 1.55H2C.94 7 0 7.94 0 9v4c0 1.06.94 2 2 2h1.72l1.44.86c.16.09.33.14.52.14h6.33c1.13 0 2.84-.5 3-1.88l.98-5.95c.02-.08.02-.14.02-.2-.03-1.17-.84-1.97-2-1.97H14z",
        width: 16,
        height: 16
    },
    {
        name: "thumbs-down",
        path: "M15.98 7.83l-.97-5.95C14.84.5 13.13 0 12 0H5.69c-.2 0-.38.05-.53.14L3.72 1H2C.94 1 0 1.94 0 3v4c0 1.06.94 2.02 2 2h2c.91 0 1.39.45 2.39 1.55.91 1 .88 1.8.63 3.27-.08.5.06 1 .42 1.42.39.47.98.77 1.56.77 1.83 0 3-3.72 3-5.02l-.02-.98h2.04c1.16 0 1.95-.8 1.98-1.97 0-.06.02-.13-.02-.2v-.01zm-1.97 1.19h-1.99c-.7 0-1.03.28-1.03.97l.03 1.03c0 1.27-1.17 4-2 4-.5 0-1.08-.5-1-1 .25-1.58.34-2.78-.89-4.14C6.11 8.75 5.36 8 4 8V2l1.67-1H12c.73 0 1.95.31 2 1l.02.02 1 6c-.03.64-.38 1-1 1h-.01z",
        width: 16,
        height: 16
    },
    {
        name: "three-bars",
        path: "M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z",
        width: 12,
        height: 16
    },
    {
        name: "terminal",
        path: "M7 10h4v1H7v-1zm-3 1l3-3-3-3-.75.75L5.5 8l-2.25 2.25L4 11zm10-8v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v10h12V3z",
        width: 14,
        height: 16
    },
    {
        name: "tasklist",
        path: "M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2 7.09 0 8.5 1.41 3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z",
        width: 16,
        height: 16
    },
    {
        name: "tag",
        path: "M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z",
        width: 14,
        height: 16
    },
    {
        name: "star",
        path: "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z",
        width: 14,
        height: 16
    },
    {
        name: "search",
        path: "M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z",
        width: 16,
        height: 16
    },
    {
        name: "screen-normal",
        path: "M2 4H0V3h2V1h1v2c0 .547-.453 1-1 1zm0 8H0v1h2v2h1v-2c0-.547-.453-1-1-1zm9-2c0 .547-.453 1-1 1H4c-.547 0-1-.453-1-1V6c0-.547.453-1 1-1h6c.547 0 1 .453 1 1v4zM9 7H5v2h4V7zm2 6v2h1v-2h2v-1h-2c-.547 0-1 .453-1 1zm1-10V1h-1v2c0 .547.453 1 1 1h2V3h-2z",
        width: 14,
        height: 16
    },
    {
        name: "screen-full",
        path: "M13 10h1v3c0 .547-.453 1-1 1h-3v-1h3v-3zM1 10H0v3c0 .547.453 1 1 1h3v-1H1v-3zm0-7h3V2H1c-.547 0-1 .453-1 1v3h1V3zm1 1h10v8H2V4zm2 6h6V6H4v4zm6-8v1h3v3h1V3c0-.547-.453-1-1-1h-3z",
        width: 14,
        height: 16
    },
    {
        name: "primitive-square",
        path: "M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z",
        width: 15,
        height: 16
    },
    {
        name: "primitive-dot",
        path: "M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z",
        width: 8,
        height: 16
    },
    {
        name: "plus",
        path: "M12 9H7v5H5V9H0V7h5V2h2v5h5z",
        width: 12,
        height: 16
    },
    {
        name: "plus-small",
        path: "M4 7V4H3v3H0v1h3v3h1V8h3V7H4z",
        width: 7,
        height: 16
    },
    {
        name: "pin-lean",
        path: "M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5 5-4 3.14 3.14a.5.5 0 0 0 .86-.34V10l3-4.5 1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 0 0-.86.34z",
        width: 16,
        height: 16
    },
    {
        name: "package",
        path: "M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z",
        width: 16,
        height: 16
    },
    {
        name: "note",
        path: "M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z",
        width: 14,
        height: 16
    },
    {
        name: "mute",
        path: "M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z",
        width: 16,
        height: 16
    },
    {
        name: "lock",
        path: "M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z",
        width: 12,
        height: 16
    },
    {
        name: "lightbulb",
        path: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z",
        width: 12,
        height: 16
    },
    {
        name: "keyboard",
        path: "M10 5H9V4h1v1zM3 6H2v1h1V6zm5-2H7v1h1V4zM4 4H2v1h2V4zm8 7h2v-1h-2v1zM8 7h1V6H8v1zm-4 3H2v1h2v-1zm8-6h-1v1h1V4zm2 0h-1v1h1V4zm-2 5h2V6h-2v3zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 0H1v9h14V3zM6 7h1V6H6v1zm0-3H5v1h1V4zM4 7h1V6H4v1zm1 4h6v-1H5v1zm5-4h1V6h-1v1zM3 8H2v1h1V8zm5 0v1h1V8H8zM6 8v1h1V8H6zM5 8H4v1h1V8zm5 1h1V8h-1v1z",
        width: 16,
        height: 16
    },
    {
        name: "home",
        path: "M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z",
        width: 16,
        height: 16
    },
    {
        name: "grabber",
        path: "M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z",
        width: 8,
        height: 16
    },
    {
        name: "globe",
        path: "M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14-.17-.08-.2-.73-.02-1.09.19-.41.81-1.45.2-1.8-.61-.35-.44-.5-.81-.91-.37-.41-.22-.47-.25-.58-.08-.34.36-.89.39-.94.02-.06.02-.27 0-.33 0-.08-.27-.22-.34-.23-.06 0-.11.11-.2.13-.09.02-.5-.25-.59-.33-.09-.08-.14-.23-.27-.34-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66-.02-.2-.3-.47-.42-.67-.14-.2-.16-.47-.2-.41-.04.06.25.78.2.81-.05.02-.16-.2-.3-.38-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13-.19-.3 0-.89-.14-1.11-.13-.22-.88.25-.88.25.02-.22.69-.58 1.16-.92.47-.34.78-.06 1.16.05.39.13.41.09.28-.05-.13-.13.06-.17.36-.13.28.05.38.41.83.36.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06.33.22.27.02.5.08.23.06.91.64.91.64-.83.44-.31.48-.17.59.14.11-.28.3-.28.3-.17-.17-.19.02-.3.08-.11.06-.02.22-.02.22-.56.09-.44.69-.42.83 0 .14-.38.36-.47.58-.09.2.25.64.06.66-.19.03-.34-.66-1.31-.41-.3.08-.94.41-.59 1.08.36.69.92-.19 1.11-.09.19.1-.06.53-.02.55.04.02.53.02.56.61.03.59.77.53.92.55.17 0 .7-.44.77-.45.06-.03.38-.28 1.03.09.66.36.98.31 1.2.47.22.16.08.47.28.58.2.11 1.06-.03 1.28.31.22.34-.88 2.09-1.22 2.28-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8 3.14-.7 5.48-3.5 5.48-6.84 0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08-.48-.3-.81-.23-.86-.28 0 0-.05-.11.17-.14.44-.05.98.41 1.11.41.13 0 .19-.13.41-.05.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14.03-.03.02-.11.05-.14.11-.11.61-.25.52.03-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14.3-.28-.09-.38-.34-.38-.25-.02-.34-.16-.22-.19.12-.03.61.02.7.08.08.06.52.25.55.38.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52-.56-.48-.89-.31-1-.41-.11-.1-.08-.19.11-.34.19-.15.69.06 1 .09.3.03.66.27.66.55.02.25.33.5.19.63h-.01z",
        width: 14,
        height: 16
    },
    {
        name: "gist",
        path: "M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z",
        width: 12,
        height: 16
    },
    {
        name: "gear",
        path: "M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
        width: 14,
        height: 16
    },
    {
        name: "file-zip",
        path: "M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM11 14H1V2h3v1h1V2h3l3 3v9zM5 4V3h1v1H5zM4 4h1v1H4V4zm1 2V5h1v1H5zM4 6h1v1H4V6zm1 2V7h1v1H5zM4 9.28A2 2 0 0 0 3 11v1h4v-1a2 2 0 0 0-2-2V8H4v1.28zM6 10v1H4v-1h2z",
        width: 12,
        height: 16
    },
    {
        name: "file-media",
        path: "M6 5h2v2H6V5zm6-.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v11l3-5 2 4 2-2 3 3V5z",
        width: 12,
        height: 16
    },
    {
        name: "directory",
        path: "M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z",
        width: 14,
        height: 16
    },
    {
        name: "file-code",
        path: "M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z",
        width: 12,
        height: 16
    },
    {
        name: "file-binary",
        path: "M4 12h1v1H2v-1h1v-2H2V9h2v3zm8-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5zM8 4H6v1h1v2H6v1h3V7H8V4zM2 4h3v4H2V4zm1 3h1V5H3v2zm3 2h3v4H6V9zm1 3h1v-2H7v2z",
        width: 12,
        height: 16
    },
    {
        name: "file",
        path: "M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z",
        width: 12,
        height: 16
    },
    {
        name: "ellipsis",
        path: "M11 5H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM4 9H2V7h2v2zm3 0H5V7h2v2zm3 0H8V7h2v2z",
        width: 12,
        height: 16
    },
    {
        name: "dash",
        path: "M0 7v2h8V7z",
        width: 8,
        height: 16
    },
    {
        name: "clock",
        path: "M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z",
        width: 14,
        height: 16
    },
    {
        name: "clippy",
        path: "M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z",
        width: 14,
        height: 16
    },
    {
        name: "circleslash",
        path: "M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47 0 3.14-2.56 5.7-5.7 5.7z",
        width: 14,
        height: 16
    },
    {
        name: "checklist",
        path: "M16 8.5l-6 6-3-3L8.5 10l1.5 1.5L14.5 7 16 8.5zM5.7 12.2l.8.8H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v6.5l-.8-.8c-.39-.39-1.03-.39-1.42 0L5.7 10.8a.996.996 0 0 0 0 1.41v-.01zM4 4h5V3H4v1zm0 2h5V5H4v1zm0 2h3V7H4v1zM3 9H2v1h1V9zm0-2H2v1h1V7zm0-2H2v1h1V5zm0-2H2v1h1V3z",
        width: 16,
        height: 16
    },
    {
        name: "check",
        path: "M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z",
        width: 12,
        height: 16
    },
    {
        name: "calendar",
        path: "M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z",
        width: 14,
        height: 16
    },
    {
        name: "bug",
        path: "M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z",
        width: 16,
        height: 16
    },
    {
        name: "browser",
        path: "M5 3h1v1H5V3zM3 3h1v1H3V3zM1 3h1v1H1V3zm12 10H1V5h12v8zm0-9H7V3h6v1zm1-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3z",
        width: 14,
        height: 16
    },
    {
        name: "bookmark",
        path: "M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z",
        width: 10,
        height: 16
    },
    {
        name: "book",
        path: "M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",
        width: 16,
        height: 16
    },
    {
        name: "bell",
        path: "M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z",
        width: 14,
        height: 16
    },
    {
        name: "arrow-left",
        path: "M6 3L0 8l6 5v-3h4V6H6z",
        width: 10,
        height: 16
    },
    {
        name: "arrow-up",
        path: "M5 3L0 9h3v4h4V9h3z",
        width: 10,
        height: 16
    },
    {
        name: "arrow-right",
        path: "M10 8L4 3v3H0v4h4v3z",
        width: 10,
        height: 16
    },
    {
        name: "arrow-down",
        path: "M7 7V3H3v4H0l5 6 5-6z",
        width: 10,
        height: 16
    },
    {
        name: "arrow-small-left",
        path: "M4 7V5L0 8l4 3V9h2V7z",
        width: 6,
        height: 16
    },
    {
        name: "arrow-small-up",
        path: "M3 5L0 9h2v2h2V9h2z",
        width: 6,
        height: 16
    },
    {
        name: "arrow-small-right",
        path: "M6 8L2 5v2H0v2h2v2z",
        width: 6,
        height: 16
    },
    {
        name: "arrow-small-down",
        path: "M4 7V5H2v2H0l3 4 3-4z",
        width: 6,
        height: 16
    },
    {
        name: "close",
        path: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
        width: 352,
        height: 512
    },
    {
        name: "close-lean",
        path: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z",
        width: 10,
        height: 10
    },
    {
        name: "maximize",
        path: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z",
        width: 10,
        height: 10
    },
    {
        name: "minimize",
        path: "M 0,5 10,5 10,6 0,6 Z",
        width: 10,
        height: 10
    },
    {
        name: "restore",
        path: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z",
        width: 10,
        height: 10
    },
    {
        name: "pin",
        path: "M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z",
        width: 384,
        height: 512
    },
    {
        name: "caret-left",
        path: "M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z",
        width: 192,
        height: 512
    },
    {
        name: "caret-up",
        path: "M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z",
        width: 320,
        height: 512
    },
    {
        name: "caret-right",
        path: "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z",
        width: 192,
        height: 512
    },
    {
        name: "caret-down",
        path: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",
        width: 320,
        height: 512
    },
    {
        name: "chevron-left",
        path: "M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5z",
        width: 8,
        height: 16
    },
    {
        name: "chevron-right",
        path: "M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3z",
        width: 8,
        height: 16
    },
    {
        name: "chevron-up",
        path: "M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5z",
        width: 10,
        height: 16
    },
    {
        name: "chevron-down",
        path: "M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6z",
        width: 10,
        height: 16
    },
    {
        name: "square",
        path: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z",
        width: 448,
        height: 512
    },
    {
        name: "play",
        path: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",
        width: 448,
        height: 512
    },
    {
        name: "play-circle",
        path: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z",
        width: 512,
        height: 512
    },
    {
        name: "pause",
        path: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z",
        width: 448,
        height: 512
    },
    {
        name: "stop",
        path: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z",
        width: 448,
        height: 512
    },
    {
        name: "success",
        path: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z",
        width: 448,
        height: 512
    },
    {
        name: "info",
        path: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z",
        width: 14,
        height: 16
    },
    {
        name: "warning",
        path: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
        width: 576,
        height: 512
    },
    {
        name: "submenu-arrow",
        path: "M4.52 12.364L9.879 7 4.52 1.636l.615-.615L11.122 7l-5.986 5.98-.615-.616z",
        width: 14,
        height: 14
    }
];


/***/ }),

/***/ "./src/renderer/themes/ThemeService.ts":
/*!*********************************************!*\
  !*** ./src/renderer/themes/ThemeService.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const IconDefs_1 = __webpack_require__(/*! ./IconDefs */ "./src/renderer/themes/IconDefs.ts");
const LiteEvent_1 = __webpack_require__(/*! ../../shared/menu/utils/LiteEvent */ "./src/shared/menu/utils/LiteEvent.ts");
/**
 * Implements the theme service
 */
class ThemeServiceClass {
    /**
     * Initializes the servise using the provided list of themes and active
     * theme name
     * @param {ITheme[]} themes List of available themes
     * @param {string} themeName Name of the active theme
     */
    constructor() {
        this._themes = [];
        this._activeThemeName = null;
        this._icons = new Map();
        this._themeChanged = new LiteEvent_1.LiteEvent();
        this.reset();
    }
    /**
     * Resets the service to its initial state.
     */
    reset() {
        this._themes = [];
        this._activeThemeName = null;
        this._activeTheme = null;
        this._icons.clear();
        IconDefs_1.IconDefs.forEach(def => this._icons.set(def.name, def));
        this._globalStyleHandler = null;
        this._themeContainer = null;
        this._themeChanged.release();
    }
    /**
     * This event is raised whenever the current theme changes
     */
    get themeChanged() {
        return this._themeChanged;
    }
    /**
     * Gets the active theme
     */
    getActiveTheme() {
        return this._activeTheme;
    }
    /**
     * Gets the value of the specified property
     * @param {string} propName Property name
     */
    getProperty(propName) {
        return this._activeTheme.properties[propName];
    }
    /**
     * Sets the theme to the specified one
     * @param {string} name Active theme name
     */
    setTheme(name) {
        this._activeThemeName = name;
        this._activeTheme = this._getTheme(name);
        this._themeChanged.fire(this._activeTheme);
    }
    /**
     * Registers a new theme
     * @param {ITheme} theme New theme definition
     */
    registerTheme(theme) {
        this._themes.push(theme);
    }
    /**
     * Updates the specified theme
     * @param {string} name Theme name
     * @param {{ [key: string]: string; }} properties Theme properties to merge into an existing theme
     */
    updateTheme(name, properties) {
        const theme = this._getTheme(name);
        theme.properties = {
            ...theme.properties,
            ...properties
        };
        if (name === this._activeThemeName) {
            this._themeChanged.fire(theme);
        }
    }
    /**
     * Gets the specified icon information
     * @param name Icon name
     */
    getIcon(name) {
        const iconInfo = this._icons.get(name);
        if (!iconInfo) {
            throw new Error(`Icon not found: '${name}'`);
        }
        return iconInfo;
    }
    /**
     * Registers the specified icon information
     * @param iconInfo Icon information
     */
    registerIcon(iconInfo) {
        this._icons.set(iconInfo.name, iconInfo);
    }
    /**
     * Registers a global style handler
     * @param handler Handler to register
     */
    registerGlobalStyleHandler(handler) {
        this._globalStyleHandler = handler;
    }
    /**
     * Retrieves the global style handler
     */
    getGlobalStyleHandler() {
        return this._globalStyleHandler;
    }
    /**
     * Registers the element that is the theme container.
     * @param container Theme container element
     */
    registerThemeContainer(container) {
        this._themeContainer = container;
    }
    /**
     * Gets the theme container
     */
    getThemeContainer() {
        return this._themeContainer;
    }
    /**
     * Gets the theme with the specified name
     * @param {string} name Theme name
     */
    _getTheme(name) {
        const theme = this._themes.find(t => t.name === name);
        if (!theme) {
            throw new Error(`Theme not found: '${name}'`);
        }
        return theme;
    }
}
/**
 * The singleton ThemeService instance
 */
exports.ThemeService = new ThemeServiceClass();


/***/ }),

/***/ "./src/renderer/themes/dark-theme.ts":
/*!*******************************************!*\
  !*** ./src/renderer/themes/dark-theme.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This constant value defins the propertief of the 'dark' theme.
 */
exports.darkTheme = {
    name: "dark",
    properties: {
        "--shell-canvas-background-color": "#1E1E1E",
        "--activity-bar-background-color": "#303030",
        "--sidebar-background-color": "#252526",
        "--status-bar-background-color": "#007acc",
        "--status-bar-color": "#ffffff",
        "--icon-default-size": "12",
        "--icon-default-fill": "#ffffff",
        "--titlebar-background-color": "#333333",
        "--titlebar-focused-background-color": "#3c3c3c",
        "--titlebar-text-color": "#cccccc",
        "--titlebar-focused-text-color": "#ffffff",
        "--menu-bar-background-color": "#3c3c3c",
        "--menu-active-background-color": "#505050",
        "--menu-text-color": "#ffffff",
        "--menu-disabled-text-color": "#AAAAAA",
        "--menu-selected-background-color": "#094771",
        "--menu-pane-background-color": "#252526",
        "--menu-pane-shadow": "rgb(0, 0, 0) 0px 2px 4px",
        "--menu-selected-background": "#094771",
        "--menu-selected-text-color": "#ffffff"
        // "--window-frame-border-color": "transparent",
        // "--window-frame-border-width": "0px",
        // "--window-pane-border-color": "transparent",
        // "--window-pane-border-width": "1px",
        // "--window-pane-padding": "0px",
        // "--tab-bar-background-color": "#383838",
        // "--frame-empty-background-color": "#101010",
        // "--caption-inactive-background-color": "#37373d",
        // "--caption-inactive-text-color": "#8a8a8a",
        // "--caption-active-background-color": "#37373d",
        // "--caption-active-text-color": "#ffffff",
        // "--caption-focus-background-color": "#094771",
        // "--caption-focus-color": "#eeeeee",
        // "--icon-default-size": "12",
        // "--icon-default-fill": "#ffffff",
        // "--icon-button-hover-background-color": "#00AAFF",
        // "--icon-button-hover-border-color": "#00AAFF",
        // "--icon-button-disabled-fill": "#707070",
        // "--icon-button-border": "1px solid #007acc",
        // "--icon-button-pressed-border": "1px solid #094771",
        // "--tool-tab-lead-width": "0px",
        // "--tool-tab-active-border-color": "#37373d",
        // "--tool-tab-inactive-border-color": "transparent",
        // "--tool-tab-border-radius": "0 0 0 0",
        // "--tab-inactive-background-color": "transparent",
        // "--tab-inactive-text-color": "#AAAAAA",
        // "--tab-active-background-color": "#1E1E1E",
        // "--tab-active-text-color": "#ffffff",
        // "--tab-hover-background-color": "#1E1E1E",
        // "--tab-hover-text-color": "#00AAFF",
        // "--doc-tab-lead-width": "0px",
        // "--doc-tab-active-border-color": "transparent",
        // "--doc-tab-inactive-border-color": "transparent",
        // "--doc-tab-border-radius": "0 12px 0 0",
        // "--splitter-background-color": "#282828",
        // "--splitter-handle-background-color": "#282828",
        // "--splitter-size": "4px",
        // "--splitter-handle-size": "64px",
        // "--dock-button-background-color": "#101010",
        // "--dock-button-border-color": "#404040",
        // "--dock-button-icon-fill": "#00AAFF",
        // "--suggest-overlay-background-color": "#00AAFF",
        // "--suggest-overlay-text-color": "#ffffff",
        // "--hem-area-background-color": "#282828",
        // "--hem-area-border-color": "transparent",
        // "--hem-tab-border-color": "#AAAAAA",
        // "--hem-tab-border-size": "4px",
        // "--hem-tab-hover-border-color": "#00AAFF",
        // "--hem-tab-text-color": "#8a8a8a",
        // "--tooltip-max-width": "200px",
        // "--tooltip-background-color": "#094771",
        // "--tooltip-text-color": "#ffffff",
        // "--tooltip-border": "0px solid transparent",
        // "--tooltip-border-radius": "4px",
        // "--tooltip-box-shadow": "0 7px 15px -5px rgba(0, 0, 0, 0.4)",
        // "--tooltip-padding": "2px 6px 4px 6px",
        // "--tooltip-arrow-size": "5px",
        // "--tooltip-arrow-offset": "-5px",
        // "--scrollbar-size": "12px",
        // "--scrollbar-background-color": "unset",
        // "--scrollbar-border-radius": "unset",
        // "--scrollbar-thumb-still-color": "unset",
        // "--scrollbar-thumb-color": "#808080",
        // "--scrollbar-thumb-hover-color": "#a0a0a0",
        // "--scrollbar-animation-time": "800ms",
        // "--dialog-border": "1px solid #007acc",
        // "--dialog-caption-background-color": "#094771",
        // "--dialog-caption-text-color": "#ffffff",
        // "--dialog-body-background": "#1E1E1E",
        // "--dialog-button-panel-border": "1px solid #094771",
        // "--dialog-info-background-color": "#383838",
        // "--dialog-error-background-color": "maroon",
        // "--button-border": "1px solid transparent",
        // "--button-background-color": "#094771",
        // "--button-text-color": "#ffffff",
        // "--button-disabled-background-color": "#383838",
        // "--button-disabled-text-color": "#AAAAAA",
        // "--button-focus-border": "1px solid #007acc",
        // "--message-icon-size": "64",
        // "--message-success-color": "green",
        // "--message-warning-color": "orange",
        // "--message-error-color": "red",
        // "--message-info-color": "darkcyan",
        // "--list-hover-color": "#2a2d2e",
        // "--list-selected-color": "#094771",
        // "--tree-arrow-color": "#aaaaaa",
        // "--input-border": "1px solid #007acc",
        // "--input-background-color": "#181818",
        // "--input-text-color": "#ffffff",
        // "--input-invalid-border": "red",
        // "--input-focus-border": "1px solid #009aee",
        // "--input-focus-background-color": "#282828",
        // "--menu-text-color": "#ffffff",
        // "--menu-disabled-text-color": "#AAAAAA",
        // "--menu-active-background-color": "#505050",
        // "--menu-selected-background-color": "#094771",
        // "--menu-pane-background-color": "#252526",
        // "--menu-pane-shadow": "rgb(0, 0, 0) 0px 2px 4px",
        // "--menu-selected-background": "#094771",
        // "--menu-selected-text-color": "#ffffff",
        // "--color-green": "#51c351",
        // "--color-orange": "#f89406",
        // "--color-blue": "#00afff"
    }
};


/***/ }),

/***/ "./src/renderer/themes/light-theme.ts":
/*!********************************************!*\
  !*** ./src/renderer/themes/light-theme.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 'light' theme properties
 */
exports.lightTheme = {
    name: "light",
    properties: {
        "--shell-canvas-background-color": "#f0f0f0",
        "--activity-bar-background-color": "#c8c8c8",
        "--sidebar-background-color": "#c0c0c0",
        "--status-bar-background-color": "#007acc",
        "--status-bar-color": "#c0c0c0",
        "--icon-default-size": "12",
        "--icon-default-fill": "#ffffff",
        "--titlebar-background-color": "#3e3e3e",
        "--titlebar-focused-background-color": "#3c3c3c",
        "--titlebar-text-color": "#dddddd",
        "--titlebar-focused-text-color": "#ffffff",
        "--menu-bar-background-color": "c8c8c8",
        "--menu-active-background-color": "#505050",
        "--menu-text-color": "#ffffff",
        "--menu-disabled-text-color": "#AAAAAA",
        "--menu-selected-background-color": "#094771",
        "--menu-pane-background-color": "#252526",
        "--menu-pane-shadow": "rgb(0, 0, 0) 0px 2px 4px",
        "--menu-selected-background": "#094771",
        "--menu-selected-text-color": "#ffffff",
    }
};


/***/ }),

/***/ "./src/shared/menu/ui-menu-item.ts":
/*!*****************************************!*\
  !*** ./src/shared/menu/ui-menu-item.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LiteEvent_1 = __webpack_require__(/*! ./utils/LiteEvent */ "./src/shared/menu/utils/LiteEvent.ts");
/**
 * Represents an executable menu item with its UI-state information
 */
class UiMenuItem {
    /**
     * Instantiates a new item
     * @param id Unique item identifier
     * @param label Initial label
     * @param role Optional predefined role
     */
    constructor(id, label, role) {
        this.id = id;
        this.role = role;
        this._statusUpdated = new LiteEvent_1.LiteEvent();
        /**
         * Indicates if this item is displayed as a separator.
         */
        this.separator = false;
        /**
         * Is the item enabled?
         */
        this.enabled = true;
        /**
         * Is the item visible?
         */
        this.visible = true;
        /**
         * Subitems within this menu item
         */
        this.items = [];
        if (!id)
            id = `menu-item-${UiMenuItem._nextId++}`;
        this.label = label || "";
        const m = this.label.match(/&([^&])/);
        this.accessKey = m ? m[1] : null;
    }
    /**
     * Instructs the menu item to execute its associated action
     * @param window Host browser window
     * Override this method to specify execution behavior
     */
    onExecute(window) { }
    /**
     * Instructs the menu item to update its status
     * @param window Host browser window
     * Override this method to specify update behavior
     */
    onQueryStatus(window) { }
    /**
     * Sets the "enabled" flag of the item
     * @param enabled "enabled" flag value
     */
    enable(enabled) {
        this.enabled = enabled;
        return this;
    }
    /**
     * Sets the accelerator key of the item
     * @param accelerator Accelerator key
     */
    withAccelerator(accelerator) {
        this.accelerator = accelerator;
        return this;
    }
    /**
     * Appends a new subitem to the existing ones.
     * @param item Item to append.
     */
    append(item) {
        if (item)
            this.items.push(item);
        return this;
    }
    /**
     * Updates the status of the item in the specified browser window
     * @param window Browser window
     */
    updateStatus(window) {
        const oldLabel = this.label;
        const oldEnabled = this.enabled;
        const oldVisible = this.visible;
        const oldChecked = this.checked;
        this.onQueryStatus(window);
        if (oldLabel !== this.label ||
            oldEnabled !== this.enabled ||
            oldVisible !== this.visible ||
            oldChecked !== this.checked) {
            this._statusUpdated.fire(this);
        }
    }
    /**
     * Fires when the status of the command has been updated
     */
    get statusUpdated() {
        return this._statusUpdated;
    }
}
exports.UiMenuItem = UiMenuItem;
// --- Automatic sequential ID
UiMenuItem._nextId = 1;
/**
 * Defines a separator menu item.
 */
class SeparatorMenuItem extends UiMenuItem {
    constructor() {
        super();
        this.separator = true;
    }
}
exports.SeparatorMenuItem = SeparatorMenuItem;
/**
 * Defines a menu item with predefined Electron Shell role
 */
class ElectronShellMenuItem extends UiMenuItem {
    constructor(role, label, accelerator) {
        super(undefined, label, role);
        if (accelerator)
            this.withAccelerator(accelerator);
    }
}
exports.ElectronShellMenuItem = ElectronShellMenuItem;
/**
 * Flattens the specified items of a menu panel
 * @param items Menu panel items to flatten
 */
function flattenMenuPanel(items) {
    const result = [];
    items.forEach(i => {
        if (i.items.length > 0) {
            result.push(...i.items);
        }
        else {
            result.push(i);
        }
    });
    return result;
}
exports.flattenMenuPanel = flattenMenuPanel;


/***/ }),

/***/ "./src/shared/menu/utils/LiteEvent.ts":
/*!********************************************!*\
  !*** ./src/shared/menu/utils/LiteEvent.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class implements a simple multi-subscriber event
 */
class LiteEvent {
    constructor() {
        this._handlers = [];
    }
    /**
     * Adds a new event handler
     * @param handler Handler method
     */
    on(handler) {
        this._handlers.push(handler);
    }
    /**
     * Removes the specified event handler
     * @param handler Handler method
     */
    off(handler) {
        this._handlers = this._handlers.filter(h => h !== handler);
    }
    /**
     * Raises the event
     * @param data Event data
     */
    fire(data) {
        this._handlers.slice(0).forEach(h => h(data));
    }
    /**
     * Number of handlers attached
     */
    get handlers() {
        return this._handlers.length;
    }
    /**
     * Removes all attached event handlers
     */
    release() {
        this._handlers = [];
    }
    /**
     * Exposes the methods to subscribe to the event
     */
    expose() {
        return this;
    }
}
exports.LiteEvent = LiteEvent;


/***/ }),

/***/ "./src/shared/state/StateAwareObject.ts":
/*!**********************************************!*\
  !*** ./src/shared/state/StateAwareObject.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LiteEvent_1 = __webpack_require__(/*! ../menu/utils/LiteEvent */ "./src/shared/menu/utils/LiteEvent.ts");
/**
 * Reprensent an object that is aware of the state of its associated store
 */
class StateAwareObject {
    constructor(store, substateName = null) {
        this.store = store;
        this.substateName = substateName;
        this._onStateChanged = new LiteEvent_1.LiteEvent();
        this._unsubscribeFunc = store.subscribe(() => {
            this.evalState();
        });
    }
    /**
     * Unsubscribes from store state changes
     */
    dispose() {
        this._unsubscribeFunc();
        this._onStateChanged.release();
    }
    /**
     * The current state of the component
     */
    get state() {
        return this._state;
    }
    /**
     * Dispatches and action
     * @param action The action to dispatch
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
    /**
     * Evaluates the current state, if necessary, triggers state
     * changed events.
     */
    evalState() {
        const state = this.store.getState();
        const oldState = this._state;
        this._state = this.extractPartialState(state);
        if (oldState !== this._state) {
            this._onStateChanged.fire(this._state);
        }
    }
    // ==========================================================================
    // Abstract and virtual methods to override
    /**
     * Extracts the partial state from the entire state object
     * @param state Full state object
     */
    extractPartialState(state) {
        return this.substateName
            ? state[this.substateName]
            : state;
    }
    /**
     * This method is called whenever the state behind this component changes.
     * Override this method to respond to those changes.
     * @param oldState Old state
     * @param newState New state
     */
    get onStateChanged() {
        return this._onStateChanged;
    }
}
exports.StateAwareObject = StateAwareObject;


/***/ }),

/***/ "./src/shared/state/actions.ts":
/*!*************************************!*\
  !*** ./src/shared/state/actions.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_core_1 = __webpack_require__(/*! ./redux-core */ "./src/shared/state/redux-core.ts");
function setModalAction() {
    return {
        type: "SET_MODAL"
    };
}
exports.setModalAction = setModalAction;
// /**
//  * Creates an action for setting the main menu
//  * @param menu Menu to set
//  */
// export function setAppMenuAction(menu: IMenu): SpectNetAction {
//   return {
//     type: ActionTypes.SET_MENU,
//     payload: {
//       menu
//     }
//   };
// }
// ============================================================================
// Modal action creators
/**
 * Action that shows a modal dialog
 */
function modalShow() {
    return redux_core_1.createLocalAction("MODAL_SHOW");
}
exports.modalShow = modalShow;
/**
 * Action that hides a modal dialog
 */
function modalHide() {
    return redux_core_1.createLocalAction("MODAL_HIDE");
}
exports.modalHide = modalHide;
// ============================================================================
// Menu action creators
/**
 * Action that handles the AltLeft key down in a menu
 */
function menuAltPressed() {
    return redux_core_1.createLocalAction("MENU_ALT_PRESSED");
}
exports.menuAltPressed = menuAltPressed;
/**
 * Action that handles the AltLeft key up in a menu
 */
function menuAltReleased() {
    return redux_core_1.createLocalAction("MENU_ALT_RELEASED");
}
exports.menuAltReleased = menuAltReleased;
// /**
//  * Action that handles the left arrow key down in a menu
//  */
// export function menuButtonSet(
//   itemIndex: number,
//   pane: MenuPaneInfo,
//   keyboardAction: boolean
// ): SpectNetAction {
//   return createLocalAction(ActionTypes.MENU_BUTTON_SET, {
//     itemIndex,
//     pane,
//     keyboardAction
//   });
// }
/**
 * Action that handles when mouse enters a menu button
 */
function menuButtonMouseEnter(itemIndex) {
    return redux_core_1.createLocalAction("MENU_BUTTON_MOUSE_ENTER", { itemIndex });
}
exports.menuButtonMouseEnter = menuButtonMouseEnter;
/**
 * Action that handles when a menu button is clicked
 */
// export function menuButtonClick(
//   pane: MenuPaneInfo,
//   itemIndex: number
// ): SpectNetAction {
//   return createLocalAction(ActionTypes.MENU_BUTTON_CLICK, { pane, itemIndex });
// }
/**
 * Action that handles when a menu button is clicked
 */
function menuPaneClose() {
    return redux_core_1.createLocalAction("MENU_PANE_CLOSE");
}
exports.menuPaneClose = menuPaneClose;
/**
 * Action that selectes the specified item in the current menu pane
 */
function menuItemSelect(itemIndex) {
    return redux_core_1.createLocalAction("MENU_ITEM_SELECT", { itemIndex });
}
exports.menuItemSelect = menuItemSelect;
/**
 * Action that moves down one item in the current menu pane
 */
function menuItemDown() {
    return redux_core_1.createLocalAction("MENU_ITEM_DOWN");
}
exports.menuItemDown = menuItemDown;
/**
 * Action that moves up one item in the current menu pane
 */
function menuItemUp() {
    return redux_core_1.createLocalAction("MENU_ITEM_UP");
}
exports.menuItemUp = menuItemUp;
// /**
//  * Action that moves up one item in the current menu pane
//  */
// export function menuPaneOpen(
//   pane: MenuPaneInfo,
//   keyboardAction: boolean
// ): SpectNetAction {
//   return createLocalAction(ActionTypes.MENU_PANE_OPEN, {
//     pane,
//     keyboardAction
//   });
// }
/**
 * Action that drops all open panes behind the specified one
 */
function menuKeepPane(paneIndex) {
    return redux_core_1.createLocalAction("MENU_KEEP_PANES", { paneIndex });
}
exports.menuKeepPane = menuKeepPane;
/**
 * Action that moves up one item in the current menu pane
 */
function menuItemPoint(paneIndex, itemIndex) {
    return redux_core_1.createLocalAction("MENU_ITEM_POINT", {
        paneIndex,
        itemIndex
    });
}
exports.menuItemPoint = menuItemPoint;
/**
 * Action that closes all menu panes and deactivetes the menu bar.
 */
function menuCloseAll() {
    return redux_core_1.createLocalAction("MENU_CLOSE_ALL");
}
exports.menuCloseAll = menuCloseAll;
// ============================================================================
// Helpers


/***/ }),

/***/ "./src/shared/state/app-reducers.ts":
/*!******************************************!*\
  !*** ./src/shared/state/app-reducers.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_app_focus_1 = __webpack_require__(/*! ./redux-app-focus */ "./src/shared/state/redux-app-focus.ts");
const redux_window_state_1 = __webpack_require__(/*! ./redux-window-state */ "./src/shared/state/redux-window-state.ts");
const redux_menu_state_1 = __webpack_require__(/*! ./redux-menu-state */ "./src/shared/state/redux-menu-state.ts");
/**
 * The set of reducers we use within this application
 */
exports.appReducers = {
    appHasFocus: redux_app_focus_1.focusStateReducer,
    windowState: redux_window_state_1.windowStateReducer,
    appMenu: redux_menu_state_1.appMenuStateReducer
};


/***/ }),

/***/ "./src/shared/state/redux-app-focus.ts":
/*!*********************************************!*\
  !*** ./src/shared/state/redux-app-focus.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_core_1 = __webpack_require__(/*! ./redux-core */ "./src/shared/state/redux-core.ts");
exports.appGotFocusAction = redux_core_1.createAliasedAction("APP_GOT_FOCUS");
exports.appLostFocusAction = redux_core_1.createAliasedAction("APP_LOST_FOCUS");
/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
function focusStateReducer(state = false, { type }) {
    switch (type) {
        case "APP_GOT_FOCUS":
            return true;
        case "APP_LOST_FOCUS":
            return false;
    }
    return state;
}
exports.focusStateReducer = focusStateReducer;


/***/ }),

/***/ "./src/shared/state/redux-core.ts":
/*!****************************************!*\
  !*** ./src/shared/state/redux-core.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = __webpack_require__(/*! electron */ "electron");
/**
 * This type represents the name of the IPC channel we use when forward main process
 * actions to the renderer process.
 */
const REDUX_ACTION_CHANNEL = "redux-action";
/**
 * The name of the function that serializes the redux state.
 */
const GET_REDUX_STATE_FUNC = "getReduxState";
/**
 * This variable stores the alias registry
 */
exports.aliasRegistry = new Map();
/**
 * Creates an aliased action that is executed only in the main process, and the result
 * is broadcasted to the renderer process.
 * @param type Aliased action type
 * @param actionCreator Aliased action creator
 */
function createAliasedAction(type, actionCreator) {
    if (!actionCreator) {
        actionCreator = () => {
            return { type };
        };
    }
    exports.aliasRegistry.set(type, actionCreator);
    return (...args) => ({
        type: "ALIASED",
        payload: args,
        meta: {
            trigger: type
        }
    });
}
exports.createAliasedAction = createAliasedAction;
/**
 * Creates a local action
 * @param type Action type
 */
function createLocalAction(type, payload) {
    return {
        type,
        payload,
        meta: {
            scope: "local"
        }
    };
}
exports.createLocalAction = createLocalAction;
/**
 * This function is intended to be a redux middleware that allows executing aliased actions.
 *
 * ```typescript
 * const todoApp = combineReducers(reducers);
 *
 * const store = createStore(
 *   todoApp,
 *   initialState, // optional
 *   applyMiddleware(
 *     triggerAlias, // optional, see below
 *     ...otherMiddleware,
 *     forwardToRenderer, // IMPORTANT! This goes last
 *   ),
 * );
 * ```
 */
exports.triggerAlias = store => next => (action) => {
    if (action.type === "ALIASED" && action.meta && action.meta.trigger) {
        const alias = exports.aliasRegistry.get(action.meta.trigger);
        const args = action && action.payload ? [action.payload] : [];
        action = alias(...args);
    }
    return next(action);
};
/**
 * This middleware function forwards the action originated in the main process
 * to the renderer processes of browser windows.
 */
exports.forwardToRenderer = () => next => (action) => {
    if (action.meta && action.meta.scope === "local") {
        return next(action);
    }
    // --- change scope to avoid endless-loop
    const rendererAction = {
        ...action,
        meta: {
            ...action.meta,
            scope: "local"
        }
    };
    // --- Broadcast the action to all renderer processes
    const allWebContents = electron_1.webContents.getAllWebContents();
    allWebContents.forEach(contents => {
        contents.send(REDUX_ACTION_CHANNEL, rendererAction);
    });
    // --- Next middleware element
    return next(action);
};
/**
 * Give renderers a way to sync the current state of the store, but be sure
 * we don't expose any remote objects. In other words, we need our state to
 * be serializable.
 *
 * Refer to https://github.com/electron/electron/blob/master/docs/api/remote.md#remote-objects
 */
function replayActionMain(store) {
    global[GET_REDUX_STATE_FUNC] = () => JSON.stringify(store.getState());
    electron_1.ipcMain.on(REDUX_ACTION_CHANNEL, (event, payload) => {
        store.dispatch(payload);
    });
}
exports.replayActionMain = replayActionMain;
/**
 * Gets the initial redux store state to set the initial contents of the store at the
 * renderer side.
 */
function getInitialStateRenderer() {
    const getReduxState = electron_1.remote.getGlobal(GET_REDUX_STATE_FUNC);
    if (!getReduxState) {
        throw new Error("Could not find reduxState global in main process, did you forget to call replayActionMain?");
    }
    return JSON.parse(getReduxState());
}
exports.getInitialStateRenderer = getInitialStateRenderer;
/**
 * This middleware function forwards actions to the main process, provided they
 * are not local-scoped.
 */
exports.forwardToMain = (store) => (next) => (action) => {
    if (!action.meta || !action.meta.scope || action.meta.scope !== "local") {
        electron_1.ipcRenderer.send(REDUX_ACTION_CHANNEL, action);
        return;
    }
    return next(action);
};
/**
 * Replays the action at the renderer side.
 */
function replayActionRenderer(store) {
    electron_1.ipcRenderer.on(REDUX_ACTION_CHANNEL, (event, payload) => {
        store.dispatch(payload);
    });
}
exports.replayActionRenderer = replayActionRenderer;


/***/ }),

/***/ "./src/shared/state/redux-menu-state.ts":
/*!**********************************************!*\
  !*** ./src/shared/state/redux-menu-state.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_core_1 = __webpack_require__(/*! ./redux-core */ "./src/shared/state/redux-core.ts");
const redux_window_state_1 = __webpack_require__(/*! ./redux-window-state */ "./src/shared/state/redux-window-state.ts");
const menu_pane_logic_1 = __webpack_require__(/*! ../../renderer/menu/menu-pane-logic */ "./src/renderer/menu/menu-pane-logic.ts");
let autoPaneId = -1;
/**
 * Creates an action for setting the main menu
 * @param menu Menu to set
 */
function setAppMenuAction(menu) {
    return {
        type: "SET_MENU",
        payload: {
            menu
        }
    };
}
exports.setAppMenuAction = setAppMenuAction;
/**
 * Creates an action for maximizing the application window
 */
exports.refreshMenuAction = redux_core_1.createAliasedAction("REFRESH_MENU", () => {
    if (redux_window_state_1.appWindow) {
        redux_window_state_1.appWindow.refreshMenu();
    }
    return {
        type: "REFRESH_MENU"
    };
});
/**
 * Action that handles the AltLeft key down in a menu
 */
exports.menuAltPressedAction = redux_core_1.createLocalAction("MENU_ALT_PRESSED");
/**
 * Action that handles the AltLeft key up in a menu
 */
exports.menuAltReleasedAction = redux_core_1.createLocalAction("MENU_ALT_RELEASED");
/**
 * Action that handles the left arrow key down in a menu
 */
function menuButtonSetAction(itemIndex, pane, keyboardAction) {
    return redux_core_1.createLocalAction("MENU_BUTTON_SET", {
        itemIndex,
        pane,
        keyboardAction
    });
}
exports.menuButtonSetAction = menuButtonSetAction;
/**
 * Action that handles when mouse enters a menu button
 */
function menuButtonMouseEnterAction(itemIndex) {
    return redux_core_1.createLocalAction("MENU_BUTTON_MOUSE_ENTER", { itemIndex });
}
exports.menuButtonMouseEnterAction = menuButtonMouseEnterAction;
/**
 * Action that handles when a menu button is clicked
 */
function menuButtonClickAction(pane, itemIndex) {
    return redux_core_1.createLocalAction("MENU_BUTTON_CLICK", { pane, itemIndex });
}
exports.menuButtonClickAction = menuButtonClickAction;
/**
 * Action that handles when a menu button is clicked
 */
function menuPaneCloseAction() {
    return redux_core_1.createLocalAction("MENU_PANE_CLOSE");
}
exports.menuPaneCloseAction = menuPaneCloseAction;
/**
 * Action that selectes the specified item in the current menu pane
 */
function menuItemSelectAction(itemIndex) {
    return redux_core_1.createLocalAction("MENU_ITEM_SELECT", { itemIndex });
}
exports.menuItemSelectAction = menuItemSelectAction;
/**
 * Action that moves down one item in the current menu pane
 */
function menuItemDownAction() {
    return redux_core_1.createLocalAction("MENU_ITEM_DOWN");
}
exports.menuItemDownAction = menuItemDownAction;
/**
 * Action that moves up one item in the current menu pane
 */
function menuItemUpAction() {
    return redux_core_1.createLocalAction("MENU_ITEM_UP");
}
exports.menuItemUpAction = menuItemUpAction;
/**
 * Action that moves up one item in the current menu pane
 */
function menuPaneOpenAction(pane, keyboardAction) {
    return redux_core_1.createLocalAction("MENU_PANE_OPEN", {
        pane,
        keyboardAction
    });
}
exports.menuPaneOpenAction = menuPaneOpenAction;
/**
 * Action that drops all open panes behind the specified one
 */
function menuKeepPaneAction(paneIndex) {
    return redux_core_1.createLocalAction("MENU_KEEP_PANES", { paneIndex });
}
exports.menuKeepPaneAction = menuKeepPaneAction;
/**
 * Action that moves up one item in the current menu pane
 */
function menuItemPointAction(paneIndex, itemIndex) {
    return redux_core_1.createLocalAction("MENU_ITEM_POINT", {
        paneIndex,
        itemIndex
    });
}
exports.menuItemPointAction = menuItemPointAction;
/**
 * Action that closes all menu panes and deactivetes the menu bar.
 */
function menuCloseAllAction() {
    return redux_core_1.createLocalAction("MENU_CLOSE_ALL");
}
exports.menuCloseAllAction = menuCloseAllAction;
/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
function appMenuStateReducer(state = null, { type, payload }) {
    switch (type) {
        case "SET_MENU":
            return { ...state, menu: payload.menu };
        case "MENU_ALT_PRESSED":
            return {
                ...state,
                highlightAccessKeys: getSelectedItem(state) < 0,
                openPanes: [],
                keyboardAction: true
            };
        case "MENU_ALT_RELEASED":
            const itemIndex = getSelectedItem(state) < 0 ? 0 : -1;
            return {
                ...state,
                selectedIndex: itemIndex,
                highlightAccessKeys: itemIndex >= 0,
                keyboardAction: true
            };
        case "MENU_BUTTON_SET":
            return {
                ...state,
                selectedIndex: payload.itemIndex,
                openPanes: payload.pane ? [payload.pane] : [],
                keyboardAction: payload.keyboardAction
            };
        case "MENU_BUTTON_MOUSE_ENTER":
            return {
                ...state,
                selectedIndex: payload.itemIndex,
                keyboardAction: true
            };
        case "MENU_BUTTON_CLICK":
            return {
                ...state,
                selectedIndex: payload.itemIndex,
                openPanes: payload.pane ? [payload.pane] : []
            };
        case "MENU_PANE_CLOSE": {
            const { parentPanes, lastPane } = getOpenMenuPanes(state);
            if (lastPane) {
                return {
                    ...state,
                    openPanes: parentPanes,
                    keyboardAction: true
                };
            }
            else {
                return {
                    ...state,
                    selectedIndex: -1,
                    highlightAccessKeys: false,
                    keyboardAction: true
                };
            }
        }
        case "MENU_ITEM_SELECT": {
            const { parentPanes, lastPane } = getOpenMenuPanes(state);
            if (lastPane) {
                return {
                    ...state,
                    openPanes: [
                        ...parentPanes,
                        { ...lastPane, selectedIndex: payload.itemIndex }
                    ],
                    keyboardAction: true
                };
            }
            break;
        }
        case "MENU_ITEM_DOWN": {
            const { parentPanes, lastPane } = getOpenMenuPanes(state);
            if (lastPane) {
                return {
                    ...state,
                    openPanes: [
                        ...parentPanes,
                        { ...lastPane, selectedIndex: getNextMenuItemIndex(lastPane, 1) }
                    ],
                    keyboardAction: true
                };
            }
            break;
        }
        case "MENU_ITEM_UP": {
            const { parentPanes, lastPane } = getOpenMenuPanes(state);
            if (lastPane) {
                return {
                    ...state,
                    openPanes: [
                        ...parentPanes,
                        { ...lastPane, selectedIndex: getNextMenuItemIndex(lastPane, -1) }
                    ],
                    keyboardAction: true
                };
            }
            break;
        }
        case "MENU_PANE_OPEN":
            return {
                ...state,
                openPanes: [...state.openPanes, payload.pane],
                keyboardAction: payload.keyboardAction
            };
        case "MENU_KEEP_PANES":
            return {
                ...state,
                openPanes: [...state.openPanes.slice(0, payload.paneIndex + 1)],
                keyboardAction: false
            };
        case "MENU_ITEM_POINT": {
            const panes = state.openPanes.slice(0);
            const pane = panes[payload.paneIndex];
            if (pane) {
                const selectedIndex = payload.itemIndex >= 0
                    ? menu_pane_logic_1.flattenCommandGroup(pane.items)[payload.itemIndex].enabled
                        ? payload.itemIndex
                        : -1
                    : -1;
                panes[payload.paneIndex] = {
                    id: autoPaneId--,
                    items: pane.items,
                    parentIndex: pane.parentIndex,
                    leftPos: pane.leftPos,
                    topPos: pane.topPos,
                    selectedIndex
                };
                return {
                    ...state,
                    openPanes: panes,
                    keyboardAction: false
                };
            }
            break;
        }
        case "MENU_CLOSE_ALL":
            return {
                ...state,
                selectedIndex: -1,
                highlightAccessKeys: false,
                openPanes: [],
                keyboardAction: false
            };
    }
    return state;
}
exports.appMenuStateReducer = appMenuStateReducer;
/**
 * Gets the `selectedItem` member of the menu state
 * @param state Menu state
 */
function getSelectedItem(state) {
    return state.selectedIndex === undefined ? -1 : state.selectedIndex;
}
/**
 * Gets the split form of open menu panes. Separates the parent panes from the last
 * menu pane.
 * @param state Menu state
 */
function getOpenMenuPanes(state) {
    const parentPanes = state.openPanes.slice(0);
    const lastPane = parentPanes.length > 0 ? parentPanes.pop() : null;
    return {
        parentPanes,
        lastPane
    };
}
/**
 * Gets the next menu item index
 * @param pane Menu pane information
 * @param step Step (-1: previous item, 1: next item)
 */
function getNextMenuItemIndex(pane, step) {
    const items = menu_pane_logic_1.flattenCommandGroup(pane.items);
    const count = items.length;
    let selectedIndex = pane.selectedIndex;
    for (let i = 1; i < items.length; i++) {
        const nextItemIndex = (pane.selectedIndex + step * i + count) % count;
        const item = items[nextItemIndex];
        if (!item.separator && item.enabled) {
            selectedIndex = nextItemIndex;
            break;
        }
    }
    return selectedIndex;
}


/***/ }),

/***/ "./src/shared/state/redux-window-state.ts":
/*!************************************************!*\
  !*** ./src/shared/state/redux-window-state.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_core_1 = __webpack_require__(/*! ./redux-core */ "./src/shared/state/redux-core.ts");
/**
 * Sets the referencve to the host browser window
 * @param window Host browser window
 */
function setAppWindow(window) {
    exports.appWindow = window;
}
exports.setAppWindow = setAppWindow;
/**
 * Creates an action for maximizing the application window
 */
exports.maximizeAppWindowAction = redux_core_1.createAliasedAction("MAXIMIZE_APP_WINDOW", () => {
    if (exports.appWindow) {
        exports.appWindow.window.maximize();
    }
    return {
        type: "MAXIMIZE_APP_WINDOW"
    };
});
/**
 * Creates an action for minimizing the application window
 */
exports.minimizeAppWindowAction = redux_core_1.createAliasedAction("MINIMIZE_APP_WINDOW", () => {
    if (exports.appWindow) {
        exports.appWindow.window.minimize();
    }
    return {
        type: "MINIMIZE_APP_WINDOW"
    };
});
/**
 * Creates an action for restoring the application window
 */
exports.restoreAppWindowAction = redux_core_1.createAliasedAction("RESTORE_APP_WINDOW", () => {
    if (exports.appWindow) {
        exports.appWindow.window.unmaximize();
    }
    return {
        type: "RESTORE_APP_WINDOW"
    };
});
/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
function windowStateReducer(state = null, { type }) {
    switch (type) {
        case "MAXIMIZE_APP_WINDOW":
            return "maximized";
        case "MINIMIZE_APP_WINDOW":
            return "minimized";
        case "RESTORE_APP_WINDOW":
            return "normal";
    }
    return state;
}
exports.windowStateReducer = windowStateReducer;


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ })

/******/ });
//# sourceMappingURL=renderer.bundle.js.map