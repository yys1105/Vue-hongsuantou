<script>
  import MeInput from '../../components/me-input'
  import MeButton from '../../components/me-button'
export default {
  name:'login',
  components: {
    MeInput,
    MeButton
  },
  data () {
      return {
        phone:null,
        password:null
      }
  },
  methods: {

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
          icon="iconfont icon-mima"
          placeholder="密码"
          v-model="phone"
          type="password">
        </me-input>
      </div>
    </div>
    <div class="form-list">
      <div class="list-item">
        <me-button round type="primary">登录</me-button>
      </div>
      <div class="list-item">
        <me-button round>忘记密码？</me-button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .form-list
    padding-top .15rem
    padding-bottom .15rem
    .list-item
      padding 0 .5rem .15rem .5rem
</style>
