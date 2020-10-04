// Import polyfills
// import 'core-js/modules/es7.promise.finally';

import Vue from "vue";

import App from "vtk-test/src/components/core/App";

new Vue({
  render: h => h(App)
}).$mount("#app");
