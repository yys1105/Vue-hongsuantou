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
        /*mobile: '18094416520',
        password: '123456',*/
        mobile: null,
        password: null
      }
    },
    methods: {
      login() {
        if (this.validator()) {
          this.$httpPost('/api/user/login', {
            mobile: this.mobile,
            password: this.password
          }).then((data) => {
//            console.log(data)
            this.$store.dispatch('signIn', {userInfo: data.data, rememberMe: false});
            if (data.statusCode == 200) {
              this.$router.push({name: 'homePage'})
            }
          }).catch(err => {
            this.$vux.toast.text(err.message, 'middle')
          })
        }
      },
      validator() {
        var phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        if (!this.mobile) {
          this.$vux.toast.text('手机号不能为空', 'middle')
          return
        } else if (!phoneReg.test(this.mobile)) {
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
          v-model="mobile"
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
