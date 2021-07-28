<template>
  <div id="app">    
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  components: {
    FooterGuide
  }
};
</script>


<style>
#app {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}
</style>
