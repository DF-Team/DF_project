<template>
  <!-- <div class="g-inherit m-main p-session">
    6666666
  </div> -->
  <div>
    
    <div class="tu">
      <span class="myicon-tick-checked"></span>
    </div>
    <p class="cont">申请成功，请联系微信客服LLX</p>
  </div>
</template>

<script>
import util from '../utils'
import config from '../configs'

export default {
  data () {
    return {
      city:'',
      name:'',
      certNo:'',
      applyTel:'',
    }
  },
  computed: {
   
  },
  methods: {
    
  }
}
</script>

<style type="text/css">
  .p-session {
    .vux-cell-primary {
      max-width: 70%;
    }
  }
  .tu{
    margin: 200px auto 20px;
    text-align: center;
  }
  .cont{
    text-align: center;
  }
  .myicon-tick-checked {
display: inline-block;
position: relative;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #2ac845;
}


/**灰色勾*/
.myicon-tick-uncheck {
display: inline-block;
position: relative;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #5f646e;
}


.myicon-tick-checked:before, .myicon-tick-checked:after,.myicon-tick-uncheck:before,.myicon-tick-uncheck:after {
content: '';
pointer-events: none;
position: absolute;
color: white;
border: 1px solid;
background-color: white;
}


.myicon-tick-checked:before,.myicon-tick-uncheck:before {
width: 9px;
height: 0px;
left: 25%;
top: 50%;
transform: skew(0deg,50deg);
}


.myicon-tick-checked:after,.myicon-tick-uncheck:after {
width: 14px;
height: 1px;
left: 45%;
top: 42%;
transform: skew(0deg,-50deg);
}
</style>
