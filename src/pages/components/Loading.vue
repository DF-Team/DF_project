<template>
  <div v-show="isLoading">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast" style="position: absolute;">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">{{cont?cont:'加载中'}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data:function(){
      return {
        cont:"申请中...",
        // isLoading:false
      }
    },
    computed: {
      isLoading () {
        return this.$store.state.isLoading
      }
    },
    // props:{
    //   cont:"申请中..."
    // }
  }
</script>