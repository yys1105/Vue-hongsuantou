<script>
  import { XHeader, Group, Cell, XInput } from 'vux'
  export default {
    name: 'myBankCard',
    components:{
      XHeader, Group, Cell, XInput
    },
    data() {
      return {
        editMode:true
      }
    },
    created() {
      this.pageHeight = document.body.clientHeight
    }
  }
</script>

<template>
  <div class="page" :style="{'min-height':pageHeight+'px'}">
    <x-header :left-options="{backText: ''}">
      <span class="header-text">我的银行卡</span>
      <span slot="right">{{ editMode?'编辑':'保存' }}</span>
    </x-header>
    <group>
      <cell title="添加银行卡" is-link></cell>
    </group>
  </div>
</template>


<style scoped lang="stylus">
  $defaut-color = #ff3358
  .page
    background-color #f7f7f7
</style>
