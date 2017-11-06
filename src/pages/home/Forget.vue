<script>
  import { XHeader,Group,XInput } from 'vux'
  export default {
    name: 'forget',
    components:{XHeader,Group,XInput},
    data() {
      return {
        value1:null
      }
    }
  }
</script>

<template>
  <transition appear name="down-up">
    <div class="page">
      <x-header :left-options="{backText: ''}"><span class="header-text">忘记密码</span></x-header>
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-input title="上报人" v-model="value1"></x-input>
      </group>
    </div>
  </transition>
</template>

<style scoped lang="stylus">
  .vux-header
    background-color #fff
    border-bottom .01rem solid #e0e0e0
    .header-text
      font-size .14rem
      color #696969
</style>
