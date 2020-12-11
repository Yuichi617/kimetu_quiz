webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ \"./node_modules/redux-persist/es/index.js\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ \"./node_modules/redux-persist/lib/storage/index.js\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\n //ステート初期化\n\nvar result = {\n  q_no: [],\n  question: null,\n  i: 0,\n  correct: 0,\n  incorrect: 0,\n  select: 0\n}; //Redux Persistの設定\n\nvar persistConfig = {\n  key: 'root',\n  storage: storage\n}; //レデューサ\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'SETINFO':\n      return {\n        q_no: action.rand_arr,\n        question: action.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: state.select\n      };\n\n    case 'CORRECT':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct + 1,\n        incorrect: state.incorrect,\n        select: 0\n      };\n\n    case 'INCORRECT':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct,\n        incorrect: state.incorrect + 1,\n        select: 0\n      };\n\n    case 'UPDATE1':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 1\n      };\n\n    case 'UPDATE2':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 2\n      };\n\n    case 'UPDATE3':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 3\n      };\n\n    default:\n      return state;\n  }\n} //パーシストレデューサの作成\n//const persistedReducer = persistReducer(persistConfig, counterReducer)\n//initStore関数\n\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : result;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJyZXN1bHQiLCJxX25vIiwicXVlc3Rpb24iLCJpIiwiY29ycmVjdCIsImluY29ycmVjdCIsInNlbGVjdCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwiY291bnRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJyYW5kX2FyciIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxNQUFJLEVBQUcsRUFESTtBQUVYQyxVQUFRLEVBQUcsSUFGQTtBQUdYQyxHQUFDLEVBQUcsQ0FITztBQUlYQyxTQUFPLEVBQUUsQ0FKRTtBQUtYQyxXQUFTLEVBQUUsQ0FMQTtBQU1YQyxRQUFNLEVBQUU7QUFORyxDQUFmLEMsQ0FTQTs7QUFDQSxJQUFNQyxhQUFhLEdBQUc7QUFDbEJDLEtBQUcsRUFBRSxNQURhO0FBRWxCQyxTQUFPLEVBQVBBO0FBRmtCLENBQXRCLEMsQ0FLQTs7QUFDQSxTQUFTQyxjQUFULEdBQWdEO0FBQUEsTUFBdkJDLEtBQXVCLHVFQUFmWCxNQUFlO0FBQUEsTUFBUFksTUFBTzs7QUFDNUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxTQUFMO0FBQ0ksYUFBTTtBQUNGWixZQUFJLEVBQUdXLE1BQU0sQ0FBQ0UsUUFEWjtBQUVGWixnQkFBUSxFQUFHVSxNQUFNLENBQUNWLFFBRmhCO0FBR0ZDLFNBQUMsRUFBR1EsS0FBSyxDQUFDUixDQUhSO0FBSUZDLGVBQU8sRUFBR08sS0FBSyxDQUFDUCxPQUpkO0FBS0ZDLGlCQUFTLEVBQUdNLEtBQUssQ0FBQ04sU0FMaEI7QUFNRkMsY0FBTSxFQUFFSyxLQUFLLENBQUNMO0FBTlosT0FBTjs7QUFRSixTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZMLFlBQUksRUFBR1UsS0FBSyxDQUFDVixJQURYO0FBRUZDLGdCQUFRLEVBQUdTLEtBQUssQ0FBQ1QsUUFGZjtBQUdGQyxTQUFDLEVBQUdRLEtBQUssQ0FBQ1IsQ0FBTixHQUFVLENBSFo7QUFJRkMsZUFBTyxFQUFHTyxLQUFLLENBQUNQLE9BQU4sR0FBZ0IsQ0FKeEI7QUFLRkMsaUJBQVMsRUFBR00sS0FBSyxDQUFDTixTQUxoQjtBQU1GQyxjQUFNLEVBQUU7QUFOTixPQUFOOztBQVFKLFNBQUssV0FBTDtBQUNJLGFBQU07QUFDRkwsWUFBSSxFQUFHVSxLQUFLLENBQUNWLElBRFg7QUFFRkMsZ0JBQVEsRUFBR1MsS0FBSyxDQUFDVCxRQUZmO0FBR0ZDLFNBQUMsRUFBR1EsS0FBSyxDQUFDUixDQUFOLEdBQVUsQ0FIWjtBQUlGQyxlQUFPLEVBQUdPLEtBQUssQ0FBQ1AsT0FKZDtBQUtGQyxpQkFBUyxFQUFHTSxLQUFLLENBQUNOLFNBQU4sR0FBa0IsQ0FMNUI7QUFNRkMsY0FBTSxFQUFFO0FBTk4sT0FBTjs7QUFRSixTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZMLFlBQUksRUFBR1UsS0FBSyxDQUFDVixJQURYO0FBRUZDLGdCQUFRLEVBQUdTLEtBQUssQ0FBQ1QsUUFGZjtBQUdGQyxTQUFDLEVBQUdRLEtBQUssQ0FBQ1IsQ0FIUjtBQUlGQyxlQUFPLEVBQUdPLEtBQUssQ0FBQ1AsT0FKZDtBQUtGQyxpQkFBUyxFQUFHTSxLQUFLLENBQUNOLFNBTGhCO0FBTUZDLGNBQU0sRUFBRTtBQU5OLE9BQU47O0FBUUosU0FBSyxTQUFMO0FBQ0ksYUFBTTtBQUNGTCxZQUFJLEVBQUdVLEtBQUssQ0FBQ1YsSUFEWDtBQUVGQyxnQkFBUSxFQUFHUyxLQUFLLENBQUNULFFBRmY7QUFHRkMsU0FBQyxFQUFHUSxLQUFLLENBQUNSLENBSFI7QUFJRkMsZUFBTyxFQUFHTyxLQUFLLENBQUNQLE9BSmQ7QUFLRkMsaUJBQVMsRUFBR00sS0FBSyxDQUFDTixTQUxoQjtBQU1GQyxjQUFNLEVBQUU7QUFOTixPQUFOOztBQVFKLFNBQUssU0FBTDtBQUNJLGFBQU07QUFDRkwsWUFBSSxFQUFHVSxLQUFLLENBQUNWLElBRFg7QUFFRkMsZ0JBQVEsRUFBR1MsS0FBSyxDQUFDVCxRQUZmO0FBR0ZDLFNBQUMsRUFBR1EsS0FBSyxDQUFDUixDQUhSO0FBSUZDLGVBQU8sRUFBR08sS0FBSyxDQUFDUCxPQUpkO0FBS0ZDLGlCQUFTLEVBQUdNLEtBQUssQ0FBQ04sU0FMaEI7QUFNRkMsY0FBTSxFQUFFO0FBTk4sT0FBTjs7QUFRSjtBQUNJLGFBQU9LLEtBQVA7QUF4RFI7QUEwREgsQyxDQUtEO0FBQ0E7QUFFQTs7O0FBQ08sU0FBU0ksU0FBVCxHQUFnQztBQUFBLE1BQWJKLEtBQWEsdUVBQVBYLE1BQU87QUFDbkMsU0FBT2dCLHlEQUFXLENBQUNOLGNBQUQsRUFBaUJDLEtBQWpCLEVBQXdCTSw2REFBZSxDQUFDQyxtREFBRCxDQUF2QyxDQUFsQjtBQUNIIiwiZmlsZSI6Ii4vc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgc3RyYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5cbi8v44K544OG44O844OI5Yid5pyf5YyWXG5jb25zdCByZXN1bHQgPSB7XG4gICAgcV9ubyA6IFtdLFxuICAgIHF1ZXN0aW9uIDogbnVsbCxcbiAgICBpIDogMCxcbiAgICBjb3JyZWN0OiAwLFxuICAgIGluY29ycmVjdDogMCxcbiAgICBzZWxlY3Q6IDBcbn1cblxuLy9SZWR1eCBQZXJzaXN044Gu6Kit5a6aXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICAgIGtleTogJ3Jvb3QnLFxuICAgIHN0b3JhZ2UsXG59XG5cbi8v44Os44OH44Ol44O844K1XG5mdW5jdGlvbiBjb3VudGVyUmVkdWNlciAoc3RhdGUgPSByZXN1bHQsIGFjdGlvbil7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgJ1NFVElORk8nOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBhY3Rpb24ucmFuZF9hcnIsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24gOiBhY3Rpb24ucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmksXG4gICAgICAgICAgICAgICAgY29ycmVjdCA6IHN0YXRlLmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogc3RhdGUuc2VsZWN0XG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdDT1JSRUNUJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxX25vIDogc3RhdGUucV9ubyxcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pICsgMSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCArIDEsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnSU5DT1JSRUNUJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxX25vIDogc3RhdGUucV9ubyxcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pICsgMSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QgKyAxLFxuICAgICAgICAgICAgICAgIHNlbGVjdDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnVVBEQVRFMSc6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgcV9ubyA6IHN0YXRlLnFfbm8sXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24gOiBzdGF0ZS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBpIDogc3RhdGUuaSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdVUERBVEUyJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxX25vIDogc3RhdGUucV9ubyxcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDJcbiAgICAgICAgICAgIH07ICAgIFxuICAgICAgICBjYXNlICdVUERBVEUzJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxX25vIDogc3RhdGUucV9ubyxcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDNcbiAgICAgICAgICAgIH07IFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuXG5cblxuLy/jg5Hjg7zjgrfjgrnjg4jjg6zjg4fjg6Xjg7zjgrXjga7kvZzmiJBcbi8vY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIGNvdW50ZXJSZWR1Y2VyKVxuXG4vL2luaXRTdG9yZemWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZShzdGF0ZT1yZXN1bHQpe1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgc3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})