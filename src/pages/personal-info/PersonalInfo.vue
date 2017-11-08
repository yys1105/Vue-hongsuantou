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
          key: '1',
          value: '男'
        }, {
          key: '2',
          value: '女'
        }],
        gender: null,
        datetime: null,
        city: [],
        addressData: ChinaAddressV4Data,
        showAddress: false
      }
    },
    methods: {
      changeImg() {
        this.$refs.img.click();
      }
    },
    watch: {
      gender: function (val) {
        console.log(val)
      },
      datetime: function (val) {
        console.log(val)
      }
    },
    created() {
      this.pageHeight = window.screen.availHeight
    }
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
            啊啊
          </span>
        </cell>
        <cell title="姓名" is-link link="/personalInfo/name">
          <span class="cell-value">
          </span>
        </cell>
        <popup-radio title="性别" :options="genderOpt" v-model="gender"></popup-radio>
        <datetime v-model="datetime" title="生日"></datetime>
        <cell :title="'手机'" is-link>
          <span class="cell-value">
            18306133926
          </span>
        </cell>
        <cell :title="'邮箱'" is-link link="/personalInfo/email">
          <span class="cell-value">
           1791566096@qq.com
          </span>
        </cell>
      </group>
      <group :gutter="10">
        <x-address title="所在城市"
                   v-model="city"
                   :list="addressData"
                   :show.sync="showAddress">
        </x-address>
        <cell title="行业" is-link link="/personalInfo/industry">
          <span class="cell-value">

          </span>
        </cell>
      </group>
    </div>
  </div>
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
