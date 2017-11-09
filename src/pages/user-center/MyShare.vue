<script>
  import { XHeader } from 'vux'
  export default {
    name: 'myShare',
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
    <x-header :left-options="{backText: ''}">
      <span class="header-text">我的分享</span>
    </x-header>
    <div class="share-num">
      团队分享总人数：0人
    </div>
    <div class="tip-text">
      直接分享：（红色代表联创，黄色代表个贷，蓝色代表玩家）
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  $default-color = #eb133a
  .share-num
    line-height .3rem
    font-size .16rem
    color $default-color
    background-color #f7f7f7
    padding 0 16px
  .tip-text
    padding .07rem 16px
    color #999
    font-size .14rem
</style>
