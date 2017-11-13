// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import http from './config/http'
import VueRouter from 'vue-router'
import  { ToastPlugin } from 'vux'

Vue.use(http)
// Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
