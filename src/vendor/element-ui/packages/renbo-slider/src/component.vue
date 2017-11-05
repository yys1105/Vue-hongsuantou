<template>
  <transition name="el-zoom-in-top">
    <div class="slider__wrapper" v-show="visible" ref="sliderWrap">
      <div class="slider__container">
        <div class="header" ref="header" :style="{width:headerWidth+ 'px'}">
          <div slot="title" class="title">{{title}}</div>
          <button type="button" class="closeBtn" aria-label="Close" @click="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
          <div class="button">
            <slot name="button"></slot>
          </div>
        </div>
        <div class="body"><slot></slot></div>
      </div>
    </div>
  </transition>
</template>
<script>
//    import Popup from 'element-ui/src/utils/popup';
//    import emitter from 'element-ui/src/mixins/emitter';
    export default {
//        mixins: [Popup, emitter],
        data() {
            return {
                headerWidth:0,
                bodyHeight:0,
            }
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
        },

        watch: {
            visible(val) {
                this.$emit('update:visible', val);
                if (val) {
                    this.$emit('open');
//                    this.$refs.header.offsetWidth = document.body.offsetWidth-230
                } else {
                    this.$emit('close');
                }
            }
        },

        computed: {

        },

        methods: {
            handleClose() {
                if (typeof this.beforeClose === 'function') {
                    this.beforeClose(this.hide);
                } else {
                    this.hide();
                }
            },
            hide(cancel) {
                if (cancel !== false) {
                    this.$emit('update:visible', false);
                    this.$emit('visible-change', false);
                }
            },
            size(){
                this.headerWidth = document.body.offsetWidth-230
            }
        },
        mounted() {
            this.size()
        }
    };
</script>
<style lang="scss" scoped>
  @import "../../../../../styles/renbo-slider";
</style>