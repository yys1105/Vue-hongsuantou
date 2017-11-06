<script>
  import MeInput from '../../components/me-input'
  import MeButton from '../../components/me-button'
  export default {
    name:'register',
    components: {
      MeInput,
      MeButton
    },
    data () {
      return {
        phone:null,
        imgCode:null,
        code:null,
        password:null,
        invCode:null
      }
    },
    methods: {
      photoShot(){
        this.$refs.photo.click();
      }
    },
    created () {

    }
  }
</script>

<template>
  <div>
    <div class="form-list">
      <div class="list-item">
        <me-input
          icon="iconfont icon-shouji"
          placeholder="手机号"
          v-model="phone"
          type="number">
        </me-input>
      </div>
      <div class="list-item">
        <me-input
          icon="iconfont icon-tuxingyanzhengma"
          placeholder="图形验证码"
          v-model="imgCode"
          type="number">
          <div slot="append">
            <img src="">
          </div>
        </me-input>
      </div>
      <div class="list-item">
        <me-input
          icon="iconfont icon-verification-code"
          placeholder="验证码"
          v-model="code"
          type="number">
          <div slot="append">
            发送验证码
          </div>
        </me-input>
      </div>
      <div class="list-item">
        <me-input
          icon="iconfont icon-mima"
          placeholder="密码"
          v-model="phone"
          type="password">
        </me-input>
      </div>
      <div class="list-item">
        <me-input
          icon="iconfont icon-yaoqingma"
          placeholder="邀请码"
          v-model="invCode"
          type="text">
          <div slot="append">
            <input type="file" accept="image/*" style="display: none" ref="photo">
            <i class="iconfont icon-saoma" @click="photoShot"></i>
          </div>
        </me-input>
      </div>
    </div>
    <div class="form-list">
      <div class="list-item">
        <me-button round type="primary">注册</me-button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .form-list
    padding-top .25rem
    .list-item
      padding 0 .6rem .25rem .6rem
</style>
