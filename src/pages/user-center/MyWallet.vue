<script>
  import {XHeader, Group, Cell, CheckIcon, XButton} from 'vux'

  export default {
    name: 'myWallet',
    components: {
      XHeader, Group, Cell, CheckIcon, XButton
    },
    data() {
      return {}
    },
    methods:{
      getPurseView(){
        this.$httpPost('/api/purse/getPurseView',{
        }).then((data)=>{
          console.log(data)
        }).catch(err=>{
          this.$vux.toast.text(err.message,'middle')
        })
      }
    },
    created(){
      this.getPurseView()
    }
  }
</script>

<template>
  <div>
    <x-header :left-options="{backText: ''}"><span class="header-text">我的钱包</span></x-header>
    <div class="header">
      <div class="title">账户余额</div>
      <div class="money">0.00</div>
      <div class="use-button-wrap">
        <div class="use-button">
          使用余额
        </div>
      </div>
      <div class="float-box clearfix data-show">
        <div class="left">
          <div class="right-border">
            <div class="name">
              总收入
            </div>
            <div class="num">￥0</div>
          </div>
        </div>
        <div class="right">
          <div>
            <div class="name">
              消费券
            </div>
            <div class="num">￥0</div>
          </div>
        </div>
      </div>
    </div>
    <div class="fix-bottom">
      <div class="float-box clearfix">
        <div class="left">
          <div class="bottom-button white">
            收支明细
          </div>
        </div>
        <div class="right">
          <div class="bottom-button red">
            提现
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="stylus">
  $dark-red = #e12f52
  $defaut-color = #ff3358
  .vux-header
    background-color $dark-red
    border-bottom .01rem solid $dark-red
    color #fff
    .header-text
      font-size .16rem
      color #fff
  .header
    background-color $dark-red
    color #fff
    .title
      line-height .5rem
      font-size .15rem
      text-align center
    .money
      line-height .5rem
      font-size .32rem
      text-align center
      font-family "Microsoft YaHei"
    .use-button-wrap
      height .5rem
      .use-button
        margin .1rem auto
        width .8rem
        text-align center
        line-height .26rem
        font-size .14rem
        border-radius .13rem
        border .01rem solid #fff
    .data-show
      background-color $defaut-color
      color #fff
      .name
        font-size .13rem
        line-height .3rem
        text-align center
      .num
        font-size .13rem
        line-height .3rem
        text-align center
  .float-box
    .left
      width 50%
      float left
    .right
      width 50%
      float: left;
    .right-border
      border-right 1px solid #fff
  .fix-bottom
    position absolute
    bottom 0
    left 0
    width 100%
    .bottom-button
      line-height .5rem
      text-align center
      border .01rem solid $defaut-color
      font-size .14rem
    .white
      color $defaut-color
    .red
      color #fff
      background-color $defaut-color
</style>
