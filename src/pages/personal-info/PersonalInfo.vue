<script>
  import {
    XHeader,
    Group,
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
      XHeader, Group, XInput, XButton, Cell, CellBox, CellFormPreview, PopupRadio, Datetime, XAddress
    },
    data() {
      return {
        pageHeight: 0,
        genderOpt: [{
          key: 'man',
          value: '男'
        }, {
          key: 'woman',
          value: '女'
        }],
        gender: this.$store.getters.userInfo.sex,
        addressData: ChinaAddressV4Data,
        showAddress: false,
        userInfo: this.$store.getters.userInfo,
        datetime: ''
      }
    },
    methods: {
      changeImg() {
        this.$refs.img.click();
      },
      //获取用户所有信息
      getUserInfo:function () {
        this.$httpPost('/api/user/getUserInfo', {}).then((data) => {
          let userInfo = data.data
          let token = this.$store.getters.token
          userInfo.token = token
          this.$store.dispatch('updateUserInfo', {userInfo: userInfo})
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
          console.log(data)
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
      }
    },
    watch: {
      gender: function (val) {
        console.log(val)
      }
    },
    created() {
      this.pageHeight = document.body.clientHeight

      this.setDatetime(this.$store.getters.userInfo.birthday || 0)
    },
    computed: {}
  }
</script>

<template>
  <div class="page" :style="{'min-height':pageHeight+'px'}">
    <x-header :left-options="{backText: ''}"><span class="header-text">个人信息</span></x-header>
    <div>
      <group :gutter="-1">
        <cell is-link @click.native="changeImg">
          <input type="file" accept="image/*" style="display: none" ref="img">
          <div class="headImg" slot="icon">
            <img src="/static/images/hongsuantou.png">
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
        <popup-radio title="性别" :options="genderOpt" v-model="gender"></popup-radio>
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
    </div>
  </div>
</template>


<style scoped lang="stylus">
  .page
    background-color #f7f7f7

  /*.vux-header
    background-color #fff
    border-bottom .01rem solid #e0e0e0
    .header-text
      font-size .16rem
      color #696969*/

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
