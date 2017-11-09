import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import Forget from '../pages/home/Forget.vue'
import HomePage from '../pages/user-center/HomePage.vue'
import SharePage from '../pages/user-center/SharePage.vue'
import Recharge from '../pages/user-center/Recharge.vue'
import MyRecords from '../pages/user-center/MyRecords.vue'
import MyShare from '../pages/user-center/MyShare.vue'
import MyInviting from '../pages/user-center/MyInviting.vue'
import Opinion from '../pages/user-center/Opinion.vue'
import Announcement from '../pages/user-center/Announcement.vue'
import AboutUs from '../pages/user-center/AboutUs.vue'
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
      path: '/homePage/sharePage',
      name: 'sharePage',
      component: SharePage
    },
    {
      path: '/homePage/recharge',
      name: 'recharge',
      component: Recharge
    },
    {
      path: '/homePage/myRecords',
      name: 'myRecords',
      component: MyRecords
    },
    {
      path: '/homePage/myShare',
      name: 'myShare',
      component: MyShare
    },
    {
      path: '/homePage/myInviting',
      name: 'myInviting',
      component: MyInviting
    },
    {
      path: '/homePage/opinion',
      name: 'opinion',
      component: Opinion
    },
    {
      path: '/homePage/announcement',
      name: 'announcement',
      component: Announcement
    },
    {
      path: '/homePage/aboutUs',
      name: 'aboutUs',
      component: AboutUs
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
