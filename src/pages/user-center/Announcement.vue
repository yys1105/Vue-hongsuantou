<script>
  import { XHeader } from 'vux'
  export default {
    name: 'announcement',
    components: {
      XHeader
    },
    data() {
      return {}
    },
    methods: {},
    created() {

    }
  }
</script>

<template>
  <div>
    <div class="fix-header">
      <x-header :left-options="{backText: ''}">
        <span class="header-text">系统公告</span>
      </x-header>
    </div>
    <div class="fix-container">
      <div class="container">
        <h1 class="red">好消息</h1>
        <div class="section">
          为了顺应营销需求，业务拓展应用，紧跟易通集团化发展路线，完成红算头1.2.3战略布局，实施文化资本模式，同时也为帮助各位代理丰富专业知识提升自身能量及市场运作，现举办第二届《红算头项目代理培训会》。
        </div>
        <div class="section">通过培训学会红算头应用的方法，为自己的业务营销引流，百战不殆。运用红算头360玩家模式，帮助更多人互联网营销零风险创业，利人利己！</div>
        <div class="section">届时张教授还将传授电话号码解析趋吉避凶等秘籍课程!</div>
        <div class="section red">培训时间：</div>
        <div class="section">10月16日9:00-10月17日17:00</div>
        <div class="section red">主讲老师：</div>
        <div class="section">张师语教授，李岱励总经理，李秀活老师</div>
        <div class="section red">地点：</div>
        <div class="section">上海项意总部（上海青浦区双联路158号东隆大楼4楼417室）</div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  $default-color = #eb133a
  .header
    width 100%
    position fixed
    top 0
    left 0
    z-index 999
  .container
    padding .1rem 16px .1rem 16px
    h1
      font-size .2rem
      line-height .3rem
      margin-bottom .2rem
      text-align center
    .red
      color $default-color
    .section
      line-height .3rem
      text-indent .32rem
      margin-bottom .2rem
      font-size .16rem
      color #333
</style>
