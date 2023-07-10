<template>
  <div>
	<h2>自定义带Hover提示的按钮</h2>
	<!-- 当用户在使用我们封装的按钮的时候，需要向HintButton组件传递相应的参数（el-button进行二次封装) -->
	<!--@click,底下这里代表的是自定义事件  -->
	<HintButton type="success" icon="el-icon-delete" size="minis" title="提示按钮" @click="handler"></HintButton>	
  </div>
</template>
	
<script>
import HintButton from './HintButton'
	export default{
		name:'AttrsListeners',
		components:{
			HintButton
		},
		methods:{
			//点击事件的回调
			handler(){
				alert(666);
			}
		}
	}
</script>