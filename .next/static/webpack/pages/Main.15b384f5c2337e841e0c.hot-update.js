webpackHotUpdate_N_E("pages/Main",{

/***/ "./static/Choice.js":
/*!**************************!*\
  !*** ./static/Choice.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sugiyamayuichi/Desktop/\\u958B\\u767A/kimetu_quiz/static/Choice.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Choice = /*#__PURE__*/function (_Component) {\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Choice, _Component);\n\n  var _super = _createSuper(Choice);\n\n  function Choice(props) {\n    var _this;\n\n    Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Choice);\n\n    _this = _super.call(this, props);\n    _this.myCheck = _this.myCheck.bind(Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_Users_sugiyamayuichi_Desktop_kimetu_quiz_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Choice, [{\n    key: \"myCheck\",\n    value: function myCheck() {\n      var flag = false; // 選択されているか否かを判定するフラグ\n      //　ラジオボタンの数だけ判定を繰り返す（ボタンを表すインプットタグがあるので１引く）\n\n      for (var i = 0; i < document.options.option.length - 1; i++) {\n        // i番目のラジオボタンがチェックされているかを判定\n        if (document.option[i].checked) {\n          flag = true;\n          console.log(document.option[i].value + \"が選択されました。\");\n        }\n      } // 何も選択されていない場合の処理\n\n\n      if (!flag) {\n        alert(\"項目が選択されていません。\");\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n        className: \"options\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n          className: \"option\",\n          onClick: function onClick() {\n            return _this2.props.dispatch({\n              type: 'UPDATE1'\n            });\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n            type: \"radio\",\n            name: \"options\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            children: this.props.question[this.props.q_no[this.props.i]].options[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 58\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n          className: \"option\",\n          onClick: function onClick() {\n            return _this2.props.dispatch({\n              type: 'UPDATE2'\n            });\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n            type: \"radio\",\n            name: \"options\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            children: this.props.question[this.props.q_no[this.props.i]].options[1]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 58\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n          className: \"option\",\n          onClick: function onClick() {\n            return _this2.props.dispatch({\n              type: 'UPDATE3'\n            });\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"input\", {\n            type: \"radio\",\n            name: \"options\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            children: this.props.question[this.props.q_no[this.props.i]].options[2]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 58\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          onClick: this.myCheck,\n          children: \"button\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Choice;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nChoice = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return state;\n})(Choice);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Choice);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGljL0Nob2ljZS5qcz84YWQ4Il0sIm5hbWVzIjpbIkNob2ljZSIsInByb3BzIiwibXlDaGVjayIsImJpbmQiLCJmbGFnIiwiaSIsImRvY3VtZW50Iiwib3B0aW9ucyIsIm9wdGlvbiIsImxlbmd0aCIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJhbGVydCIsImRpc3BhdGNoIiwidHlwZSIsInF1ZXN0aW9uIiwicV9ubyIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLE07Ozs7O0FBRUYsa0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIsK0pBQWY7QUFGYztBQUdqQjs7Ozs4QkFFUTtBQUNMLFVBQUlDLElBQUksR0FBRyxLQUFYLENBREssQ0FDYTtBQUVsQjs7QUFDQyxXQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0MsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxNQUFqQixDQUF3QkMsTUFBeEIsR0FBK0IsQ0FBOUMsRUFBZ0RKLENBQUMsRUFBakQsRUFBb0Q7QUFFaEQ7QUFDQSxZQUFHQyxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JILENBQWhCLEVBQW1CSyxPQUF0QixFQUE4QjtBQUMxQk4sY0FBSSxHQUFHLElBQVA7QUFDQU8saUJBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFRLENBQUNFLE1BQVQsQ0FBZ0JILENBQWhCLEVBQW1CUSxLQUFuQixHQUEyQixXQUF2QztBQUNIO0FBQ0osT0FYRyxDQVlKOzs7QUFDQSxVQUFHLENBQUNULElBQUosRUFBUztBQUNMVSxhQUFLLENBQUMsZUFBRCxDQUFMO0FBQ0g7QUFDTDs7OzZCQUVPO0FBQUE7O0FBQ0osMEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUMsUUFBakI7QUFBMEIsaUJBQU8sRUFBRTtBQUFBLG1CQUFJLE1BQUksQ0FBQ2IsS0FBTCxDQUFXYyxRQUFYLENBQW9CO0FBQUNDLGtCQUFJLEVBQUU7QUFBUCxhQUFwQixDQUFKO0FBQUEsV0FBbkM7QUFBQSxrQ0FDSTtBQUFPLGdCQUFJLEVBQUMsT0FBWjtBQUFvQixnQkFBSSxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFDeUM7QUFBQSxzQkFBTyxLQUFLZixLQUFMLENBQVdnQixRQUFYLENBQW9CLEtBQUtoQixLQUFMLENBQVdpQixJQUFYLENBQWdCLEtBQUtqQixLQUFMLENBQVdJLENBQTNCLENBQXBCLEVBQW1ERSxPQUFuRCxDQUEyRCxDQUEzRDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQU8sbUJBQVMsRUFBQyxRQUFqQjtBQUEwQixpQkFBTyxFQUFFO0FBQUEsbUJBQUksTUFBSSxDQUFDTixLQUFMLENBQVdjLFFBQVgsQ0FBb0I7QUFBQ0Msa0JBQUksRUFBRTtBQUFQLGFBQXBCLENBQUo7QUFBQSxXQUFuQztBQUFBLGtDQUNJO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLGdCQUFJLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUN5QztBQUFBLHNCQUFPLEtBQUtmLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBb0IsS0FBS2hCLEtBQUwsQ0FBV2lCLElBQVgsQ0FBZ0IsS0FBS2pCLEtBQUwsQ0FBV0ksQ0FBM0IsQ0FBcEIsRUFBbURFLE9BQW5ELENBQTJELENBQTNEO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBT0k7QUFBTyxtQkFBUyxFQUFDLFFBQWpCO0FBQTBCLGlCQUFPLEVBQUU7QUFBQSxtQkFBSSxNQUFJLENBQUNOLEtBQUwsQ0FBV2MsUUFBWCxDQUFvQjtBQUFDQyxrQkFBSSxFQUFFO0FBQVAsYUFBcEIsQ0FBSjtBQUFBLFdBQW5DO0FBQUEsa0NBQ0k7QUFBTyxnQkFBSSxFQUFDLE9BQVo7QUFBb0IsZ0JBQUksRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBQ3lDO0FBQUEsc0JBQU8sS0FBS2YsS0FBTCxDQUFXZ0IsUUFBWCxDQUFvQixLQUFLaEIsS0FBTCxDQUFXaUIsSUFBWCxDQUFnQixLQUFLakIsS0FBTCxDQUFXSSxDQUEzQixDQUFwQixFQUFtREUsT0FBbkQsQ0FBMkQsQ0FBM0Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUR6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosZUFVSTtBQUFLLGlCQUFPLEVBQUUsS0FBS0wsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFlSDs7OztFQXpDZ0JpQiwrQzs7QUE0Q3JCbkIsTUFBTSxHQUFHb0IsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QnJCLE1BQXhCLENBQVQ7QUFDZUEscUVBQWYiLCJmaWxlIjoiLi9zdGF0aWMvQ2hvaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgQ2hvaWNlIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMubXlDaGVjayA9IHRoaXMubXlDaGVjay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG15Q2hlY2soKXtcbiAgICAgICAgdmFyIGZsYWcgPSBmYWxzZTsgLy8g6YG45oqe44GV44KM44Gm44GE44KL44GL5ZCm44GL44KS5Yik5a6a44GZ44KL44OV44Op44KwXG4gICBcbiAgICAgICAgLy/jgIDjg6njgrjjgqrjg5zjgr/jg7Pjga7mlbDjgaDjgZHliKTlrprjgpLnubDjgorov5TjgZnvvIjjg5zjgr/jg7PjgpLooajjgZnjgqTjg7Pjg5fjg4Pjg4jjgr/jgrDjgYzjgYLjgovjga7jgafvvJHlvJXjgY/vvIlcbiAgICAgICAgIGZvcih2YXIgaT0wOyBpPGRvY3VtZW50Lm9wdGlvbnMub3B0aW9uLmxlbmd0aC0xO2krKyl7XG4gICAgICBcbiAgICAgICAgICAgICAvLyBp55Wq55uu44Gu44Op44K444Kq44Oc44K/44Oz44GM44OB44Kn44OD44Kv44GV44KM44Gm44GE44KL44GL44KS5Yik5a6aXG4gICAgICAgICAgICAgaWYoZG9jdW1lbnQub3B0aW9uW2ldLmNoZWNrZWQpeyBcbiAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7ICAgIFxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5vcHRpb25baV0udmFsdWUgKyBcIuOBjOmBuOaKnuOBleOCjOOBvuOBl+OBn+OAglwiKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICAvLyDkvZXjgoLpgbjmip7jgZXjgozjgabjgYTjgarjgYTloLTlkIjjga7lh6bnkIZcbiAgICAgICAgIGlmKCFmbGFnKXsgXG4gICAgICAgICAgICAgYWxlcnQoXCLpoIXnm67jgYzpgbjmip7jgZXjgozjgabjgYTjgb7jgZvjgpPjgIJcIik7XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWzjgIBjbGFzc05hbWU9XCJvcHRpb25cIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1VQREFURTEnfSl9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvbnNcIiAvPjxzcGFuPnt0aGlzLnByb3BzLnF1ZXN0aW9uW3RoaXMucHJvcHMucV9ub1t0aGlzLnByb3BzLmldXS5vcHRpb25zWzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJvcHRpb25cIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1VQREFURTInfSl9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvbnNcIiAvPjxzcGFuPnt0aGlzLnByb3BzLnF1ZXN0aW9uW3RoaXMucHJvcHMucV9ub1t0aGlzLnByb3BzLmldXS5vcHRpb25zWzFdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJvcHRpb25cIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1VQREFURTMnfSl9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvbnNcIiAvPjxzcGFuPnt0aGlzLnByb3BzLnF1ZXN0aW9uW3RoaXMucHJvcHMucV9ub1t0aGlzLnByb3BzLmldXS5vcHRpb25zWzJdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5teUNoZWNrfT5idXR0b248L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DaG9pY2UgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShDaG9pY2UpXG5leHBvcnQgZGVmYXVsdCBDaG9pY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/Choice.js\n");

/***/ })

})