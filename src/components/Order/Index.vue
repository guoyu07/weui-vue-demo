<template>
    <div>
        <template v-for="item in items">
            <div class="weui-form-preview">
                <div class="weui-form-preview__hd">
                    <label class="weui-form-preview__label">消费积分</label>
                    <em class="weui-form-preview__value">{{ item.exchange_score }}</em>
                </div>
                <div class="weui-form-preview__bd">
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">商品</label>
                        <span class="weui-form-preview__value">{{ item.goods_name }}</span>
                    </div>
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">兑换方式</label>
                        <span class="weui-form-preview__value">{{ item.exchange_method }}</span>
                    </div>
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">订单状态</label>
                        <span class="weui-form-preview__value">{{ item.order_status }}</span>
                    </div>
                </div>
                <div class="weui-form-preview__ft">
                    <router-link :to="{ name: 'orderDetail', params: { id: item.order_id }}"
                    class="weui-form-preview__btn weui-form-preview__btn_primary" >
                    查看详情
                    </router-link>
                </div>
            </div>
            <br>
        </template>
    </div>
</template>

<script>
export default {
    name: 'order',
    data(){
        return {
            items: [
            {
                order_id: 20170303000000,
                goods_name: '测试商品名称',
                order_status: '待发货',
                exchange_method: '直接兑换',
                exchange_score: 10000,
            },
            {
                order_id: 20170303000000,
                goods_name: '测试商品名称',
                order_status: '待发货',
                exchange_method: '直接兑换',
                exchange_score: 10000,
            },
            {
                order_id: 20170303000000,
                goods_name: '测试商品名称',
                order_status: '待发货',
                exchange_method: '直接兑换',
                exchange_score: 10000,
            },
            {
                order_id: 20170303000000,
                goods_name: '测试商品名称',
                order_status: '待发货',
                exchange_method: '直接兑换',
                exchange_score: 10000,
            },
            ]
        }
    }
}
</script>
