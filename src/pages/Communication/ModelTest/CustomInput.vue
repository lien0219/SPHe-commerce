<template>
  <div style="background:#ccc; height:50px">
    <h2>input包装组件</h2>
    <!-- 
        :value 动态属性
        @input 给原生DOM绑定原生DOM事件
     -->
    <input type="text" :value="value" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script>
export default {
    name:'CustomInput',
    props:['value']
}
</script>

<style>

</style>