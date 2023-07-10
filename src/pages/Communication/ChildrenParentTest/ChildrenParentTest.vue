<template>
  <div>
    <h2>BABA有存款:{{ money }}</h2>
    <button @click="jieQianFromXM(100)">找小明借钱100</button>
    <button @click="jieQianFromXH(150)">找小红借钱150</button>
    <button @click="jieQianFromAll(200)">找所有孩子借钱200</button>
    <br />
    <!-- ref：获取节点（组件标签） -->
    <!-- 在Vue 组件当中可以通过ref获取子组件，就可以进行操作子组件数据与方法 -->
    <Son ref="xm" />
    <br />
    <Daughter ref="xh" />
  </div>
</template>

<script>
import Son from "./Son";
import Daughter from "./Daughter";
export default {
  name: "ChildParentTest",
  data() {
    return {
      money: 1000,
    };
  },
  components: {
    Son,
    Daughter,
  },
  methods: {
    //向儿子小明借钱
    jieQianFromXM(money) {
      //父组件的钱累加100元
      this.money += money;
      //ref可以获取真实DOM节点，当然也可以获取子组件标签（操作子组件的数据与方法）
      this.$refs.xm.money -= money;
    },
    //向儿子小明借钱
    jieQianFromXH(money) {
      //父组件的钱累加100元
      this.money += money;
      //ref可以获取真实DOM节点，当然也可以获取子组件标签（操作子组件的数据与方法）
      this.$refs.xh.money -= money;
    },
    //找全部海子借用200
    jieQianFromAll(money) {
      this.money += 2 * money;
      //组件实例自身拥有一个属性$children,可以获取到当前组件当中，全部子组件
      this.$children.forEach((item) => {
        item.money -= 200;
      });
      //切记别这样书写,如果子组件过多，第零项可能不是小明
      // this.$children[0].money-=200;
      // this.$children[1].money-=200;
    },},};
</script>

<style>
</style>