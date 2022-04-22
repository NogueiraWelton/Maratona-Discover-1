/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _modules_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Modal */ \"./src/modules/Modal.js\");\n/* harmony import */ var _modules_Transactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Transactions */ \"./src/modules/Transactions.js\");\n/* harmony import */ var _modules_Balance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Balance */ \"./src/modules/Balance.js\");\n/* harmony import */ var _modules_ColorScheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ColorScheme */ \"./src/modules/ColorScheme.js\");\n\n\n\n\n\nvar modal = new _modules_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-modal=\"overlay\"]');\nmodal.init();\nvar balance = new _modules_Balance__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-display=\"income\"]', '[data-display=\"expense\"]', '[data-display=\"total\"]');\nbalance.init();\nvar transactions = new _modules_Transactions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-form]', '[data-transactions=\"container\"]', modal, balance);\ntransactions.init();\nvar colorScheme = new _modules_ColorScheme__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('#toggle-theme-button');\ncolorScheme.init();\n\n//# sourceURL=webpack://maratona-discover-1/./src/index.js?");

/***/ }),

/***/ "./src/modules/Balance.js":
/*!********************************!*\
  !*** ./src/modules/Balance.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Balance)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Balance = /*#__PURE__*/function () {\n  function Balance(income, expense, total) {\n    _classCallCheck(this, Balance);\n\n    this.income = document.querySelector(income);\n    this.expense = document.querySelector(expense);\n    this.total = document.querySelector(total);\n  }\n\n  _createClass(Balance, [{\n    key: \"setBalance\",\n    value: function setBalance() {\n      var incomes = Balance.getIncomes();\n      var expenses = Balance.getExpenses();\n      var total = incomes + expenses;\n      this.income.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatCurrency)(incomes);\n      this.expense.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatCurrency)(expenses);\n      this.total.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatCurrency)(total);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (localStorage.transactions) {\n        this.setBalance();\n      }\n\n      return this;\n    }\n  }], [{\n    key: \"getIncomes\",\n    value: function getIncomes() {\n      var _localStorage = localStorage,\n          transactions = _localStorage.transactions;\n      return JSON.parse(transactions).reduce(function (acc, transaction) {\n        if (transaction.type === 'income') {\n          return acc + +transaction.amount;\n        }\n\n        return acc;\n      }, 0);\n    }\n  }, {\n    key: \"getExpenses\",\n    value: function getExpenses() {\n      var _localStorage2 = localStorage,\n          transactions = _localStorage2.transactions;\n      return JSON.parse(transactions).reduce(function (acc, transaction) {\n        if (transaction.type === 'expense') {\n          return acc + +transaction.amount;\n        }\n\n        return acc;\n      }, 0);\n    }\n  }]);\n\n  return Balance;\n}();\n\n\n\n//# sourceURL=webpack://maratona-discover-1/./src/modules/Balance.js?");

/***/ }),

/***/ "./src/modules/ColorScheme.js":
/*!************************************!*\
  !*** ./src/modules/ColorScheme.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ColorScheme)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar ColorScheme = /*#__PURE__*/function () {\n  function ColorScheme(toggler) {\n    _classCallCheck(this, ColorScheme);\n\n    var mediaText = window.document.styleSheets[1].cssRules[2].media.mediaText;\n    this.mediaText = mediaText;\n    this.toggler = document.querySelector(toggler);\n    this.toggleTheme = this.toggleTheme.bind(this);\n  }\n\n  _createClass(ColorScheme, [{\n    key: \"toggleTheme\",\n    value: function toggleTheme() {\n      var regExp = /(?<=:\\s)dark+/;\n      var themes = ['dark', 'light'];\n\n      if (this.mediaText.match(regExp)) {\n        ColorScheme.themeReplace(this.mediaText, themes);\n      } else {\n        ColorScheme.themeReplace(this.mediaText, themes.reverse());\n      }\n\n      this.reload();\n    }\n  }, {\n    key: \"addToggleEvent\",\n    value: function addToggleEvent() {\n      this.toggler.addEventListener('click', this.toggleTheme);\n    }\n  }, {\n    key: \"reload\",\n    value: function reload() {\n      var mediaText = window.document.styleSheets[1].cssRules[2].media.mediaText;\n      this.mediaText = mediaText;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.toggler) {\n        this.addToggleEvent();\n      }\n    }\n  }], [{\n    key: \"themeReplace\",\n    value: function themeReplace(theme, _ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n          arg1 = _ref2[0],\n          arg2 = _ref2[1];\n\n      window.document.styleSheets[1].cssRules[2].media.mediaText = theme.replace(arg1, arg2);\n    }\n  }]);\n\n  return ColorScheme;\n}();\n\n\n\n//# sourceURL=webpack://maratona-discover-1/./src/modules/ColorScheme.js?");

/***/ }),

/***/ "./src/modules/Modal.js":
/*!******************************!*\
  !*** ./src/modules/Modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(modal) {\n    _classCallCheck(this, Modal);\n\n    this.modal = document.querySelector(modal);\n    this.opBtn = document.querySelector('.new-transaction');\n    this.clBtn = this.modal.querySelector('.cancel');\n    this.toggleModal = this.toggleModal.bind(this);\n  }\n\n  _createClass(Modal, [{\n    key: \"toggleModal\",\n    value: function toggleModal(event) {\n      if (event) {\n        event.preventDefault();\n      }\n\n      this.modal.classList.toggle('modal--active');\n    }\n  }, {\n    key: \"addModalEvents\",\n    value: function addModalEvents() {\n      this.opBtn.addEventListener('click', this.toggleModal);\n      this.clBtn.addEventListener('click', this.toggleModal);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.modal && this.opBtn && this.clBtn) {\n        this.addModalEvents();\n      }\n\n      return this;\n    }\n  }]);\n\n  return Modal;\n}();\n\n\n\n//# sourceURL=webpack://maratona-discover-1/./src/modules/Modal.js?");

/***/ }),

/***/ "./src/modules/Transaction.js":
/*!************************************!*\
  !*** ./src/modules/Transaction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Transaction)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Transaction = /*#__PURE__*/_createClass(function Transaction(description, amount, date, type) {\n  _classCallCheck(this, Transaction);\n\n  this.description = description;\n  this.amount = amount;\n  this.date = date;\n  this.type = type;\n});\n\n\n\n//# sourceURL=webpack://maratona-discover-1/./src/modules/Transaction.js?");

/***/ }),

/***/ "./src/modules/Transactions.js":
/*!*************************************!*\
  !*** ./src/modules/Transactions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Transactions)\n/* harmony export */ });\n/* harmony import */ var _Transaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transaction */ \"./src/modules/Transaction.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/* eslint-disable object-curly-newline */\n\n\n\nvar Transactions = /*#__PURE__*/function () {\n  function Transactions(form, container, modal, balance) {\n    _classCallCheck(this, Transactions);\n\n    var _localStorage = localStorage,\n        transactions = _localStorage.transactions;\n    this.transactions = transactions ? JSON.parse(transactions) : [];\n    this.form = document.querySelector(form);\n    this.container = document.querySelector(container);\n    this.modal = modal;\n    this.balance = balance;\n    this.setTransaction = this.setTransaction.bind(this);\n  }\n\n  _createClass(Transactions, [{\n    key: \"saveTransaction\",\n    value: function saveTransaction() {\n      localStorage.transactions = JSON.stringify(this.transactions);\n    }\n  }, {\n    key: \"endForm\",\n    value: function endForm() {\n      this.modal.toggleModal();\n      this.form.reset();\n    }\n  }, {\n    key: \"createTransaction\",\n    value: function createTransaction(_ref, index) {\n      var _this = this;\n\n      var description = _ref.description,\n          amount = _ref.amount,\n          date = _ref.date,\n          type = _ref.type;\n      var splittedDate = date.split('-');\n      var formattedDate = \"\".concat(splittedDate[2], \"/\").concat(splittedDate[1], \"/\").concat(splittedDate[0]);\n      var tr = document.createElement('tr');\n      tr.innerHTML = Transactions.setTemplate(description, amount, formattedDate, type, index);\n      this.container.appendChild(tr);\n      tr.querySelector('img[data-remove]').addEventListener('click', function () {\n        _this.removeTransaction(index);\n      });\n    }\n  }, {\n    key: \"removeTransaction\",\n    value: function removeTransaction(index) {\n      this.transactions.splice(index, 1);\n      this.saveTransaction();\n      this.reloadTransactions();\n    }\n  }, {\n    key: \"getTransactions\",\n    value: function getTransactions() {\n      var _this2 = this;\n\n      this.transactions.forEach(function (transaction, index) {\n        _this2.createTransaction(transaction, index);\n      });\n    }\n  }, {\n    key: \"reloadTransactions\",\n    value: function reloadTransactions() {\n      this.container.innerHTML = '';\n      this.getTransactions();\n      this.balance.setBalance();\n    }\n  }, {\n    key: \"setTransaction\",\n    value: function setTransaction(event) {\n      event.preventDefault();\n      this.transactions.push(Transactions.getTransaction(event));\n      this.saveTransaction();\n      this.endForm();\n      this.reloadTransactions();\n    }\n  }, {\n    key: \"setTransactionEvent\",\n    value: function setTransactionEvent() {\n      this.form.addEventListener('submit', this.setTransaction);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.setTransactionEvent();\n      this.getTransactions();\n    }\n  }], [{\n    key: \"getTransaction\",\n    value: function getTransaction(event) {\n      var _event$target$element = event.target.elements,\n          description = _event$target$element.description,\n          amount = _event$target$element.amount,\n          date = _event$target$element.date;\n      return new _Transaction__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description.value, amount.value.replace(/[.,]/g, ''), date.value, amount.value > 0 ? 'income' : 'expense');\n    }\n  }, {\n    key: \"setTemplate\",\n    value: function setTemplate(descripton, amount, date, type, index) {\n      return \"\\n      <td class=\\\"description\\\">\".concat(descripton, \"</td>\\n      <td class=\\\"\").concat(type, \"\\\">\").concat((0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatCurrency)(amount), \"</td>\\n      <td class=\\\"date\\\">\").concat(date, \"</td>\\n      <td><img data-remove data-id=\\\"\").concat(index, \"\\\" src=\\\"./assets/minus.svg\\\" alt=\\\"Remover Transa\\xE7\\xE3o\\\"></td>\\n    \");\n    }\n  }]);\n\n  return Transactions;\n}();\n\n\n\n//# sourceURL=webpack://maratona-discover-1/./src/modules/Transactions.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatCurrency\": () => (/* binding */ formatCurrency)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nvar formatCurrency = function formatCurrency(value) {\n  return (value / 100).toLocaleString('pt-BR', {\n    style: 'currency',\n    currency: 'BRL'\n  });\n};\n\n//# sourceURL=webpack://maratona-discover-1/./src/modules/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --white: #ffffff;\\n  --black: #121212;\\n  --green:#49aa26;\\n  --light-green:#3dd705;\\n  --expense:#e92929;\\n}\\n@media (prefers-color-scheme: light) {\\n  :root {\\n    --main-font-color:#363f5f;\\n    --main-color: var(--white);\\n    --table-color: var(--white);\\n    --header-bg-color:#2d4a22;\\n    --bg-color: #f0f2f5;\\n  }\\n}\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --main-font-color:#f0f2f5;\\n    --main-color: var(--black);\\n    --table-color: var(--black);\\n    --header-bg-color:#30215c;\\n    --bg-color: #1f1b24;\\n  }\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\nhtml {\\n  font-size: 93.75%;\\n}\\n@media (min-width: 800px) {\\n  html {\\n    font-size: 87.5%;\\n  }\\n}\\n\\nbody {\\n  background: var(--bg-color);\\n}\\n\\nlabel, small {\\n  display: block;\\n}\\n\\n.sr-only {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  padding: 0;\\n  margin: -1px;\\n  overflow: hidden;\\n  clip: rect(0, 0, 0, 0);\\n  white-space: nowrap;\\n  border-width: 0;\\n}\\n\\n.container {\\n  width: min(90vw, 800px);\\n  margin: auto;\\n}\\n\\nh2 {\\n  color: var(--main-font-color);\\n  font-weight: normal;\\n  margin: 3.2rem 0 0.8rem 0;\\n}\\n\\na {\\n  color: var(--green);\\n  text-decoration: none;\\n  transition: color 0.3s;\\n}\\na:hover {\\n  color: var(--light-green);\\n}\\n\\n.button {\\n  display: inline-block;\\n  margin-bottom: 0.8rem;\\n}\\n\\nbutton {\\n  width: 100%;\\n  height: 3.125rem;\\n  border: none;\\n  border-radius: 0.25rem;\\n  color: var(--main-font-color);\\n  cursor: pointer;\\n}\\n\\nheader {\\n  background: var(--header-bg-color);\\n  padding: 2rem 0 10rem;\\n  text-align: center;\\n}\\nheader #header-container {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-areas: \\\"logo\\\" \\\"toggle\\\";\\n  gap: 1rem;\\n}\\n@media (min-width: 800px) {\\n  header #header-container {\\n    grid-template-columns: repeat(3, 1fr);\\n    grid-template-areas: \\\"null logo toggle\\\";\\n  }\\n}\\nheader #header-container #logo {\\n  grid-area: logo;\\n  justify-self: center;\\n}\\nheader #header-container #toggle-theme-button {\\n  color: var(--white);\\n  grid-row: 2;\\n  width: fit-content;\\n  height: fit-content;\\n  grid-area: toggle;\\n  justify-self: center;\\n  background: none;\\n  border: 2px solid var(--white);\\n  padding: 0.25rem;\\n  border-radius: 0.25rem;\\n  transition: background-color 0.3s, color 0.3s;\\n  cursor: pointer;\\n}\\n@media (min-width: 800px) {\\n  header #header-container #toggle-theme-button {\\n    justify-self: end;\\n  }\\n}\\nheader #header-container #toggle-theme-button:hover {\\n  background: var(--main-color);\\n  color: var(--main-font-color);\\n}\\n\\n#balance {\\n  margin-top: -8rem;\\n}\\n#balance h2 {\\n  color: var(--white);\\n  margin-top: 0;\\n}\\n@media (min-width: 800px) {\\n  #balance {\\n    display: flex;\\n    gap: 2rem;\\n  }\\n}\\n\\n.card {\\n  color: var(--main-font-color);\\n  background: var(--main-color);\\n  border-radius: 0.25rem;\\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\\n  padding: 1.5rem 2rem;\\n  margin-bottom: 2rem;\\n  flex-basis: 100%;\\n}\\n.card h3 {\\n  font-weight: normal;\\n  font-size: 1rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 1rem;\\n}\\n.card p {\\n  font-size: 2rem;\\n  line-height: 3rem;\\n}\\n.card.total {\\n  color: var(--white);\\n  background: var(--green);\\n}\\n\\n#table-container {\\n  overflow-x: auto;\\n}\\n#table-container #data-table {\\n  width: 100%;\\n  border-spacing: 0 0.5rem;\\n  color: var(--main-font-color);\\n}\\n#table-container #data-table tbody tr {\\n  opacity: 0.7;\\n}\\n#table-container #data-table tr:hover {\\n  opacity: 1;\\n}\\n#table-container #data-table th, #table-container #data-table td {\\n  background-color: var(--table-color);\\n  padding: 1rem 2rem;\\n}\\n#table-container #data-table th:first-child, #table-container #data-table td:first-child {\\n  border-radius: 0.25rem 0 0 0.25rem;\\n}\\n#table-container #data-table th:last-child, #table-container #data-table td:last-child {\\n  border-radius: 0 0.25rem 0.25rem 0;\\n}\\n#table-container #data-table th {\\n  font-weight: normal;\\n  text-align: left;\\n}\\n#table-container #data-table td.description {\\n  color: var(--main-font-color);\\n}\\n#table-container #data-table td.income {\\n  color: var(--green);\\n}\\n#table-container #data-table td.expense {\\n  color: var(--expense);\\n}\\n#table-container #data-table td img[data-remove] {\\n  cursor: pointer;\\n}\\n\\n.modal-overlay {\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.7);\\n  position: fixed;\\n  top: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  opacity: 0;\\n  visibility: hidden;\\n}\\n.modal-overlay.modal--active {\\n  opacity: 1;\\n  visibility: visible;\\n  z-index: 1;\\n}\\n.modal-overlay.modal--active > .modal {\\n  transform: scale3d(1, 1, 1);\\n}\\n.modal-overlay .modal {\\n  width: min(90vw, 500px);\\n  background-color: var(--bg-color);\\n  padding: 2.4rem;\\n  position: relative;\\n  z-index: 2;\\n  transform: scale3d(0.7, 0.7, 1);\\n  transition: all 0.3s;\\n}\\n.modal-overlay #form {\\n  max-width: 500px;\\n}\\n.modal-overlay #form h2 {\\n  margin-top: 0;\\n}\\n.modal-overlay #form .form-group {\\n  margin-top: 0.8rem;\\n}\\n.modal-overlay #form .form-group input {\\n  width: 100%;\\n  border: none;\\n  border-radius: 0.2rem;\\n  padding: 0.8rem;\\n}\\n.modal-overlay #form .form-group input:focus {\\n  outline: 1px solid rgba(0, 0, 0, 0.2);\\n}\\n.modal-overlay #form .form-group small {\\n  color: var(--main-font-color);\\n  margin-top: 0.8rem;\\n  opacity: 0.4;\\n}\\n.modal-overlay #form .form-group.actions {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.modal-overlay #form .form-group.actions button {\\n  width: 48%;\\n  transition: 0.3s;\\n}\\n.modal-overlay #form .form-group.actions button:hover {\\n  opacity: 0.8;\\n}\\n.modal-overlay #form .form-group.actions button.cancel {\\n  background: var(--expense);\\n  color: var(--white);\\n}\\n.modal-overlay #form .form-group.actions button.submit {\\n  background: var(--green);\\n  color: var(--white);\\n}\\n\\nfooter {\\n  text-align: center;\\n  padding: 4rem 0 2rem;\\n  color: var(--main-font-color);\\n  opacity: 0.6;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://maratona-discover-1/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://maratona-discover-1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://maratona-discover-1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://maratona-discover-1/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://maratona-discover-1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://maratona-discover-1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://maratona-discover-1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://maratona-discover-1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://maratona-discover-1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://maratona-discover-1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;