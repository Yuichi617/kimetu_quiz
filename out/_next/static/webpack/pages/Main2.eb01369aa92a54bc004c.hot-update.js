webpackHotUpdate_N_E("pages/Main2",{

/***/ "./components/Result.js":
/*!******************************!*\
  !*** ./components/Result.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _static_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/Image */ \"./static/Image.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sugiyamayuichi/Desktop/\\u958B\\u767A/kimetu_quiz/components/Result.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Result = /*#__PURE__*/function (_Component) {\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Result, _Component);\n\n  var _super = _createSuper(Result);\n\n  function Result(props) {\n    var _this;\n\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Result);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isModalOpen: false\n    };\n    return _this;\n  }\n\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Result, [{\n    key: \"handleClicOpen\",\n    value: function handleClicOpen() {\n      this.setState({\n        isModalOpen: true\n      });\n    }\n  }, {\n    key: \"handleClickClose\",\n    value: function handleClickClose() {\n      this.setState({\n        isModalOpen: false\n      });\n    } // 正解数に応じてレンダリング内容を変える.(テキスト)\n\n  }, {\n    key: \"renderRank\",\n    value: function renderRank(num_correct) {\n      if (num_correct < 3) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u9B3C\\u6BBA\\u968A\\u968A\\u58EB\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 5) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u7D99\\u5B50\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 7) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u4E0B\\u5F26\\u306E\\u9B3C\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 9) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u67F1\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 10) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u4E0A\\u5F26\\u306E\\u9B3C\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct === 10) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u7121\\u60E8\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, this);\n      }\n    } // 正解数に応じてレンダリング内容を変える.(図)\n\n  }, {\n    key: \"renderHierarchie\",\n    value: function renderHierarchie(num_correct) {\n      if (num_correct < 3) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"taisi.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 5) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"tuguko.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 7) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"kagen.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 17\n        }, this);\n      } else if (num_correct < 9) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"hasira.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }, this);\n      } else if (num_correct < 10) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"jougen.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this);\n      } else if (num_correct === 10) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"muzan.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }, this);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n        className: \"result\",\n        children: [\"\\u3042\\u306A\\u305F\\u306E\\u6B63\\u89E3\\u6570\\u306F\", this.props.correct, \"\\u554F\\u3067\\u3059\\u3002 \\u3042\\u306A\\u305F\\u306E\\u9B3C\\u6EC5\\u529B\\u306F\\u30FB\\u30FB\\u30FB\", this.renderRank(this.props.correct), this.renderHierarchie(this.props.correct), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"print_answer\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            onClick: this.openModal,\n            children: \"\\u89E3\\u7B54\\u3092\\u307F\\u308B\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"answer-box\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n            className: \"retry_btn\",\n            children: \"\\u518D\\u6311\\u6226\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Result;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nResult = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return state;\n})(Result);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Result);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHQuanM/NjI1ZiJdLCJuYW1lcyI6WyJSZXN1bHQiLCJwcm9wcyIsInN0YXRlIiwiaXNNb2RhbE9wZW4iLCJzZXRTdGF0ZSIsIm51bV9jb3JyZWN0IiwiY29ycmVjdCIsInJlbmRlclJhbmsiLCJyZW5kZXJIaWVyYXJjaGllIiwib3Blbk1vZGFsIiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7QUFFRixrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUNDLGlCQUFXLEVBQUU7QUFBZCxLQUFiO0FBRmM7QUFHakI7Ozs7cUNBRWdCO0FBQ2IsV0FBS0MsUUFBTCxDQUFjO0FBQUNELG1CQUFXLEVBQUU7QUFBZCxPQUFkO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBS0MsUUFBTCxDQUFjO0FBQUNELG1CQUFXLEVBQUU7QUFBZCxPQUFkO0FBQ0QsSyxDQUVIOzs7OytCQUNXRSxXLEVBQWE7QUFDcEIsVUFBSUEsV0FBVyxHQUFHLENBQWxCLEVBQXFCO0FBQ2pCLDRCQUNBO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQTtBQUlDLE9BTEwsTUFLVyxJQUFHQSxXQUFXLEdBQUcsQ0FBakIsRUFBbUI7QUFDMUIsNEJBQ0E7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBO0FBSUMsT0FMTSxNQUtBLElBQUdBLFdBQVcsR0FBRyxDQUFqQixFQUFtQjtBQUMxQiw0QkFDQTtBQUFL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S0FBTCxDQUFXSyxPQUR4QixpR0FHSyxLQUFLQyxVQUFMLENBQWdCLEtBQUtOLEtBQUwsQ0FBV0ssT0FBM0IsQ0FITCxFQUlLLEtBQUtFLGdCQUFMLENBQXNCLEtBQUtQLEtBQUwsQ0FBV0ssT0FBakMsQ0FKTCxlQUtJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0k7QUFBTSxtQkFBTyxFQUFFLEtBQUtHLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQVFJO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFXSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBaUJIOzs7O0VBdkdnQkMsK0M7O0FBMEdyQlYsTUFBTSxHQUFHVywyREFBTyxDQUFDLFVBQUNULEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCRixNQUF4QixDQUFUO0FBQ2VBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXN1bHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL3N0YXRpYy9JbWFnZSdcblxuY2xhc3MgUmVzdWx0IGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNNb2RhbE9wZW46IGZhbHNlfTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljT3BlbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2RhbE9wZW46IHRydWV9KTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGhhbmRsZUNsaWNrQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9kYWxPcGVuOiBmYWxzZX0pO1xuICAgICAgfVxuXG4gICAgLy8g5q2j6Kej5pWw44Gr5b+c44GY44Gm44Os44Oz44OA44Oq44Oz44Kw5YaF5a6544KS5aSJ44GI44KLLijjg4bjgq3jgrnjg4gpXG4gICAgcmVuZGVyUmFuayhudW1fY29ycmVjdCkge1xuICAgICAgICBpZiAobnVtX2NvcnJlY3QgPCAzKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7prLzmrrrpmorpmorlo6vntJo8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9IGVsc2UgaWYobnVtX2NvcnJlY3QgPCA1KXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXRleHQtYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+57aZ5a2Q57SaPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSBlbHNlIGlmKG51bV9jb3JyZWN0IDwgNyl7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC10ZXh0LWJveFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPuS4i+W8puOBrumsvOe0mjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0gZWxzZSBpZihudW1fY29ycmVjdCA8IDkpe1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7mn7HntJo8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9IGVsc2UgaWYobnVtX2NvcnJlY3QgPCAxMCl7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC10ZXh0LWJveFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPuS4iuW8puOBrumsvOe0mjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0gZWxzZSBpZihudW1fY29ycmVjdCA9PT0gMTApe1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7nhKHmg6jntJo8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIC8vIOato+ino+aVsOOBq+W/nOOBmOOBpuODrOODs+ODgOODquODs+OCsOWGheWuueOCkuWkieOBiOOCiy4o5ZuzKVxuICAgIHJlbmRlckhpZXJhcmNoaWUobnVtX2NvcnJlY3QpIHtcbiAgICAgICAgaWYgKG51bV9jb3JyZWN0IDwgMykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWltYWdlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBmbmFtZT1cInRhaXNpLmpwZ1wiIHNpemU9XCI0MDBcIi8+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9IGVsc2UgaWYobnVtX2NvcnJlY3QgPCA1KXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWltYWdlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBmbmFtZT1cInR1Z3Vrby5qcGdcIiBzaXplPVwiNDAwXCIvPlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSBlbHNlIGlmKG51bV9jb3JyZWN0IDwgNyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWltYWdlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgZm5hbWU9XCJrYWdlbi5qcGdcIiBzaXplPVwiNDAwXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0gZWxzZSBpZihudW1fY29ycmVjdCA8IDkpe1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1pbWFnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGZuYW1lPVwiaGFzaXJhLmpwZ1wiIHNpemU9XCI0MDBcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSBlbHNlIGlmKG51bV9jb3JyZWN0IDwgMTApe1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1pbWFnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGZuYW1lPVwiam91Z2VuLmpwZ1wiIHNpemU9XCI0MDBcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSBlbHNlIGlmKG51bV9jb3JyZWN0ID09PSAxMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWltYWdlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgZm5hbWU9XCJtdXphbi5qcGdcIiBzaXplPVwiNDAwXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAg44GC44Gq44Gf44Gu5q2j6Kej5pWw44Gve3RoaXMucHJvcHMuY29ycmVjdH3llY/jgafjgZnjgIJcbiAgICAgICAgICAgICAgICDjgYLjgarjgZ/jga7prLzmu4Xlipvjga/jg7vjg7vjg7tcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSYW5rKHRoaXMucHJvcHMuY29ycmVjdCl9XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySGllcmFyY2hpZSh0aGlzLnByb3BzLmNvcnJlY3QpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpbnRfYW5zd2VyXCIgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+6Kej562U44KS44G/44KLPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWJveFwiID5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV0cnlfYnRuXCIgPuWGjeaMkeaIpjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5SZXN1bHQgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShSZXN1bHQpXG5leHBvcnQgZGVmYXVsdCBSZXN1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Result.js\n");

/***/ })

})