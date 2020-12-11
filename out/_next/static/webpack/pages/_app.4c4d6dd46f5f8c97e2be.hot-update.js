webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n //ステート初期化\n\nvar result = {\n  i: 0,\n  correct: 0,\n  incorrect: 0,\n  select: 0\n}; //レデューサ\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'CORRECT':\n      return {\n        i: state.i + 1,\n        correct: state.correct + 1,\n        incorrect: state.incorrect,\n        select: 0\n      };\n\n    case 'INCORRECT':\n      return {\n        i: state.i + 1,\n        correct: state.correct,\n        incorrect: state.incorrect + 1,\n        select: 0\n      };\n\n    case 'UPDATE1':\n      return {\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 1\n      };\n\n    case 'UPDATE2':\n      return {\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 2\n      };\n\n    case 'UPDATE3':\n      return {\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 3\n      };\n\n    default:\n      return state;\n  }\n} //initStore関数\n\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJyZXN1bHQiLCJpIiwiY29ycmVjdCIsImluY29ycmVjdCIsInNlbGVjdCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUc7QUFDWEMsR0FBQyxFQUFHLENBRE87QUFFWEMsU0FBTyxFQUFFLENBRkU7QUFHWEMsV0FBUyxFQUFFLENBSEE7QUFJWEMsUUFBTSxFQUFFO0FBSkcsQ0FBZixDLENBT0E7O0FBQ0EsU0FBU0MsY0FBVCxHQUFnRDtBQUFBLE1BQXZCQyxLQUF1Qix1RUFBZk4sTUFBZTtBQUFBLE1BQVBPLE1BQU87O0FBQzVDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssU0FBTDtBQUNJLGFBQU07QUFDRlAsU0FBQyxFQUFHSyxLQUFLLENBQUNMLENBQU4sR0FBVSxDQURaO0FBRUZDLGVBQU8sRUFBR0ksS0FBSyxDQUFDSixPQUFOLEdBQWdCLENBRnhCO0FBR0ZDLGlCQUFTLEVBQUdHLEtBQUssQ0FBQ0gsU0FIaEI7QUFJRkMsY0FBTSxFQUFFO0FBSk4sT0FBTjs7QUFNSixTQUFLLFdBQUw7QUFDSSxhQUFNO0FBQ0ZILFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQUFOLEdBQVUsQ0FEWjtBQUVGQyxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FGZDtBQUdGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBQU4sR0FBa0IsQ0FINUI7QUFJRkMsY0FBTSxFQUFFO0FBSk4sT0FBTjs7QUFNSixTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZILFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQURSO0FBRUZDLGVBQU8sRUFBR0ksS0FBSyxDQUFDSixPQUZkO0FBR0ZDLGlCQUFTLEVBQUdHLEtBQUssQ0FBQ0gsU0FIaEI7QUFJRkMsY0FBTSxFQUFFO0FBSk4sT0FBTjs7QUFNSixTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZILFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQURSO0FBRUZDLGVBQU8sRUFBR0ksS0FBSyxDQUFDSixPQUZkO0FBR0ZDLGlCQUFTLEVBQUdHLEtBQUssQ0FBQ0gsU0FIaEI7QUFJRkMsY0FBTSxFQUFFO0FBSk4sT0FBTjs7QUFNSixTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZILFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQURSO0FBRUZDLGVBQU8sRUFBR0ksS0FBSyxDQUFDSixPQUZkO0FBR0ZDLGlCQUFTLEVBQUdHLEtBQUssQ0FBQ0gsU0FIaEI7QUFJRkMsY0FBTSxFQUFFO0FBSk4sT0FBTjs7QUFNSjtBQUNJLGFBQU9FLEtBQVA7QUFyQ1I7QUF1Q0gsQyxDQUVEOzs7QUFDTyxTQUFTRyxTQUFULEdBQWdDO0FBQUEsTUFBYkgsS0FBYSx1RUFBUE4sTUFBTztBQUNuQyxTQUFPVSx5REFBVyxDQUFDTCxjQUFELEVBQWlCQyxLQUFqQixFQUF3QkssNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBdkMsQ0FBbEI7QUFDSCIsImZpbGUiOiIuL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5cbi8v44K544OG44O844OI5Yid5pyf5YyWXG5jb25zdCByZXN1bHQgPSB7XG4gICAgaSA6IDAsXG4gICAgY29ycmVjdDogMCxcbiAgICBpbmNvcnJlY3Q6IDAsXG4gICAgc2VsZWN0OiAwXG59XG5cbi8v44Os44OH44Ol44O844K1XG5mdW5jdGlvbiBjb3VudGVyUmVkdWNlciAoc3RhdGUgPSByZXN1bHQsIGFjdGlvbil7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgJ0NPUlJFQ1QnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pICsgMSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCArIDEsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnSU5DT1JSRUNUJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBpIDogc3RhdGUuaSArIDEsXG4gICAgICAgICAgICAgICAgY29ycmVjdCA6IHN0YXRlLmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0ICsgMSxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1VQREFURTEnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1VQREFURTInOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDJcbiAgICAgICAgICAgIH07ICAgIFxuICAgICAgICBjYXNlICdVUERBVEUzJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBpIDogc3RhdGUuaSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAzXG4gICAgICAgICAgICB9OyBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbi8vaW5pdFN0b3Jl6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlPXJlc3VsdCl7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKGNvdW50ZXJSZWR1Y2VyLCBzdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})