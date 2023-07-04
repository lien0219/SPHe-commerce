<template>
  <div id="app">
    <Header></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <!-- 在home和search显示，在登录和注册隐藏( v-show="$route.path == '/home' || $route.path == '/search'")-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // home仓库中的请求派发一个action
    this.$store.dispatch("categoryList");
  },
};
</script>

<style></style>
