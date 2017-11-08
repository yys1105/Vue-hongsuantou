<script>
  import { Popup, XButton,Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'myShare',
    components:{
      Popup, XButton,Flexbox, FlexboxItem
    },
    data() {
      return {
        showPopup:false
      }
    }
  }
</script>

<template>
  <div class="page img-wrap">
    <div class="left-arrow" @click="$router.go(-1)"></div>
    <img src="/static/images/mine_share.png" class="page-bg">
    <div class="share-button" @click="showPopup=true">分享二维码</div>
    <div>
      <popup v-model="showPopup" position="bottom" max-height="50%">
        <div style="padding: 15px;">
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

            </flexbox-item>
          </flexbox>
        </div>
      </popup>
    </div>
  </div>
</template>


<style scoped lang="stylus">
  .left-arrow
    position absolute
    width 30px
    height 30px
    top 10px
    left 15px
    &::before
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      border: 1px solid #333;
      border-width: 1px 0 0 1px;
      -webkit-transform: rotate(315deg);
      transform: rotate(315deg);
      top: 8px;
      left: 7px;
  .page
    position relative
    .page-bg
      width 100%
    .share-button
      padding .1rem .15rem
      font-weight bold
      font-size .16rem
      color #fff
      background-color #e36113
      border-radius 5px
      position absolute
      top 2rem
      right .2rem
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
