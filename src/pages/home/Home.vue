<script>
  import Login from './_login.vue'
  import Register from './_register.vue'
  export default {
    name: 'home',
    components:{Login,Register},
    data() {
      return {
        isActive:true
      }
    }
  }
</script>

<template>
  <div>
    <div class="img-wrap">
      <img class="img-response" src="/static/images/register_picture_min.png">
    </div>
    <div>
      <ul class="tab-nav">
        <li :class="{'is-active':isActive}" @click="isActive=true">登录</li>
        <li :class="{'is-active':!isActive}" @click="isActive=false">注册</li>
      </ul>
      <template v-if="isActive">
        <login></login>
      </template>
      <template v-if="!isActive">
        <register></register>
      </template>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .tab-nav
    &>li
      display table-cell
      width 1%
      text-align center
      line-height .375rem
      font-size .12rem
      color #8c939d
      background-color #fedfeb
      position relative
    &>li.is-active
      color red
      &::before
        content:" "
        position:absolute
        left 50%
        bottom 0
        margin-left -.04rem
        border-style solid
        border-color transparent
        border-bottom-color #f7f9f8
        border-width .035rem .04rem
</style>
