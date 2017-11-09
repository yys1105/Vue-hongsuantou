<script>
  import { XHeader } from 'vux'
  export default {
    name: 'aboutUs',
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
    <div class="header">
      <x-header :left-options="{backText: ''}">
        <span class="header-text">关于我们</span>
      </x-header>
    </div>
    <div class="container">
      "红算头"
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
    margin-top .46rem
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
