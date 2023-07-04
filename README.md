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
-views|views 文件夹：经常放置路由组件

5.1 配置路由
项目当中配置的路由一般放置在 router 文件夹中

5.2 总结
路由组件与非路由自己的区别？
1：路由组件一般放置在 views|views 文件夹，非路由组件一般放置 components 文件夹中
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

# 3

1）完成一级分类动态添加背景颜色
第一种解决方案：采用样式完成（可以的）
.item:hover{
background: skyblue;
}

第二种解决方案：通过 JS 完成

2）通过 JS 控制二三级商品分类的显示与隐藏

最开始的时候，是通过 CSS 样式 display：block|none 显示与隐藏二三级商品分类

3）演示卡顿现象
正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行（如果事件很短，而回答函数内部有计算，那么很可能出现浏览器卡顿）

节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才触发回调，把频繁触发变为少量触发
防抖：前面的所有的触发都被取消，最后一次执行 在规定的时间之后才会触发，也就是说，如果连续快速的触发，只会执行一次

//lodash 插件：里面封装函数的防抖与节流的业务【闭包+延迟器】

lodash.js 文件
1.lodash 函数库对面暴露 \_ 函数

防抖：用户操作很频繁，但是只是执行一次
节流：用户操作很频繁，但是把频繁的操作变为少量操作【可以给浏览器有充裕的时间解析代码】
节流：闭包+延时器

5）完成三级联动节流的操作

6）三级联动组件路由跳转和传递参数

三级联动用户可以点击的：一级分类、二级分类、三级分类，当你点击的时候
Home 模块跳转到 Search 模块，一级会把用户选中的产品（产品的名字、产品的 ID）在路由跳转的时候，进行传递。

三级联动：如果使用声明式导航 router-link，可以实现路由跳转与传递参数。
但是需要注意，出现卡顿现象。

router-link：可以一个组件，党服务器的数据返回之后，循环出现很多的 router-link 组件【创建组件实例的】1000+
创建组件实例的时候，一瞬间创建 1000+很耗内存的，因此出现了卡顿现象。

7）完成三级联动路由的跳转和传递参数

# 4

1）开发 Search 模块中的 TypeNav 商品分类菜单（过渡动画效果）
过渡动画：前提组件|元素务必要有 v-if|v-show 指令才可以进行过渡动画

<transition name="sort">
//过渡动画的样式( .sort-xx )
    
    .sort-enter{
      
    }

    否则就是
    v-enter v-enter-active v-enter-to v-leave v-leave-active v-leave-to

2）现在咱们的商品分类三级列表可以进行优化？
在 App 根组件当中发请求【根组件 mounted】只执行一次

3）合并 params 和 query 参数

https://docschina.org/
印记中文官网
4）开发 Home 首页当中的 ListContainer 组件与 FLoor 组件？
但是这里需要知道一件事情：服务器返回的数据（接口）只有商品分类菜单分类数据，对于 ListContainer 组件与 FLoor 组件服务器没有提供的。
mock 数据（模拟）：如果你想 mock 数据，需要用到一个插件 mockjs
前端 mock 数据不会和你的服务器进行任何通信

使用步骤：
1）在项目当中 src 文件夹中创建 mock 文件夹
2）第二步准备 JSON 数据（mock 文件夹中创建相应的 JSON 文件）---格式化一下，别留有空格（跑不起来的）
3）把 mock 数据需要的图片放置到 public 文件夹中【public 文件夹在打包的时候，会把相应的资源原封不动打包到 dist 文件夹中】
4）创建 mockServe.js 通过 mockjs 插件实现模拟数据
5）mockServer.js 文件再入口文件中引入（至少需要执行一次，才能模拟数据）

第一步：引包（相应的 JS|CSS）
第二步：页面中的结构务必要有
第三步（前提：页面当中务必要有结构）：new Swiper 实例【轮播图添加动态效果】

5）ListContainer 组件开发重点？
安装 Swiper 插件：最新版本 6，安装的是 swiper@5
cnpm install --save swiper@5

复习
1）完成商品分类的三级列表留意跳转一级路由传参（合并参数）
2）完成 search 模块中对应 typeNav 使用（过渡动画的）
3）对应 typeNav 请求次数也进行优惠
4）swiper 插件
swiper 插件：经常制作轮播图（移动端|PC 端也可以使用）
使用步骤：
第一步：引入相应的依赖包（swiper.js|swiper.css）
第二步：页面中的结构务必要有
第三步：初始化 swiper 实例，给轮播图添加动态效果
5）mock 数据：通过 mockjs 模块实现的

# 5

5）ListContainer 组件开发
安装 Swiper 插件安装的是 swiper@5
cnpm install --save swiper@5

1）完美解决方案：解决轮播图问题
watch + nextTick：数据监听：监听已有数据的变化

$netTick：在下次DOM更新 循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。
$nextTick：可以保证页面中的结构一定是有的，经常和很多插件一起使用【都需要 DOM 存在了】

3）把首页当中的轮播图拆分为一个共用全局组件。
切记：以后在开发项目的时候，如果看到某一个组件在很多地方都使用，你把它变成全局组件。
注册一次，可以在任意地方使用，共用的组件|非路由组件放到 components 文件夹中

4）search 模块开发？
1：先静态页面 + 静态组件拆分处理
2：发请求（API）
3：vuex（三连环）
4：组件获取仓库数据，动态展示数据
