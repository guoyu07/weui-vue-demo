<template>
    <div id="app" class="container">
        <div class="page">
            <div class="page__bd" style="height: 100%;">
                <div class="weui-tab">
                    <div class="weui-tab__panel">
                        <router-view></router-view>
                    </div>
                    <div class="weui-tabbar">
                        <router-link :to="{ name: 'goods'}" class="weui-tabbar__item" activeClass="weui-bar__item_on">
                            <i class="iconfont icon-shop weui-tabbar__icon" aria-hidden="true"></i>
                            <p class="weui-tabbar__label">商城</p>
                        </router-link>

                        <router-link :to="{ name: 'order'}" class="weui-tabbar__item" activeClass="weui-bar__item_on">
                            <i class="iconfont icon-order weui-tabbar__icon" aria-hidden="true"></i>
                            <p class="weui-tabbar__label">订单</p>
                        </router-link>

                        <router-link :to="{ name: 'address'}" class="weui-tabbar__item" activeClass="weui-bar__item_on">
                            <i class="iconfont icon-location weui-tabbar__icon" aria-hidden="true"></i>
                            <p class="weui-tabbar__label">地址</p>
                        </router-link>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>


<style>
    /*处理fastclick引起的input控件需要偏上点击的问题*/
    #app label > * { pointer-events: none; }

    @font-face {font-family: "iconfont";
        src: url('//at.alicdn.com/t/font_hcrvg4j3z81cq5mi.eot?t=1490337250176'); /* IE9*/
        src: url('//at.alicdn.com/t/font_hcrvg4j3z81cq5mi.eot?t=1490337250176#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('//at.alicdn.com/t/font_hcrvg4j3z81cq5mi.woff?t=1490337250176') format('woff'), /* chrome, firefox */
        url('//at.alicdn.com/t/font_hcrvg4j3z81cq5mi.ttf?t=1490337250176') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/font_hcrvg4j3z81cq5mi.svg?t=1490337250176#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-order:before { content: "\e617"; }
    .icon-location:before { content: "\e630"; }
    .icon-shop:before { content: "\e640"; }
</style>
