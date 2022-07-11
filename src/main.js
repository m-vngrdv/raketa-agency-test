import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component('r-button', () => import('@/components/library/RButton.vue'))
Vue.component('r-input', () => import('@/components/library/RInput.vue'))
Vue.component('r-date-input', () => import('@/components/library/RDateInput.vue'))

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
