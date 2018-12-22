// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import App from './App'
import Test from './components/test';
import User from './components/user';

Vue.config.productionTip = false
Vue.use(vueResource);
Vue.use(vueRouter);

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: User },
    { path: '/test', component: Test },
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
