<script>
  import MeButton from '../../components/me-button'
  import {XHeader, Group, XInput, XButton} from 'vux'
  import {BASE_URL} from '../../config/const'

  export default {
    name: 'forget',
    components: {MeButton, XHeader, Group, XInput, XButton},
    data() {
      return {
        mobile: null,
        pageHeight: 0,
        code:null,
        imageCode:null,
        password:null,
        uuid:'',
        verifyImgPath:null
      }
    },
    methods:{
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
      //修改用户密码
      modifyPassword:function () {
        this.$httpPost('/api/user/modifyPassword',{
          mobile:this.mobile,
          code:this.code,
          password:this.password
        }).then((data)=>{
//          console.log(data)
          this.$vux.toast.text(data,'middle')
        }).catch(err=>{
          this.$vux.toast.text(err.message,'middle')
        })
      }
    },
    created() {
      this.$store.dispatch('signOut');
      this.pageHeight = document.body.clientHeight;
      this.getVerifyImg();
    }
  }
</script>

<template>
  <transition appear name="down-up">
    <div class="page" :style="{'min-height':pageHeight+'px'}">
      <x-header :left-options="{backText: ''}"><span class="header-text">忘记密码</span></x-header>
      <group :gutter="10">
        <x-input title="上报人" v-model="mobile"></x-input>
        <x-input title="验证码" class="weui-cell_vcode" v-model="imageCode">
          <img slot="right" class="weui-vcode-img" :src="verifyImgPath" @click="getVerifyImg">
        </x-input>
        <x-input title="验证码" class="weui-vcode" v-model="code">
          <x-button slot="right" type="primary" mini @click.native="getSmSCode">发送验证码</x-button>
        </x-input>
        <x-input title="新密码" v-model="password"></x-input>
      </group>
      <div class="submit-button">
        <me-button round type="primary" @click="modifyPassword">确认</me-button>
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
      font-size .16rem
      color #696969

  .submit-button
    margin .5rem .6rem 0 .6rem
</style>
