<template>
    <div class="mhome">
        <!-- 首页头部 -->
        <header-top title="武汉洪山达内中心">
            <span class="header-search" slot="left">
                <i class="iconfont icon-sousuo1"></i>
            </span>
             <span class="header-login" slot="right">登录|注册</span>
        </header-top>

        <!-- 首页轮播导航 -->
        <nav class="mhome_nav">   
            <home-swiper></home-swiper>
        </nav>

        <!-- 商家列表 -->
        <shop-list></shop-list>
    </div>
</template>

<script>
// 引入头部子组件（带插槽）
import HeaderTop from "../../components/HeaderTop/HeaderTop";
// 引入轮播导航子组件
import HomeSwiper from "../../components/HomeSwiper/HomeSwiper";
// 引入商家列表子组件
import ShopList from "../../components/ShopList/ShopList";

export default {
  components: {
    HeaderTop,
    HomeSwiper,
    ShopList
  }
};
</script>

<style scoped>
</style>
