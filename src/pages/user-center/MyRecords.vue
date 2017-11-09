<script>
  import { XHeader } from 'vux'
  export default {
    name:'myRecords',
    components: {
      XHeader
    },
    data() {
      return {
        editMode:false
      }
    },
    methods: {},
    created() {

    }
  }
</script>

<template>
  <div>
    <x-header :left-options="{backText: ''}">
      <span class="header-text">我的记录</span>
      <template slot="right">
        <span class="edit-button" v-if="!editMode" @click="editMode=!editMode">编辑</span>
        <span class="edit-button" v-if="editMode" @click="editMode=!editMode">完成</span>
      </template>
    </x-header>
  </div>
</template>

<style lang="stylus" scoped>
  $default-color = #eb133a
  .edit-button
    color $default-color
    font-size .14rem
</style>
