webpackHotUpdate_N_E("pages/Main2",{

/***/ "./components/Result.js":
/*!******************************!*\
  !*** ./components/Result.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _static_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/Image */ \"./static/Image.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sugiyamayuichi/Desktop/\\u958B\\u767A/kimetu_quiz/components/Result.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Result = /*#__PURE__*/function (_Component) {\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Result, _Component);\n\n  var _super = _createSuper(Result);\n\n  function Result(props) {\n    var _this;\n\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Result);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isModalOpen: false\n    };\n    return _this;\n  }\n\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Result, [{\n    key: \"handleClickOpen\",\n    value: function handleClickOpen() {\n      this.setState({\n        isModalOpen: true\n      });\n    }\n  }, {\n    key: \"handleClickClose\",\n    value: function handleClickClose() {\n      this.setState({\n        isModalOpen: false\n      });\n    } // 正解数に応じてレンダリング内容を変える.(テキスト)\n\n  }, {\n    key: \"renderRank\",\n    value: function renderRank(num_correct) {\n      if (num_correct < 3) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u9B3C\\u6BBA\\u968A\\u968A\\u58EB\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 5) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u7D99\\u5B50\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 7) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u4E0B\\u5F26\\u306E\\u9B3C\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 9) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u67F1\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 10) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u4E0A\\u5F26\\u306E\\u9B3C\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct === 10) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-text-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u7121\\u60E8\\u7D1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, this);\n      }\n    } // 正解数に応じてレンダリング内容を変える.(図)\n\n  }, {\n    key: \"renderHierarchie\",\n    value: function renderHierarchie(num_correct) {\n      if (num_correct < 3) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"taisi.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 5) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"tuguko.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, this);\n      } else if (num_correct < 7) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"kagen.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 17\n        }, this);\n      } else if (num_correct < 9) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"hasira.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }, this);\n      } else if (num_correct < 10) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"jougen.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this);\n      } else if (num_correct === 10) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"result-image-box\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_static_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            fname: \"muzan.jpg\",\n            size: \"400\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }, this);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var ans_list = [];\n\n      for (var i = 0; i < 10; i++) {\n        ans_list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"li\", {\n          className: \"ans_set\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: [this.props.question[this.props.q_no[i]].q_sentence, \":\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            children: this.props.question[this.props.q_no[i]].options[this.props.question[this.props.q_no[0]].answer - 1]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }, this));\n      }\n\n      var modal;\n\n      if (this.state.isModalOpen) {\n        modal = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"modal\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n            className: \"modal-inner\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"ul\", {\n              className: \"modal-content\",\n              children: ans_list\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n              className: \"modal-close-btn\",\n              onClick: function onClick() {\n                return _this2.handleClickClose();\n              },\n              children: \"\\u3068\\u3058\\u308B\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 19\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 17\n        }, this);\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n        className: \"result\",\n        children: [\"\\u3042\\u306A\\u305F\\u306E\\u6B63\\u89E3\\u6570\\u306F\", this.props.correct, \"\\u554F\\u3067\\u3059\\u3002 \\u3042\\u306A\\u305F\\u306E\\u9B3C\\u6EC5\\u529B\\u306F\\u30FB\\u30FB\\u30FB\", this.renderRank(this.props.correct), this.renderHierarchie(this.props.correct), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"print_answer\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"span\", {\n            onClick: function onClick() {\n              _this2.handleClickOpen();\n            },\n            children: \"\\u89E3\\u7B54\\u3092\\u307F\\u308B\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 17\n        }, this), modal, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n            className: \"retry_btn\",\n            children: \"\\u518D\\u6311\\u6226\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Result;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nResult = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return state;\n})(Result);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Result);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHQuanM/NjI1ZiJdLCJuYW1lcyI6WyJSZXN1bHQiLCJwcm9wcyIsInN0YXRlIiwiaXNNb2RhbE9wZW4iLCJzZXRTdGF0ZSIsIm51bV9jb3JyZWN0IiwiYW5zX2xpc3QiLCJpIiwicHVzaCIsInF1ZXN0aW9uIiwicV9ubyIsInFfc2VudGVuY2UiLCJvcHRpb25zIiwiYW5zd2VyIiwibW9kYWwiLCJoYW5kbGVDbGlja0Nsb3NlIiwiY29ycmVjdCIsInJlbmRlclJhbmsiLCJyZW5kZXJIaWVyYXJjaGllIiwiaGFuZGxlQ2xpY2tPcGVuIiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7QUFFRixrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUNDLGlCQUFXLEVBQUU7QUFBZCxLQUFiO0FBRmM7QUFHakI7Ozs7c0NBRWdCO0FBQ2IsV0FBS0MsUUFBTCxDQUFjO0FBQUNELG1CQUFXLEVBQUU7QUFBZCxPQUFkO0FBQ0Q7Ozt1Q0FFZTtBQUNkLFdBQUtDLFFBQUwsQ0FBYztBQUFDRCxtQkFBVyxFQUFFO0FBQWQsT0FBZDtBQUNELEssQ0FFSDs7OzsrQkFDV0UsVyxFQUFhO0FBQ3BCLFVBQUlBLFdBQVcsR0FBRyxDQUFsQixFQUFxQjtBQUNqQiw0QkFDQTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREE7QUFJQyxPQUxMLE1BS1csSUFBR0EsV0FBVyxHQUFHLENBQWpCLEVBQW1CO0FBQzFCLDRCQUNBO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FB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QTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREo7QUFZRDs7QUFDSCwwQkFDSTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLHVFQUNhLEtBQUtkLEtBQUwsQ0FBV2UsT0FEeEIsaUdBR0ssS0FBS0MsVUFBTCxDQUFnQixLQUFLaEIsS0FBTCxDQUFXZSxPQUEzQixDQUhMLEVBSUssS0FBS0UsZ0JBQUwsQ0FBc0IsS0FBS2pCLEtBQUwsQ0FBV2UsT0FBakMsQ0FKTCxlQUtJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0k7QUFBTSxtQkFBTyxFQUFFLG1CQUFNO0FBQUMsb0JBQUksQ0FBQ0csZUFBTDtBQUF1QixhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosRUFRS0wsS0FSTCxlQVNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFlSDs7OztFQTlIZ0JNLCtDOztBQWlJckJwQixNQUFNLEdBQUdxQiwyREFBTyxDQUFDLFVBQUNuQixLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QkYsTUFBeEIsQ0FBVDtBQUNlQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVzdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9zdGF0aWMvSW1hZ2UnXG5cbmNsYXNzIFJlc3VsdCBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2lzTW9kYWxPcGVuOiBmYWxzZX07XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tPcGVuKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9kYWxPcGVuOiB0cnVlfSk7XG4gICAgICB9XG4gICAgXG4gICAgaGFuZGxlQ2xpY2tDbG9zZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc01vZGFsT3BlbjogZmFsc2V9KTtcbiAgICAgIH1cblxuICAgIC8vIOato+ino+aVsOOBq+W/nOOBmOOBpuODrOODs+ODgOODquODs+OCsOWGheWuueOCkuWkieOBiOOCiy4o44OG44Kt44K544OIKVxuICAgIHJlbmRlclJhbmsobnVtX2NvcnJlY3QpIHtcbiAgICAgICAgaWYgKG51bV9jb3JyZWN0IDwgMykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXRleHQtYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+6ay85q666ZqK6ZqK5aOr57SaPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSBlbHNlIGlmKG51bV9jb3JyZWN0IDwgNSl7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC10ZXh0LWJveFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPue2meWtkOe0mjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0gZWxzZSBpZihudW1fY29ycmVjdCA8IDcpe1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7kuIvlvKbjga7prLzntJo8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9IGVsc2UgaWYobnVtX2NvcnJlY3QgPCA5KXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXRleHQtYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+5p+x57SaPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSBlbHNlIGlmKG51bV9jb3JyZWN0IDwgMTApe1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtdGV4dC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7kuIrlvKbjga7prLzntJo8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9IGVsc2UgaWYobnVtX2NvcnJlY3QgPT09IDEwKXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXRleHQtYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+54Sh5oOo57SaPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAvLyDmraPop6PmlbDjgavlv5zjgZjjgabjg6zjg7Pjg4Djg6rjg7PjgrDlhoXlrrnjgpLlpInjgYjjgosuKOWbsylcbiAgICByZW5kZXJIaWVyYXJjaGllKG51bV9jb3JyZWN0KSB7XG4gICAgICAgIGlmIChudW1fY29ycmVjdCA8IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1pbWFnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgZm5hbWU9XCJ0YWlzaS5qcGdcIiBzaXplPVwiNDAwXCIvPlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSBlbHNlIGlmKG51bV9jb3JyZWN0IDwgNSl7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1pbWFnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgZm5hbWU9XCJ0dWd1a28uanBnXCIgc2l6ZT1cIjQwMFwiLz5cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0gZWxzZSBpZihudW1fY29ycmVjdCA8IDcpe1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1pbWFnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGZuYW1lPVwia2FnZW4uanBnXCIgc2l6ZT1cIjQwMFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9IGVsc2UgaWYobnVtX2NvcnJlY3QgPCA5KXtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtaW1hZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBmbmFtZT1cImhhc2lyYS5qcGdcIiBzaXplPVwiNDAwXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0gZWxzZSBpZihudW1fY29ycmVjdCA8IDEwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtaW1hZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBmbmFtZT1cImpvdWdlbi5qcGdcIiBzaXplPVwiNDAwXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0gZWxzZSBpZihudW1fY29ycmVjdCA9PT0gMTApe1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1pbWFnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGZuYW1lPVwibXV6YW4uanBnXCIgc2l6ZT1cIjQwMFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICB2YXIgYW5zX2xpc3QgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgYW5zX2xpc3QucHVzaChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYW5zX3NldFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5xdWVzdGlvblt0aGlzLnByb3BzLnFfbm9baV1dLnFfc2VudGVuY2V9Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMucXVlc3Rpb25bdGhpcy5wcm9wcy5xX25vW2ldXS5vcHRpb25zW3RoaXMucHJvcHMucXVlc3Rpb25bdGhpcy5wcm9wcy5xX25vWzBdXS5hbnN3ZXItMV19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb2RhbDtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNNb2RhbE9wZW4pe1xuICAgICAgICAgICAgbW9kYWwgPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1pbm5lcic+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fuc19saXN0fVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbW9kYWwtY2xvc2UtYnRuJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrQ2xvc2UoKX0+XG4gICAgICAgICAgICAgICAgICAgICAg44Go44GY44KLXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICAgIOOBguOBquOBn+OBruato+ino+aVsOOBr3t0aGlzLnByb3BzLmNvcnJlY3R95ZWP44Gn44GZ44CCXG4gICAgICAgICAgICAgICAg44GC44Gq44Gf44Gu6ay85ruF5Yqb44Gv44O744O744O7XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUmFuayh0aGlzLnByb3BzLmNvcnJlY3QpfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckhpZXJhcmNoaWUodGhpcy5wcm9wcy5jb3JyZWN0KX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW50X2Fuc3dlclwiID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlQ2xpY2tPcGVuKCl9fT7op6PnrZTjgpLjgb/jgos8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge21vZGFsfVxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV0cnlfYnRuXCIgPuWGjeaMkeaIpjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5SZXN1bHQgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShSZXN1bHQpXG5leHBvcnQgZGVmYXVsdCBSZXN1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Result.js\n");

/***/ })

})