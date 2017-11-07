<script>
  import MeButton from '../../components/me-button'
  import {XHeader, Group, XInput, XButton} from 'vux'

  export default {
    name: 'forget',
    components: {MeButton, XHeader, Group, XInput, XButton},
    data() {
      return {
        value1: null,
        pageHeight: 0
      }
    },
    created() {
      this.pageHeight = window.screen.availHeight
    }
  }
</script>

<template>
  <transition appear name="down-up">
    <div class="page" :style="{'min-height':pageHeight+'px'}">
      <x-header :left-options="{backText: ''}"><span class="header-text">忘记密码</span></x-header>
      <group label-margin-right="1em" label-align="right">
        <x-input title="上报人" v-model="value1"></x-input>
        <x-input title="验证码" class="weui-cell_vcode" v-model="value1">
          <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg">
        </x-input>
        <x-input title="验证码" class="weui-vcode" v-model="value1">
          <x-button slot="right" type="primary" mini>发送验证码</x-button>
        </x-input>
        <x-input title="新密码" v-model="value1"></x-input>
      </group>
      <div class="submit-button">
        <me-button round type="primary">确认</me-button>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="stylus">
  .page
    background-color #f7f7f7

  .vux-header
    background-color #fff
    border-bottom .01rem solid #e0e0e0
    .header-text
      font-size .14rem
      color #696969

  .submit-button
    margin .5rem .6rem 0 .6rem
</style>
