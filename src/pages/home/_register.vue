<script>
  import MeInput from '../../components/me-input'
  import MeButton from '../../components/me-button'
  import {BASE_URL} from '../../config/const'
  import {Countdown} from 'vux'

  export default {
    name: 'register',
    components: {
      MeInput,
      MeButton,
      Countdown
    },
    data() {
      return {
        mobile: null,
        imageCode: null,
        code: null,
        pwd: null,
        inviteCode: null,
        inviteMobile:null,
        uuid: '',
        verifyImgPath: '',
        start: false,
        time: 60
      }
    },
    methods: {
      photoShot() {
        this.$refs.photo.click();
      },
      //生成随机数
      S4: function () {
        let randomNum = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
        return randomNum;
      },
      //生成随机的uuid
      guid: function () {
        let uuid = this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()
        this.uuid = uuid
        return uuid;
      },
      //获取图形验证码
      getVerifyImg: function () {
        this.verifyImgPath = BASE_URL + '/api/user/getVerifyImg?uuid=' + this.guid()
      },
      //获取手机验证码
      getSmSCode: function () {
        if(!this.mobile){
          this.$vux.toast.text('手机号不能为空', 'middle')
          return false
        }
        this.$httpPost('/api/user/getSmSCode', {
          uuid: this.uuid,
          mobile: this.mobile,
          imageCode: this.imageCode
        }).then((data) => {
          this.$vux.toast.text(data.data, 'middle')
          this.start = true
        }).catch(err => {
          if(err.statusCode==300){
            this.getVerifyImg()
          }
          this.$vux.toast.text(err.message, 'middle')
        })
      },
      //倒计时完成后触发
      finish: function (index) {
        this.start = false
        this.time = 60
      },
      //注册
      register:function () {
        this.$httpPost('/api/user/register', {
          mobile: this.mobile,
          pwd: this.pwd,
          code:this.code,
          inviteCode:this.inviteCode,
          inviteMobile:this.inviteMobile
        }).then((data) => {
//          console.log(data)
          if(data.statusCode){
            location.reload()
          }
        }).catch(err => {
          this.$vux.toast.text(err.message, 'middle')
        })
      }
    },
    created() {
      this.getVerifyImg();
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
          icon="iconfont icon-tuxingyanzhengma"
          placeholder="图形验证码"
          v-model="imageCode"
          type="number">
          <div slot="append" @click="getVerifyImg()">
            <img :src="verifyImgPath" class="img-response">
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
            <span v-if="!start" @click="getSmSCode" class="font-red">
              发送验证码
            </span>
            <span v-if="start" class="font-grey">
              <countdown v-model="time" :start="start" @on-finish="finish"></countdown>秒后获取
            </span>
          </div>
        </me-input>
      </div>
      <div class="list-item">
        <me-input
          icon="iconfont icon-mima"
          placeholder="密码"
          v-model="pwd"
          type="password">
        </me-input>
      </div>
      <div class="list-item">
        <me-input
          icon="iconfont icon-yaoqingma"
          placeholder="邀请码"
          v-model="inviteCode"
          type="text">
          <div slot="append">
            <input type="file" accept="image/*" style="display: none" ref="photo">
            <i class="iconfont icon-saoma" @click="photoShot"></i>
          </div>
        </me-input>
      </div>
      <div class="list-item">
        <me-input
          icon="iconfont icon-shouji"
          placeholder="邀请人手机号"
          v-model="inviteMobile"
          type="number">
        </me-input>
      </div>
    </div>
    <div class="form-list">
      <div class="list-item">
        <me-button round type="primary" @click="register">注册</me-button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  $default-color = #eb133a
  .form-list
    padding-top .25rem
    .list-item
      padding 0 .6rem .25rem .6rem

  .font-red
    color $default-color
    line-height .25rem

  .font-grey
    color #333
    line-height .25rem
</style>
