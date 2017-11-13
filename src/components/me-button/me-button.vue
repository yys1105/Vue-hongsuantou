<script>
  export default {
    name: '',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean
    },
    data() {
      return {}
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>

<template>
  <button :disabled="disabled" class="me-button"
          @click="handleClick"
          :autofocus="autofocus"
          :type="nativeType"
          :class="[
      type ? 'me--' + type : '',
      size ? 'me--' + size : '',
      round ? 'me--round' : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain
      }
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<style scoped lang="stylus">
  default-color = #eb133a
  .me-button
    width 100%
    display inline-block
    line-height 1
    white-space nowrap
    cursor pointer
    background #fff
    border .012rem solid default-color
    border-color default-color
    color default-color
    -webkit-appearance none
    text-align center
    box-sizing border-box
    outline none
    margin 0
    transition .1s
    font-weight 500
    -moz-user-select none
    -webkit-user-select none
    -ms-user-select none
    padding .12rem .2rem
    font-size .14rem
    border-radius .04rem
  .me--round
    border-radius .2rem
  .me--primary
    color: #fff;
    background-color: default-color;
    border-color: default-color;
  .me--blue
    color: #fff;
    background-color: #0075ff;
    border-color: #0075ff;
</style>
