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
import util from './utils'

var formData = new Vue({
  el: '#form-data',
  data: {
    logo: config.logo,
    account: '',
    password: '',
    nickname: '',
    errorMsg: '',
    registArr:[] //存储账号密码
  },
  mounted () {
    this.$el.style.display = ""
  },
  methods: {
    //(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))
    regist () {
      if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.account))) {
        this.errorMsg = '请输入正确的手机号码'
        return
      } else if (this.nickname === '') {
        this.errorMsg = '密码不能为空'
        return
      }else if (this.nickname.length < 6) {
        this.errorMsg = '密码至少需要6位'
        return
      } else if (this.password !== this.nickname) {
        this.errorMsg = '两次输入密码不一致'
        return
      } 
      this.errorMsg = ''
      // 本demo做一次假登录
      // 真实场景应在此向服务器发起ajax请求
      let sdktoken = md5(this.password)

      let accountLowerCase = this.account.toLowerCase()

      let regist = JSON.parse(localStorage.getItem("regist")) ;//获取名称为“key”的值
      console.log(regist)
      if(!regist){
        this.registArr.push({
          password:sdktoken,
          account:accountLowerCase
        })
        localStorage.setItem("regist",JSON.stringify(this.registArr));//以“key”为名称存储一个值“value
        alert('注册成功')
        location.href = config.messageUrl
        return false;
      }
      let yy = true;
      let isOk = regist.map(function(elem,index) {
        if(elem['account'] == accountLowerCase){
          alert('该账号已注册')
          yy = false;
          return false;
        }
        
      }.bind(this))
      console.log(isOk)
      if(yy){
        regist.push({
          password:sdktoken,
          account:accountLowerCase
        })
        localStorage.setItem("regist",JSON.stringify(regist));//以“key”为名称存储一个值“value
        alert('注册成功')
        location.href = config.messageUrl
      }

      /*let xhr = new XMLHttpRequest()
      xhr.open('POST', `${config.postUrl}/api/createDemoUser`, true)
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
      xhr.setRequestHeader('appkey', config.appkey)
      xhr.send(util.object2query({
        username: accountLowerCase,
        password: sdktoken,
        nickname: this.nickname
      }))
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            if (data.res === 200) {
              cookie.setCookie('uid', accountLowerCase)
              cookie.setCookie('sdktoken', sdktoken)
              location.href = config.homeUrl
            } else if (data.res === 414) {
              this.errorMsg = data.errmsg
            } else {
              this.errorMsg = data.errmsg
            }
          } else {
            this.errorMsg = '网络断开或其他未知错误'
          }
          this.$forceUpdate()
        }
      }*/
    },
    login () {
      location.href = config.loginUrl
    }
  },
})
