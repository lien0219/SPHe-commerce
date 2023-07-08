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

//获取搜索模块数据 地址：  /api/list 请求方式：post  参数：需要带参数
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "viewsize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
//当前这个函数需不需要接受外部传递参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) =>
  ajax({ url: "/list", method: "post", data: params });

//获取产品信息的接口 URL：/api/item/{ skuId }  请求方式：get
export const reqGoodsInfo = (skuId) => {
  ajax({ url: `/item/${skuId}`, method: "get" });
};
