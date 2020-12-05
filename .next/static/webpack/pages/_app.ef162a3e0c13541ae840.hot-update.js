webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _static_question_set_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/question_set.json */ \"./static/question_set.json\");\nvar _static_question_set_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/question_set.json */ \"./static/question_set.json\", 1);\n\n\n //ステート初期化\n\nvar result = {\n  q_no: [0, 1, 2, 3, 4],\n  question: _static_question_set_json__WEBPACK_IMPORTED_MODULE_2__,\n  i: 0,\n  correct: 0,\n  incorrect: 0,\n  select: 0\n}; //レデューサ\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'CORRECT':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct + 1,\n        incorrect: state.incorrect,\n        select: 0\n      };\n\n    case 'INCORRECT':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct,\n        incorrect: state.incorrect + 1,\n        select: 0\n      };\n\n    case 'UPDATE1':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 1\n      };\n\n    case 'UPDATE2':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 2\n      };\n\n    case 'UPDATE3':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 3\n      };\n\n    default:\n      return state;\n  }\n} //initStore関数\n\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJyZXN1bHQiLCJxX25vIiwicXVlc3Rpb24iLCJqc29uX2RhdGEiLCJpIiwiY29ycmVjdCIsImluY29ycmVjdCIsInNlbGVjdCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUc7QUFDWEMsTUFBSSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FESTtBQUVYQyxVQUFRLEVBQUdDLHNEQUZBO0FBR1hDLEdBQUMsRUFBRyxDQUhPO0FBSVhDLFNBQU8sRUFBRSxDQUpFO0FBS1hDLFdBQVMsRUFBRSxDQUxBO0FBTVhDLFFBQU0sRUFBRTtBQU5HLENBQWYsQyxDQVNBOztBQUNBLFNBQVNDLGNBQVQsR0FBZ0Q7QUFBQSxNQUF2QkMsS0FBdUIsdUVBQWZULE1BQWU7QUFBQSxNQUFQVSxNQUFPOztBQUM1QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZWLFlBQUksRUFBR1EsS0FBSyxDQUFDUixJQURYO0FBRUZDLGdCQUFRLEVBQUdPLEtBQUssQ0FBQ1AsUUFGZjtBQUdGRSxTQUFDLEVBQUdLLEtBQUssQ0FBQ0wsQ0FBTixHQUFVLENBSFo7QUFJRkMsZUFBTyxFQUFHSSxLQUFLLENBQUNKLE9BQU4sR0FBZ0IsQ0FKeEI7QUFLRkMsaUJBQVMsRUFBR0csS0FBSyxDQUFDSCxTQUxoQjtBQU1GQyxjQUFNLEVBQUU7QUFOTixPQUFOOztBQVFKLFNBQUssV0FBTDtBQUNJLGFBQU07QUFDRk4sWUFBSSxFQUFHUSxLQUFLLENBQUNSLElBRFg7QUFFRkMsZ0JBQVEsRUFBR08sS0FBSyxDQUFDUCxRQUZmO0FBR0ZFLFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQUFOLEdBQVUsQ0FIWjtBQUlGQyxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FKZDtBQUtGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBQU4sR0FBa0IsQ0FMNUI7QUFNRkMsY0FBTSxFQUFFO0FBTk4sT0FBTjs7QUFRSixTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZOLFlBQUksRUFBR1EsS0FBSyxDQUFDUixJQURYO0FBRUZDLGdCQUFRLEVBQUdPLEtBQUssQ0FBQ1AsUUFGZjtBQUdGRSxTQUFDLEVBQUdLLEtBQUssQ0FBQ0wsQ0FIUjtBQUlGQyxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FKZDtBQUtGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBTGhCO0FBTUZDLGNBQU0sRUFBRTtBQU5OLE9BQU47O0FBUUosU0FBSyxTQUFMO0FBQ0ksYUFBTTtBQUNGTixZQUFJLEVBQUdRLEtBQUssQ0FBQ1IsSUFEWDtBQUVGQyxnQkFBUSxFQUFHTyxLQUFLLENBQUNQLFFBRmY7QUFHRkUsU0FBQyxFQUFHSyxLQUFLLENBQUNMLENBSFI7QUFJRkMsZUFBTyxFQUFHSSxLQUFLLENBQUNKLE9BSmQ7QUFLRkMsaUJBQVMsRUFBR0csS0FBSyxDQUFDSCxTQUxoQjtBQU1GQyxjQUFNLEVBQUU7QUFOTixPQUFOOztBQVFKLFNBQUssU0FBTDtBQUNJLGFBQU07QUFDRk4sWUFBSSxFQUFHUSxLQUFLLENBQUNSLElBRFg7QUFFRkMsZ0JBQVEsRUFBR08sS0FBSyxDQUFDUCxRQUZmO0FBR0ZFLFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQUhSO0FBSUZDLGVBQU8sRUFBR0ksS0FBSyxDQUFDSixPQUpkO0FBS0ZDLGlCQUFTLEVBQUdHLEtBQUssQ0FBQ0gsU0FMaEI7QUFNRkMsY0FBTSxFQUFFO0FBTk4sT0FBTjs7QUFRSjtBQUNJLGFBQU9FLEtBQVA7QUEvQ1I7QUFpREgsQyxDQUVEOzs7QUFDTyxTQUFTRyxTQUFULEdBQWdDO0FBQUEsTUFBYkgsS0FBYSx1RUFBUFQsTUFBTztBQUNuQyxTQUFPYSx5REFBVyxDQUFDTCxjQUFELEVBQWlCQyxLQUFqQixFQUF3QkssNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBdkMsQ0FBbEI7QUFDSCIsImZpbGUiOiIuL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQganNvbl9kYXRhIGZyb20gJy4vc3RhdGljL3F1ZXN0aW9uX3NldC5qc29uJ1xuXG4vL+OCueODhuODvOODiOWIneacn+WMllxuY29uc3QgcmVzdWx0ID0ge1xuICAgIHFfbm8gOiBbMCwxLDIsMyw0XSxcbiAgICBxdWVzdGlvbiA6IGpzb25fZGF0YSxcbiAgICBpIDogMCxcbiAgICBjb3JyZWN0OiAwLFxuICAgIGluY29ycmVjdDogMCxcbiAgICBzZWxlY3Q6IDBcbn1cblxuLy/jg6zjg4fjg6Xjg7zjgrVcbmZ1bmN0aW9uIGNvdW50ZXJSZWR1Y2VyIChzdGF0ZSA9IHJlc3VsdCwgYWN0aW9uKXtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSAnQ09SUkVDVCc6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgcV9ubyA6IHN0YXRlLnFfbm8sXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24gOiBzdGF0ZS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBpIDogc3RhdGUuaSArIDEsXG4gICAgICAgICAgICAgICAgY29ycmVjdCA6IHN0YXRlLmNvcnJlY3QgKyAxLFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0lOQ09SUkVDVCc6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgcV9ubyA6IHN0YXRlLnFfbm8sXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24gOiBzdGF0ZS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBpIDogc3RhdGUuaSArIDEsXG4gICAgICAgICAgICAgICAgY29ycmVjdCA6IHN0YXRlLmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0ICsgMSxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1VQREFURTEnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBzdGF0ZS5xX25vLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uIDogc3RhdGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmksXG4gICAgICAgICAgICAgICAgY29ycmVjdCA6IHN0YXRlLmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnVVBEQVRFMic6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgcV9ubyA6IHN0YXRlLnFfbm8sXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24gOiBzdGF0ZS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBpIDogc3RhdGUuaSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAyXG4gICAgICAgICAgICB9OyAgICBcbiAgICAgICAgY2FzZSAnVVBEQVRFMyc6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgcV9ubyA6IHN0YXRlLnFfbm8sXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24gOiBzdGF0ZS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBpIDogc3RhdGUuaSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAzXG4gICAgICAgICAgICB9OyBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbi8vaW5pdFN0b3Jl6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlPXJlc3VsdCl7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKGNvdW50ZXJSZWR1Y2VyLCBzdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})