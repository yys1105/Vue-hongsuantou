<script>
  import { XHeader, XInput, Group } from 'vux'
  export default {
    name: 'industry',
    components: {
      XHeader, XInput, Group
    },
    data() {
      return {
        pageHeight:0,
        nickName:''
      }
    },
    methods:{
    },
    created() {
      this.pageHeight = window.screen.availHeight
    }
  }
</script>

<template>
  <div class="page":style="{'min-height':pageHeight+'px'}">
    <x-header :left-options="{backText: ''}">
      <span class="header-text">修改行业</span>
      <span slot="right">保存</span>
    </x-header>
    <group :gutter="-1">
      <x-input v-model="nickName" placeholder="请填写行业">
        <div slot="label" class="label-text">行业</div>
      </x-input>
    </group>
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

  .label-text
    color #666
    padding-right .2rem
</style>
