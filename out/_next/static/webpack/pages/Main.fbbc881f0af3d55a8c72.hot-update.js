webpackHotUpdate_N_E("pages/Main",{

/***/ "./components/Choice.js":
/*!******************************!*\
  !*** ./components/Choice.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sugiyamayuichi/Desktop/\\u958B\\u767A/kimetu_quiz/components/Choice.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Choice = /*#__PURE__*/function (_Component) {\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Choice, _Component);\n\n  var _super = _createSuper(Choice);\n\n  function Choice(props) {\n    var _this;\n\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Choice);\n\n    _this = _super.call(this, props);\n    _this.doAction = _this.doAction.bind(Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Choice, [{\n    key: \"doAction\",\n    value: function doAction(ans_no) {\n      //ストアに回答データを登録\n      if (ans_no == this.props.question[this.props.q_no[this.props.i]].answer) {\n        this.props.dispatch({\n          type: 'CORRECT'\n        });\n      } else {\n        this.props.dispatch({\n          type: 'INCORRECT'\n        });\n      } //最終問題の場合結果画面へ遷移\n\n\n      if (this.props.i === 9) {\n        this.flg = false;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n        className: \"options\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n          className: \"option\",\n          onClick: this.doAction(1),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n            type: \"radio\",\n            name: \"option\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            children: [this.props.question[this.props.q_no[this.props.i]].options[0], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 126\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 57\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n          className: \"option\",\n          onClick: this.doAction(2),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n            type: \"radio\",\n            name: \"option\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            children: [this.props.question[this.props.q_no[this.props.i]].options[1], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 126\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 57\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n          className: \"option\",\n          onClick: this.doAction(3),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n            type: \"radio\",\n            name: \"option\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            children: [this.props.question[this.props.q_no[this.props.i]].options[2], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 126\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 57\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Choice;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nChoice = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return state;\n})(Choice);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Choice);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaG9pY2UuanM/ZTE5MSJdLCJuYW1lcyI6WyJDaG9pY2UiLCJwcm9wcyIsImRvQWN0aW9uIiwiYmluZCIsImFuc19ubyIsInF1ZXN0aW9uIiwicV9ubyIsImkiLCJhbnN3ZXIiLCJkaXNwYXRjaCIsInR5cGUiLCJmbGciLCJvcHRpb25zIiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsTTs7Ozs7QUFFRixrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0pBQWhCO0FBRmM7QUFHakI7Ozs7NkJBRVFDLE0sRUFBTztBQUNaO0FBQ0EsVUFBR0EsTUFBTSxJQUFHLEtBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixLQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0IsS0FBS0wsS0FBTCxDQUFXTSxDQUEzQixDQUFwQixFQUFtREMsTUFBL0QsRUFBc0U7QUFDbEUsYUFBS1AsS0FBTCxDQUFXUSxRQUFYLENBQW9CO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBQXBCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS1QsS0FBTCxDQUFXUSxRQUFYLENBQW9CO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBQXBCO0FBQ0gsT0FOVyxDQU9aOzs7QUFDQSxVQUFHLEtBQUtULEtBQUwsQ0FBV00sQ0FBWCxLQUFlLENBQWxCLEVBQW9CO0FBQ2hCLGFBQUtJLEdBQUwsR0FBVyxLQUFYO0FBQ0g7QUFDSjs7OzZCQUVPO0FBQ0osMEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUMsUUFBakI7QUFBMEIsaUJBQU8sRUFBRSxLQUFLVCxRQUFMLENBQWMsQ0FBZCxDQUFuQztBQUFBLGtDQUNJO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLGdCQUFJLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUN3QztBQUFBLHVCQUFPLEtBQUtELEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixLQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0IsS0FBS0wsS0FBTCxDQUFXTSxDQUEzQixDQUFwQixFQUFtREssT0FBbkQsQ0FBMkQsQ0FBM0QsQ0FBUCxlQUFxRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQU8sbUJBQVMsRUFBQyxRQUFqQjtBQUEwQixpQkFBTyxFQUFFLEtBQUtWLFFBQUwsQ0FBYyxDQUFkLENBQW5DO0FBQUEsa0NBQ0k7QUFBTyxnQkFBSSxFQUFDLE9BQVo7QUFBb0IsZ0JBQUksRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBQ3dDO0FBQUEsdUJBQU8sS0FBS0QsS0FBTCxDQUFXSSxRQUFYLENBQW9CLEtBQUtKLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQixLQUFLTCxLQUFMLENBQVdNLENBQTNCLENBQXBCLEVBQW1ESyxPQUFuRCxDQUEyRCxDQUEzRCxDQUFQLGVBQXFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBT0k7QUFBTyxtQkFBUyxFQUFDLFFBQWpCO0FBQTBCLGlCQUFPLEVBQUUsS0FBS1YsUUFBTCxDQUFjLENBQWQsQ0FBbkM7QUFBQSxrQ0FDSTtBQUFPLGdCQUFJLEVBQUMsT0FBWjtBQUFvQixnQkFBSSxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFDd0M7QUFBQSx1QkFBTyxLQUFLRCxLQUFMLENBQVdJLFFBQVgsQ0FBb0IsS0FBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCLEtBQUtMLEtBQUwsQ0FBV00sQ0FBM0IsQ0FBcEIsRUFBbURLLE9BQW5ELENBQTJELENBQTNELENBQVAsZUFBcUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFjSDs7OztFQW5DZ0JDLCtDOztBQXNDckJiLE1BQU0sR0FBR2MsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QmYsTUFBeEIsQ0FBVDtBQUNlQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hvaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgQ2hvaWNlIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZG9BY3Rpb24gPSB0aGlzLmRvQWN0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZG9BY3Rpb24oYW5zX25vKXtcbiAgICAgICAgLy/jgrnjg4jjgqLjgavlm57nrZTjg4fjg7zjgr/jgpLnmbvpjLJcbiAgICAgICAgaWYoYW5zX25vPT0gdGhpcy5wcm9wcy5xdWVzdGlvblt0aGlzLnByb3BzLnFfbm9bdGhpcy5wcm9wcy5pXV0uYW5zd2VyKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOiAnQ09SUkVDVCd9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOiAnSU5DT1JSRUNUJ30pO1xuICAgICAgICB9XG4gICAgICAgIC8v5pyA57WC5ZWP6aGM44Gu5aC05ZCI57WQ5p6c55S76Z2i44G46YG356e7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaT09PTkpe1xuICAgICAgICAgICAgdGhpcy5mbGcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVs44CAY2xhc3NOYW1lPVwib3B0aW9uXCIgb25DbGljaz17dGhpcy5kb0FjdGlvbigxKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uXCIgLz48c3Bhbj57dGhpcy5wcm9wcy5xdWVzdGlvblt0aGlzLnByb3BzLnFfbm9bdGhpcy5wcm9wcy5pXV0ub3B0aW9uc1swXX08YnIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJvcHRpb25cIiBvbkNsaWNrPXt0aGlzLmRvQWN0aW9uKDIpfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRpb25cIiAvPjxzcGFuPnt0aGlzLnByb3BzLnF1ZXN0aW9uW3RoaXMucHJvcHMucV9ub1t0aGlzLnByb3BzLmldXS5vcHRpb25zWzFdfTxici8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm9wdGlvblwiIG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb24oMyl9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvblwiIC8+PHNwYW4+e3RoaXMucHJvcHMucXVlc3Rpb25bdGhpcy5wcm9wcy5xX25vW3RoaXMucHJvcHMuaV1dLm9wdGlvbnNbMl19PGJyLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DaG9pY2UgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShDaG9pY2UpXG5leHBvcnQgZGVmYXVsdCBDaG9pY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Choice.js\n");

/***/ })

})