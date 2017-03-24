<template>
    <div class="buy">
        <div class="weui-cells__title">商品信息</div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" :src="goods.thumb">
                        </div>
                        <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">{{ goods.goods_name }}</h4>
                            <p class="weui-media-box__desc">积分: {{ goods.exchange_score }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-cells__title">选择收货地址</div>
        <div class="weui-cells weui-cells_radio">
            <template v-for="item in address">
                <label class="weui-cell weui-check__label" :for="'address-radio-' + item.address_id">
                    <div class="weui-cell__bd">
                        <p>{{ item.name }}
                            <span>{{ item.mobile }}</span>
                        </p>
                        <p style="font-size: 13px;color: #888888;">{{ item.full_address }}</p>
                    </div>
                    <div class="weui-cell__ft">
                        <input type="radio" class="weui-check" v-model="address_id" 
                                :value="item.address_id" :id="'address-radio-' + item.address_id">
                        <span class="weui-icon-checked"></span>
                    </div>
                </label>
            </template>
            <router-link :to="{ name: 'addressAdd' }" class="weui-cell weui-cell_link">
                <div class="weui-cell__bd">新建收货地址</div>
            </router-link>
        </div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" v-on:click="submit" 
                href="javascript:" id="showTooltips">确定</a>
        </div>
    </div>
</template>

<script>
    import weui from 'weui.js'

    export default {
        name: 'goods_buy',
        data(){
            return {
                address_id: '',
                goods: {
                    thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                    goods_name: '测试商品1',
                    exchange_score: '10000',
                },
                address: [
                    {
                        address_id: 1,
                        name: '张三',
                        mobile: '135****0000',
                        full_address: '北京市东城区呵呵哒',
                        is_default: 1
                    },
                    {
                        address_id: 2,
                        name: '李四',
                        mobile: '135****0000',
                        full_address: '北京市西城区呵呵哒',
                        is_default: 0
                    }
                ],
            }
        },
        created: function(){

        },
        methods: {
            submit: function(){

                var _this = this;

                if (_this.address_id == ''){
                    weui.topTips('请选择收货地址', 3000);
                    return false;
                }

                var loading = weui.loading('正在处理');

                console.log(this.address_id);

                setTimeout(function () {
                    loading.hide(function() {
                        weui.topTips('积分不足', 3000);
                    });
                }, 1000);

            }
        }


    }
</script>

