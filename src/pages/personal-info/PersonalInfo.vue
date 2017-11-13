<script>
  import {
    XHeader,
    Group,
    Actionsheet,
    XInput,
    XButton,
    Cell,
    CellBox,
    CellFormPreview,
    PopupRadio,
    Datetime,
    XAddress,
    ChinaAddressV4Data
  } from 'vux'

  export default {
    name: 'personalInfo',
    components: {
      XHeader, Group, Actionsheet, XInput, XButton, Cell, CellBox, CellFormPreview, PopupRadio, Datetime, XAddress
    },
    data() {
      return {
        pageHeight: 0,
        showGengerOpt:false,
        genderOpt: [{
          value: 'man',
          label: '男'
        }, {
          value: 'woman',
          label: '女'
        }],
        gender: '',
        addressData: ChinaAddressV4Data,
        showAddress: false,
        userInfo: this.$store.getters.userInfo,
        datetime: ''
      }
    },
    methods: {
      //更改头像
      changeImg() {
        this.$refs.img.click();
      },
      //提交头像图片
      submitImg(e){
        this.$httpPost('/api/file/uploadImg',{
          files:e.target.files[0]
        }).then((data)=>{
          var imgPath = data.data[0]
          console.log(imgPath)
          this.$httpPost('/api/user/modifyUserInfo',{
            type:'avatar',
            value:imgPath
          }).then((data)=>{
            this.$vux.toast.text(data.data,'middle')
            this.getUserInfo();
          }).catch(err=>{
            this.$vux.toast.text(err.message,'middle')
          })
        }).catch(err=>{
          this.$vux.toast.text(err.message,'middle')
        })
      },
      //获取用户所有信息
      getUserInfo:function () {
        this.$httpPost('/api/user/getUserInfo', {}).then((data) => {
          let userInfo = data.data
          let token = this.$store.getters.token
          userInfo.token = token
          this.$store.dispatch('updateUserInfo', {userInfo: userInfo})
          this.userInfo = this.$store.getters.userInfo
        }).catch(err => {
          this.$vux.toast.text(err.message, 'middle')
        })
      },
      //时间戳转成时间格式
      dateFormat: function (tm) {
        var tt = new Date(parseInt(tm) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
        return tt;
      },
      //修改用户的生日
      updateBirthday: function (newVal) {
        let setTime = newVal.replace(new RegExp("-", "gm"), "/");
        let timeHaoMiao = (new Date(setTime)).getTime(); //得到毫秒数
        this.$httpPost('/api/user/updateBirthday', {
          birthday: timeHaoMiao + ''
        }).then((data) => {
          if(data.statusCode==200){
            this.$vux.toast.text(data.data,'midddle');
            this.getUserInfo();
          }
        }).catch(err => {
          this.$vux.toast.text(err.message,'middle')
        })
      },
      setDatetime(time) {
        this.datetime = new Date(parseInt(time)).toLocaleString().split(" ")[0].split("/").join("-")
      },
      //选择性别
      chooseGener(key) {
        this.$httpPost('/api/user/modifySex',{
          sex:key
        }).then((data)=>{
//          console.log(data)
          this.$vux.toast.text(data.data,'middle')
          this.getUserInfo()
        }).catch(err=>{
          this.$vux.toast.text(err.message,'middle')
        })
      },
      setSex(){
        let sex = this.userInfo.sex
        if(sex=='man'){
          this.gender = '男'
        }else if(sex='woman'){
          this.gender = '女'
        }
      }
    },
    watch: {
      userInfo:function (val) {
        this.setSex()
      }
    },
    created() {
      this.pageHeight = document.body.clientHeight

      this.setDatetime(this.$store.getters.userInfo.birthday || 0)

      this.setSex()

      this.getUserInfo()
    },
    computed: {}
  }
</script>

<template>
  <div class="page" :style="{'min-height':pageHeight+'px'}">
    <div class="fix-header">
      <x-header :left-options="{backText: ''}"><span class="header-text">个人信息</span></x-header>
    </div>
    <div class="fix-container">
      <group :gutter="-1">
        <cell is-link @click.native="changeImg">
          <input type="file" accept="image/*" style="display: none" ref="img" @change="submitImg">
          <div class="headImg" slot="icon">
            <img :src="userInfo.avatar?userInfo.avatar:'/static/images/hongsuantou.png'">
          </div>
        </cell>
        <cell title="昵称" is-link link="/personalInfo/nickName">
          <span class="cell-value">
            {{ userInfo.nickname }}
          </span>
        </cell>
        <cell title="姓名" is-link link="/personalInfo/name">
          <span class="cell-value">
            {{ userInfo.name }}
          </span>
        </cell>
        <cell title="性别" is-link @click.native="showGengerOpt = true">
          <span class="cell-value">
            {{ gender }}
          </span>
        </cell>
        <datetime v-model="datetime"
                  title="生日"
                  start-date="1970-01-01"
                  @on-change="updateBirthday">
        </datetime>
        <cell :title="'手机'" is-link>
          <span class="cell-value">
            {{ userInfo.mobile }}
          </span>
        </cell>
        <cell :title="'邮箱'" is-link link="/personalInfo/email">
          <span class="cell-value">
           {{ userInfo.email }}
          </span>
        </cell>
      </group>
      <group :gutter="10">
        <cell title="行业" is-link link="/personalInfo/industry">
          <span class="cell-value">
            {{ userInfo.industry }}
          </span>
        </cell>
      </group>
      <actionsheet v-model="showGengerOpt" :menus="genderOpt" @on-click-menu="chooseGener" show-cancel></actionsheet>
    </div>
  </div>
</template>


<style scoped lang="stylus">
  .page
    background-color #f7f7f7

  .vux-label
    color red

  .vux-label
    margin-right .1rem

  .headImg
    width .45rem
    height .45rem
    border-radius 50%
    overflow hidden
    & > img
      width 100%
</style>
