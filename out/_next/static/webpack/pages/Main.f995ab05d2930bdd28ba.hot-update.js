webpackHotUpdate_N_E("pages/Main",{

/***/ "./static/Choice.js":
/*!**************************!*\
  !*** ./static/Choice.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sugiyamayuichi/Desktop/\\u958B\\u767A/kimetu_quiz/static/Choice.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Choice = /*#__PURE__*/function (_Component) {\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Choice, _Component);\n\n  var _super = _createSuper(Choice);\n\n  function Choice(props) {\n    var _this;\n\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Choice);\n\n    _this = _super.call(this, props);\n    _this.selectUpdate = _this.selectUpdate.bind(Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Choice, [{\n    key: \"selectUpdate\",\n    value: function selectUpdate(ans) {\n      if (ans == 1) {\n        return this.props.dispatch({\n          type: 'UPDATE1'\n        });\n      } else if (ans == 2) {\n        return this.props.dispatch({\n          type: 'UPDATE2'\n        });\n      } else if (ans == 3) {\n        return this.props.dispatch({\n          type: 'UPDATE3'\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n        className: \"options\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n          className: \"option\",\n          onClick: function onClick() {\n            return _this2.props.dispatch({\n              type: 'UPDATE1'\n            });\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n            type: \"radio\",\n            name: \"options\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            children: this.props.options[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 58\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n          className: \"option\",\n          onClick: function onClick() {\n            return _this2.props.dispatch({\n              type: 'UPDATE2'\n            });\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n            type: \"radio\",\n            name: \"options\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            children: this.props.options[1]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 58\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n          className: \"option\",\n          onClick: function onClick() {\n            return _this2.props.dispatch({\n              type: 'UPDATE3'\n            });\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n            type: \"radio\",\n            name: \"options\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            children: this.props.options[2]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 58\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Choice;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nChoice = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return state;\n})(Choice);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Choice);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGljL0Nob2ljZS5qcz84YWQ4Il0sIm5hbWVzIjpbIkNob2ljZSIsInByb3BzIiwic2VsZWN0VXBkYXRlIiwiYmluZCIsImFucyIsImRpc3BhdGNoIiwidHlwZSIsIm9wdGlvbnMiLCJDb21wb25lbnQiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxNOzs7OztBQUVGLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtKQUFwQjtBQUZjO0FBR2pCOzs7O2lDQUVZQyxHLEVBQUk7QUFDYixVQUFHQSxHQUFHLElBQUUsQ0FBUixFQUFVO0FBQ04sZUFBTyxLQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0I7QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBcEIsQ0FBUDtBQUNILE9BRkQsTUFFTSxJQUFHRixHQUFHLElBQUUsQ0FBUixFQUFVO0FBQ1osZUFBTyxLQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0I7QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBcEIsQ0FBUDtBQUNILE9BRkssTUFFQSxJQUFHRixHQUFHLElBQUUsQ0FBUixFQUFVO0FBQ1osZUFBTyxLQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0I7QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBcEIsQ0FBUDtBQUNIO0FBQ0o7Ozs2QkFFTztBQUFBOztBQUNKLDBCQUNJO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFDLFFBQWpCO0FBQTBCLGlCQUFPLEVBQUU7QUFBQSxtQkFBSSxNQUFJLENBQUNMLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQjtBQUFDQyxrQkFBSSxFQUFFO0FBQVAsYUFBcEIsQ0FBSjtBQUFBLFdBQW5DO0FBQUEsa0NBQ0k7QUFBTyxnQkFBSSxFQUFDLE9BQVo7QUFBb0IsZ0JBQUksRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBQ3lDO0FBQUEsc0JBQU8sS0FBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CLENBQW5CO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBTyxtQkFBUyxFQUFDLFFBQWpCO0FBQTBCLGlCQUFPLEVBQUU7QUFBQSxtQkFBSSxNQUFJLENBQUNOLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQjtBQUFDQyxrQkFBSSxFQUFFO0FBQVAsYUFBcEIsQ0FBSjtBQUFBLFdBQW5DO0FBQUEsa0NBQ0k7QUFBTyxnQkFBSSxFQUFDLE9BQVo7QUFBb0IsZ0JBQUksRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBQ3lDO0FBQUEsc0JBQU8sS0FBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CLENBQW5CO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBT0k7QUFBTyxtQkFBUyxFQUFDLFFBQWpCO0FBQTBCLGlCQUFPLEVBQUU7QUFBQSxtQkFBSSxNQUFJLENBQUNOLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQjtBQUFDQyxrQkFBSSxFQUFFO0FBQVAsYUFBcEIsQ0FBSjtBQUFBLFdBQW5DO0FBQUEsa0NBQ0k7QUFBTyxnQkFBSSxFQUFDLE9BQVo7QUFBb0IsZ0JBQUksRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBQ3lDO0FBQUEsc0JBQU8sS0FBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CLENBQW5CO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBYUg7Ozs7RUEvQmdCQywrQzs7QUFrQ3JCUixNQUFNLEdBQUdTLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0JWLE1BQXhCLENBQVQ7QUFDZUEscUVBQWYiLCJmaWxlIjoiLi9zdGF0aWMvQ2hvaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgQ2hvaWNlIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0VXBkYXRlID0gdGhpcy5zZWxlY3RVcGRhdGUuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHNlbGVjdFVwZGF0ZShhbnMpe1xuICAgICAgICBpZihhbnM9PTEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFMSd9KTtcbiAgICAgICAgfWVsc2UgaWYoYW5zPT0yKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRpc3BhdGNoKHsgdHlwZTogJ1VQREFURTInfSk7XG4gICAgICAgIH1lbHNlIGlmKGFucz09Myl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwYXRjaCh7IHR5cGU6ICdVUERBVEUzJ30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWzjgIBjbGFzc05hbWU9XCJvcHRpb25cIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1VQREFURTEnfSl9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvbnNcIiAvPjxzcGFuPnt0aGlzLnByb3BzLm9wdGlvbnNbMF19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm9wdGlvblwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVVBEQVRFMid9KX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uc1wiIC8+PHNwYW4+e3RoaXMucHJvcHMub3B0aW9uc1sxXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwib3B0aW9uXCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdVUERBVEUzJ30pfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRpb25zXCIgLz48c3Bhbj57dGhpcy5wcm9wcy5vcHRpb25zWzJdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DaG9pY2UgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShDaG9pY2UpXG5leHBvcnQgZGVmYXVsdCBDaG9pY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/Choice.js\n");

/***/ })

})