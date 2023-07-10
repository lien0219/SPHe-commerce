export default{
//对外暴露的对象，可以放置组件重复JS业务逻辑
    methods: {
        //儿子小明给爸爸钱的回调函数
        giveMoney(money) {
          //儿子小明的钱减少50
          this.money -= money;
          //需要在子组件内部，获取到父组件，让父组件的数据加上50
          //可以通过$parent书写获取到某一个组件的父组件，可以操作父组件的数据与方法
          this.$parent.money += money;
        },
      },
}