webpackHotUpdate_N_E("pages/Main",{

/***/ "./pages/Main.js":
/*!***********************!*\
  !*** ./pages/Main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _static_Question__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/Question */ \"./static/Question.js\");\n/* harmony import */ var _static_Choice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/Choice */ \"./static/Choice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sugiyamayuichi/Desktop/\\u958B\\u767A/kimetu_quiz/pages/Main.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar Main = /*#__PURE__*/function (_Component) {\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Main, _Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Main);\n\n    _this = _super.call(this, props);\n    _this.doAction = _this.doAction.bind(Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Main, [{\n    key: \"doAction\",\n    value: function doAction(e) {\n      if (this.props.select == this.props.question[this.props.q_no[this.props.i]].answer) {\n        return this.props.dispatch({\n          type: 'CORRECT'\n        });\n      } else {\n        return this.props.dispatch({\n          type: 'INCORRECT'\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          className: \"main-screen\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: \"question_box\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_static_Question__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n              q_sentence: this.props.question[this.props.q_no[this.props.i]].q_sentence\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 24\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 20\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: \"choice_box\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_static_Choice__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              options: this.props.question[this.props.q_no[this.props.i]].options\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 24\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 20\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: \"ans_btn\",\n            onClick: this.doAction,\n            children: \"\\u56DE\\u7B54\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_11__[\"Component\"]);\n\nMain = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__[\"connect\"])()(Main);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWFpbi5qcz8yZWE4Il0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsImRvQWN0aW9uIiwiYmluZCIsImUiLCJzZWxlY3QiLCJxdWVzdGlvbiIsInFfbm8iLCJpIiwiYW5zd2VyIiwiZGlzcGF0Y2giLCJ0eXBlIiwicV9zZW50ZW5jZSIsIm9wdGlvbnMiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBRUYsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtKQUFoQjtBQUZjO0FBR2pCOzs7OzZCQUVRQyxDLEVBQUU7QUFDUCxVQUFHLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxJQUFxQixLQUFLSixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsS0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCLEtBQUtOLEtBQUwsQ0FBV08sQ0FBM0IsQ0FBcEIsRUFBbURDLE1BQTNFLEVBQWtGO0FBQzlFLGVBQU8sS0FBS1IsS0FBTCxDQUFXUyxRQUFYLENBQW9CO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBQXBCLENBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLEtBQUtWLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQjtBQUFFQyxjQUFJLEVBQUU7QUFBUixTQUFwQixDQUFQO0FBQ0g7QUFDSjs7OzZCQUVPO0FBQ0osMEJBQ0kscUVBQUMsMERBQUQ7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGtDQUNHO0FBQUsscUJBQVMsRUFBQyxjQUFmO0FBQUEsbUNBQ0kscUVBQUMsd0RBQUQ7QUFBVSx3QkFBVSxFQUFFLEtBQUtWLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixLQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0IsS0FBS04sS0FBTCxDQUFXTyxDQUEzQixDQUFwQixFQUFtREk7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREgsZUFJRztBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG1DQUNJLHFFQUFDLHVEQUFEO0FBQVEscUJBQU8sRUFBRSxLQUFLWCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsS0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCLEtBQUtOLEtBQUwsQ0FBV08sQ0FBM0IsQ0FBcEIsRUFBbURLO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpILGVBT0k7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBeUIsbUJBQU8sRUFBRSxLQUFLWCxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFhSDs7OztFQTdCY1ksZ0Q7O0FBZ0NuQmQsSUFBSSxHQUFHZSw0REFBTyxHQUFHZixJQUFILENBQWQ7QUFDZUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9NYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi4vc3RhdGljL1F1ZXN0aW9uJztcbmltcG9ydCBDaG9pY2UgZnJvbSAnLi4vc3RhdGljL0Nob2ljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZG9BY3Rpb24gPSB0aGlzLmRvQWN0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZG9BY3Rpb24oZSl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ID09IHRoaXMucHJvcHMucXVlc3Rpb25bdGhpcy5wcm9wcy5xX25vW3RoaXMucHJvcHMuaV1dLmFuc3dlcil7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwYXRjaCh7IHR5cGU6ICdDT1JSRUNUJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOiAnSU5DT1JSRUNUJ30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25fYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbiBxX3NlbnRlbmNlPXt0aGlzLnByb3BzLnF1ZXN0aW9uW3RoaXMucHJvcHMucV9ub1t0aGlzLnByb3BzLmldXS5xX3NlbnRlbmNlfSAvPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hvaWNlX2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlIG9wdGlvbnM9e3RoaXMucHJvcHMucXVlc3Rpb25bdGhpcy5wcm9wcy5xX25vW3RoaXMucHJvcHMuaV1dLm9wdGlvbnN9Lz5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnNfYnRuXCIgb25DbGljaz17dGhpcy5kb0FjdGlvbn0+5Zue562UPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbk1haW4gPSBjb25uZWN0KCkoTWFpbilcbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Main.js\n");

/***/ })

})