//路由配置
import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

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
  routes,
  // 滚动行为（vue自带）
  scrollBehavior(to, from, savedPosition) {
    // y:0 代表滚动条在最上方
    return { y: 0 };
  },
});
