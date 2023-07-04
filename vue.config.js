const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      "/api": {
        //'/api'(可以其它路径）：若路径带有/api，则进行转发
        target: " http://gmall-h5-api.atguigu.cn", //获取数据的ip地址
        // pathRewrite:{'^/api':''},路径重写
      },
    },
  },
});
