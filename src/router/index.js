import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import Forget from '../pages/home/Forget.vue'
import HomePage from '../pages/user-center/HomePage.vue'
import SharePage from '../pages/user-center/SharePage.vue'
import Recharge from '../pages/user-center/Recharge.vue'
import MyAppointment from '../pages/user-center/MyAppointment.vue'
import MyWallet from '../pages/wallet/MyWallet.vue'
import MyBankCard from '../pages/bank-card/MyBankCard.vue'
import AddBankCard from '../pages/bank-card/AddBankCard.vue'
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
    { path: '/', name: 'home', component: Home },
    // 测试
    { path: '/demo', name: 'demo', component: Demo },
    // 忘记密码
    { path: '/forget', name: 'forget', component: Forget },
    // 个人中心主页
    { path: '/homePage', name: 'homePage', component: HomePage },
    // 分享二维码
    { path: '/homePage/sharePage', name: 'sharePage', component: SharePage },
    // 充值续费
    { path: '/homePage/recharge', name: 'recharge', component: Recharge },
    // 我的预约
    { path: '/homePage/myAppointment', name: 'myAppointment', component: MyAppointment },
    // 我的钱包
    { path: '/homePage/myWallet', name: 'myWallet', component: MyWallet },
    // 我的银行卡
    { path: '/homePage/myBankCard', name: 'myBankCard', component: MyBankCard },
    // 添加我的银行卡
    { path:'/homePage/myBankCard/addBankCard',name:'addBankCard',component:AddBankCard },
    // 完善个人资料
    { path: '/personalInfo', name: 'personalInfo', component: PersonalInfo },
    { path: '/homePage/myRecords', name: 'myRecords', component: MyRecords},
    { path: '/homePage/myShare', name: 'myShare', component: MyShare },
    { path: '/homePage/myInviting', name: 'myInviting', component: MyInviting },
    { path: '/homePage/opinion', name: 'opinion', component: Opinion },
    { path: '/homePage/announcement', name: 'announcement', component: Announcement },
    { path: '/homePage/aboutUs', name: 'aboutUs', component: AboutUs},
    // 修改昵称
    { path: '/personalInfo/nickName', name: 'nickName', component: NickName },
    // 修改姓名
    { path: '/personalInfo/name', name: 'name', component: Name },
    // 修改邮箱
    { path: '/personalInfo/email', name: 'email', component: Email },
    // 修改行业
    { path: '/personalInfo/industry', name: 'industry', component: Industry }
  ]
})
