<template>
    <div>
        <div class="weui-cells__title">收货地址管理</div>
        <div class="weui-cells">
            <template v-for="item in address">
                <router-link :to="{ name: 'addressEdit', params: { id: item.address_id }}" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>{{ item.name }} <span>{{ item.mobile }}</span></p>
                        <p style="font-size: 13px;color: #888888;">{{ item.full_address }}</p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </router-link>
            </template>
        </div>

        <div class="weui-btn-area">
            <router-link :to="{ name: 'addressAdd'}" class="weui-btn weui-btn_plain-primary">
                新建收货地址
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'user',
        data(){
            return {
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
                ]
            }
        }
    }
</script>


<style>
  .weui-cells {
    margin-top: 0;
  }
</style>
