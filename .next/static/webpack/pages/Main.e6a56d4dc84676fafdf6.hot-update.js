webpackHotUpdate_N_E("pages/Main",{

/***/ "./pages/Main.js":
/*!***********************!*\
  !*** ./pages/Main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Question */ \"./components/Question.js\");\n/* harmony import */ var _components_Choice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Choice */ \"./components/Choice.js\");\n/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Result */ \"./components/Result.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sugiyamayuichi/Desktop/\\u958B\\u767A/kimetu_quiz/pages/Main.js\";\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar Main = /*#__PURE__*/function (_Component) {\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Main, _Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Main);\n\n    _this = _super.call(this, props);\n    _this.doAction = _this.doAction.bind(Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.flg = true;\n    return _this;\n  }\n\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Main, [{\n    key: \"doAction\",\n    value: function doAction() {\n      //選択肢のチェックを外す\n      var _iterator = _createForOfIteratorHelper(document.getElementsByName('option')),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var element = _step.value;\n          element.checked = false;\n        } //ストアに回答データを登録\n\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      if (this.props.select == this.props.question[this.props.q_no[this.props.i]].answer) {\n        this.props.dispatch({\n          type: 'CORRECT'\n        });\n      } else {\n        this.props.dispatch({\n          type: 'INCORRECT'\n        });\n      } //最終問題の場合結果画面へ遷移\n\n\n      if (this.props.i === 9) {\n        this.flg = false;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        children: this.flg ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          className: \"main-screen\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: \"question_no_box\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n              className: \"question_no\",\n              children: [\"\\u7B2C\", this.props.i + 1, \"\\u554F\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: \"question_box\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_components_Question__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: \"choice_box\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n              className: \"options\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n                className: \"option\",\n                onClick: this.doAction(),\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n                  type: \"radio\",\n                  name: \"option\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 49,\n                  columnNumber: 37\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n                  children: [this.props.question[this.props.q_no[this.props.i]].options[0], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 49,\n                    columnNumber: 142\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 49,\n                  columnNumber: 73\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 33\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n                className: \"option\",\n                onClick: this.doAction(),\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n                  type: \"radio\",\n                  name: \"option\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 37\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n                  children: [this.props.question[this.props.q_no[this.props.i]].options[1], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 142\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 73\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 33\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n                className: \"option\",\n                onClick: this.doAction(),\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n                  type: \"radio\",\n                  name: \"option\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 37\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n                  children: [this.props.question[this.props.q_no[this.props.i]].options[2], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 55,\n                    columnNumber: 142\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 73\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 33\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: \"ans_btn\",\n            onClick: this.doAction,\n            children: \"\\u56DE\\u7B54\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_components_Result__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 16\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_12__[\"Component\"]);\n\nMain = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__[\"connect\"])(function (state) {\n  return state;\n})(Main);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWFpbi5qcz8yZWE4Il0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsImRvQWN0aW9uIiwiYmluZCIsImZsZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJlbGVtZW50IiwiY2hlY2tlZCIsInNlbGVjdCIsInF1ZXN0aW9uIiwicV9ubyIsImkiLCJhbnN3ZXIiLCJkaXNwYXRjaCIsInR5cGUiLCJvcHRpb25zIiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxJOzs7OztBQUVGLGdCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrSkFBaEI7QUFDQSxVQUFLQyxHQUFMLEdBQVcsSUFBWDtBQUhjO0FBSWpCOzs7OytCQUVTO0FBQ047QUFETSxpREFFZ0JDLFFBQVEsQ0FBQ0MsaUJBQVQsQ0FBMkIsUUFBM0IsQ0FGaEI7QUFBQTs7QUFBQTtBQUVOLDREQUE0RDtBQUFBLGNBQWpEQyxPQUFpRDtBQUN4REEsaUJBQU8sQ0FBQ0MsT0FBUixHQUFrQixLQUFsQjtBQUNELFNBSkcsQ0FLTjs7QUFMTTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1OLFVBQUcsS0FBS1AsS0FBTCxDQUFXUSxNQUFYLElBQXFCLEtBQUtSLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQixLQUFLVCxLQUFMLENBQVdVLElBQVgsQ0FBZ0IsS0FBS1YsS0FBTCxDQUFXVyxDQUEzQixDQUFwQixFQUFtREMsTUFBM0UsRUFBa0Y7QUFDOUUsYUFBS1osS0FBTCxDQUFXYSxRQUFYLENBQW9CO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBQXBCO0FBQ0gsT0FGRCxN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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxnQkF3QkYscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUE2Qkg7Ozs7RUF2RGNlLGdEOztBQTBEbkJqQixJQUFJLEdBQUdrQiw0REFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCbkIsSUFBeEIsQ0FBUDtBQUNlQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL01haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXN0aW9uJztcbmltcG9ydCBDaG9pY2UgZnJvbSAnLi4vY29tcG9uZW50cy9DaG9pY2UnO1xuaW1wb3J0IFJlc3VsdCBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdCdcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZsZyA9IHRydWU7XG4gICAgfVxuXG4gICAgZG9BY3Rpb24oKXtcbiAgICAgICAgLy/pgbjmip7ogqLjga7jg4Hjgqfjg4Pjgq/jgpLlpJbjgZlcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdvcHRpb24nKSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAvL+OCueODiOOCouOBq+WbnuetlOODh+ODvOOCv+OCkueZu+mMslxuICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdCA9PSB0aGlzLnByb3BzLnF1ZXN0aW9uW3RoaXMucHJvcHMucV9ub1t0aGlzLnByb3BzLmldXS5hbnN3ZXIpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7IHR5cGU6ICdDT1JSRUNUJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7IHR5cGU6ICdJTkNPUlJFQ1QnfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy/mnIDntYLllY/poYzjga7loLTlkIjntZDmnpznlLvpnaLjgbjpgbfnp7tcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pPT09OSl7XG4gICAgICAgICAgICB0aGlzLmZsZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIHt0aGlzLmZsZyA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25fbm9fYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicXVlc3Rpb25fbm9cIj7nrKx7dGhpcy5wcm9wcy5pICsgMX3llY88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25fYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hvaWNlX2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWzjgIBjbGFzc05hbWU9XCJvcHRpb25cIiBvbkNsaWNrPXt0aGlzLmRvQWN0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRpb25cIiAvPjxzcGFuPnt0aGlzLnByb3BzLnF1ZXN0aW9uW3RoaXMucHJvcHMucV9ub1t0aGlzLnByb3BzLmldXS5vcHRpb25zWzBdfTxici8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwib3B0aW9uXCIgb25DbGljaz17dGhpcy5kb0FjdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uXCIgLz48c3Bhbj57dGhpcy5wcm9wcy5xdWVzdGlvblt0aGlzLnByb3BzLnFfbm9bdGhpcy5wcm9wcy5pXV0ub3B0aW9uc1sxXX08YnIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm9wdGlvblwiIG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb24oKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvblwiIC8+PHNwYW4+e3RoaXMucHJvcHMucXVlc3Rpb25bdGhpcy5wcm9wcy5xX25vW3RoaXMucHJvcHMuaV1dLm9wdGlvbnNbMl19PGJyLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnNfYnRuXCIgb25DbGljaz17dGhpcy5kb0FjdGlvbn0+5Zue562UPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgIDxSZXN1bHQgLz4gfVxuICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuTWFpbiA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1haW4pXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Main.js\n");

/***/ })

})