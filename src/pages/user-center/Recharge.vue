<script>
  import { Radio } from 'mint-ui';

  export default {
    name: 'recharge',
    components: {
      'mt-radio':Radio
    },
    data() {
      return {
        options:[
          {
            label: '月会员',
            value: 'month'
          },
          {
            label: '年会员',
            value: 'year'
          }
        ],
        value:''
      }
    },
    methods: {},
    created() {

    }
  }
</script>

<template>
  <div>
    <mt-radio
      title="充值选项"
      v-model="value"
      :options="options">
    </mt-radio>
  </div>
</template>

<style lang="stylus" scoped>
</style>
