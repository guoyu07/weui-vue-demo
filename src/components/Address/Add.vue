<template>
    <div class="buy">

        <div class="weui-cells__title">新建地址</div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">收货人</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="address.name" placeholder="收货人姓名">
                </div>
            </div>

            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" v-model="address.mobile" placeholder="请输入手机号">
                </div>
            </div>

            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">地址</label></div>
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" v-model="address.full_address" 
                        rows="3" placeholder="详细地址"></textarea>
                </div>
            </div>

        </div>

        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" v-on:click="submit" 
                href="javascript:" id="showTooltips">保存</a>
        </div>
    </div>
</template>

<script>
    import weui from 'weui.js'

    export default {
        name: 'address_add',
        data(){
            return {
                address: {
                    name: '',
                    mobile: '',
                    full_address: ''
                },
            }
        },
        created: function(){

        },
        methods: {
            submit: function(){
                var _this = this;
                
                if (_this.address.name == '') {
                    weui.topTips('请输入收货人姓名', 1000);
                    return false;
                }

                if (_this.address.mobile == '') {
                    weui.topTips('请输入收货人手机号', 1000);
                    return false;
                }

                if (_this.address.full_address == '') {
                    weui.topTips('请输入收货人详细地址', 1000);
                    return false;
                }

                var loading = weui.loading('正在处理');

                setTimeout(function () {
                    loading.hide(function() {
                        weui.toast('操作成功', 1000);
                        _this.$router.replace({ name: 'address'})
                    });
                }, 1000);

            }
        }
    }
</script>