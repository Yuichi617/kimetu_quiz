webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/redux-store.js":
/*!****************************!*\
  !*** ./lib/redux-store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ \"./store.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sugiyamayuichi/Desktop/\\u958B\\u767A/kimetu_quiz/lib/redux-store.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar isServer = false;\nvar _NRS_ = \"__NEXT_REDUX_STORE__\";\n\nfunction getOrCreateStore(initialState) {\n  if (isServer) {\n    return Object(_store__WEBPACK_IMPORTED_MODULE_11__[\"initStore\"])(initialState);\n  }\n\n  if (!window[_NRS_]) {\n    window[_NRS_] = Object(_store__WEBPACK_IMPORTED_MODULE_11__[\"initStore\"])(initialState);\n  }\n\n  return window[_NRS_];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (App) {\n  return /*#__PURE__*/function (_Component) {\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(AppWithRedux, _Component);\n\n    var _super = _createSuper(AppWithRedux);\n\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(AppWithRedux, null, [{\n      key: \"getInitialProps\",\n      value: function () {\n        var _getInitialProps = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {\n          var reduxStore, appProps;\n          return _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  reduxStore = getOrCreateStore();\n                  appContext.ctx.reduxStore = reduxStore;\n                  appProps = {};\n\n                  if (!(typeof App.getInitialProps === 'function')) {\n                    _context.next = 7;\n                    break;\n                  }\n\n                  _context.next = 6;\n                  return App.getInitialProps(appContext);\n\n                case 6:\n                  appProps = _context.sent;\n\n                case 7:\n                  return _context.abrupt(\"return\", _objectSpread(_objectSpread({}, appProps), {}, {\n                    initialReduxState: reduxStore.getState()\n                  }));\n\n                case 8:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        function getInitialProps(_x) {\n          return _getInitialProps.apply(this, arguments);\n        }\n\n        return getInitialProps;\n      }()\n    }]);\n\n    function AppWithRedux(props) {\n      var _this;\n\n      Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, AppWithRedux);\n\n      _this = _super.call(this, props);\n      _this.reduxStore = getOrCreateStore(props.initialReduxState);\n      return _this;\n    }\n\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(AppWithRedux, [{\n      key: \"render\",\n      value: function render() {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, this.props), {}, {\n          reduxStore: this.reduxStore\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 20\n        }, this);\n      }\n    }]);\n\n    return AppWithRedux;\n  }(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlZHV4LXN0b3JlLmpzP2JlNjMiXSwibmFtZXMiOlsiaXNTZXJ2ZXIiLCJfTlJTXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0U3RvcmUiLCJ3aW5kb3ciLCJBcHAiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInByb3BzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsUUFBZDtBQUNBLElBQU1DLEtBQUsseUJBQVg7O0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMkJDLFlBQTNCLEVBQXdDO0FBQ3BDLE1BQUdILFFBQUgsRUFBWTtBQUNSLFdBQU9JLHlEQUFTLENBQUNELFlBQUQsQ0FBaEI7QUFDSDs7QUFFRCxNQUFHLENBQUNFLE1BQU0sQ0FBQ0osS0FBRCxDQUFWLEVBQWtCO0FBQ2RJLFVBQU0sQ0FBQ0osS0FBRCxDQUFOLEdBQWdCRyx5REFBUyxDQUFDRCxZQUFELENBQXpCO0FBQ0g7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDSixLQUFELENBQWI7QUFDSDs7QUFFYyx5RUFBQ0ssR0FBRCxFQUFTO0FBQ3BCO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNlVBQ2tDQyxVQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFY0MsNEJBRmQsR0FFMkJOLGdCQUFnQixFQUYzQztBQUdRSyw0QkFBVSxDQUFDRSxHQUFYLENBQWVELFVBQWYsR0FBNEJBLFVBQTVCO0FBQ0lFLDBCQUpaLEdBSXVCLEVBSnZCOztBQUFBLHdCQUtXLE9BQU9KLEdBQUcsQ0FBQ0ssZUFBWCxLQUErQixVQUwxQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQU02QkwsR0FBRyxDQUFDSyxlQUFKLENBQW9CSixVQUFwQixDQU43Qjs7QUFBQTtBQU1ZRywwQkFOWjs7QUFBQTtBQUFBLG1GQVNlQSxRQVRmO0FBVVlFLHFDQUFpQixFQUFFSixVQUFVLENBQUNLLFFBQVg7QUFWL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFjSSwwQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLGdDQUFNQSxLQUFOO0FBQ0EsWUFBS04sVUFBTCxHQUFrQk4sZ0JBQWdCLENBQUNZLEtBQUssQ0FBQ0YsaUJBQVAsQ0FBbEM7QUFGYztBQUdqQjs7QUFqQkw7QUFBQTtBQUFBLCtCQW1CWTtBQUNKLDRCQUFPLHFFQUFDLEdBQUQsa0NBQVMsS0FBS0UsS0FBZDtBQUFxQixvQkFBVSxFQUFFLEtBQUtOO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDSDtBQXJCTDs7QUFBQTtBQUFBLElBQWtDTywrQ0FBbEM7QUF1QkgsQ0F4QkQiLCJmaWxlIjoiLi9saWIvcmVkdXgtc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpbml0U3RvcmV9IGZyb20gJy4uL3N0b3JlJztcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuY29uc3QgX05SU18gPSBgX19ORVhUX1JFRFVYX1NUT1JFX19gXG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUgKGluaXRpYWxTdGF0ZSl7XG4gICAgaWYoaXNTZXJ2ZXIpe1xuICAgICAgICByZXR1cm4gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSlcbiAgICB9XG5cbiAgICBpZighd2luZG93W19OUlNfXSl7XG4gICAgICAgIHdpbmRvd1tfTlJTX10gPSBpbml0U3RvcmUoaW5pdGlhbFN0YXRlKVxuICAgIH1cbiAgICByZXR1cm4gd2luZG93W19OUlNfXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoQXBwKSA9PiB7XG4gICAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIENvbXBvbmVudHtcbiAgICAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoYXBwQ29udGV4dCl7XG4gICAgICAgICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpXG4gICAgICAgICAgICBhcHBDb250ZXh0LmN0eC5yZWR1eFN0b3JlID0gcmVkdXhTdG9yZVxuICAgICAgICAgICAgbGV0IGFwcFByb3BzID0ge31cbiAgICAgICAgICAgIGlmKHR5cGVvZiBBcHAuZ2V0SW5pdGlhbFByb3BzID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uYXBwUHJvcHMsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCl7XG4gICAgICAgICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc30gcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPlxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/redux-store.js\n");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createThunkMiddleware(extraArgument) {\n  return function (_ref) {\n    var dispatch = _ref.dispatch,\n        getState = _ref.getState;\n    return function (next) {\n      return function (action) {\n        if (typeof action === 'function') {\n          return action(dispatch, getState, extraArgument);\n        }\n\n        return next(action);\n      };\n    };\n  };\n}\n\nvar thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (thunk);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2VzL2luZGV4LmpzP2IwODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlLG9FQUFLIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKGV4dHJhQXJndW1lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG52YXIgdGh1bmsgPSBjcmVhdGVUaHVua01pZGRsZXdhcmUoKTtcbnRodW5rLndpdGhFeHRyYUFyZ3VtZW50ID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlO1xuXG5leHBvcnQgZGVmYXVsdCB0aHVuazsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/redux-thunk/es/index.js\n");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n //ステート初期化\n\nvar initial = {\n  message: 'START',\n  count: 0\n}; //レデューサ\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        message: 'INCREMENT',\n        count: state.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        message: 'DECREMENT',\n        count: state.count - 1\n      };\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        count: initial.count\n      };\n\n    default:\n      return state;\n  }\n} //initStore関数\n\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwibWVzc2FnZSIsImNvdW50IiwiY291bnRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBLElBQU1BLE9BQU8sR0FBRztBQUNaQyxTQUFPLEVBQUcsT0FERTtBQUVaQyxPQUFLLEVBQUc7QUFGSSxDQUFoQixDLENBS0E7O0FBQ0EsU0FBU0MsY0FBVCxHQUFpRDtBQUFBLE1BQXhCQyxLQUF3Qix1RUFBaEJKLE9BQWdCO0FBQUEsTUFBUEssTUFBTzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxXQUFMO0FBQ0ksYUFBTTtBQUNGTCxlQUFPLEVBQUUsV0FEUDtBQUVGQyxhQUFLLEVBQUVFLEtBQUssQ0FBQ0YsS0FBTixHQUFjO0FBRm5CLE9BQU47O0FBSUosU0FBSyxXQUFMO0FBQ0ksYUFBTTtBQUNGRCxlQUFPLEVBQUUsV0FEUDtBQUVGQyxhQUFLLEVBQUVFLEtBQUssQ0FBQ0YsS0FBTixHQUFjO0FBRm5CLE9BQU47O0FBSUosU0FBSyxPQUFMO0FBQ0ksYUFBTTtBQUNGRCxlQUFPLEVBQUUsT0FEUDtBQUVGQyxhQUFLLEVBQUVGLE9BQU8sQ0FBQ0U7QUFGYixPQUFOOztBQUlKO0FBQ0ksYUFBT0UsS0FBUDtBQWpCUjtBQW1CSCxDLENBRUQ7OztBQUNPLFNBQVNHLFNBQVQsR0FBaUM7QUFBQSxNQUFkSCxLQUFjLHVFQUFSSixPQUFRO0FBQ3BDLFNBQU9RLHlEQUFXLENBQUNMLGNBQUQsRUFBaUJDLEtBQWpCLEVBQXdCSyw2REFBZSxDQUFDQyxtREFBRCxDQUF2QyxDQUFsQjtBQUNIIiwiZmlsZSI6Ii4vc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxuLy/jgrnjg4bjg7zjg4jliJ3mnJ/ljJZcbmNvbnN0IGluaXRpYWwgPSB7XG4gICAgbWVzc2FnZSA6ICdTVEFSVCcsXG4gICAgY291bnQgOiAwXG59XG5cbi8v44Os44OH44Ol44O844K1XG5mdW5jdGlvbiBjb3VudGVyUmVkdWNlciAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pe1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlICdJTkNSRU1FTlQnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJTkNSRU1FTlQnLFxuICAgICAgICAgICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCArIDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0RFQ1JFTUVOVCc6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0RFQ1JFTUVOVCcsXG4gICAgICAgICAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0gMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnUkVTRVQnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSRVNFVCcsXG4gICAgICAgICAgICAgICAgY291bnQ6IGluaXRpYWwuY291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG4vL2luaXRTdG9yZemWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZShzdGF0ZT1pbml0aWFsKXtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIHN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})