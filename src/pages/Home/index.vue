<template>
  <div>
      <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要引入(可直接使用) -->
      <TypeNav/>
      <ListContainer/>  
      <Recommend/>
      <Rank/>
      <Like/>
      <!-- Floor这个组件：自己在组件内部是没有发请求的，数据是父组件给的 -->
      <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
      <Brand/>    
  </div>
</template>

<script>
//引入其余的组件（不是全局组件）
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';

import {mapState} from 'vuex';//引入mapState辅助函数

export default {
  name:'',
  components:{
    //注册
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted(){
    //派发cation,获取floor组件的数据
    this.$store.dispatch("getFloorList");
  },
  computed:{
    ...mapState({
      floorList:(state) => state.home.floorList,
    })
  }
}


</script>

<style>

</style>