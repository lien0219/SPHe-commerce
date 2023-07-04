//路由配置
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入路由组件
import Home from "@/views/Home";
import Login from "@/views/Login";
import Search from "@/views/Search";
import Register from "@/views/Register";

// 解决重复点击导航时，控制台出现报错(重写push、replace)
// const VueRouterPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(to) {
//   return VueRouterPush.call(this, to).catch((err) => err);
// };
// 把VueRouter原型对象的push,replace先保存一份
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
// 第一个参数告诉原来的push往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call和apply区别
    // 相同：都可以调用一次函数；都可以篡改函数上下文一次
    // 不同：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// 路由配置
export default new VueRouter({
  // 配置
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/search/:keyword?", //？表示params参数可传可不传，不写？必须传params参数，否则路径出问题
      name: "search",
      component: Search,
      meta: { show: true },
      // props:{a:1,b:2} 对象写法
      // 函数式写法：可以params参数、query参数，通过props传递给路由组件
      // props: ($route) => {
      //   return { keyword: this.$route.params.keyword, k: this.$route.query.k };
      // },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: { show: false },
    },
    // 重定向
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
