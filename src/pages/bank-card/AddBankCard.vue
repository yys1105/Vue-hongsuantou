<script>
  import {XHeader, Group, Cell, XInput, Actionsheet } from 'vux'
  import MeButton from '../../components/me-button'

  export default {
    name: 'addBankCard',
    components: {
      XHeader, Group, Cell, XInput, Actionsheet,MeButton
    },
    data() {
      return {
        pageHeight: 0,
        name: '',
        idCard:'',
        bankId:'',
        bankName:'',
        bankCard:'',
        bankDeposit:'',
        showBankOpt:false,
        bankOpt:[]
      }
    },
    methods:{
      chooseBank(key, item){
//        console.log(item)
        this.bankId = item.value
        this.bankName = item.label
      },
      //获取银行列表
      getBankList(){
        this.$httpPost('/api/userBank/getBankList',{}).then((data)=>{
//          console.log(data.data)
          for(let item of data.data){
            this.bankOpt.push({
              label:item.name,
              value:item.id
            })
          }
        }).catch(err=>{
          this.$vux.toast.text(err.message,'middle')
        })
      },
      //添加银行卡
      addBank(){
        let idCardReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
        if(!idCardReg.test(this.idCard)){
          this.$vux.toast.text('请输入正确的身份证号','middle')
          return
        }
        this.$httpPost('/api/userBank/addBank',{
          name: this.name,
          idCard: this.idCard,
          bankId: this.bankId,
          bankCard: this.bankCard,
          bankDeposit: this.bankDeposit,
        }).then((data)=>{
          this.$vux.toast.text('添加成功','middle')
          setTimeout(()=>this.$router.go(-1),500)
        }).catch(err=>{
          this.$vux.toast.text(err.message,'middle')
        })
      }
    },
    created() {
      this.pageHeight = document.body.clientHeight
      this.getBankList()
    }
  }
</script>

<template>
  <div class="page" :style="{'min-height':pageHeight+'px'}">
    <div class="fix-header">
      <x-header :left-options="{backText: ''}">
        <span class="header-text">添加银行卡</span>
      </x-header>
    </div>
    <div class="fix-container">
      <group :gutter="-1">
        <x-input v-model="name" placeholder="请输入持卡人姓名" :show-clear="false">
          <div class="label-text" slot="label">真实姓名：</div>
        </x-input>
        <x-input v-model="idCard" placeholder="请输入持卡人身份证号" type="number" :show-clear="false">
          <div class="label-text" slot="label">身份证号：</div>
        </x-input>
      </group>
      <group :gutter="10">
        <cell value-align="left" is-link @click.native="showBankOpt = true">
          <div class="label-text" slot="title">开户银行</div>
          <div class="value-text">{{ bankName||'请选择开户银行' }}</div>
        </cell>
        <x-input v-model="bankDeposit" placeholder="请输入开户行全称" :show-clear="false">
          <div class="label-text" slot="label">开户行全称：</div>
        </x-input>
        <x-input v-model="bankCard" placeholder="请输入银行卡号" :show-clear="false">
          <div class="label-text" slot="label">银行卡号：</div>
        </x-input>
      </group>
      <div class="tip-text">请确保姓名，身份证，银行开户行为同一个人！</div>
      <div class="submit-button">
        <me-button round type="blue" @click="addBank">确定添加</me-button>
      </div>
      <!--银行选择-->
      <actionsheet v-model="showBankOpt" :menus="bankOpt" @on-click-menu="chooseBank" show-cancel></actionsheet>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  $defaut-color = #ff3358
  $blue-color = #0075ff
  .page
    background-color #f7f7f7

  .label-text
    width 1rem
    font-size .14rem
    color: #333
  .value-text
    font-size .14rem
    color #333

  .tip-text
    color $blue-color
    font-size .12rem
    line-height .3rem
  .submit-button
    margin .2rem .6rem 0 .6rem
</style>
