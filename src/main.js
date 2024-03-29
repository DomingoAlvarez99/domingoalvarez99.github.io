import Vue from 'vue';
import App from './components/App.vue';
import vuetify from './plugins/vuetify/';
import router from './plugins/router/';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
