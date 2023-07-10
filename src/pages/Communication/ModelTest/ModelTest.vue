<template>
  <div>
    <h2>深入v-model</h2>
    <input type="text" v-model="msg">
    <span>{{msg}}</span>
    <br>
    <hr/>
    <h2>v-model实现原理（vue2）</h2>
    <!-- 
        原生DOM当中是有oninput事件，它经常结合表单元素一起使用，当表单元素文本内容发生变化的时候就会出现一次回调
        Vue2:可以通过value与input事件实现v-model功能
    -->
    <input type="text" :value="msg" @input="msg = $event.target.value"/>
    <span>{{msg}}</span>
    <!-- 深入学习v-model：实现父子组件数据同步（实现父子组件通信） -->
    <hr/>
    <!-- 
        :value到底是什么？这可是props，父子组件通信
        @input到底是什么？并非原生DOM的input事件，属于自定义事件
     -->
    <CustomInput :value="msg" @input="msg = $event"/>
     <CustomInput v-model="msg"/>
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue'
export default {
    name:'ModelTest',
    components:{
        CustomInput
    },
    data(){
        return{
            msg:"我爱你塞北的大雪"
        }
    }}
</script>

<style>

</style>