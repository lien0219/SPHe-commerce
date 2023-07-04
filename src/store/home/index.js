import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";

// home模块仓库
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const actions = {
  // 发送请求
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    // console.log(result);
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  // 首页轮播图数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  // 获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    console.log(result, "floor");
    if (result.code == 200) {
      commit("GETFLOORLIST", result.data);
    }
  },
};
// 计算属性
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
