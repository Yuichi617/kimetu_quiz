webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _static_question_set_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/question_set.json */ \"./static/question_set.json\");\nvar _static_question_set_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/question_set.json */ \"./static/question_set.json\", 1);\n\n\n\n\nfunction randomizing() {\n  arr = [];\n  numArr = [];\n\n  for (i = 0; i < 15; i++) {\n    arr[i] = i;\n  }\n\n  for (j = 0, len = arr.length; j < 5; j++, len--) {\n    rndNum = Math.floor(Math.random() * len);\n    numArr.push(arr[rndNum]);\n    arr[rndNum] = arr[len - 1];\n  }\n\n  return arr;\n} //ステート初期化\n\n\nvar result = {\n  q_no: randomizing(),\n  question: _static_question_set_json__WEBPACK_IMPORTED_MODULE_2__,\n  i: 0,\n  correct: 0,\n  incorrect: 0,\n  select: 0\n}; //レデューサ\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'CORRECT':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct + 1,\n        incorrect: state.incorrect,\n        select: 0\n      };\n\n    case 'INCORRECT':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct,\n        incorrect: state.incorrect + 1,\n        select: 0\n      };\n\n    case 'UPDATE1':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 1\n      };\n\n    case 'UPDATE2':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 2\n      };\n\n    case 'UPDATE3':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 3\n      };\n\n    default:\n      return state;\n  }\n} //initStore関数\n\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJyYW5kb21pemluZyIsImFyciIsIm51bUFyciIsImkiLCJqIiwibGVuIiwibGVuZ3RoIiwicm5kTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInJlc3VsdCIsInFfbm8iLCJxdWVzdGlvbiIsImpzb25fZGF0YSIsImNvcnJlY3QiLCJpbmNvcnJlY3QiLCJzZWxlY3QiLCJjb3VudGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUFzQjtBQUNsQkMsS0FBRyxHQUFHLEVBQU47QUFDQUMsUUFBTSxHQUFHLEVBQVQ7O0FBQ0EsT0FBSUMsQ0FBQyxHQUFDLENBQU4sRUFBU0EsQ0FBQyxHQUFHLEVBQWIsRUFBaUJBLENBQUMsRUFBbEIsRUFBcUI7QUFDbEJGLE9BQUcsQ0FBQ0UsQ0FBRCxDQUFILEdBQU9BLENBQVA7QUFDRjs7QUFFRCxPQUFJQyxDQUFDLEdBQUcsQ0FBSixFQUFPQyxHQUFHLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBckIsRUFBNkJGLENBQUMsR0FBRyxDQUFqQyxFQUFvQ0EsQ0FBQyxJQUFJQyxHQUFHLEVBQTVDLEVBQWdEO0FBQzdDRSxVQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBY0wsR0FBekIsQ0FBVDtBQUNBSCxVQUFNLENBQUNTLElBQVAsQ0FBWVYsR0FBRyxDQUFDTSxNQUFELENBQWY7QUFDQU4sT0FBRyxDQUFDTSxNQUFELENBQUgsR0FBY04sR0FBRyxDQUFDSSxHQUFHLEdBQUMsQ0FBTCxDQUFqQjtBQUNGOztBQUNELFNBQU9KLEdBQVA7QUFDRixDLENBR0Y7OztBQUNBLElBQU1XLE1BQU0sR0FBRztBQUNYQyxNQUFJLEVBQUdiLFdBQVcsRUFEUDtBQUVYYyxVQUFRLEVBQUdDLHNEQUZBO0FBR1haLEdBQUMsRUFBRyxDQUhPO0FBSVhhLFNBQU8sRUFBRSxDQUpFO0FBS1hDLFdBQVMsRUFBRSxDQUxBO0FBTVhDLFFBQU0sRUFBRTtBQU5HLENBQWYsQyxDQVNBOztBQUNBLFNBQVNDLGNBQVQsR0FBZ0Q7QUFBQSxNQUF2QkMsS0FBdUIsdUVBQWZSLE1BQWU7QUFBQSxNQUFQUyxNQUFPOztBQUM1QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZULFlBQUksRUFBR08sS0FBSyxDQUFDUCxJQURYO0FBRUZDLGdCQUFRLEVBQUdNLEtBQUssQ0FBQ04sUUFGZjtBQUdGWCxTQUFDLEVBQUdpQixLQUFLLENBQUNqQixDQUFOLEdBQVUsQ0FIWjtBQUlGYSxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FBTixHQUFnQixDQUp4QjtBQUtGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBTGhCO0FBTUZDLGNBQU0sRUFBRTtBQU5OLE9BQU47O0FBUUosU0FBSyxXQUFMO0FBQ0ksYUFBTTtBQUNGTCxZQUFJLEVBQUdPLEtBQUssQ0FBQ1AsSUFEWDtBQUVGQyxnQkFBUSxFQUFHTSxLQUFLLENBQUNOLFFBRmY7QUFHRlgsU0FBQyxFQUFHaUIsS0FBSyxDQUFDakIsQ0FBTixHQUFVLENBSFo7QUFJRmEsZUFBTyxFQUFHSSxLQUFLLENBQUNKLE9BSmQ7QUFLRkMsaUJBQVMsRUFBR0csS0FBSyxDQUFDSCxTQUFOLEdBQWtCLENBTDVCO0FBTUZDLGNBQU0sRUFBRTtBQU5OLE9BQU47O0FBUUosU0FBSyxTQUFMO0FBQ0ksYUFBTTtBQUNGTCxZQUFJLEVBQUdPLEtBQUssQ0FBQ1AsSUFEWDtBQUVGQyxnQkFBUSxFQUFHTSxLQUFLLENBQUNOLFFBRmY7QUFHRlgsU0FBQyxFQUFHaUIsS0FBSyxDQUFDakIsQ0FIUjtBQUlGYSxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FKZDtBQUtGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBTGhCO0FBTUZDLGNBQU0sRUFBRTtBQU5OLE9BQU47O0FBUUosU0FBSyxTQUFMO0FBQ0ksYUFBTTtBQUNGTCxZQUFJLEVBQUdPLEtBQUssQ0FBQ1AsSUFEWDtBQUVGQyxnQkFBUSxFQUFHTSxLQUFLLENBQUNOLFFBRmY7QUFHRlgsU0FBQyxFQUFHaUIsS0FBSyxDQUFDakIsQ0FIUjtBQUlGYSxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FKZDtBQUtGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBTGhCO0FBTUZDLGNBQU0sRUFBRTtBQU5OLE9BQU47O0FBUUosU0FBSyxTQUFMO0FBQ0ksYUFBTTtBQUNGTCxZQUFJLEVBQUdPLEtBQUssQ0FBQ1AsSUFEWDtBQUVGQyxnQkFBUSxFQUFHTSxLQUFLLENBQUNOLFFBRmY7QUFHRlgsU0FBQyxFQUFHaUIsS0FBSyxDQUFDakIsQ0FIUjtBQUlGYSxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FKZDtBQUtGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBTGhCO0FBTUZDLGNBQU0sRUFBRTtBQU5OLE9BQU47O0FBUUo7QUFDSSxhQUFPRSxLQUFQO0FBL0NSO0FBaURILEMsQ0FFRDs7O0FBQ08sU0FBU0csU0FBVCxHQUFnQztBQUFBLE1BQWJILEtBQWEsdUVBQVBSLE1BQU87QUFDbkMsU0FBT1kseURBQVcsQ0FBQ0wsY0FBRCxFQUFpQkMsS0FBakIsRUFBd0JLLDZEQUFlLENBQUNDLG1EQUFELENBQXZDLENBQWxCO0FBQ0giLCJmaWxlIjoiLi9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGpzb25fZGF0YSBmcm9tICcuL3N0YXRpYy9xdWVzdGlvbl9zZXQuanNvbidcblxuZnVuY3Rpb24gcmFuZG9taXppbmcoKXtcbiAgICBhcnIgPSBbXTtcbiAgICBudW1BcnIgPSBbXTsgXG4gICAgZm9yKGk9MDsgaSA8IDE1OyBpKyspe1xuICAgICAgIGFycltpXT1pO1xuICAgIH1cbiBcbiAgICBmb3IoaiA9IDAs44CAbGVuID0gYXJyLmxlbmd0aDsgaiA8IDU7IGorKywgbGVuLS0pIHtcbiAgICAgICBybmROdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbGVuKTtcbiAgICAgICBudW1BcnIucHVzaChhcnJbcm5kTnVtXSk7XG4gICAgICAgYXJyW3JuZE51bV0gPSBhcnJbbGVuLTFdO1xuICAgIH1cbiAgICByZXR1cm4gYXJyXG4gfVxuXG5cbi8v44K544OG44O844OI5Yid5pyf5YyWXG5jb25zdCByZXN1bHQgPSB7XG4gICAgcV9ubyA6IHJhbmRvbWl6aW5nKCksXG4gICAgcXVlc3Rpb24gOiBqc29uX2RhdGEsXG4gICAgaSA6IDAsXG4gICAgY29ycmVjdDogMCxcbiAgICBpbmNvcnJlY3Q6IDAsXG4gICAgc2VsZWN0OiAwXG59XG5cbi8v44Os44OH44Ol44O844K1XG5mdW5jdGlvbiBjb3VudGVyUmVkdWNlciAoc3RhdGUgPSByZXN1bHQsIGFjdGlvbil7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgJ0NPUlJFQ1QnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBzdGF0ZS5xX25vLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uIDogc3RhdGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmkgKyAxLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0ICsgMSxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdJTkNPUlJFQ1QnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBzdGF0ZS5xX25vLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uIDogc3RhdGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmkgKyAxLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCArIDEsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdVUERBVEUxJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxX25vIDogc3RhdGUucV9ubyxcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1VQREFURTInOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBzdGF0ZS5xX25vLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uIDogc3RhdGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmksXG4gICAgICAgICAgICAgICAgY29ycmVjdCA6IHN0YXRlLmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogMlxuICAgICAgICAgICAgfTsgICAgXG4gICAgICAgIGNhc2UgJ1VQREFURTMnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBzdGF0ZS5xX25vLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uIDogc3RhdGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmksXG4gICAgICAgICAgICAgICAgY29ycmVjdCA6IHN0YXRlLmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogM1xuICAgICAgICAgICAgfTsgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG4vL2luaXRTdG9yZemWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZShzdGF0ZT1yZXN1bHQpe1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgc3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})