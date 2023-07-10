<template>
  <div>
    小明的爸爸现在有{{money}}元
    <h2>不用sync修改符</h2>
        <!-- 
        :money 父组件给子组件传递props
        @update:money 给子组件绑定的自定义事件，只不过名字叫做update:money
        目前现在这种操作，其实和v-model很相似，可以实现父子组件数据同步
     -->
    <Child :money="money" @update:money="money = $event"/>
    <h2>使用sync修改符</h2>
    <!-- 
        :money.sync：第一，父组件给子组件传递props money
        第二，给当前子组件绑定了一个自定义事件，而且事件名即为update:money
     -->
    <Child2 :money.sync="money"/>
  </div>
</template>

<script>
import Child from './Child.vue'
import Child2 from './Child2.vue'
export default {
    name:'Sync',
    data(){
        return{
            money:10000
        }
    },
    components:{
        Child,
        Child2
    }
}
</script>

<style>

</style>