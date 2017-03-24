<template>
    <div>
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

                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">订单号</label>
                    <span class="weui-form-preview__value">{{ item.order_id }}</span>
                </div>

                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">下单时间</label>
                    <span class="weui-form-preview__value">{{ item.created_at }}</span>
                </div>

                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">订单说明</label>
                    <span class="weui-form-preview__value">{{ item.order_remark }}</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import weui from 'weui.js'
    export default {
        name: 'order_detail',
        data(){
            return {
                item: {
                    order_id: 20170303000000,
                    goods_name: '测试商品名称',
                    order_status: '已发货',
                    exchange_method: '直接兑换',
                    exchange_score: 10000,
                    created_at: '2017-01-01 11:00:00',
                    order_remark: '订单已发货, 快递单号80808080808(圆通)',
                }
            }
        }
    }
</script>
