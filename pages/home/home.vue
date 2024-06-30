<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(item, index) in swiperList" :key="index">
				<navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id">
						<image :src="item.image_src"></image>
				</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onBeforeMount
	} from 'vue';
	let swiperList = ref([])

	onBeforeMount(async () => {
		
		let {
			data: res
		} = await uni.$http.get("/api/public/v1/home/swiperdata")
		
		if (res.meta.status != 200) {
			uni.$showMsg("请求失败")
		}
		
		swiperList.value = res.message
	})
	
</script>

<style lang="scss" scoped>
	swiper {
		height: 330rpx;
		.swiper-item, image{
			width:100%;
		}
	}
	
</style>