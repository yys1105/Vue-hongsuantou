import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import Forget from '../pages/home/Forget.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/forget',
      name: 'forget',
      component: Forget}
  ]
})
