<script>
  import { Cell, Group, dateFormat  } from 'vux'
  export default {
    name: 'homePage',
    components: {
      Cell, Group
    },
    data() {
      return {
        userInfo:this.$store.getters.userInfo,
      }
    },
    methods: {
      call:function () {
        var hour = dateFormat(new Date(), 'HH')
        if(hour<8||hour>20){
          this.$vux.toast.text('很抱歉,客服每日为你服务时间是：08:00-20:00', 'middle')
        }else{
          this.$refs.phone.click()
        }
      },
      //获取用户所有信息
      getUserInfo:function () {
        this.$httpPost('/api/user/getUserInfo', {}).then((data) => {
          let userInfo = data.data
          let token = this.$store.getters.token
          userInfo.token = token
          this.$store.dispatch('updateUserInfo', {userInfo: userInfo})
          this.userInfo = this.$store.getters.userInfo
        }).catch(err => {
          this.$vux.toast.text(err.message, 'middle')
        })
      }
    },
    created() {
      if(!this.userInfo.id){
        this.getUserInfo()
      }
    }
  }
</script>

<template>
  <div class="page">
    <div class="personal-header">
      <div class="title">我的</div>
      <div class="info-wrap">
        <div class="headImg">
          <img :src="userInfo.avatar?userInfo.avatar:'/static/images/hongsuantou.png'">
        </div>
        <div class="info-con">
          <div class="name">{{ userInfo.name||'未命名' }}</div>
          <div class="identity">
            <span v-if="userInfo.personCode">{{ userInfo.personCode }}号人</span>
          </div>
        </div>
        <div class="qrcode">
          <div class="text">二维码</div>
          <div class="qrcode-icon" @click="$router.push({name: 'sharePage', params: { userId: 123 }})">
            <span class="iconfont icon-erweima"></span>
          </div>
        </div>
      </div>
    </div>
    <group :gutter="10">
      <cell title="完善个人资料（姓名、生日必填）" link="/personalInfo">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_data.png"></div>
      </cell>
      <cell title="充值续费" link="/homePage/recharge">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_top_up.png"></div>
      </cell>
      <cell title="我的预定" link="/homePage/myAppointment">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_consult.png"></div>
      </cell>
    </group>
    <group :gutter="10">
      <cell title="我的钱包" link="/homePage/myWallet">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_purse.png"></div>
      </cell>
      <cell title="我的银行卡" link="/homePage/myBankCard">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_card.png"></div>
      </cell>
      <cell title="我的分析记录" link="/homePage/myRecords">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_record.png"></div>
      </cell>
    </group>
    <group :gutter="10">
      <cell title="我的分享" link="/homePage/myShare">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_purse.png"></div>
      </cell>
      <cell title="邀请好友" link="/homePage/myInviting">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_friend.png"></div>
      </cell>
      <cell title="意见反馈" link="/homePage/opinion">
        <div slot="icon"><img class="icon-img" src="/static/images/message.png"></div>
      </cell>
    </group>
    <group :gutter="10">
      <cell title="系统公告" link="/homePage/announcement">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_announcement.png"></div>
      </cell>
      <cell title="客服" is-link @click.native="call">
        <a href="tel:13764567708" style="display: none" ref="phone"></a>
        <div slot="icon"><img class="icon-img" src="/static/images/mine_contact.png"></div>
      </cell>
      <cell title="关于我们" link="/homePage/aboutUs">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_about.png"></div>
      </cell>
      <cell title="设置">
        <div slot="icon"><img class="icon-img" src="/static/images/mine_set.png"></div>
      </cell>
      <cell title="退出登录">
        <div slot="icon"><img class="icon-img" src="/static/images/message.png"></div>
      </cell>
    </group>
  </div>
</template>

<style lang="stylus" scoped>
  $default-color = #eb133a
  .page
    background-color #f7f7f7
  .personal-header
    height 1.4rem
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#fd7ec3), to(#fa5575));
    .title
      text-align center
      line-height .5rem
      color #fff
      font-size .18rem
      letter-spacing .02rem
    .info-wrap
      padding 0 1.35rem 0 1rem
      position relative
      .headImg
        position absolute
        top .06rem
        left .2rem
        width .65rem
        height .65rem
        background-color #fff
        border-radius 50%
        overflow hidden
        & > img
          width 100%
          height 100%
      .info-con
        .name
          height .16rem
          padding .08rem 0
          font-size .16rem
          color #fff
        .identity
          padding .08rem 0
          & > span
            height .24rem
            color $default-color
            font-size .16rem
            background-color #fff
            border-radius 2px
            display inline-block
      .qrcode
        position absolute
        top 0
        right 0
        width 1.35rem
        line-height .6rem
        color #fff
        .text
          float left
          font-size .16rem
          margin-right .1rem
        .qrcode-icon
          float left
          .iconfont
            font-size .51rem

  .icon-img
    width .24rem
    height .24rem
    margin-right .15rem
    vertical-align bottom
</style>
