webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _static_question_set_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/question_set.json */ \"./static/question_set.json\");\nvar _static_question_set_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/question_set.json */ \"./static/question_set.json\", 1);\n\n\n //ステート初期化\n\nvar result = {\n  question: _static_question_set_json__WEBPACK_IMPORTED_MODULE_2__,\n  i: 0,\n  correct: 0,\n  incorrect: 0,\n  select: 0\n}; //レデューサ\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'CORRECT':\n      return {\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct + 1,\n        incorrect: state.incorrect,\n        select: 0\n      };\n\n    case 'INCORRECT':\n      return {\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct,\n        incorrect: state.incorrect + 1,\n        select: 0\n      };\n\n    case 'UPDATE1':\n      return {\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 1\n      };\n\n    case 'UPDATE2':\n      return {\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 2\n      };\n\n    case 'UPDATE3':\n      return {\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 3\n      };\n\n    default:\n      return state;\n  }\n} //initStore関数\n\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJyZXN1bHQiLCJxdWVzdGlvbiIsImpzb25fZGF0YSIsImkiLCJjb3JyZWN0IiwiaW5jb3JyZWN0Iiwic2VsZWN0IiwiY291bnRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUtBOztBQUNBLElBQU1BLE1BQU0sR0FBRztBQUVYQyxVQUFRLEVBQUdDLHNEQUZBO0FBR1hDLEdBQUMsRUFBRyxDQUhPO0FBSVhDLFNBQU8sRUFBRSxDQUpFO0FBS1hDLFdBQVMsRUFBRSxDQUxBO0FBTVhDLFFBQU0sRUFBRTtBQU5HLENBQWYsQyxDQVNBOztBQUNBLFNBQVNDLGNBQVQsR0FBZ0Q7QUFBQSxNQUF2QkMsS0FBdUIsdUVBQWZSLE1BQWU7QUFBQSxNQUFQUyxNQUFPOztBQUM1QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZULGdCQUFRLEVBQUdPLEtBQUssQ0FBQ1AsUUFEZjtBQUVGRSxTQUFDLEVBQUdLLEtBQUssQ0FBQ0wsQ0FBTixHQUFVLENBRlo7QUFHRkMsZUFBTyxFQUFHSSxLQUFLLENBQUNKLE9BQU4sR0FBZ0IsQ0FIeEI7QUFJRkMsaUJBQVMsRUFBR0csS0FBSyxDQUFDSCxTQUpoQjtBQUtGQyxjQUFNLEVBQUU7QUFMTixPQUFOOztBQU9KLFNBQUssV0FBTDtBQUNJLGFBQU07QUFDRkwsZ0JBQVEsRUFBR08sS0FBSyxDQUFDUCxRQURmO0FBRUZFLFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQUFOLEdBQVUsQ0FGWjtBQUdGQyxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FIZDtBQUlGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBQU4sR0FBa0IsQ0FKNUI7QUFLRkMsY0FBTSxFQUFFO0FBTE4sT0FBTjs7QUFPSixTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZMLGdCQUFRLEVBQUdPLEtBQUssQ0FBQ1AsUUFEZjtBQUVGRSxTQUFDLEVBQUdLLEtBQUssQ0FBQ0wsQ0FGUjtBQUdGQyxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FIZDtBQUlGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBSmhCO0FBS0ZDLGNBQU0sRUFBRTtBQUxOLE9BQU47O0FBT0osU0FBSyxTQUFMO0FBQ0ksYUFBTTtBQUNGTCxnQkFBUSxFQUFHTyxLQUFLLENBQUNQLFFBRGY7QUFFRkUsU0FBQyxFQUFHSyxLQUFLLENBQUNMLENBRlI7QUFHRkMsZUFBTyxFQUFHSSxLQUFLLENBQUNKLE9BSGQ7QUFJRkMsaUJBQVMsRUFBR0csS0FBSyxDQUFDSCxTQUpoQjtBQUtGQyxjQUFNLEVBQUU7QUFMTixPQUFOOztBQU9KLFNBQUssU0FBTDtBQUNJLGFBQU07QUFDRkwsZ0JBQVEsRUFBR08sS0FBSyxDQUFDUCxRQURmO0FBRUZFLFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQUZSO0FBR0ZDLGVBQU8sRUFBR0ksS0FBSyxDQUFDSixPQUhkO0FBSUZDLGlCQUFTLEVBQUdHLEtBQUssQ0FBQ0gsU0FKaEI7QUFLRkMsY0FBTSxFQUFFO0FBTE4sT0FBTjs7QUFPSjtBQUNJLGFBQU9FLEtBQVA7QUExQ1I7QUE0Q0gsQyxDQUVEOzs7QUFDTyxTQUFTRyxTQUFULEdBQWdDO0FBQUEsTUFBYkgsS0FBYSx1RUFBUFIsTUFBTztBQUNuQyxTQUFPWSx5REFBVyxDQUFDTCxjQUFELEVBQWlCQyxLQUFqQixFQUF3QkssNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBdkMsQ0FBbEI7QUFDSCIsImZpbGUiOiIuL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQganNvbl9kYXRhIGZyb20gJy4vc3RhdGljL3F1ZXN0aW9uX3NldC5qc29uJ1xuXG5cblxuLy/jgrnjg4bjg7zjg4jliJ3mnJ/ljJZcbmNvbnN0IHJlc3VsdCA9IHtcblxuICAgIHF1ZXN0aW9uIDoganNvbl9kYXRhLFxuICAgIGkgOiAwLFxuICAgIGNvcnJlY3Q6IDAsXG4gICAgaW5jb3JyZWN0OiAwLFxuICAgIHNlbGVjdDogMFxufVxuXG4vL+ODrOODh+ODpeODvOOCtVxuZnVuY3Rpb24gY291bnRlclJlZHVjZXIgKHN0YXRlID0gcmVzdWx0LCBhY3Rpb24pe1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlICdDT1JSRUNUJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pICsgMSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCArIDEsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnSU5DT1JSRUNUJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pICsgMSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QgKyAxLFxuICAgICAgICAgICAgICAgIHNlbGVjdDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnVVBEQVRFMSc6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgcXVlc3Rpb24gOiBzdGF0ZS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBpIDogc3RhdGUuaSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdVUERBVEUyJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDJcbiAgICAgICAgICAgIH07ICAgIFxuICAgICAgICBjYXNlICdVUERBVEUzJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDNcbiAgICAgICAgICAgIH07IFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuLy9pbml0U3RvcmXplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGU9cmVzdWx0KXtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIHN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})