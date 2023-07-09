// 引入路由组件
import Home from "@/views/Home";
import Login from "@/views/Login";
import Search from "@/views/Search";
import Register from "@/views/Register";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";
import ShopCart from "@/views/ShopCart";

export default [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    name: "detail",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
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
];
