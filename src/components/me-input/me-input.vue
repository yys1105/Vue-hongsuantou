<script>
  export default {
    name: 'me-input',
    components: {},
    props: {
      icon: {
        type: String
      },
      placeholder: {
        type: String
      },
      value: [String, Number],
      type:String
    },
    data() {
      return {
        currentValue: this.value,
      }
    },
    methods: {
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
      },
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
    },
    watch:{
      'value'(val, oldValue) {
        this.setCurrentValue(val);
      }
    },
    created() {

    }
  }
</script>

<template>
  <div class="input-wrap" :class="{'padding-right':!$slots.append}">
    <div class="icon-font"><i :class="icon"></i></div>
    <div class="input">
      <input type="text"
             :placeholder="placeholder"
             @input="handleInput"
             :type="type">
    </div>
    <div class="button" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  color-light-grey = #e1e1e1
  color-dark-grey = #afafaf
  .padding-right
    padding-right 0!important
  .input-wrap
    position relative
    padding .15rem .8rem .15rem .4rem
    border-bottom .01rem solid color-light-grey
    .icon-font
      width .4rem
      line-height .25rem
      text-align center
      position absolute
      top .15rem
      left 0
      color color-dark-grey
    .input
      height .25rem
      width 100%
      & > input
        width 100%
        line-height .25rem
        border-style none
        outline none
        font-size .14rem
        &::-webkit-input-placeholder
          font-size .14rem
          line-height .25rem
    .button
      width .7rem
      line-height .2rem
      text-align right
      position absolute
      top .1rem
      right 0.05rem
      font-size .12rem
</style>
