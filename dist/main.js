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

/***/ "./router.config.js":
/*!**************************!*\
  !*** ./router.config.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar About = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n  return __webpack_require__.e(/*! import() */ \"pages_About_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/About */ \"./pages/About.js\"));\n}, {\n  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Loading...\")\n});\nvar Dashboard = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n  return __webpack_require__.e(/*! import() */ \"pages_Dashboard_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Dashboard */ \"./pages/Dashboard.js\"));\n}, {\n  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Loading...\")\n});\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Layout, null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    index: true,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Home, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"about\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(About, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"dashboard/*\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Dashboard, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"*\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NoMatch, null)\n  })));\n}\n\nfunction Layout() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/about\"\n  }, \"About\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/dashboard/messages\"\n  }, \"Messages (Dashboard)\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null));\n}\n\nfunction Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Home\"));\n}\n\nfunction NoMatch() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Nothing to see here!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/\"\n  }, \"Go to the home page\")));\n}\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(About, \"About\", \"/Users/dingxue/codes/create-react-ssr/router.config.js\");\n  reactHotLoader.register(Dashboard, \"Dashboard\", \"/Users/dingxue/codes/create-react-ssr/router.config.js\");\n  reactHotLoader.register(App, \"App\", \"/Users/dingxue/codes/create-react-ssr/router.config.js\");\n  reactHotLoader.register(Layout, \"Layout\", \"/Users/dingxue/codes/create-react-ssr/router.config.js\");\n  reactHotLoader.register(Home, \"Home\", \"/Users/dingxue/codes/create-react-ssr/router.config.js\");\n  reactHotLoader.register(NoMatch, \"NoMatch\", \"/Users/dingxue/codes/create-react-ssr/router.config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://generator-react-app/./router.config.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process */ \"process\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-cookie */ \"koa-cookie\");\n/* harmony import */ var koa_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa2_proxy_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa2-proxy-middleware */ \"koa2-proxy-middleware\");\n/* harmony import */ var koa2_proxy_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa2_proxy_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/request */ \"./server/utils/request.js\");\n/* harmony import */ var _middleware_exception__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middleware/exception */ \"./server/middleware/exception.js\");\n/* harmony import */ var _middleware_exception__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_middleware_exception__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _template_index_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../template/index.server */ \"./template/index.server.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nlet extractor = null;\n\nasync function createExtractor() {\n  const {\n    body\n  } = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('http://localhost:9000/loadable-stats.json');\n  fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(path__WEBPACK_IMPORTED_MODULE_10___default().resolve(__dirname, '../loadable-client-stats.json'), JSON.stringify(body));\n  extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_6__.ChunkExtractor({\n    statsFile: path__WEBPACK_IMPORTED_MODULE_10___default().resolve(__dirname, '../loadable-client-stats.json') // entrypoints: ['index']\n\n  });\n  (0,path__WEBPACK_IMPORTED_MODULE_10__.resolve)();\n}\n\ncreateExtractor().then(() => {\n  const timeout = 1000 * 100;\n  const proxyOption = {\n    targets: {\n      '/ws': {\n        target: 'ws://localhost:9000',\n        changeOrigin: true,\n        proxyTimeout: timeout\n      },\n      '/': {\n        target: 'http://localhost:9000',\n        changeOrigin: true,\n        proxyTimeout: timeout\n      },\n      '/**/*.js': {\n        target: 'http://localhost:9000',\n        changeOrigin: true,\n        proxyTimeout: timeout\n      },\n      '/**/*.css': {\n        target: 'http://localhost:9000',\n        changeOrigin: true,\n        proxyTimeout: timeout\n      }\n    }\n  };\n  process__WEBPACK_IMPORTED_MODULE_2___default().on('uncaughtException', (err, origin) => {\n    console.log(err, 'process error');\n  });\n  const app = new (koa__WEBPACK_IMPORTED_MODULE_1___default())();\n  app.use((_middleware_exception__WEBPACK_IMPORTED_MODULE_8___default()));\n  app.use(koa_cookie__WEBPACK_IMPORTED_MODULE_3___default()());\n  app.use(koa2_proxy_middleware__WEBPACK_IMPORTED_MODULE_5___default()(proxyOption));\n  app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_4___default()(['json', 'form']));\n  app.use((0,_template_index_server__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(extractor));\n  app.listen(8080, () => {\n    console.log('server listen in 8080');\n  });\n});\n\n//# sourceURL=webpack://generator-react-app/./server/index.js?");

/***/ }),

/***/ "./server/middleware/exception.js":
/*!****************************************!*\
  !*** ./server/middleware/exception.js ***!
  \****************************************/
/***/ ((module) => {

eval("const catchError = async (ctx, next) => {\n  try {\n    await next();\n  } catch (err) {\n    ctx.status = err.status || 500;\n    ctx.body = err.message;\n  }\n};\n\nmodule.exports = catchError;\n\n//# sourceURL=webpack://generator-react-app/./server/middleware/exception.js?");

/***/ }),

/***/ "./server/utils/request.js":
/*!*********************************!*\
  !*** ./server/utils/request.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function request(url, params) {\n  let res;\n  const options = {\n    method: (params === null || params === void 0 ? void 0 : params.method) || 'GET',\n    credentials: 'include',\n    headers: {\n      // 'cache-control': 'no-cache',\n      'content-type': 'application/json'\n    }\n  };\n\n  if (params !== null && params !== void 0 && params.token) {\n    options.headers = { ...options.headers,\n      'X-TOKEN': params === null || params === void 0 ? void 0 : params.token\n    };\n  }\n\n  if (params !== null && params !== void 0 && params.body) {\n    options.body = params.body;\n  }\n\n  try {\n    res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, options);\n  } catch (e) {\n    throw e;\n  }\n\n  const body = await res.json();\n  return {\n    status: res.status,\n    body\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n//# sourceURL=webpack://generator-react-app/./server/utils/request.js?");

/***/ }),

/***/ "./template/index.server.js":
/*!**********************************!*\
  !*** ./template/index.server.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Users_dingxue_codes_create_react_ssr_router_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router.config.js */ \"./router.config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar template = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, '../template/html/index.html'));\nvar context = {};\n\nfunction ssrRender(extractor) {\n  return function (ctx, next) {\n    if (['/', '/about', '/dashboard/messages'].includes(ctx.url)) {\n      var jsx = extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n        location: ctx.url\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Users_dingxue_codes_create_react_ssr_router_config_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n      console.log('jsx', jsx, JSON.stringify(jsx));\n      var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)(jsx);\n      ctx.body = 1; // console.log('html', html)\n      // ctx.status = 200;\n      // ctx.set('Content-Type', 'text/html');\n      // ctx.body = template.replace('<!-- style -->', extractor.getStyleTags())\n      //   .replace('<!-- content -->', html)\n      //   .replace('<!-- script -->', extractor.getScriptTags());\n    }\n  };\n}\n\nvar _default = ssrRender;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(template, \"template\", \"/Users/dingxue/codes/create-react-ssr/template/index.server.js\");\n  reactHotLoader.register(context, \"context\", \"/Users/dingxue/codes/create-react-ssr/template/index.server.js\");\n  reactHotLoader.register(ssrRender, \"ssrRender\", \"/Users/dingxue/codes/create-react-ssr/template/index.server.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/dingxue/codes/create-react-ssr/template/index.server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://generator-react-app/./template/index.server.js?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/server");

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

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("858d4df6687e35164967")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
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