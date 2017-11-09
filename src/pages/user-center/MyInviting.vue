<script>
  import { XHeader, Flexbox, FlexboxItem } from 'vux'
export default {
  name:'myInviting',
  components: {
    XHeader, Flexbox, FlexboxItem
  },
  data () {
      return {
        pageHeight:0
      }
  },
  methods: {

  },
  created () {
    this.pageHeight = document.body.clientHeight
  }
}
</script>

<template>
    <div class="page" :style="{'min-height':pageHeight+'px'}">
      <x-header :left-options="{backText: ''}">
        <span class="header-text">邀请好友</span>
      </x-header>
      <div class="banner-img">
        <img src="/static/images/invite_banner.png" class="img-response">
      </div>
      <div class="reward-show">
        <div class="no-data">
          <div class="tip-icon">
            <span class="iconfont icon-xiaoxi-laba"></span>
          </div>
          <span>您本月还没有邀请奖励</span>
        </div>
      </div>
      <div class="fix-bottom">
        <div class="tip-text">以下方式均可邀请好友</div>
        <div class="share-wrap">
          <flexbox :gutter="10">
            <flexbox-item>
              <div class="share-logo">
                <div class="logo">
                  <img src="/static/images/umeng_socialize_wechat.png">
                </div>
                <div class="name">微信好友</div>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="share-logo">
                <div class="logo">
                  <img src="/static/images/umeng_socialize_qq.png">
                </div>
                <div class="name">QQ好友</div>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="share-logo">
                <div class="logo">
                  <img src="/static/images/umeng_socialize_wxcircle.png">
                </div>
                <div class="name">朋友圈</div>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="share-logo">
                <div class="logo">
                  <img src="/static/images/myinvite_code.png">
                </div>
                <div class="name">二维码</div>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" scoped>
  $default-color = #eb133a
  .page
    background-color #f7f7f7
  .reward-show
    margin-top .2rem
    margin-bottom 1.2rem
    .no-data
      background-color #fff
      padding 16px .07rem
      font-size .16rem
      color #999
      .tip-icon
        background-color $default-color
        width .3rem
        height .3rem
        line-height .3rem
        border-radius .05rem
        text-align center
        display inline-block
        color #fff
        margin-right 15px
  .fix-bottom
    position fixed
    bottom 0
    left 0
    z-index 999
    width 100%
  .tip-text
    text-align center
    line-height .3rem
    color #666
    font-size .14rem
  .share-wrap
    padding 15px 0
    background-color #fff
    .share-logo
      .logo
        text-align center
        &>img
          width 80%
      .name
        font-size .13rem
        text-align center
        color #333
</style>
