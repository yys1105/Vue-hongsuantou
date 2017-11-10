<script>
  import { XHeader, XInput, Group } from 'vux'
  export default {
    name: 'email',
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
      this.pageHeight = document.body.clientHeight
    }
  }
</script>

<template>
  <div class="page":style="{'min-height':pageHeight+'px'}">
    <x-header :left-options="{backText: ''}">
      <span class="header-text">修改邮箱</span>
      <span slot="right">保存</span>
    </x-header>
    <group :gutter="-1">
      <x-input v-model="nickName" placeholder="请填写邮箱">
        <div slot="label" class="label-text">邮箱</div>
      </x-input>
    </group>
  </div>
</template>


<style scoped lang="stylus">
  .page
    background-color #f7f7f7

  .label-text
    color #666
    padding-right .2rem
</style>
