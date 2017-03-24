<template>
    <div class="weui-panel weui-panel_access">
        <div class="weui-panel__bd">
            <template v-for="item in items">
                <router-link :to="{ name: 'goodsDetail', params: { id: item.store_goods_id }}" 
                    class="weui-media-box weui-media-box_appmsg" >
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" :src="item.thumb" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{ item.goods_name }}</h4>
                        <p class="weui-media-box__desc">积分: {{ item.exchange_score }}</p>
                    </div>
                </router-link>
            </template>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'goods',
        data() {
            return {
                items: [
                {
                    thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                    goods_name: '测试商品1',
                    exchange_score: '10000',
                    store_goods_id: 1,
                },
                {
                    thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                    goods_name: '测试商品2',
                    exchange_score: '10000',
                    store_goods_id: 2,
                },
                {
                    thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                    goods_name: '测试商品3',
                    exchange_score: '10000',
                    store_goods_id: 3,
                },
                {
                    thumb: '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                    goods_name: '测试商品4',
                    exchange_score: '10000',
                    store_goods_id: 4,
                },
                ]
            }
        }
    }
</script>