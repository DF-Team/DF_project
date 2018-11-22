<template>
  <!-- <div class="g-inherit m-main p-session">
    6666666
  </div> -->
  <div>
    <div class="me-title clearFix">
      <!-- <a class="back"> <div class="me-left me-left-homepage">&nbsp;</div></a> -->
        <div class="me-center">贷款申请</div>
    </div>
    <div class="banka-tianxie clearfix" id="mrm_tdCity">
      <div class="tianxie-name">当前居住城市</div>
      <input v-model="city" id="address" type="text" name="city" class="shengshi_address color-66 font-15" placeholder="省/市" monitor="">
      <input type="hidden" id="hd_area">
    </div>
    <div class="banka-tianxie clearfix">
      <div class="tianxie-name">姓名</div>
      <input v-model="name" type="text" placeholder="中文姓名" name="applyName" datatype="zh2-4" id="pccc_applyName" value="" monitor="">
    </div>
    <div class="banka-tianxie clearfix">
      <div class="tianxie-name">身份证</div>
      <input v-model="certNo" type="text" placeholder="18位身份证号码" datatype="n18" value="" name="certNo" id="pccc_certNo" maxlength="18" monitor="">
    </div>
    <div class="banka-tianxie clearfix">
      <div class="tianxie-name">手机</div>
      <input v-model="applyTel" type="tel" placeholder="常用手机号" datatype="m" id="pccc_applyTel" name="applyTel" value="" maxlength="11" monitor="">
    </div>

    <div class="btn-line btn-line-02 xiayibu-div">
      <a @click="sub" id="submitForm" class="btn-banka next-yushenpi" personalized="bottom" href="javascript:void(0);">提交</a>
    </div>
    <loading></loading>
  </div>
</template>

<script>
import util from '../utils'
import config from '../configs'
import Loading from './components/Loading'

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
    regist:function(){
      return JSON.parse(localStorage.getItem("regist"));
    }
  },
  methods: {
    sub(){
      if(this.city==null||this.city==undefined||this.city==""){
        alert('请填写城市信息')
        return false;
      }else if(this.name==null||this.name==undefined||this.name==""){
        alert('请输入姓名')
        return false;
      }else if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.certNo))){
        alert('请输入合法的身份证')
        return;
      }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.applyTel))){
        
        alert('请输入正确的手机号码')
        return;
      }
      console.log({
        city:this.city,
        name:this.name,
        certNo:this.certNo,
        applyTel:this.applyTel
      })
      this.$store.state.isLoading = true;

      setTimeout(function(){
        //this.$store.state.isLoading = false;
        location.href = config.succeedUrl
      }.bind(this),4000)
      
    },
    logined:function(){
      //let regist = JSON.parse(localStorage.getItem("regist")) ;//获取名称为“key”的值
      if(!this.regist){
        location.href = config.loginUrl;
        return false;
      }
    }
  },
  mounted:function(){
    this.logined()
  },
  components:{
    Loading
  }
}
</script>

<style type="text/css">
  .p-session {
    .vux-cell-primary {
      max-width: 70%;
    }
  }
  .me-title{
    width: 100%;
    background-color: #0093d3;
    line-height: 44px;
    height: 44px;
  }
  .me-center{
    float: left;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 1.25rem;
  }
  


  .banka-tianxie{
    border-top: 1px solid #d9d9d9;
    line-height: 48px;
    background-color: #fff;
    position: relative;
    font-family: "黑体", Helvetica, Arial, sans-serif;
    height: 48px;
  }
  .tianxie-name{
    width: 33%;
    padding-left: 3%;
    float: left;
    color: #333;
    /*font-size: 1.5rem;*/
    font-size: 14px;
    text-align: left;
    height: 48px;
  }
  .banka-tianxie input{
    width: 61%;
    float: left;
    line-height: 1.6;
    font-size: 15px;
    border: 0;
    background-color: transparent;
    height: 48px;
    color: #222;
    padding: 10px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .btn-line-02{
    padding: 5% 0 0 0;
  }
  .btn-line{
    margin: 3% auto;
    width: 94%;
    text-align: center;
  }
  .btn-line a{
    color: #fff;
  }
  .btn-banka{
    background-color: #2995c9;
    width: 100%;
    display: block;
    padding: 3% 0;
    /*font-size: 1.8rem;*/
    font-size: 16px;
  }
</style>
