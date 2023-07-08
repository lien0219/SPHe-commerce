import { reqGetSearchInfo } from "@/api";
// search模块仓库
const state = {
  searchList: {},
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  // 获取search数据
  async getSearchList({ commit }, params = {}) {
    // 当前reqGetSearchInfo 函数在调用服务器数据的时候，至少传递一个参数（空对象）
    // params形参，当前用户派发action的时候，第二个参数传递过来，至少是一个空对象
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
// 计算属性，简化数据
const getters = {
  goodsList(state) {
    //当前仓库的state
    return state.searchList.goodsList || []; //[] 断网情况
  },
  trademarkList(state) {
    return state.searchList.trademarkList;
  },
  attrsList(state) {
    return state.searchList.attrsList;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
