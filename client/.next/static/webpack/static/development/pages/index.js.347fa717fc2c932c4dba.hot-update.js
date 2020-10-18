webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/hook/user.ts":
/*!****************************!*\
  !*** ./utils/hook/user.ts ***!
  \****************************/
/*! exports provided: getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
// import { getFetcher } from '../fetcher';
// import useSWR from 'swr';
// function getUser() {
//   const { data, error } = useSWR(`/api/auth`, getFetcher);
//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }
// export { getUser };
function getUser() {
  var data = fetch('http://localhost:3001/api/auth', {
    credentials: 'include'
  }).then(function (res) {
    if (res.status >= 400) {
      throw new Error('Fehler');
    }

    return res.json();
  }).catch(function (err) {
    return console.log(err);
  });
}

/***/ })

})
//# sourceMappingURL=index.js.347fa717fc2c932c4dba.hot-update.js.map