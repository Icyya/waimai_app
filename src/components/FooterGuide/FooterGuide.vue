<template>
    <div class="footer_guide">
        <!-- 底部导航栏 -->
        <div class="guide_item" @click="goTo('/')">
            <span class="img">
                <img src="./imgs/shouye.svg" v-if="'/'===$route.path"/>
                <img src="./imgs/shouye1.svg" v-else/>
            </span>
            <p :class="{select:'/'===$route.path}">首页</p>            
        </div>

        <div class="guide_item" @click="goTo('/search')">
            <span class="img">
                <img src="./imgs/diandan.svg" v-if="'/search'===$route.path"/>
                <img src="./imgs/diandan2.svg" v-else/>
            </span>
            <p :class="{select:'/search'===$route.path}">点单</p>            
        </div>

        <div class="guide_item" @click="goTo('/order')">
            <span class="img">
                <img src="./imgs/dingdan.svg" v-if="'/order'===$route.path"/>
                <img src="./imgs/dingdan1.svg" v-else/>
            </span>
            <p :class="{select:'/order'===$route.path}">订单</p>            
        </div>

        <div class="guide_item" @click="goTo('/person')">
            <span class="img">
                <img src="./imgs/wode.svg" v-if="'/person'===$route.path"/>
                <img src="./imgs/wode1.svg" v-else/>
            </span>
            <p :class="{select:'/person'===$route.path}">我的</p>            
        </div>    
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.footer_guide {
  height: 55px;
  width: 100%;
  /* background-color: pink; */
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
.guide_item {
  float: left;
  width: 25%;
  height: 100%;
  /* background-color: red; */
  text-align: center;
  font-size: 15px;
  color: #aaaaaa;
}
.guide_item img {
  height: 53%;
  width: 90%;
  margin: 2px;
}
.select {
  color: black;
}
</style>
