// axios二次封装
import axios from "axios";
// 引入进度条  --start进度条开始；done进度条结束
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// 创建axios实例
const ajax = axios.create({
  baseURL: "/mock",
  timeout: 5000, //请求超时时间
});

// 请求拦截
ajax.interceptors.request.use((config) => {
  // config:配置对象，包括headers请求头
  // 进度条开始
  nprogress.start();
  return config;
});

// 响应拦截
ajax.interceptors.response.use(
  (res) => {
    // 成功的回调函数，服务器响应数据回来之后可以做一些事情
    // 进度条结束
    nprogress.done();
    return res.data;
  },
  (error) => {
    // 失败的回调
    return Promise.reject(new Error("faile"));
  }
);
export default ajax;
