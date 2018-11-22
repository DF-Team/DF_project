import Vue from 'vue'

// 添加Fastclick移除移动端点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 添加手势触摸事件，使用方法如 v-touch:swipeleft
import VueTouch from './plugins/touchEvent'
Vue.use(VueTouch)

import md5 from './utils/md5'
import cookie from './utils/cookie'

import config from './configs'

var formData = new Vue({
  el: '#form-data',
  data: {
    logo: config.logo,
    account: '',
    password: '',
    errorMsg: ''
  },
  mounted () {
    this.$el.style.display = ""
  },
  methods: {
    login () {
      if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.account))) {
        this.errorMsg = '请输入正确的手机号码'
        return
      } else if (this.password === '') {
        this.errorMsg = '密码不能为空'
        return
      } else if (this.password.length < 6) {
        this.errorMsg = '密码至少需要6位'
        return
      }
      this.errorMsg = ''
      // 本demo做一次假登录
      // 真实场景应在此向服务器发起ajax请求
      let sdktoken = md5(this.password)
      // 服务端帐号均为小写
      /*cookie.setCookie('uid', this.account.toLowerCase())
      cookie.setCookie('sdktoken', sdktoken)*/
      let regist = JSON.parse(localStorage.getItem("regist")) ;//获取名称为“key”的值
      if(!regist){
        alert('该账号还没注册，先去注册')
        return false;
      }
      let yy = true;
      let isOk = regist.map(function(elem,index) {
        if(elem['account'] == this.account && elem['password'] == sdktoken){
          alert('登录成功');
          location.href = config.messageUrl
          yy = false;
          return false;
        }
        
      }.bind(this))
      if(yy){
        alert('账号或密码错误')
      }
      // location.href = config.homeUrl
    },
    regist () {
      location.href = config.registUrl
    }
  },
})