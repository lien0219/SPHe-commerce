import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import  Pagination  from '@/components/Pagination';
import {Button,MessageBox} from 'element-ui';
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);//TypeNav.name可以获取到名字 name: "TypeNav"
Vue.component(Carousel.name,Carousel);//轮播图
Vue.component(Pagination.name,Pagination);//分页器
//注册全局组件
Vue.component(Button.name,Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from '@/router';

//引入仓库
import store from '@/store';

//测试
//import {reqCategoryList} from '@/api';//分别暴露reqCategoryList，需要带 {}
//reqCategoryList();

//测试
//import { reqGetSearchInfo } from './api';
//console.log(reqGetSearchInfo({}));

//引入MockServer.js----mock数据
//import '@/mock/mockServe'//会报错
import '../mock/mockServe.js';

//引入swiper样式
import "swiper/css/swiper.css";

//统一接收api文件夹里面全部请求的函数
//统一引入
import * as API from '@/api';

//引入插件
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/1.gif'
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading:atm
});

//引入自定义插件
// import myPlugins from '@/plugins/myPlugins';
// Vue.use(myPlugins,{
//   name:'upper'
// })

//引入表单验证插件
import "@/plugins/validate";


new Vue({
  render: h => h(App),

  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  
  //注册路由：底下的写法KV一致省略v【router小写的】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  //注册仓库：组件实例的身上会多一个书写$store属性
  store

}).$mount('#app')
