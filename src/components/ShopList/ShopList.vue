<template>
    <div>
        <div class="home_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-xuanxiang"></i>
                <span class="shop_header_title">附近商家</span>
            </div>

            <div class="shop_list">
                <div class="home_shop_item">
                    <a href="javascript:;">
                        <div class="item_left">
                            <img src="./imgs/shop/1.jpg">
                        </div>
                        <div class="item_right">
                            <section class="shop_detail_header">
                                <h4>夏日粥铺</h4>
                                <ul>
                                    <li>保</li>
                                    <li>准</li>
                                    <li>票</li>
                                </ul>
                            </section>

                            <section class="shop_rating_order">
                                <section class="shop_rating_order_left">
                                    <!-- <div class="star star-24">
                                        <span class="star-item on"></span>
                                        <span class="star-item on"></span>
                                        <span class="star-item on"></span>
                                        <span class="star-item half"></span>
                                        <span class="star-item off"></span>
                                    </div> -->
                                    <div class="rating_section">
                                        3.6
                                    </div>
                                    <div class="order_section">
                                        月售106单
                                    </div>
                                </section>

                                <section class="shop_rating_order_right">
                                    <span class="delivery_style delivery_right">硅谷专送</span>
                                </section>                            
                                <section class="shop_distance">
                                    <p class="shop_delivery_msg">
                                        <span>¥20起送</span>
                                        <span class="segmentation">/</span>
                                        <span>配送费约¥5</span>
                                    </p>
                                </section>
                            </section>
                        </div>
                    </a>
                </div>
                <div class="home_shop_item">
                    <a href="javascript:;">
                        <div class="item_left">
                            <img src="./imgs/shop/3.jpg">
                        </div>
                        <div class="item_right">
                            <section class="shop_detail_header">
                                <h4>夏日粥铺</h4>
                                <ul>
                                    <li>保</li>
                                    <li>准</li>
                                    <li>票</li>
                                </ul>
                            </section>

                            <section class="shop_rating_order">
                                <section class="shop_rating_order_left">
                                    <div class="rating_section">
                                        3.6
                                    </div>
                                    <div class="order_section">
                                        月售106单
                                    </div>
                                </section>

                                <section class="shop_rating_order_right">
                                    <span class="delivery_style delivery_right">硅谷专送</span>
                                </section>                            
                                <section class="shop_distance">
                                    <p class="shop_delivery_msg">
                                        <span>¥20起送</span>
                                        <span class="segmentation">/</span>
                                        <span>配送费约¥5</span>
                                    </p>
                                </section>
                            </section>
                        </div>
                    </a>
                </div>
                <div class="home_shop_item">
                    <a href="javascript:;">
                        <div class="item_left">
                            <img src="./imgs/shop/1.jpg">
                        </div>
                        <div class="item_right">
                            <section class="shop_detail_header">
                                <h4>夏日粥铺</h4>
                                <ul>
                                    <li>保</li>
                                    <li>准</li>
                                    <li>票</li>
                                </ul>
                            </section>

                            <section class="shop_rating_order">
                                <section class="shop_rating_order_left">
                                    <!-- <div class="star star-24">
                                        <span class="star-item on"></span>
                                        <span class="star-item on"></span>
                                        <span class="star-item on"></span>
                                        <span class="star-item half"></span>
                                        <span class="star-item off"></span>
                                    </div> -->
                                    <div class="rating_section">
                                        3.6
                                    </div>
                                    <div class="order_section">
                                        月售106单
                                    </div>
                                </section>

                                <section class="shop_rating_order_right">
                                    <span class="delivery_style delivery_right">硅谷专送</span>
                                </section>                            
                                <section class="shop_distance">
                                    <p class="shop_delivery_msg">
                                        <span>¥20起送</span>
                                        <span class="segmentation">/</span>
                                        <span>配送费约¥5</span>
                                    </p>
                                </section>
                            </section>
                        </div>
                    </a>
                </div>
                <div class="home_shop_item">
                    <a href="javascript:;">
                        <div class="item_left">
                            <img src="./imgs/shop/3.jpg">
                        </div>
                        <div class="item_right">
                            <section class="shop_detail_header">
                                <h4>夏日粥铺</h4>
                                <ul>
                                    <li>保</li>
                                    <li>准</li>
                                    <li>票</li>
                                </ul>
                            </section>

                            <section class="shop_rating_order">
                                <section class="shop_rating_order_left">
                                    <!-- <div class="star star-24">
                                        <span class="star-item on"></span>
                                        <span class="star-item on"></span>
                                        <span class="star-item on"></span>
                                        <span class="star-item half"></span>
                                        <span class="star-item off"></span>
                                    </div> -->
                                    <div class="rating_section">
                                        3.6
                                    </div>
                                    <div class="order_section">
                                        月售106单
                                    </div>
                                </section>

                                <section class="shop_rating_order_right">
                                    <span class="delivery_style delivery_right">硅谷专送</span>
                                </section>                            
                                <section class="shop_distance">
                                    <p class="shop_delivery_msg">
                                        <span>¥20起送</span>
                                        <span class="segmentation">/</span>
                                        <span>配送费约¥5</span>
                                    </p>
                                </section>
                            </section>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ShopList"
};
</script>


<style scoped>
.home_shop_list {
  border-top: 1px solid black;
  width: 100%;
  margin-top: 60px;
}
/* 附近商家 */
.shop_header {
  margin-left: 8px;
  color: #aaadaa;
}
.shop_header span {
  margin: 0 5px;
}

/* 商家列表部分 */
.shop_list {
  width: 100%;
  overflow: scroll;
  height: 1000px;
  /* background-color: pink; */
}
.home_shop_item {
  position: relative;
  width: 100%;
  height: 100px;
  /* background-color: blue; */
}
/* 左侧图片部分 */
.item_left {
  position: absolute;
  width: 25%;
  height: 100%;
  /* background-color: gold; */
  left: 5px;
  padding: 3px 0;
}
.item_left img {
  width: 100%;
}
/* 右侧详情部分 */
.item_right {
  position: absolute;
  right: 2px;
  width: 70%;
  height: 100%;
  /* background-color: palegreen; */
}
/* 商家店名 */
.shop_detail_header {
  padding: 8px;
}
.shop_detail_header h4 {
  float: left;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
}
.shop_detail_header h4::before {
  display: inline-block;
  background-color: #ffd930;
  content: "品牌";
  color: #333;
  font-size: 11px;
  line-height: 13px;
  border-radius: 2px;
  margin-right: 5px;
  padding: 2px;
}
.shop_detail_header ul {
  float: right;
}
.shop_detail_header ul li {
  float: left;
  font-size: 10px;
  color: #999;
  border: 1px solid #f1f1f1;
  padding: 0 2px;
  border-radius: 2px;
}

/* 商家评分 */
.shop_rating_order {
  width: 100%;
  margin-top: 18px;
  margin-bottom: 8px;
}

.shop_rating_order_left {
  float: left;
  color: #ff9a0d;
}

.star {
  float: left;
  font-size: 0;
}
.star-item {
  display: inline-block;
  background-repeat: no-repeat;
}
.on {
  background-image: url("./imgs/stars/star48_on@2x.png");
}
.half {
  background-image: url("./imgs/stars/star48_half@2x.png");
}
.off {
  background-image: url("./imgs/stars/star48_off@2x.png");
}
.rating_section {
  float: left;
  font-size: 10px;
  color: #ff6000;
  margin-left: 4px;
}

.order_section {
  float: left;
  font-size: 10px;
  color: #666;
  transform: scale(0.8);
}

.shop_rating_order_right {
  float: right;
  font-size: 0;
}
.delivery_style {
  transform-origin: 35px 0;
  transform: scale(0.7);
  display: inline-block;
  font-size: 12px;
  padding: 1px;
  border-radius: 2px;
}

.delivery_left {
  color: #fff;
  margin-right: -10px;
  background-color: #02a774;
  border: 1px solid #02a774;
}

.delivery_right {
  float: right;
  right: 0;
  color: #02a774;
  border: 1px solid #02a774;
}

.shop_distance {
  width: 100%;
  font-size: 12px;
}
.shop_delivery_msg {
  float: left;
  margin-top: 20px;
  transform: scale(0.9);
  color: #666;
}

.segmentation {
  color: #ccc;
}
</style>
