import Vue from 'vue';
import Vuex from 'vuex';//使用vuex前需先引入
//需要使用插件一次
Vue.use(Vuex);

//引入小仓库
import home from './home';
import search from './search';
import detail from './detail';
import shopcart from './shopcart';
import user from './user';
import trade from './trade';
//对外暴露Store类的一个实例
export default new Vuex.Store({
    //实现Vuex仓库模块式开发存储数据
    //模块：把小仓库进行合并变为大仓库
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
});
