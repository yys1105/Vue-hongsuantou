<script>
  import MeInput from '../../components/me-input'
export default {
  name:'login',
  components: {
    MeInput
  },
  data () {
      return {
        phone:null
      }
  },
  methods: {

  },
  created () {

  }
}
</script>

<template>
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
</template>

<style lang="stylus" scoped>
  .form-list
    margin-top .15rem
    .list-item
      margin 0 .4rem .15rem .4rem
</style>
