<script>
  import { XHeader, XTextarea, Group } from 'vux'
  export default {
    name: 'opinion',
    components: {
      XHeader, XTextarea, Group
    },
    data() {
      return {
        pageHeight:0,
        placeholder:'请输入您的宝贵意见，我们将不断完善',
        height:150
      }
    },
    methods: {},
    created() {
      this.pageHeight = document.body.clientHeight
    }
  }
</script>

<template>
  <div class="page" :style="{'min-height':pageHeight+'px'}">
    <x-header :left-options="{backText: ''}">
      <span class="header-text">意见反馈</span>
      <span class="edit-button" slot="right">提交</span>
    </x-header>
    <group :gutter="10">
      <x-textarea :max="300" name="detail" :placeholder="placeholder" :show-counter="false" :height="height"></x-textarea>
    </group>
  </div>
</template>

<style lang="stylus" scoped>
  $default-color = #eb133a
  .page
    background-color #f7f7f7
  .edit-button
    color $default-color
    font-size .14rem
</style>
