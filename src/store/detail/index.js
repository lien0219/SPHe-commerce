import { reqGoodsInfo } from "@/api";

const state = {
  goodInfo: {},
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  //获取产品信息的action
  async getGoodInfo({ commit }, skuId) {
    const result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit("GETGOODINFO", result.data);
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
