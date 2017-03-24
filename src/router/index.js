import Vue from 'vue'
import Router from 'vue-router'

import Address from '@/components/Address/Index'
import AddressEdit from '@/components/Address/Edit'
import AddressAdd from '@/components/Address/Add'

import Goods from '@/components/Goods/Index'
import GoodsDetail from '@/components/Goods/Detail'
import GoodsBuy from '@/components/Goods/Buy'

import Order from '@/components/Order/Index'
import OrderDetail from '@/components/Order/Detail'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/address',name: 'address',component: Address},
    {path: '/address/edit/:id',name: 'addressEdit',component: AddressEdit},
    {path: '/address/add',name: 'addressAdd',component: AddressAdd},

    {path: '/order',name: 'order',component: Order},
    {path: '/order/:id',name: 'orderDetail',component: OrderDetail},

    {path: '/goods',name: 'goods',component: Goods},
    {path: '/goods/detail/:id',name: 'goodsDetail',component: GoodsDetail},
    {path: '/goods/buy/:id',name: 'goodsBuy',component: GoodsBuy},

    {path: '/', redirect: { name: 'goods' }},
  ]
})
