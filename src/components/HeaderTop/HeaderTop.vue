<template>
      <div class="header">
            <slot name="left"></slot>
            <div class="header-title">
                <span>{{title}}</span>
            </div>
            <slot name="right"></slot>
        </div>
</template>

<script>
export default {
  props: { title: String }
};
</script>


<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  height: 45px;
  width: 100%;
  background-color: #008c6e;
}
.header > span {
  line-height: 45px;
  font-size: 14px;
  color: white;
}
.header-search {
  position: absolute;
  left: 15px;
}
.header-login {
  position: absolute;
  right: 15px;
}
.header-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 100%;
  /* background-color: blue; */
  text-align: center;
  font-size: 18px;
  color: white;
  line-height: 45px;
}
</style>
