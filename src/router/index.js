import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import Forget from '../pages/home/Forget.vue'
import HomePage from '../pages/user-center/HomePage.vue'
import MyShare from '../pages/user-center/MyShare.vue'
import Recharge from '../pages/user-center/Recharge.vue'
import PersonalInfo from '../pages/personal-info/PersonalInfo.vue'
import NickName from '../pages/personal-info/NickName.vue'
import Name from '../pages/personal-info/Name.vue'
import Email from '../pages/personal-info/Email.vue'
import Industry from '../pages/personal-info/Industry.vue'
import Demo from '../pages/personal-info/Demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/homePage/myShare',
      name: 'myShare',
      component: MyShare
    },
    {
      path: '/homePage/recharge',
      name: 'recharge',
      component: Recharge
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: PersonalInfo
    },
    {
      path: '/personalInfo/nickName',
      name: 'nickName',
      component: NickName
    },
    {
      path: '/personalInfo/name',
      name: 'name',
      component: Name
    },
    {
      path: '/personalInfo/email',
      name: 'email',
      component: Email
    },
    {
      path: '/personalInfo/industry',
      name: 'industry',
      component: Industry
    }
  ]
})
