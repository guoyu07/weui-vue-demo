<template>
    <div class="detail">
        <swiper :options="swiperOption" ref="mySwiper">
            <template v-for="image in item.images">
                <swiper-slide><img width="100%" :src="image" alt=""></swiper-slide>
            </template>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-lazy-preloader"></div>
        </swiper>

        <article class="weui-article">

            <div class="weui-flex">
                <div><div class="placeholder">{{ item.goods_name }}</div></div>
                <div class="weui-flex__item weui-cell__ft">
                    <div class="placeholder">{{ item.exchange_score }}积分</div>
                </div>
            </div>

            <div class="weui-flex">
                <div class="weui-flex__item weui-cell__ft">
                    <router-link :to="{ name: 'goodsBuy', params: { id: item.store_goods_id }}" 
                        class="weui-btn weui-btn_mini weui-btn_plain-primary">立即兑换</router-link>
                </div>
            </div>

            <br />
            <section v-html="item.detail"></section>
        </article>
    </div>
</template>

<script>

    export default {
        name: 'goods_detail',
        data(){
            return {
                swiperOption:{
                    autoplay: 0,
                    autoHeight: true,
                    loop : true,
                    pagination : '.swiper-pagination',
                },
                item: null,
            }
        },
        created: function(){

            this.item = {
                images: [
                    '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                    '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                    '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                    '//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg',
                ],
                goods_name: '测试商品' + this.$route.params.id,
                exchange_score: '10000',
                store_goods_id: this.$route.params.id,
                detail: ['<section><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><img src="//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg" alt=""> <img src="//ww4.sinaimg.cn/large/006tNc79ly1fdxya168abj30ci0ciaam.jpg" alt=""></p></section><section><h3>1.2 节标题</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></section>'].join("")
            }

        }
    }
</script>

<style>
    .detail {background: #fff;}
</style>
