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

/***/ "./src/assets/scripts/events/events.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/events/events.js ***!
  \*********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/scripts/events/events.js?");

/***/ }),

/***/ "./src/assets/scripts/events/var.js":
/*!******************************************!*\
  !*** ./src/assets/scripts/events/var.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventsVariables: () => (/* binding */ EventsVariables),\n/* harmony export */   GlobalVariables: () => (/* binding */ GlobalVariables)\n/* harmony export */ });\nclass EventsVariables {\n  srchInp = document.querySelector('#srch-bar input');\n  filters = document.querySelectorAll('.filter');\n  tasksBox = document.querySelector('#tasks-box');\n  template = document.querySelector('#task-template');\n  addBtn = document.querySelector('#newtask-btn');\n  modal = document.querySelector('#mod');\n  modForm = document.querySelector('#mod-tls');\n  modInput = document.querySelector('#mod-tls input');\n  elTasks = document.querySelectorAll('.task');\n  noTasks = document.querySelector('#notasks-title');\n}\nclass GlobalVariables {\n  app = document.querySelector('#app');\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/scripts/events/var.js?");

/***/ }),

/***/ "./src/assets/scripts/generation/component.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/generation/component.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/var */ \"./src/assets/scripts/events/var.js\");\n\nconst glVar = new _events_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables();\n\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n//           Creating Component            //\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n\nclass Component {}\nconst component = document.createElement('div');\ncomponent.id = 'component';\n\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n//        Creating Search Container        //\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n\nconst navBox = document.createElement('div');\nnavBox.id = 'nav-box';\n\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n//               Append all                //\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n\nglVar.app.append(component);\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/scripts/generation/component.js?");

/***/ }),

/***/ "./src/assets/scripts/generation/header.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/generation/header.js ***!
  \*************************************************/
/***/ (() => {

eval("//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n//             Creating Header             //\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\nconst header = document.createElement('header');\ndocument.body.prepend(header);\n\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n//              Creating Logo              //\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\nconst logo = document.createElement('img');\nlogo.id = \"logo\";\nlogo.width = \"125\";\nlogo.height = \"27\";\nlogo.src = \"data:image/svg+xml,%3Csvg width='125' height='27' viewBox='0 0 125 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_103_264)'%3E%3Cpath d='M19.1642 1.62159C19.4464 3.39936 19.5875 5.11624 19.5875 6.77224C19.5875 10.4008 19.0231 13.7128 17.8943 16.7082C16.7654 19.7036 15.2956 22.0659 13.4847 23.7949C11.6739 25.524 9.82777 26.3885 7.9464 26.3885C7.00571 26.3885 5.91215 26.0354 4.66573 25.3292C3.44282 24.5986 2.38454 23.734 1.49088 22.7356C0.597221 21.7128 0.150391 20.8117 0.150391 20.0324C0.150391 18.3277 0.432599 15.588 0.997016 11.8133C1.56143 8.03861 2.23168 4.76312 3.00775 1.98688C3.78383 1.59723 4.59518 1.40241 5.4418 1.40241C6.33546 1.40241 7.11153 1.65812 7.77002 2.16953C8.42854 2.65659 8.87531 3.35064 9.11051 4.25171C8.42854 5.88336 7.75829 8.18473 7.09978 11.1558C6.46481 14.1268 6.14732 16.55 6.14732 18.4251C6.14732 20.2516 6.48833 21.1648 7.17033 21.1648C8.1816 21.1648 9.16933 20.4951 10.1335 19.1557C11.0977 17.792 11.8856 16.0386 12.497 13.8955C13.1084 11.7281 13.4142 9.53632 13.4142 7.32018C13.4142 5.66418 13.2261 4.10559 12.8498 2.64441C14.0256 1.305 15.2721 0.635292 16.589 0.635292C17.5062 0.635292 18.3646 0.964058 19.1642 1.62159ZM33.7409 26.3965C32.289 25.5283 31.0006 24.4483 29.8759 23.1565C28.7512 21.8647 27.8411 20.3929 27.1458 18.7412L27.0231 20.0753C26.8186 22.1294 26.6141 23.6647 26.4096 24.6812C26.2255 25.6976 25.9597 26.2059 25.612 26.2059C25.1417 26.2059 24.5794 26.0259 23.9249 25.6659C23.291 25.3059 22.7286 24.8823 22.2378 24.3953C21.7675 23.9083 21.5323 23.5059 21.5323 23.1882C21.5323 22.6377 22.0334 19.8317 23.0354 14.7706C23.1581 14.1776 23.3524 13.1718 23.6182 11.7529C23.9045 10.313 24.0988 9.27529 24.201 8.64L23.066 8.83059C22.4321 8.2165 22.1151 7.44353 22.1151 6.51176C22.1151 5.85529 22.289 5.17765 22.6366 4.47882C24.293 4.03412 25.9699 3.81176 27.6673 3.81176C29.4669 3.81176 31.1335 4.05529 32.6673 4.54235C34.2215 5.02941 35.4792 5.78118 36.4403 6.79765C37.4015 7.79294 37.882 9.04238 37.882 10.5459C37.882 12.3035 37.2174 13.8176 35.8881 15.0882C34.5589 16.3376 32.6059 17.1741 30.0292 17.5976C31.0518 18.5929 32.0742 19.3977 33.0967 20.0118C34.1397 20.6047 35.4485 21.1765 37.0231 21.7271C37.1049 22.0659 37.1458 22.4364 37.1458 22.8388C37.1458 23.813 36.8595 24.6176 36.2869 25.2529C35.7144 25.8882 34.8657 26.2694 33.7409 26.3965ZM27.7286 14.5165C29.3442 14.3471 30.6632 13.9024 31.6857 13.1824C32.7286 12.4623 33.2501 11.6047 33.2501 10.6094C33.2501 9.97412 32.9433 9.44468 32.3298 9.02118C31.7368 8.57647 30.9291 8.35412 29.9065 8.35412C29.5384 8.35412 29.1397 8.38588 28.7102 8.44941C28.3831 10.3976 28.2297 11.3294 28.2501 11.2447C28.066 12.2824 27.8923 13.3729 27.7286 14.5165ZM58.7231 0.635292C59.1699 0.903173 59.4992 1.28065 59.7108 1.76771C59.946 2.23041 60.0636 2.74183 60.0636 3.30194C60.0636 3.789 59.9695 4.27605 59.7814 4.76312C59.5933 5.25017 59.3463 5.652 59.0406 5.96859C58.6878 5.94423 58.1587 5.93206 57.4532 5.93206C57.0063 5.93206 56.1949 5.95641 55.0191 6.00512L53.1495 6.04165C53.267 5.33541 52.9848 6.97924 52.3028 10.9731L51.5973 15.1375C51.3621 16.5743 51.1152 18.4616 50.8565 20.7995C50.6213 22.7965 50.4097 24.1968 50.2216 25.0004C50.0569 25.8041 49.7865 26.2059 49.4102 26.2059C48.8693 26.2059 48.2226 26.0111 47.47 25.6214C46.741 25.2074 46.0943 24.7203 45.5298 24.1602C44.989 23.6001 44.7185 23.1374 44.7185 22.7721C44.695 22.212 44.9772 20.556 45.5651 17.8041C46.012 15.4906 46.3295 13.7737 46.5176 12.6535C46.5176 12.7021 46.7057 11.6916 47.082 9.62153C47.4112 7.7707 47.6111 6.63829 47.6817 6.22429L42.1786 6.91835C41.7318 6.67482 41.3673 6.3217 41.0851 5.859C40.8264 5.37194 40.697 4.84835 40.697 4.28824C40.697 3.31411 41.0615 2.44959 41.7906 1.69465C43.1311 1.49983 44.8008 1.37806 46.7998 1.32935C48.8222 1.25629 50.0216 1.20759 50.3979 1.18323C52.8673 1.11018 54.6663 1.04929 55.7952 1.00059C56.9476 0.927529 57.9235 0.805767 58.7231 0.635292ZM73.5249 18.2965C73.5454 18.6353 73.617 19.493 73.7397 20.8694C73.8828 22.2247 73.9544 23.3576 73.9544 24.2682C73.9544 25.4541 73.8215 26.0894 73.5556 26.1741C73.4738 26.1953 73.3409 26.2059 73.1568 26.2059C72.7069 26.2059 72.1446 26.1 71.4697 25.8882C70.8154 25.6553 70.2223 25.3694 69.6906 25.0306C69.1793 24.6917 68.8828 24.3635 68.801 24.0459C68.7192 23.7282 68.6783 22.3941 68.6783 20.0435C66.4697 20.3189 65.0178 20.4882 64.3225 20.5518C63.7703 22.2247 63.1364 24.0564 62.4206 26.0471C61.8685 26.1741 61.3572 26.2376 60.8869 26.2376C60.0689 26.2376 59.3736 26.0365 58.801 25.6341C58.2489 25.2106 57.8808 24.5753 57.6967 23.7282L58.3102 22.2988C60.5597 17.1106 62.5025 12.7589 64.1384 9.24353C65.7949 5.72823 66.8685 3.97059 67.3593 3.97059C67.7479 3.97059 68.3102 4.11882 69.0464 4.41529C69.8031 4.71176 70.4779 5.07177 71.0709 5.49529C71.6844 5.91882 72.0321 6.3 72.1139 6.63882C72.2571 7.23177 72.4513 8.47061 72.6967 10.3553C72.9421 12.24 73.1364 14.0612 73.2795 15.8188L73.5249 18.2965ZM68.5863 8.92588C67.6865 11.1282 66.7969 13.4894 65.9176 16.0094C66.8583 15.9459 67.7887 15.8506 68.709 15.7235C68.709 12.8012 68.6681 10.5353 68.5863 8.92588ZM85.747 11.88C85.9104 10.8212 85.9924 9.97412 85.9924 9.33882C85.9924 8.89412 85.951 8.54471 85.8697 8.29059C85.8084 8.03647 85.7263 7.90941 85.6243 7.90941C85.3176 7.90941 84.9594 8.17409 84.5507 8.70353C84.1619 9.23297 83.8245 9.86826 83.5384 10.6094C83.2723 11.3294 83.1397 11.9753 83.1397 12.5471C83.1397 13.2671 83.4771 13.9977 84.1519 14.7388C84.8467 15.4589 85.859 16.3483 87.1887 17.4071C88.1903 18.1694 88.9372 18.8047 89.428 19.3129C89.9188 19.8 90.1742 20.2447 90.1949 20.6471C90.2148 21.5365 89.7654 22.4153 88.8452 23.2835C87.9249 24.1306 86.7693 24.8294 85.3789 25.38C84.0085 25.9306 82.7302 26.2059 81.5446 26.2059C80.6243 26.2059 79.6734 25.973 78.6918 25.5071C77.7102 25.02 76.892 24.4588 76.2375 23.8235C75.5831 23.167 75.2457 22.5953 75.2252 22.1082C75.1844 21.1765 75.4808 20.4247 76.1148 19.8529C76.7486 19.26 77.5975 18.9635 78.6611 18.9635C79.1926 18.9635 79.7348 19.0376 80.2869 19.1859C80.5323 20.5835 80.747 21.5894 80.9311 22.2035C82.1374 21.8859 83.4464 21.3353 84.8575 20.5518C80.2969 16.9729 78.017 14.1776 78.017 12.1659C78.017 11.1917 78.3644 10.0271 79.0599 8.67176C79.7547 7.29529 80.6749 6.11999 81.8206 5.14588C82.9656 4.15059 84.1719 3.65294 85.4403 3.65294C86.3805 3.65294 87.2907 3.98117 88.1703 4.63765C89.0492 5.29412 89.7654 6.09882 90.3176 7.05176C90.8697 8.00471 91.1458 8.89412 91.1458 9.72C91.1458 10.5247 90.8283 11.1706 90.1949 11.6576C89.5814 12.1236 88.8145 12.3565 87.8943 12.3565C87.178 12.3565 86.4625 12.1976 85.747 11.88ZM105.008 4.32C106.153 4.27765 107.053 4.52117 107.707 5.05059C108.382 5.55882 108.719 6.26823 108.719 7.17882C108.719 7.53882 108.679 7.87765 108.597 8.19529C105.897 11.4141 102.87 13.9765 99.517 15.8824C100.662 17.0259 101.961 18.0847 103.413 19.0588C104.885 20.033 106.296 20.7953 107.646 21.3459C107.707 21.6847 107.738 22.0235 107.738 22.3624C107.738 23.3576 107.452 24.2153 106.879 24.9353C106.327 25.6341 105.529 26.0576 104.486 26.2059C102.993 25.2953 101.716 24.247 100.652 23.0612C99.5883 21.8541 98.5047 20.3506 97.4004 18.5506C97.2163 21.2612 97.0323 23.22 96.8483 24.4271C96.6642 25.6129 96.3674 26.2059 95.9587 26.2059C95.4886 26.2059 94.9257 26.0365 94.2716 25.6976C93.6374 25.3377 93.0752 24.9141 92.5844 24.4271C92.1144 23.94 91.8789 23.5376 91.8789 23.22C91.8582 22.8812 91.9502 22.1718 92.155 21.0918C92.3797 19.9906 92.5231 19.2812 92.5844 18.9635C92.6665 18.54 92.8199 17.767 93.0446 16.6447C93.2693 15.5012 93.4533 14.4424 93.5967 13.4682L93.8421 11.9753C94.2309 9.6035 94.5883 7.67647 94.9157 6.19412C95.2631 4.71176 95.6113 3.97059 95.9587 3.97059C96.3475 3.97059 96.869 4.15059 97.5231 4.51059C98.1979 4.87059 98.7808 5.29412 99.2716 5.78118C99.7831 6.26823 100.038 6.69177 100.038 7.05176C100.038 7.2847 99.8544 8.01527 99.4863 9.24353C99.1182 10.4718 98.7708 11.5306 98.4433 12.42C99.6703 11.34 100.754 10.1859 101.695 8.95765C102.656 7.72941 103.76 6.18353 105.008 4.32ZM119.507 11.88C119.67 10.8212 119.752 9.97412 119.752 9.33882C119.752 8.89412 119.712 8.54471 119.63 8.29059C119.568 8.03647 119.486 7.90941 119.384 7.90941C119.078 7.90941 118.719 8.17409 118.311 8.70353C117.922 9.23297 117.584 9.86826 117.298 10.6094C117.032 11.3294 116.9 11.9753 116.9 12.5471C116.9 13.2671 117.237 13.9977 117.912 14.7388C118.607 15.4589 119.62 16.3483 120.949 17.4071C121.951 18.1694 122.697 18.8047 123.188 19.3129C123.679 19.8 123.934 20.2447 123.955 20.6471C123.976 21.5365 123.525 22.4153 122.605 23.2835C121.685 24.1306 120.529 24.8294 119.139 25.38C117.768 25.9306 116.491 26.2059 115.305 26.2059C114.384 26.2059 113.433 25.973 112.452 25.5071C111.47 25.02 110.652 24.4588 109.998 23.8235C109.344 23.167 109.006 22.5953 108.986 22.1082C108.945 21.1765 109.241 20.4247 109.875 19.8529C110.509 19.26 111.357 18.9635 112.421 18.9635C112.953 18.9635 113.495 19.0376 114.047 19.1859C114.292 20.5835 114.507 21.5894 114.691 22.2035C115.897 21.8859 117.206 21.3353 118.617 20.5518C114.057 16.9729 111.777 14.1776 111.777 12.1659C111.777 11.1917 112.124 10.0271 112.82 8.67176C113.515 7.29529 114.436 6.11999 115.581 5.14588C116.726 4.15059 117.933 3.65294 119.2 3.65294C120.141 3.65294 121.051 3.98117 121.93 4.63765C122.81 5.29412 123.525 6.09882 124.078 7.05176C124.63 8.00471 124.906 8.89412 124.906 9.72C124.906 10.5247 124.589 11.1706 123.955 11.6576C123.341 12.1236 122.574 12.3565 121.654 12.3565C120.939 12.3565 120.222 12.1976 119.507 11.88Z' fill='url(%23paint0_linear_103_264)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_103_264' x1='69.0185' y1='-1.58824' x2='69.0185' y2='35.7353' gradientUnits='userSpaceOnUse'%3E%3Cstop/%3E%3Cstop offset='1' stop-color='%230076E4'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_103_264'%3E%3Crect width='125' height='27' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A\";\nlogo.alt = \"Logo of UrTasks with a black to blue gradient\";\nheader.appendChild(logo);\n\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n//            Creating Option Box            //\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\nconst optionBox = document.createElement('div');\noptionBox.id = \"options-box\";\nheader.appendChild(optionBox);\n\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\n//              Creating Options             //\n//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//\nconst optionDeleteAll = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\noptionDeleteAll.id = \"option-dlt-all\";\noptionDeleteAll.setAttribute('width', '27');\noptionDeleteAll.setAttribute('height', '32');\noptionDeleteAll.setAttribute('viewBox', \"0 0 27 32\");\noptionDeleteAll.innerHTML = '<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.48315 32C3.62002 32 2.91027 31.3193 2.87415 30.4568L1.80052 7.79219H22.1998L21.6847 18.6674L17.7555 22.5748V13.4217C17.7555 13.0605 17.4625 12.7676 17.1014 12.7676H16.0552C15.6939 12.7676 15.401 13.0605 15.401 13.4217V23.6011L13.1773 21.5484V13.4217C13.1773 13.0605 12.8843 12.7676 12.5233 12.7676H11.4771C11.1158 12.7676 10.823 13.0605 10.823 13.4217V19.7468C10.7262 19.794 10.6223 19.8784 10.5 20L8.59922 21.9008V13.4217C8.59922 13.0605 8.30631 12.7676 7.94517 12.7676H6.89888C6.53766 12.7676 6.24483 13.0605 6.24483 13.4217V26.3705C6.24483 26.7319 6.53774 27.0246 6.89888 27.0246H7.94517C8.30639 27.0246 8.59922 26.7317 8.59922 26.3705V24.0867L10.823 26.2639V26.3705C10.823 26.7319 11.1159 27.0246 11.4771 27.0246H11.6L15.3595 30.7053C15.756 31.0982 16.4017 31.0982 16.8026 30.7053L21.3277 26.2037L21.1262 30.4568C21.0901 31.3193 20.3803 32 19.5172 32H4.48315Z\" fill=\"black\"></path><path d=\"M22.9147 1.64848H15.9789V0.337248C15.9789 0.151037 15.828 0 15.6417 0H8.35848C8.17227 0 8.02131 0.151037 8.02131 0.337248V1.6484H1.08552C0.527357 1.6484 0.0749512 2.10089 0.0749512 2.65905V5.83388H23.9252V2.65913C23.9252 2.10096 23.4728 1.64848 22.9147 1.64848Z\" fill=\"black\"></path><path d=\"M25.2925 17.2031C25.0181 16.9323 24.568 16.9323 24.2935 17.2031L15.9832 25.3708L11.7035 21.1347C11.429 20.8628 10.9819 20.8628 10.7054 21.1347L9.20586 22.6079C8.93138 22.8767 8.93138 23.3192 9.20586 23.59L15.4797 29.7984C15.7542 30.0672 16.2012 30.0672 16.4787 29.7984L26.7911 19.6595C27.0696 19.3886 27.0696 18.9452 26.7911 18.6734L25.2925 17.2031Z\" fill=\"black\"></path>';\noptionBox.appendChild(optionDeleteAll);\nconst optionChangeMode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\noptionChangeMode.id = \"option-chg-mode\";\noptionChangeMode.setAttribute('width', '32');\noptionChangeMode.setAttribute('height', '32');\noptionChangeMode.setAttribute('viewBox', '0 0 32 32');\noptionChangeMode.innerHTML = \"<g clip-path='url(#clip0_64_21)'><path d='M15.9821 24.0608C11.5275 24.0608 7.90332 20.437 7.90332 15.9821C7.90332 11.5275 11.5275 7.90332 15.9821 7.90332C20.437 7.90332 24.0608 11.5275 24.0608 15.9821C24.0608 20.437 20.437 24.0608 15.9821 24.0608Z' fill='black'/><path d='M13.7523 6.36134C13.6498 6.36134 13.5511 6.31673 13.4836 6.23629C13.3997 6.13654 13.3779 5.9985 13.4271 5.87767L15.6568 0.394653C15.7106 0.262583 15.8391 0.175824 15.9821 0.175824C16.125 0.175824 16.2536 0.262583 16.3073 0.394653L18.5374 5.87767C18.5866 5.9985 18.5645 6.13654 18.4805 6.23629C18.3969 6.33605 18.2642 6.38171 18.137 6.35326C16.7162 6.04381 15.2469 6.04381 13.8268 6.35326C13.8022 6.35888 13.7773 6.36134 13.7523 6.36134Z' fill='black'/><path d='M15.9821 31.7883C15.8391 31.7883 15.7106 31.7019 15.6568 31.5695L13.4271 26.0865C13.3779 25.9656 13.3997 25.8276 13.4836 25.7279C13.5676 25.6281 13.6997 25.5831 13.8272 25.6109C15.2473 25.9207 16.7165 25.9207 18.1374 25.6109C18.2649 25.5828 18.3973 25.6284 18.4809 25.7279C18.5648 25.8273 18.587 25.9656 18.5378 26.0865L16.3077 31.5695C16.2536 31.7019 16.125 31.7883 15.9821 31.7883Z' fill='black'/><path d='M6.01009 18.5634C5.96548 18.5634 5.92052 18.555 5.87767 18.5378L0.394656 16.3077C0.262586 16.2536 0.175827 16.125 0.175827 15.9821C0.175827 15.8391 0.262586 15.7106 0.395007 15.6568L5.87802 13.4271C5.9985 13.3779 6.13689 13.3997 6.23665 13.4836C6.3364 13.5676 6.38136 13.7 6.35361 13.8272C6.19871 14.537 6.12003 15.2624 6.12003 15.9821C6.12003 16.7018 6.19871 17.4268 6.35361 18.1373C6.38136 18.2645 6.3364 18.3969 6.23665 18.4809C6.17202 18.5353 6.09158 18.5634 6.01009 18.5634Z' fill='black'/><path d='M25.9541 18.5634C25.8729 18.5634 25.7921 18.5353 25.7279 18.4809C25.6281 18.3973 25.5831 18.2648 25.6109 18.1373C25.7654 17.4271 25.8441 16.7018 25.8441 15.9821C25.8441 15.2624 25.7654 14.537 25.6109 13.8272C25.5831 13.7 25.6281 13.5676 25.7279 13.4836C25.8273 13.3997 25.9653 13.3779 26.0865 13.4271L31.5695 15.6568C31.7019 15.7106 31.7883 15.8391 31.7883 15.9821C31.7883 16.125 31.7019 16.2536 31.5695 16.3073L26.0865 18.5374C26.0436 18.5546 25.9987 18.5634 25.9541 18.5634Z' fill='black'/><path d='M7.35433 10.8591C7.34449 10.8591 7.33431 10.8587 7.32447 10.8577C7.19451 10.8464 7.08141 10.7643 7.03083 10.6445L4.73049 5.19062C4.67499 5.0589 4.70485 4.90681 4.80566 4.80565C4.90682 4.70449 5.05926 4.67534 5.19063 4.73048L10.6445 7.03082C10.7646 7.0814 10.8468 7.1945 10.8577 7.32411C10.8689 7.45407 10.8071 7.57947 10.6975 7.64972C10.0853 8.04277 9.51733 8.49975 9.00837 9.00836C8.49976 9.51732 8.04243 10.0853 7.64973 10.6975C7.58475 10.7987 7.47305 10.8591 7.35433 10.8591Z' fill='black'/><path d='M26.9102 27.2614C26.8641 27.2614 26.8178 27.2526 26.7735 27.234L21.32 24.9337C21.1999 24.8827 21.1177 24.7696 21.1068 24.64C21.0956 24.5101 21.1574 24.3847 21.267 24.3141C21.8799 23.9203 22.4482 23.463 22.9558 22.9554C23.4633 22.4482 23.9207 21.8796 24.3144 21.2666C24.385 21.157 24.5087 21.0949 24.6404 21.1065C24.77 21.1173 24.8831 21.1999 24.934 21.3197L27.2344 26.7732C27.2895 26.9049 27.26 27.0573 27.1588 27.1581C27.0914 27.2259 27.0015 27.2614 26.9102 27.2614Z' fill='black'/><path d='M24.6098 10.8587C24.4908 10.8587 24.3794 10.7987 24.3141 10.6975C23.9203 10.0842 23.463 9.51626 22.9555 9.00836C22.4472 8.5001 21.8789 8.04277 21.2666 7.64972C21.1567 7.57947 21.0952 7.45408 21.1065 7.32411C21.1174 7.19415 21.1999 7.0814 21.3197 7.03082L26.7732 4.73048C26.9042 4.67499 27.057 4.70449 27.1582 4.80565C27.2593 4.90681 27.2888 5.0589 27.2337 5.19062L24.9333 10.6445C24.8824 10.7646 24.7693 10.8468 24.6397 10.8577C24.6299 10.8584 24.62 10.8587 24.6098 10.8587Z' fill='black'/><path d='M5.05363 27.2614C4.96231 27.2614 4.87239 27.2256 4.8053 27.1585C4.70414 27.0573 4.67428 26.9052 4.73013 26.7735L7.03047 21.32C7.08105 21.1999 7.19415 21.1177 7.32376 21.1068C7.45372 21.0917 7.57912 21.1574 7.64937 21.267C8.04242 21.8789 8.49975 22.4472 9.008 22.9558C9.51591 23.4637 10.0839 23.9207 10.6972 24.3144C10.8068 24.385 10.8686 24.5104 10.8573 24.6404C10.8461 24.77 10.7639 24.8831 10.6441 24.934L5.19027 27.2344C5.14601 27.2526 5.1 27.2614 5.05363 27.2614Z' fill='black'/></g><defs><clipPath id='clip0_64_21'><rect width='32' height='32' fill='white'/></clipPath></defs>\";\noptionBox.appendChild(optionChangeMode);\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/scripts/generation/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _assets_scripts_generation_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/generation/header */ \"./src/assets/scripts/generation/header.js\");\n/* harmony import */ var _assets_scripts_generation_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_generation_header__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_scripts_generation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scripts/generation/component */ \"./src/assets/scripts/generation/component.js\");\n/* harmony import */ var _assets_scripts_events_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/scripts/events/events */ \"./src/assets/scripts/events/events.js\");\n/* harmony import */ var _assets_scripts_events_events__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_events_events__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/urtasks-icon.png */ \"./src/assets/images/urtasks-icon.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <link rel=\\\"shortcut icon\\\" type=\\\"image/png\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n    <title>UrTasks</title>\\r\\n</head>\\r\\n<body>\\r\\n    <main id=\\\"app\\\">\\r\\n            \\r\\n    </main>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

/***/ }),

/***/ "./src/assets/images/urtasks-icon.png":
/*!********************************************!*\
  !*** ./src/assets/images/urtasks-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/urtasks-icon.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/images/urtasks-icon.png?");

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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