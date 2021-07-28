<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/1.jpg">
                            <p>甜品饮品</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/2.jpg">
                            <p>商超便利</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/3.jpg">
                            <p>美食</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/4.jpg">
                            <p>简餐</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/5.jpg">
                            <p>新店特惠</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/6.jpg">
                            <p>准时达</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/7.jpg">
                            <p>预订早餐</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/8.jpg">
                            <p>土豪推荐</p>
                        </a>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/9.jpg">
                            <p>甜品饮品</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/10.jpg">
                            <p>土豪推荐</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/11.jpg">
                            <p>预订早餐</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/12.jpg">
                            <p>准时达</p>
                        </a>
                    </div>
                    <div class="food_container">
                        <a href="javascript:;" class="link_to_food">
                            <img src="./imgs/nav/11.jpg">
                            <p>预订早餐</p>
                        </a>
                    </div>
                </div>
                
            </div>  
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>                           
        </div>                      
    </div>
</template>

<script>
export default {
  name: "HomeSwiper",

  mounted() {
    //   创建一个 swiper 实例，实现轮播
    var mySwiper = new Swiper(".swiper-container", {
      loop: false, //循环播放
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped>
/* 轮播导航部分 */
.swiper-container {
  height: 100px;
  width: 100%;
  top: 45px;
  /* border-bottom: 1px solid #f2f4f2; */
  border-bottom: 1px solid gray;
}
.food_container {
  width: 25%;
  text-align: center;
  float: left;
  margin-top: 10px;
}
.link_to_food {
  text-decoration: none;
}
.link_to_food img {
  width: 50px;
  height: 50px;
}
.link_to_food p {
  font-size: 13px;
  padding-top: 5px;
  color: #666;
}
.swiper-container {
  height: 200px;
}
</style>
