/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Chart/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Chart/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucasmelo/cc/ip/projeto-ip/client/src/components/Chart/index.tsx\",\n    _this = undefined;\n\n\n\n\nvar data = function data(chartData) {\n  return {\n    pie: {\n      labels: chartData.chart.labels,\n      datasets: [{\n        data: chartData.chart.values,\n        backgroundColor: [\"#b47df2\", \"#7146EA\"],\n        borderColor: [\"#b47df2\", \"#7146EA\"]\n      }]\n    },\n    bar: {\n      labels: chartData.chart.labels,\n      datasets: [{\n        label: chartData.title,\n        data: chartData.chart.values,\n        backgroundColor: [\"#b47df290\", \"#7146EA90\"],\n        borderColor: [\"#b47df2\", \"#7146EA\"],\n        borderWidth: 1\n      }]\n    }\n  };\n};\n\nvar Chart = function Chart(_ref) {\n  var chartData = _ref.chartData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: \"Titulo do grafico\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, _this), chartData.type === \"pie\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {\n      data: data[chartData.type](chartData),\n      options: {\n        cutoutPercentage: 50,\n        responsive: true\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), chartData.type === \"bar\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n      data: data[chartData.type](chartData),\n      options: {\n        scales: {\n          yAxes: [{\n            ticks: {\n              beginAtZero: true\n            }\n          }]\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4P2E4M2MiXSwibmFtZXMiOlsiZGF0YSIsImNoYXJ0RGF0YSIsInBpZSIsImxhYmVscyIsImNoYXJ0IiwiZGF0YXNldHMiLCJ2YWx1ZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJhciIsImxhYmVsIiwidGl0bGUiLCJib3JkZXJXaWR0aCIsIkNoYXJ0IiwidHlwZSIsImN1dG91dFBlcmNlbnRhZ2UiLCJyZXNwb25zaXZlIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxTQUFELEVBQWU7QUFDMUIsU0FBTztBQUNMQyxPQUFHLEVBQUU7QUFDSEMsWUFBTSxFQUFFRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0JELE1BRHJCO0FBRUhFLGNBQVEsRUFBRSxDQUNSO0FBQ0VMLFlBQUksRUFBRUMsU0FBUyxDQUFDRyxLQUFWLENBQWdCRSxNQUR4QjtBQUVFQyx1QkFBZSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FGbkI7QUFHRUMsbUJBQVcsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaO0FBSGYsT0FEUTtBQUZQLEtBREE7QUFXTEMsT0FBRyxFQUFFO0FBQ0hOLFlBQU0sRUFBRUYsU0FBUyxDQUFDRyxLQUFWLENBQWdCRCxNQURyQjtBQUVIRSxjQUFRLEVBQUUsQ0FDUjtBQUNFSyxhQUFLLEVBQUVULFNBQVMsQ0FBQ1UsS0FEbkI7QUFFRVgsWUFBSSxFQUFFQyxTQUFTLENBQUNHLEtBQVYsQ0FBZ0JFLE1BRnhCO0FBR0VDLHVCQUFlLEVBQUUsQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUhuQjtBQUlFQyxtQkFBVyxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FKZjtBQUtFSSxtQkFBVyxFQUFFO0FBTGYsT0FEUTtBQUZQO0FBWEEsR0FBUDtBQXdCRCxDQXpCRDs7QUEyQkEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxNQUFHWixTQUFILFFBQUdBLFNBQUg7QUFBQSxzQkFDWjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0EsU0FBUyxDQUFDYSxJQUFWLEtBQW1CLEtBQW5CLGlCQUNDLDhEQUFDLHFEQUFEO0FBQ0UsVUFBSSxFQUFFZCxJQUFJLENBQUNDLFNBQVMsQ0FBQ2EsSUFBWCxDQUFKLENBQXFCYixTQUFyQixDQURSO0FBRUUsYUFBTyxFQUFFO0FBQ1BjLHdCQUFnQixFQUFFLEVBRFg7QUFFUEMsa0JBQVUsRUFBRTtBQUZMO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBV0dmLFNBQVMsQ0FBQ2EsSUFBVixLQUFtQixLQUFuQixpQkFDQyw4REFBQyxnREFBRDtBQUNFLFVBQUksRUFBRWQsSUFBSSxDQUFDQyxTQUFTLENBQUNhLElBQVgsQ0FBSixDQUFxQmIsU0FBckIsQ0FEUjtBQUVFLGFBQU8sRUFBRTtBQUNQZ0IsY0FBTSxFQUFFO0FBQ05DLGVBQUssRUFBRSxDQUNMO0FBQ0VDLGlCQUFLLEVBQUU7QUFDTEMseUJBQVcsRUFBRTtBQURSO0FBRFQsV0FESztBQUREO0FBREQ7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQSxrQkFEWTtBQUFBLENBQWQ7O0tBQU1QLEs7QUErQk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFydC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXIsIERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuXG5jb25zdCBkYXRhID0gKGNoYXJ0RGF0YSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBpZToge1xuICAgICAgbGFiZWxzOiBjaGFydERhdGEuY2hhcnQubGFiZWxzLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS5jaGFydC52YWx1ZXMsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjYjQ3ZGYyXCIsIFwiIzcxNDZFQVwiXSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogW1wiI2I0N2RmMlwiLCBcIiM3MTQ2RUFcIl0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgYmFyOiB7XG4gICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5jaGFydC5sYWJlbHMsXG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IGNoYXJ0RGF0YS50aXRsZSxcbiAgICAgICAgICBkYXRhOiBjaGFydERhdGEuY2hhcnQudmFsdWVzLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI2I0N2RmMjkwXCIsIFwiIzcxNDZFQTkwXCJdLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBbXCIjYjQ3ZGYyXCIsIFwiIzcxNDZFQVwiXSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IENoYXJ0ID0gKHsgY2hhcnREYXRhIH0pID0+IChcbiAgPD5cbiAgICA8c3Bhbj5UaXR1bG8gZG8gZ3JhZmljbzwvc3Bhbj5cbiAgICB7Y2hhcnREYXRhLnR5cGUgPT09IFwicGllXCIgJiYgKFxuICAgICAgPERvdWdobnV0XG4gICAgICAgIGRhdGE9e2RhdGFbY2hhcnREYXRhLnR5cGVdKGNoYXJ0RGF0YSl9XG4gICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA1MCxcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApfVxuICAgIHtjaGFydERhdGEudHlwZSA9PT0gXCJiYXJcIiAmJiAoXG4gICAgICA8QmFyXG4gICAgICAgIGRhdGE9e2RhdGFbY2hhcnREYXRhLnR5cGVdKGNoYXJ0RGF0YSl9XG4gICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chart/index.tsx\n");

/***/ })

});