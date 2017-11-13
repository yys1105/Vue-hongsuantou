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
        industry:''
      }
    },
    methods:{
      modifyUserInfo(){
        this.$httpPost('/api/user/modifyUserInfo',{
          type:'industry',
          value:this.industry
        }).then((data)=>{
          this.$vux.toast.text(data.data,'middle')
          setTimeout(()=>this.$router.go(-1))
        }).catch(err => {
          this.$vux.toast.text(err.message, 'middle')
        })
      }
    },
    created() {
      this.pageHeight = document.body.clientHeight
    }
  }
</script>

<template>
  <div class="page":style="{'min-height':pageHeight+'px'}">
    <x-header :left-options="{backText: ''}">
      <span class="header-text">修改行业</span>
      <span slot="right" @click="modifyUserInfo">保存</span>
    </x-header>
    <group :gutter="-1">
      <x-input v-model="industry" placeholder="请填写行业">
        <div slot="label" class="label-text">行业</div>
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
