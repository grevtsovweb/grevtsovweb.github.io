/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (() => {

eval("{document.addEventListener(\"DOMContentLoaded\", () => {\n  // === АККОРДЕОН FAQ ===\n  function initAccordeonFaq() {\n    const headers = document.querySelectorAll('.faq-list__item-header--js');\n    headers.forEach(header => {\n      header.addEventListener('click', () => {\n        const item = header.closest('.faq-list__item');\n        if (item) {\n          item.classList.toggle('active');\n        }\n      });\n    });\n  }\n\n  // === МОБИЛЬНЫЙ FOCUS CARD ===\n  function initMobileFocusCard() {\n    const MOBILE_BREAKPOINT = 1024;\n    const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;\n    const buttons = document.querySelectorAll('.focus-card__dropdown-button button');\n    buttons.forEach(button => {\n      button.addEventListener('click', () => {\n        if (!isMobile()) return;\n        const card = button.closest('.focus-card');\n        if (card) {\n          card.classList.toggle('focus-card--hidden-mobile');\n          card.classList.toggle('active');\n        }\n      });\n    });\n  }\n\n  // === ЗАПУСК ВСЕХ ФУНКЦИЙ ===\n  initAccordeonFaq();\n  initMobileFocusCard();\n});\n\n//# sourceURL=webpack://gulp-builder/./src/assets/js/main.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/main.js"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
