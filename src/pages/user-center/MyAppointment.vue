<script>
  import { XHeader } from 'vux'
  export default {
    name: 'myAppointment',
    components:{
      XHeader
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div>
    <x-header :left-options="{backText: ''}"><span class="header-text">我的预约</span></x-header>
  </div>
</template>


<style scoped>

</style>
