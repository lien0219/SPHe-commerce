// 对API进行统一管理
import ajax from "./ajax";
import mockRequests from "./mockAjax";

// 三级联动接口
// /api/product/getBaseCategoryList  get请求 无参数

// export const reqCategoryList = () => {
//   // 发送请求
//   return ajax({ url: "product/getBaseCategoryList", method: "get" });
// };
export const reqCategoryList = () =>
  ajax({ url: "/product/getBaseCategoryList", method: "get" }); //baseURL已经带上api

//获取banner
export const reqGetBannerList = () => mockRequests.get("/banner");

//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");
