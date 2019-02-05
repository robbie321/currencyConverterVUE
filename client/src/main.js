import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import axios from 'axios'

// Vue.prototype.$http = axios

Vue.config.productionTip = false;
//creates an instance of vue and mounts it on id app
new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
