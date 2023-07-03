# 1

1:vue-cli 脚手架初始化项目
node + webpack + 淘宝镜像

# vue2_sph

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

2：项目的其他配置
2.1 项目运行起来的时候，让浏览器自动打开：可添加--open
---package.json 文件
"scripts": {
"serve": "vue-cli-service serve --open", //添加--open
"build": "vue-cli-service build",
"lint": "vue-cli-service lint"
},
（ 若打开网页为 0.0.0.0，需要再添加 --host=localhost ）

2.2 eslint 校验功能关闭。
--在根目录下，创建一个 vue.config.js（名字必须这样）
比如：声明变量但是没有使用 eslint 校验工具报错（ctrl+c 终止 cmd 运行）
module.exports = {
//关闭 eslint
lintOnSave:false
}

2.3 src 文件夹简写方法，配置别名。@
jsconfig.json 配置别名@提示【@代表的是 src 文件夹，这样将来文件过多，找的时候方便很多】
{
"compilerOptions": {
"baseUrl": "./",
"paths": {
"@/_": [
"src/_"
]
},
"exclude":[
"node_modules",
"dist"
]
}
}

3：项目路由的分析
vue-router
前端所谓路由：KV 键值对。
key：URL（地址栏中的路径）
value：相应的路由组件
注意：项目上中下结构

路由组件：
Home 首页路由组件、Search 路由组件、login 登录路由、register 注册路由
非路由组件：
Header【首页、搜索页】
Footer【在首页、搜索页】，但是在登录、注册页面是没有的

4、完成非路由组件 Header 与 Footer 业务
在咱们项目中，不在以 HTML +CSS 为主，主要搞业务、逻辑
在开发项目的时候：
1：书写静态页面（HTML +CSS）
2：拆分组件
3：获取服务器的数据动态展示
4：完成相应的动态业务逻辑

注意 1：创建组件的时候，组件结构 + 组件的样式 + 图片资源

注意 2：咱们项目采用的 less 样式，浏览器不识别 less 样式，需要通过 less、less-loader【安装五或者六版本】进行处理 less，把 less 样式变为 css 样式，浏览器才可以识别。

注意 3：如果想让组件识别 less 样式，需要再 style 标签的身上加上 lang=less

4.1 使用组件的步骤（非路由组件） -创建或者定义 -引入 -注册 -使用

5）路由组件的搭建

（cnpm install --save vue-router 安装的为 4 版本：对应 Vue3 使用）
（cnpm install --save vue-router@3 安装的为 3 版本：对应 Vue2 使用）

在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register
-components 文件夹：经常放置的非路由组件（共用全局组件）
-pages|views 文件夹：经常放置路由组件

5.1 配置路由
项目当中配置的路由一般放置在 router 文件夹中

5.2 总结
路由组件与非路由自己的区别？
1：路由组件一般放置在 pages|views 文件夹，非路由组件一般放置 components 文件夹中
2：路由组件一般需要再 router 文件夹中注册（使用的即为组件的名字，非路由组件在使用的时候，一般都是以标签的形式使用
3：注册完路由，不管路由组件、还是非路由组件身上都有$route、$router 属性

$route：一般获取路由信息【路径、query、params等等】
$router：一般进行编程式导航进行路由跳转【push|replace】
（push 和 replace 区别：能不能记录历史记录）

5.3 路由的跳转？
路由的跳转有两种形式：
声明式导航 router-link，可以进行路由的跳转
编程式导航 push|replace，可以进行路由跳转

编程式导航：声明式导航能做的，编程式导航都能做，
但是编程式导航处理可以进行路由跳转，还可以做一些其他的业务逻辑。

6）Footer 组件显示与隐藏
显示或者隐藏组件：v-if|v-show（提倡使用 v-show）
（v-if：操作 DOM 元素）
（v-show：只需隐藏或显示元素）

Footer 组件：在 Home、Search 显示 Footer 组件
Footer 组件：在登录、注册时候隐藏

6.1 我们可以根据组件身上的$route 获取当前路由的信息，通过路由路径判断 Footer 显示与隐藏

6.2 配置路由的时候，可以给路由添加路由元信息【meta】，路由需要配置对象，它的 key 不能瞎写、胡写、乱写

8）路由传参

8.1：路由跳转有几种方式？
比如：A->B
声明式导航：router-link（务必要有 to 属性），可以实现路由的跳转
编程式导航：利用的是组件实例的$router.push|replace 方法，可以实现路由的跳转。（可以书写一些自己业务）

8.2：路由传参，参数有几种写法？
params 参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
query 参数：不属于路径当中的一部分，类似于 ajax 中的 queryString /home?k=v&kv=,不需要占位

# 2

1:编程式路由跳转到当前路由（参数不变），多次执行会抛出 NavigationDuplicated 的警告错误？

--路由跳转有两种形式：声明式导航、编程式导航
--声明式导航没有这类问题的，因为 vue-router 底层已经处理好了
（通俗来说，多点击两次搜索会警告错误）(该警告对于程序没有任何影响)

1.1 为什么编程式导航进行路由跳转的时候，就有这种警告错误？
"vue-router":"^3.5.3":最新的 vue-router 引入 promise

function push(){
rerurn new Promise((resolve,reject)=>{

    })

}
////比如有个 push 函数，返回 Promise，Promise 需要传入成功与失败回调，没传会警告

1.2 通过给 push 方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决。（ 加上 ()=>{},()=>{} ）

1.3 通过底部的代码，可以实现解决错误
this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{});
这种写法：治标不治本，将来在别的组件当中 push | replace，编程式导航还有类似错误。

1.4
this：当前组件实例（search）
this.$router属性：当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router| $route 属性
push：VueRouter 类的一个实例

function VueRouter(){

}
//原型对象的方法
VueRouter.prototype.push=function(){
//函数的上下文为 VueRouter 类的一个实例
}

let $router = new VueRouter();

$router.push(xxx);

2:Home 模块组件拆分
--先把静态页面完成
--拆分出静态组件
--获取服务器的数据进行展示
--动态业务

3：三级联动组件完成
---由于三级联动，在 Home、Search、Detail，把三级联动注册为全局组件。
好处：只需要注册一次，就可以在项目任意地方使用

4:完成其余静态组件
HTML + CSS + 图片资源 ---信息【结构、样式、图片资源】

5：POSTMAN 测试接口
--刚刚经过 postman 工具测试，接口是没有问题的
--如果服务器返回的数据 code 字段 200，代表服务器返回数据成功
--整个项目，接口前缀都有/api 字样

6：axios 二次封装
XMLHttpRequest、fetch、JQ、axios

6.1 为什么需要进行二次封装 axios？
请求拦截器、响应拦截器：
请求拦截器：可以在发请求之前可以处理一些业务
响应拦截器：当服务器数据返回以后，可以处理一些事情

6.2 在项目当中经常 API 文件夹【axios】
接口当中：路径都带有/api
baseURL:"/api"  
（作用：在发请求的路径http://xxx.xxx:8080后面带上/api，就不用自己书写了，最后：http://xxx.xxx:8080/api）

6.3 可以参考 git|npm 关于 axios 文档

7：接口统一管理

项目很小（如：两个组件，接口 1-2 个）：完全可以在组件的生命周期函数中发请求

项目大（如：数百组件，接口数十个）：axios.get('xxx')

7.1 跨域问题
什么是跨域：协议、域名、端口号不同请求，称之为跨域
http://localhost:8080/#/home ---前端项目本地服务器
http://gmall-h5-api.atguigu.cn ---后台服务器

跨域解决方案：JSONP、CROS、代理

8：nprogress 进度条的使用
start：进度条开始
done：进度条结束
进度条颜色可以修改的，当然需要修改人家的样式

9：vuex 状态管理库

9.1 vuex 是什么？

vuex 是官方提供的一个插件，状态管理库，集中式管理项目中组件共用的数据。

切记，并不是全部项目都需要 Vuex，如果项目很小，完全不需要 Vuex，如果项目很大，组件很多、数据很多，数据维护很费劲，则可使用 Vuex

几大核心概念
state：仓库存储数据的地方
mutations：修改 state 的唯一手段
action：处理 action，可以书写自己的业务逻辑，也可以处理异步
getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便

9.2 Vuex 基本使用
（src 文件夹下新建 store 文件夹）

（mapState 和 mapGetters 是映射在计算属性里面的，
而 mapActions 和 mapMutations 是映射在 methods 里面的）

（ state 中的数据，组件中如何获取？--- this.$store.state.xxx 属性

store.js 中的 getters，组件中如何获取？---this.$store.getters.xxxx(getters 名称) ）

9.3 vuex 实现模块化开发
如果项目过大，组件过多，接口也很多，数据也很多，可以让 vuex 实现模块式开发

10:完成 TypeNav 三级联动展示数据业务

[
{
id:1,
name:'电子书',
child:[
{id:2,name:"喜洋洋",child:[]},
]
}
]

1）完成一级分类动态添加背景颜色
第一种解决方案：采用样式完成（可以的）
.item:hover{
background: skyblue;
}

第二种解决方案：通过 JS 完成
