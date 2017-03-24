webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Address_Index__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Address_Index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Address_Index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Address_Edit__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Address_Edit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Address_Edit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Address_Add__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Address_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Address_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Goods_Index__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Goods_Index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Goods_Index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Goods_Detail__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Goods_Detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Goods_Detail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Goods_Buy__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Goods_Buy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Goods_Buy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Order_Index__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Order_Index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_Order_Index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Order_Detail__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Order_Detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_Order_Detail__);














__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{ path: '/address', name: 'address', component: __WEBPACK_IMPORTED_MODULE_2__components_Address_Index___default.a }, { path: '/address/edit/:id', name: 'addressEdit', component: __WEBPACK_IMPORTED_MODULE_3__components_Address_Edit___default.a }, { path: '/address/add', name: 'addressAdd', component: __WEBPACK_IMPORTED_MODULE_4__components_Address_Add___default.a }, { path: '/order', name: 'order', component: __WEBPACK_IMPORTED_MODULE_8__components_Order_Index___default.a }, { path: '/order/:id', name: 'orderDetail', component: __WEBPACK_IMPORTED_MODULE_9__components_Order_Detail___default.a }, { path: '/goods', name: 'goods', component: __WEBPACK_IMPORTED_MODULE_5__components_Goods_Index___default.a }, { path: '/goods/detail/:id', name: 'goodsDetail', component: __WEBPACK_IMPORTED_MODULE_6__components_Goods_Detail___default.a }, { path: '/goods/buy/:id', name: 'goodsBuy', component: __WEBPACK_IMPORTED_MODULE_7__components_Goods_Buy___default.a }, { path: '/', redirect: { name: 'goods' } }]
}));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'swiper-slide',
  ready() {
    this.update();
  },
  mounted() {
    this.update();
  },
  updated() {
    this.update();
  },
  attached() {
    this.update();
  },
  methods: {
    update() {
      if (this.$parent && this.$parent.swiper && this.$parent.swiper.update) {
        this.$parent.swiper.update(true);
        if (this.$parent.options.loop) {
          this.$parent.swiper.reLoop();
        }
      }
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

var browser = typeof window !== 'undefined';
if (browser) {
  window.Swiper = __webpack_require__(3);
  __webpack_require__(22);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'swiper',
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: 3500
        };
      }
    }
  },
  ready() {
    if (!this.swiper && browser) {
      this.swiper = new Swiper(this.$el, this.options);
    }
  },
  mounted() {
    var self = this;
    var mount = function () {
      if (!self.swiper && browser) {
        delete self.options.notNextTick;
        self.swiper = new Swiper(self.$el, self.options);
      }
    };
    this.options.notNextTick ? mount() : this.$nextTick(mount);
  },
  updated() {
    if (this.swiper) {
      this.swiper.update();
    }
  },
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
      delete this.swiper;
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app'
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'address_add',
    data() {
        return {
            address: {
                name: '',
                mobile: '',
                full_address: ''
            }
        };
    },
    created: function () {},
    methods: {
        submit: function () {
            var _this = this;

            if (_this.address.name == '') {
                __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.topTips('请输入收货人姓名', 1000);
                return false;
            }

            if (_this.address.mobile == '') {
                __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.topTips('请输入收货人手机号', 1000);
                return false;
            }

            if (_this.address.full_address == '') {
                __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.topTips('请输入收货人详细地址', 1000);
                return false;
            }

            var loading = __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.loading('正在处理');

            setTimeout(function () {
                loading.hide(function () {
                    __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.toast('操作成功', 1000);
                    _this.$router.replace({ name: 'address' });
                });
            }, 1000);
        }
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'address_edit',
    data() {
        return {
            address: {
                address_id: 1,
                name: '张三',
                mobile: '13500000000',
                full_address: '北京市东城区呵呵哒'
            }
        };
    },
    created: function () {},
    methods: {
        submit: function () {

            var _this = this;

            if (_this.address.name == '') {
                __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.topTips('请输入收货人姓名', 1000);
                return false;
            }

            if (_this.address.mobile == '') {
                __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.topTips('请输入收货人手机号', 1000);
                return false;
            }

            if (_this.address.full_address == '') {
                __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.topTips('请输入收货人详细地址', 1000);
                return false;
            }

            var loading = __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.loading('正在处理');

            setTimeout(function () {
                loading.hide(function () {
                    __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.toast('操作成功', 1000);
                    _this.$router.replace({ name: 'address' });
                });
            }, 1000);
        }
    }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'user',
    data() {
        return {
            address: [{
                address_id: 1,
                name: '张三',
                mobile: '135****0000',
                full_address: '北京市东城区呵呵哒',
                is_default: 1
            }, {
                address_id: 2,
                name: '李四',
                mobile: '135****0000',
                full_address: '北京市西城区呵呵哒',
                is_default: 0
            }]
        };
    }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'goods_buy',
    data() {
        return {
            address_id: '',
            goods: {
                thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                goods_name: '测试商品1',
                exchange_score: '10000'
            },
            address: [{
                address_id: 1,
                name: '张三',
                mobile: '135****0000',
                full_address: '北京市东城区呵呵哒',
                is_default: 1
            }, {
                address_id: 2,
                name: '李四',
                mobile: '135****0000',
                full_address: '北京市西城区呵呵哒',
                is_default: 0
            }]
        };
    },
    created: function () {},
    methods: {
        submit: function () {

            var _this = this;

            if (_this.address_id == '') {
                __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.topTips('请选择收货地址', 3000);
                return false;
            }

            var loading = __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.loading('正在处理');

            console.log(this.address_id);

            setTimeout(function () {
                loading.hide(function () {
                    __WEBPACK_IMPORTED_MODULE_0_weui_js___default.a.topTips('积分不足', 3000);
                });
            }, 1000);
        }
    }

});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'goods_detail',
    data() {
        return {
            swiperOption: {
                autoplay: 0,
                autoHeight: true,
                loop: true,
                pagination: '.swiper-pagination'
            },
            item: null
        };
    },
    created: function () {

        this.item = {
            images: ['//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg', '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg', '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg', '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg'],
            goods_name: '测试商品' + this.$route.params.id,
            exchange_score: '10000',
            store_goods_id: this.$route.params.id,
            detail: ['<section><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><img src="//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg" alt=""> <img src="//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg" alt=""></p></section><section><h3>1.2 节标题</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></section>'].join("")
        };
    }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'goods',
    data() {
        return {
            items: [{
                thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                goods_name: '测试商品1',
                exchange_score: '10000',
                store_goods_id: 1
            }, {
                thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                goods_name: '测试商品2',
                exchange_score: '10000',
                store_goods_id: 2
            }, {
                thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                goods_name: '测试商品3',
                exchange_score: '10000',
                store_goods_id: 3
            }, {
                thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                goods_name: '测试商品4',
                exchange_score: '10000',
                store_goods_id: 4
            }]
        };
    }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'order_detail',
    data() {
        return {
            item: {
                order_id: 20170303000000,
                goods_name: '测试商品名称',
                order_status: '已发货',
                exchange_method: '直接兑换',
                exchange_score: 10000,
                created_at: '2017-01-01 11:00:00',
                order_remark: '订单已发货, 快递单号80808080808(圆通)'
            }
        };
    }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'order',
    data() {
        return {
            items: [{
                order_id: 20170303000000,
                goods_name: '测试商品名称',
                order_status: '待发货',
                exchange_method: '直接兑换',
                exchange_score: 10000
            }, {
                order_id: 20170303000000,
                goods_name: '测试商品名称',
                order_status: '待发货',
                exchange_method: '直接兑换',
                exchange_score: 10000
            }, {
                order_id: 20170303000000,
                goods_name: '测试商品名称',
                order_status: '待发货',
                exchange_method: '直接兑换',
                exchange_score: 10000
            }, {
                order_id: 20170303000000,
                goods_name: '测试商品名称',
                order_status: '待发货',
                exchange_method: '直接兑换',
                exchange_score: 10000
            }]
        };
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_css_weui_min_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_css_weui_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_css_weui_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_app_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_css_app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fastclick__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_awesome_swiper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_awesome_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_awesome_swiper__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_5_fastclick___default.a.attach(document.body);
__WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_vue_awesome_swiper___default.a);

__WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */]({
	el: '#app',
	router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],
	template: '<App/>',
	components: { App: __WEBPACK_IMPORTED_MODULE_3__App___default.a }
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "buy"
  }, [_c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("新建地址")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address.name),
      expression: "address.name"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "text",
      "placeholder": "收货人姓名"
    },
    domProps: {
      "value": (_vm.address.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address.mobile),
      expression: "address.mobile"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "tel",
      "placeholder": "请输入手机号"
    },
    domProps: {
      "value": (_vm.address.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address.mobile = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address.full_address),
      expression: "address.full_address"
    }],
    staticClass: "weui-textarea",
    attrs: {
      "rows": "3",
      "placeholder": "详细地址"
    },
    domProps: {
      "value": (_vm.address.full_address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address.full_address = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('a', {
    staticClass: "weui-btn weui-btn_primary",
    attrs: {
      "href": "javascript:",
      "id": "showTooltips"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("保存")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("收货人")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("手机号")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("地址")])])
}]}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-slide"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.items), function(item) {
    return [_c('div', {
      staticClass: "weui-form-preview"
    }, [_c('div', {
      staticClass: "weui-form-preview__hd"
    }, [_c('label', {
      staticClass: "weui-form-preview__label"
    }, [_vm._v("消费积分")]), _vm._v(" "), _c('em', {
      staticClass: "weui-form-preview__value"
    }, [_vm._v(_vm._s(item.exchange_score))])]), _vm._v(" "), _c('div', {
      staticClass: "weui-form-preview__bd"
    }, [_c('div', {
      staticClass: "weui-form-preview__item"
    }, [_c('label', {
      staticClass: "weui-form-preview__label"
    }, [_vm._v("商品")]), _vm._v(" "), _c('span', {
      staticClass: "weui-form-preview__value"
    }, [_vm._v(_vm._s(item.goods_name))])]), _vm._v(" "), _c('div', {
      staticClass: "weui-form-preview__item"
    }, [_c('label', {
      staticClass: "weui-form-preview__label"
    }, [_vm._v("兑换方式")]), _vm._v(" "), _c('span', {
      staticClass: "weui-form-preview__value"
    }, [_vm._v(_vm._s(item.exchange_method))])]), _vm._v(" "), _c('div', {
      staticClass: "weui-form-preview__item"
    }, [_c('label', {
      staticClass: "weui-form-preview__label"
    }, [_vm._v("订单状态")]), _vm._v(" "), _c('span', {
      staticClass: "weui-form-preview__value"
    }, [_vm._v(_vm._s(item.order_status))])])]), _vm._v(" "), _c('div', {
      staticClass: "weui-form-preview__ft"
    }, [_c('router-link', {
      staticClass: "weui-form-preview__btn weui-form-preview__btn_primary",
      attrs: {
        "to": {
          name: 'orderDetail',
          params: {
            id: item.order_id
          }
        }
      }
    }, [_vm._v("\n                查看详情\n                ")])], 1)]), _vm._v(" "), _c('br')]
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "weui-form-preview"
  }, [_c('div', {
    staticClass: "weui-form-preview__hd"
  }, [_c('label', {
    staticClass: "weui-form-preview__label"
  }, [_vm._v("消费积分")]), _vm._v(" "), _c('em', {
    staticClass: "weui-form-preview__value"
  }, [_vm._v(_vm._s(_vm.item.exchange_score))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-form-preview__bd"
  }, [_c('div', {
    staticClass: "weui-form-preview__item"
  }, [_c('label', {
    staticClass: "weui-form-preview__label"
  }, [_vm._v("商品")]), _vm._v(" "), _c('span', {
    staticClass: "weui-form-preview__value"
  }, [_vm._v(_vm._s(_vm.item.goods_name))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-form-preview__item"
  }, [_c('label', {
    staticClass: "weui-form-preview__label"
  }, [_vm._v("兑换方式")]), _vm._v(" "), _c('span', {
    staticClass: "weui-form-preview__value"
  }, [_vm._v(_vm._s(_vm.item.exchange_method))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-form-preview__item"
  }, [_c('label', {
    staticClass: "weui-form-preview__label"
  }, [_vm._v("订单状态")]), _vm._v(" "), _c('span', {
    staticClass: "weui-form-preview__value"
  }, [_vm._v(_vm._s(_vm.item.order_status))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-form-preview__item"
  }, [_c('label', {
    staticClass: "weui-form-preview__label"
  }, [_vm._v("订单号")]), _vm._v(" "), _c('span', {
    staticClass: "weui-form-preview__value"
  }, [_vm._v(_vm._s(_vm.item.order_id))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-form-preview__item"
  }, [_c('label', {
    staticClass: "weui-form-preview__label"
  }, [_vm._v("下单时间")]), _vm._v(" "), _c('span', {
    staticClass: "weui-form-preview__value"
  }, [_vm._v(_vm._s(_vm.item.created_at))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-form-preview__item"
  }, [_c('label', {
    staticClass: "weui-form-preview__label"
  }, [_vm._v("订单说明")]), _vm._v(" "), _c('span', {
    staticClass: "weui-form-preview__value"
  }, [_vm._v(_vm._s(_vm.item.order_remark))])])])])])
},staticRenderFns: []}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("收货地址管理")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells"
  }, [_vm._l((_vm.address), function(item) {
    return [_c('router-link', {
      staticClass: "weui-cell weui-cell_access",
      attrs: {
        "to": {
          name: 'addressEdit',
          params: {
            id: item.address_id
          }
        }
      }
    }, [_c('div', {
      staticClass: "weui-cell__bd"
    }, [_c('p', [_vm._v(_vm._s(item.name) + " "), _c('span', [_vm._v(_vm._s(item.mobile))])]), _vm._v(" "), _c('p', {
      staticStyle: {
        "font-size": "13px",
        "color": "#888888"
      }
    }, [_vm._v(_vm._s(item.full_address))])]), _vm._v(" "), _c('div', {
      staticClass: "weui-cell__ft"
    })])]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('router-link', {
    staticClass: "weui-btn weui-btn_plain-primary",
    attrs: {
      "to": {
        name: 'addressAdd'
      }
    }
  }, [_vm._v("\n            新建收货地址\n        ")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "buy"
  }, [_c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("编辑地址")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address.name),
      expression: "address.name"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "text",
      "placeholder": "收货人"
    },
    domProps: {
      "value": (_vm.address.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address.mobile),
      expression: "address.mobile"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "tel",
      "placeholder": "请输入手机号"
    },
    domProps: {
      "value": (_vm.address.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address.mobile = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address.full_address),
      expression: "address.full_address"
    }],
    staticClass: "weui-textarea",
    attrs: {
      "rows": "3",
      "placeholder": "详细地址"
    },
    domProps: {
      "value": (_vm.address.full_address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address.full_address = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('a', {
    staticClass: "weui-btn weui-btn_primary",
    attrs: {
      "href": "javascript:",
      "id": "showTooltips"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("保存")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("收货人")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("手机号")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("地址")])])
}]}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-container"
  }, [_vm._t("parallax-bg"), _vm._v(" "), _c('div', {
    staticClass: "swiper-wrapper"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("pagination"), _vm._v(" "), _vm._t("button-prev"), _vm._v(" "), _vm._t("button-next"), _vm._v(" "), _vm._t("scrollbar")], 2)
},staticRenderFns: []}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "buy"
  }, [_c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("商品信息")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', {
    staticClass: "weui-media-box weui-media-box_appmsg"
  }, [_c('div', {
    staticClass: "weui-media-box__hd"
  }, [_c('img', {
    staticClass: "weui-media-box__thumb",
    attrs: {
      "src": _vm.goods.thumb
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weui-media-box__bd"
  }, [_c('h4', {
    staticClass: "weui-media-box__title"
  }, [_vm._v(_vm._s(_vm.goods.goods_name))]), _vm._v(" "), _c('p', {
    staticClass: "weui-media-box__desc"
  }, [_vm._v("积分: " + _vm._s(_vm.goods.exchange_score))])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("选择收货地址")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_radio"
  }, [_vm._l((_vm.address), function(item) {
    return [_c('label', {
      staticClass: "weui-cell weui-check__label",
      attrs: {
        "for": 'address-radio-' + item.address_id
      }
    }, [_c('div', {
      staticClass: "weui-cell__bd"
    }, [_c('p', [_vm._v(_vm._s(item.name) + "\n                        "), _c('span', [_vm._v(_vm._s(item.mobile))])]), _vm._v(" "), _c('p', {
      staticStyle: {
        "font-size": "13px",
        "color": "#888888"
      }
    }, [_vm._v(_vm._s(item.full_address))])]), _vm._v(" "), _c('div', {
      staticClass: "weui-cell__ft"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.address_id),
        expression: "address_id"
      }],
      staticClass: "weui-check",
      attrs: {
        "type": "radio",
        "id": 'address-radio-' + item.address_id
      },
      domProps: {
        "value": item.address_id,
        "checked": _vm._q(_vm.address_id, item.address_id)
      },
      on: {
        "__c": function($event) {
          _vm.address_id = item.address_id
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "weui-icon-checked"
    })])])]
  }), _vm._v(" "), _c('router-link', {
    staticClass: "weui-cell weui-cell_link",
    attrs: {
      "to": {
        name: 'addressAdd'
      }
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("新建收货地址")])])], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('a', {
    staticClass: "weui-btn weui-btn_primary",
    attrs: {
      "href": "javascript:",
      "id": "showTooltips"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("确定")])])])
},staticRenderFns: []}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "page__bd",
    staticStyle: {
      "height": "100%"
    }
  }, [_c('div', {
    staticClass: "weui-tab"
  }, [_c('div', {
    staticClass: "weui-tab__panel"
  }, [_c('router-view')], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-tabbar"
  }, [_c('router-link', {
    staticClass: "weui-tabbar__item",
    attrs: {
      "to": {
        name: 'goods'
      },
      "activeClass": "weui-bar__item_on"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-shop weui-tabbar__icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "weui-tabbar__label"
  }, [_vm._v("商城")])]), _vm._v(" "), _c('router-link', {
    staticClass: "weui-tabbar__item",
    attrs: {
      "to": {
        name: 'order'
      },
      "activeClass": "weui-bar__item_on"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-order weui-tabbar__icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "weui-tabbar__label"
  }, [_vm._v("订单")])]), _vm._v(" "), _c('router-link', {
    staticClass: "weui-tabbar__item",
    attrs: {
      "to": {
        name: 'address'
      },
      "activeClass": "weui-bar__item_on"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-location weui-tabbar__icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "weui-tabbar__label"
  }, [_vm._v("地址")])])], 1)])])])])
},staticRenderFns: []}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-panel weui-panel_access"
  }, [_c('div', {
    staticClass: "weui-panel__bd"
  }, [_vm._l((_vm.items), function(item) {
    return [_c('router-link', {
      staticClass: "weui-media-box weui-media-box_appmsg",
      attrs: {
        "to": {
          name: 'goodsDetail',
          params: {
            id: item.store_goods_id
          }
        }
      }
    }, [_c('div', {
      staticClass: "weui-media-box__hd"
    }, [_c('img', {
      staticClass: "weui-media-box__thumb",
      attrs: {
        "src": item.thumb,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__bd"
    }, [_c('h4', {
      staticClass: "weui-media-box__title"
    }, [_vm._v(_vm._s(item.goods_name))]), _vm._v(" "), _c('p', {
      staticClass: "weui-media-box__desc"
    }, [_vm._v("积分: " + _vm._s(item.exchange_score))])])])]
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('swiper', {
    ref: "mySwiper",
    attrs: {
      "options": _vm.swiperOption
    }
  }, [_vm._l((_vm.item.images), function(image) {
    return [_c('swiper-slide', [_c('img', {
      attrs: {
        "width": "100%",
        "src": image,
        "alt": ""
      }
    })])]
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-pagination",
    slot: "pagination"
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-lazy-preloader"
  })], 2), _vm._v(" "), _c('article', {
    staticClass: "weui-article"
  }, [_c('div', {
    staticClass: "weui-flex"
  }, [_c('div', [_c('div', {
    staticClass: "placeholder"
  }, [_vm._v(_vm._s(_vm.item.goods_name))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-flex__item weui-cell__ft"
  }, [_c('div', {
    staticClass: "placeholder"
  }, [_vm._v(_vm._s(_vm.item.exchange_score) + "积分")])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-flex"
  }, [_c('div', {
    staticClass: "weui-flex__item weui-cell__ft"
  }, [_c('router-link', {
    staticClass: "weui-btn weui-btn_mini weui-btn_plain-primary",
    attrs: {
      "to": {
        name: 'goodsBuy',
        params: {
          id: _vm.item.store_goods_id
        }
      }
    }
  }, [_vm._v("立即兑换")])], 1)]), _vm._v(" "), _c('br'), _vm._v(" "), _c('section', {
    domProps: {
      "innerHTML": _vm._s(_vm.item.detail)
    }
  })])], 1)
},staticRenderFns: []}

/***/ })
],[21]);
//# sourceMappingURL=app.7e09080542d0a65d0928.js.map