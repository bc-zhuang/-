import Vue from 'vue'
import App from "./App.vue";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Router from "./router/index";
import axios from "axios";
Vue.prototype.$axios =axios;

import '@/assets/css/global.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:Router
}).$mount('#app')

