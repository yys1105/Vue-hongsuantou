<script>
  import MeInput from '../../components/me-input'
  import MeButton from '../../components/me-button'

  export default {
    name: 'login',
    components: {
      MeInput,
      MeButton
    },
    data() {
      return {
        phone: '18306133926',
        password: '123456'
      }
    },
    methods: {
      login() {
        if (this.validator()) {
          this.$httpPost('/login', {})
            .then((data) => {
              if (data.statusCode == 200) {
                this.$router.push({ path: 'homePage' })
              } else {
                this.$vux.toast.text(data.message, 'middle')
              }
            }).catch(err => {
            this.$vux.toast.text(err.message, 'middle')
          })
        }
      },
      validator() {
        var phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        if (!this.phone) {
          this.$vux.toast.text('手机号不能为空', 'middle')
          return
        } else if (!phoneReg.test(this.phone)) {
          this.$vux.toast.text('手机号非法', 'middle')
          return
        } else if (!this.password) {
          this.$vux.toast.text('密码不能为空', 'middle')
          return
        }
        return true
      }
    },
    created() {

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
          v-model="password"
          type="password">
        </me-input>
      </div>
    </div>
    <div class="form-list">
      <div class="list-item">
        <me-button round type="primary" @click="login">登录</me-button>
      </div>
      <div class="list-item">
        <me-button round @click="$router.push('forget')">忘记密码？</me-button>
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
