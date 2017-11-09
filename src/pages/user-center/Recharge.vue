<script>
  import { XHeader, Group, Cell , CheckIcon, XButton } from 'vux'
  export default {
    name: 'recharge',
    components: {
      XHeader, Group, Cell , CheckIcon, XButton
    },
    data() {
      return {
        options:[
          {
            label: '月会员',
            value: 'month'
          },
          {
            label: '年会员',
            value: 'year'
          }
        ],
        month:false,
        year:false
      }
    },
    watch:{
      month:function (val) {
        this.year = !val
      },
      year:function (val) {
        this.month = !val
      }
    },
    methods: {
      submit(){

      }
    },
    created() {

    }
  }
</script>

<template>
  <div>
    <x-header :left-options="{backText: ''}"><span class="header-text">充值续费</span></x-header>
    <group :gutter="-1" title="充值选项">
      <cell>
        <check-icon :value.sync="month" slot="title"><span class="defaut-font-size">月会员</span></check-icon>
        <span>￥36</span>
      </cell>
      <cell>
        <check-icon :value.sync="year" slot="title"><span class="defaut-font-size">年会员</span></check-icon>
        <span>￥36</span>
      </cell>
    </group>
    <div class="defaut-font-size red-font"><span class="iconfont icon-zhuyi"></span>月会员只可使用：性格分析、流年运势、家庭和谐</div>
    <div class="submit-wrap">
      <div class="submit-button">
        <x-button type="primary" @click.native="submit" style="border-radius:99px;">
          <span class="button-text">确定充值</span>
        </x-button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  $defaut-color = #ff3358
  .submit-wrap
    width 100%
    position absolute
    bottom .2rem
    .submit-button
      padding 0 .6rem
  .button-text
    font-size .16rem
  .defaut-font-size
    font-size .14rem
  .red-font
    color $defaut-color
    text-align center
    line-height .3rem
</style>
