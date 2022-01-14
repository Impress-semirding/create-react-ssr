/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! process */ \"process\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-cookie */ \"koa-cookie\");\n/* harmony import */ var koa_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa2_proxy_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa2-proxy-middleware */ \"koa2-proxy-middleware\");\n/* harmony import */ var koa2_proxy_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa2_proxy_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _middleware_exception__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware/exception */ \"./server/middleware/exception.js\");\n/* harmony import */ var _middleware_exception__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_middleware_exception__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst timeout = 1000 * 100;\nconst proxyOption = {\n  targets: {\n    '/ws': {\n      target: 'ws://localhost:9000',\n      changeOrigin: true,\n      proxyTimeout: timeout\n    },\n    '/': {\n      target: 'http://localhost:9000',\n      changeOrigin: true,\n      proxyTimeout: timeout\n    },\n    '/(.*)': {\n      target: 'http://localhost:9000',\n      changeOrigin: true,\n      proxyTimeout: timeout\n    }\n  }\n};\nprocess__WEBPACK_IMPORTED_MODULE_1___default().on('uncaughtException', (err, origin) => {\n  console.log(err, 'process error');\n});\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\napp.use((_middleware_exception__WEBPACK_IMPORTED_MODULE_5___default()));\napp.use(koa_cookie__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(koa2_proxy_middleware__WEBPACK_IMPORTED_MODULE_4___default()(proxyOption));\napp.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default()(['json', 'form']));\napp.listen(8080, () => {\n  console.log('server listen in 8080');\n});\n\n//# sourceURL=webpack://generator-react-app/./server/index.js?");

/***/ }),

/***/ "./server/middleware/exception.js":
/*!****************************************!*\
  !*** ./server/middleware/exception.js ***!
  \****************************************/
/***/ ((module) => {

eval("const catchError = async (ctx, next) => {\n  try {\n    await next();\n  } catch (err) {\n    ctx.status = err.status || 500;\n    ctx.body = err.message;\n  }\n};\n\nmodule.exports = catchError;\n\n//# sourceURL=webpack://generator-react-app/./server/middleware/exception.js?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-cookie":
/*!*****************************!*\
  !*** external "koa-cookie" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-cookie");

/***/ }),

/***/ "koa2-proxy-middleware":
/*!****************************************!*\
  !*** external "koa2-proxy-middleware" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa2-proxy-middleware");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;