webpackJsonp([16],{

/***/ 322:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/Message.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-1322c856","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./Message.vue */ 479)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./Message.vue */ 413),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-1322c856"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./Message.vue */ 455),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\llx\\Desktop\\DJ_project\\NIM_Web_Demo_H5\\src\\pages\\Message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1322c856", Component.options)
  } else {
    hotAPI.reload("data-v-1322c856", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 413:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Message.vue ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ 16);

var _utils2 = _interopRequireDefault(_utils);

var _configs = __webpack_require__(/*! ../configs */ 6);

var _configs2 = _interopRequireDefault(_configs);

var _Loading = __webpack_require__(/*! ./components/Loading */ 161);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      city: '',
      name: '',
      certNo: '',
      applyTel: ''
    };
  },

  computed: {
    regist: function regist() {
      return JSON.parse(localStorage.getItem("regist"));
    }
  },
  methods: {
    sub: function sub() {
      if (this.city == null || this.city == undefined || this.city == "") {
        alert('请填写城市信息');
        return false;
      } else if (this.name == null || this.name == undefined || this.name == "") {
        alert('请输入姓名');
        return false;
      } else if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.certNo)) {
        alert('请输入合法的身份证');
        return;
      } else if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.applyTel)) {

        alert('请输入正确的手机号码');
        return;
      }
      console.log({
        city: this.city,
        name: this.name,
        certNo: this.certNo,
        applyTel: this.applyTel
      });
      this.$store.state.isLoading = true;

      setTimeout(function () {
        location.href = _configs2.default.succeedUrl;
      }.bind(this), 4000);
    },

    logined: function logined() {
      if (!this.regist) {
        location.href = _configs2.default.loginUrl;
        return false;
      }
    }
  },
  mounted: function mounted() {
    this.logined();
  },
  components: {
    Loading: _Loading2.default
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 434:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-1322c856","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Message.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.p-session .vux-cell-primary {\n  max-width: 70%;\n}\n.me-title{\n  width: 100%;\n  background-color: #0093d3;\n  line-height: 44px;\n  height: 44px;\n}\n.me-center{\n  float: left;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  font-size: 1.25rem;\n}\n.banka-tianxie{\n  border-top: 1px solid #d9d9d9;\n  line-height: 48px;\n  background-color: #fff;\n  position: relative;\n  font-family: \"\\9ED1\\4F53\", Helvetica, Arial, sans-serif;\n  height: 48px;\n}\n.tianxie-name{\n  width: 33%;\n  padding-left: 3%;\n  float: left;\n  color: #333;\n  /*font-size: 1.5rem;*/\n  font-size: 14px;\n  text-align: left;\n  height: 48px;\n}\n.banka-tianxie input{\n  width: 61%;\n  float: left;\n  line-height: 1.6;\n  font-size: 15px;\n  border: 0;\n  background-color: transparent;\n  height: 48px;\n  color: #222;\n  padding: 10px 0;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n.btn-line-02{\n  padding: 5% 0 0 0;\n}\n.btn-line{\n  margin: 3% auto;\n  width: 94%;\n  text-align: center;\n}\n.btn-line a{\n  color: #fff;\n}\n.btn-banka{\n  background-color: #2995c9;\n  width: 100%;\n  display: block;\n  padding: 3% 0;\n  /*font-size: 1.8rem;*/\n  font-size: 16px;\n}\n", "", {"version":3,"sources":["C:/Users/llx/Desktop/DJ_project/NIM_Web_Demo_H5/src/pages/Message.vue"],"names":[],"mappings":";AAsGE;EACE,eAAe;CAChB;AAEH;EACE,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB;EAClB,aAAa;CACd;AACD;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;CACpB;AAID;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,wDAAgD;EAChD,aAAa;CACd;AACD;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;EACV,8BAA8B;EAC9B,aAAa;EACb,YAAY;EACZ,gBAAgB;EAEhB,4BAAuB;OAAvB,uBAAuB;CACxB;AAED;EACE,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,WAAW;EACX,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,YAAY;EACZ,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,gBAAgB;CACjB","file":"Message.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-session {\n  .vux-cell-primary {\n    max-width: 70%;\n  }\n}\n.me-title{\n  width: 100%;\n  background-color: #0093d3;\n  line-height: 44px;\n  height: 44px;\n}\n.me-center{\n  float: left;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  font-size: 1.25rem;\n}\n\n\n\n.banka-tianxie{\n  border-top: 1px solid #d9d9d9;\n  line-height: 48px;\n  background-color: #fff;\n  position: relative;\n  font-family: \"黑体\", Helvetica, Arial, sans-serif;\n  height: 48px;\n}\n.tianxie-name{\n  width: 33%;\n  padding-left: 3%;\n  float: left;\n  color: #333;\n  /*font-size: 1.5rem;*/\n  font-size: 14px;\n  text-align: left;\n  height: 48px;\n}\n.banka-tianxie input{\n  width: 61%;\n  float: left;\n  line-height: 1.6;\n  font-size: 15px;\n  border: 0;\n  background-color: transparent;\n  height: 48px;\n  color: #222;\n  padding: 10px 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.btn-line-02{\n  padding: 5% 0 0 0;\n}\n.btn-line{\n  margin: 3% auto;\n  width: 94%;\n  text-align: center;\n}\n.btn-line a{\n  color: #fff;\n}\n.btn-banka{\n  background-color: #2995c9;\n  width: 100%;\n  display: block;\n  padding: 3% 0;\n  /*font-size: 1.8rem;*/\n  font-size: 16px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 455:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-1322c856"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Message.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "banka-tianxie clearfix",
    attrs: {
      "id": "mrm_tdCity"
    }
  }, [_c('div', {
    staticClass: "tianxie-name"
  }, [_vm._v("当前居住城市")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.city),
      expression: "city"
    }],
    staticClass: "shengshi_address color-66 font-15",
    attrs: {
      "id": "address",
      "type": "text",
      "name": "city",
      "placeholder": "省/市",
      "monitor": ""
    },
    domProps: {
      "value": (_vm.city)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.city = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "hidden",
      "id": "hd_area"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "banka-tianxie clearfix"
  }, [_c('div', {
    staticClass: "tianxie-name"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    attrs: {
      "type": "text",
      "placeholder": "中文姓名",
      "name": "applyName",
      "datatype": "zh2-4",
      "id": "pccc_applyName",
      "value": "",
      "monitor": ""
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "banka-tianxie clearfix"
  }, [_c('div', {
    staticClass: "tianxie-name"
  }, [_vm._v("身份证")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.certNo),
      expression: "certNo"
    }],
    attrs: {
      "type": "text",
      "placeholder": "18位身份证号码",
      "datatype": "n18",
      "value": "",
      "name": "certNo",
      "id": "pccc_certNo",
      "maxlength": "18",
      "monitor": ""
    },
    domProps: {
      "value": (_vm.certNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.certNo = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "banka-tianxie clearfix"
  }, [_c('div', {
    staticClass: "tianxie-name"
  }, [_vm._v("手机")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.applyTel),
      expression: "applyTel"
    }],
    attrs: {
      "type": "tel",
      "placeholder": "常用手机号",
      "datatype": "m",
      "id": "pccc_applyTel",
      "name": "applyTel",
      "value": "",
      "maxlength": "11",
      "monitor": ""
    },
    domProps: {
      "value": (_vm.applyTel)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.applyTel = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-line btn-line-02 xiayibu-div"
  }, [_c('a', {
    staticClass: "btn-banka next-yushenpi",
    attrs: {
      "id": "submitForm",
      "personalized": "bottom",
      "href": "javascript:void(0);"
    },
    on: {
      "click": _vm.sub
    }
  }, [_vm._v("提交")])]), _vm._v(" "), _c('loading')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "me-title clearFix"
  }, [_c('div', {
    staticClass: "me-center"
  }, [_vm._v("贷款申请")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1322c856", module.exports)
  }
}

/***/ }),

/***/ 479:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-1322c856","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Message.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-1322c856","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue */ 434);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 5)("3c10c3d8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1322c856\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1322c856\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=16.js.map