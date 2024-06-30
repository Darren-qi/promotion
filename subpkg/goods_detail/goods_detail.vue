<template>
	<view>
		商品详情
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onBeforeMount
	} from 'vue';
	
	onMounted(async()=>{
		uni.$showMsg("请求成功")
		// let {data:res} = await uni.$http.get("/api/")
	})
</script>

<style>
	       
</style>
