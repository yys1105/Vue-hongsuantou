<script>
  import { XHeader, Group, Cell, XInput, CheckIcon  } from 'vux'
  export default {
    name: 'myBankCard',
    components:{
      XHeader, Group, Cell, XInput, CheckIcon
    },
    data() {
      return {
        editMode:false,
        myCards:[]
      }
    },
    methods:{
      //获取我的银行卡
      getMyBankList(){
        this.$httpPost('/api/userBank/getMyBankList',{}).then((data)=>{
          this.myCards = []
          for(let item of data.data){
            item.delete = false
            this.myCards.push(item)
          }
        }).catch(err=>{
          this.$vux.toast.text(err.message,'middle')
        })
      },
      //删除银行卡
      deleteBank(){
        for(let item of this.myCards){
            if(item.delete){
              this.$httpPost('/api/userBank/deleteBank',{
                id:item.id
              }).then((data)=>{
                this.$vux.toast.text(data.data,'middle')
                this.getMyBankList()
              }).catch(err=>{
                this.$vux.toast.text(err.message,'middle')
              })
            }
        }
        this.editMode=!this.editMode
      }
    },
    created() {
      this.pageHeight = document.body.clientHeight

      this.getMyBankList()
    }
  }
</script>

<template>
  <div class="page" :style="{'min-height':pageHeight+'px'}">
    <div class="fix-header">
      <x-header :left-options="{backText: ''}">
        <span class="header-text">我的银行卡</span>
        <template slot="right">
          <span class="edit-button" v-if="!editMode" @click="editMode=!editMode">编辑</span>
          <span class="edit-button" v-if="editMode" @click="deleteBank">删除</span>
        </template>
      </x-header>
    </div>
    <div class="fix-container">
      <group :gutter="-1">
        <template v-for="item in myCards">
          <cell value-align="right">
            <div class="card-img" slot="icon">
              <img :src="item.imageUrl">
            </div>
            <div slot="after-title">
              <div class="card-name">{{ item.bankName }}（尾号{{ item.bankCard.substring(item.bankCard.length-4) }}）</div>
              <div class="quota">{{ item.quota }}</div>
            </div>
            <span v-show="editMode">
              <check-icon :value.sync="item.delete"></check-icon>
            </span>
          </cell>
        </template>
      </group>
      <group>
        <cell title="添加银行卡" is-link link="/homePage/myBankCard/addBankCard"></cell>
      </group>
    </div>
  </div>
</template>


<style scoped lang="stylus">
  $defaut-color = #ff3358
  .page
    background-color #f7f7f7

  .edit-button
    color $defaut-color
    font-size .14rem

  .card-img
    width .3rem
    margin-right .15rem
    &>img
      width 100%
  .card-name
  .quota
    font-size .14rem
    color #333
    line-height .25rem
</style>
