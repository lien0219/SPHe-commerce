import Vue from "vue";
import App from "./App.vue";

// 三级联动组件----全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
// 第一个参数：全局组件的名字；第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
// 引入mock数据
import "@/mock/mockServe";
// 引入swiper样式
import "swiper/css/swiper.css";

// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 配置全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 注册路由
  router,
  store, //组件实例上会有$store
}).$mount("#app");
