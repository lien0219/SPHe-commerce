import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//state:存储数据的地方
// const state = {};
//mutations:修改state唯一手段
// const mutations = {};
//action：处理action，可以写自己的业务逻辑，也可以处理异步
// const actions = {};
//getters:计算属性，简化仓库数据，让组件获取仓库的数据更加方便
// const getters = {};

//引入小仓库
import home from "./home";
import search from "./search";
// 对外暴露store实例
export default new Vuex.Store({
  //   state,
  //   mutations,
  //   actions,
  //   getters,
  modules: {
    home,
    search,
  },
});
