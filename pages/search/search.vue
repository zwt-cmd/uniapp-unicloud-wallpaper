<template>
	<view>
		<u-navbar
		:is-back="true" 
		title="搜索" 
		title-width="325" 
		title-color="#333333" 
		title-size="28" 
		:border-bottom="false"
		></u-navbar>
		<search :is-focus="true" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
		:hot-list="hotList" @getSearchText="getSearchText"></search>
		
	</view>
</template>
<script>
	import search from '@/components/search/search.vue'
	export default {
		components: {
			search
		},
		data() {
			return {
				themeClass: 'block',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['女生','动漫','节日','酷车','萌宠'],//初始化推荐列表
				isSearch: false
			}
		},
		methods: {
			getSearchText(e) {
				if(this.isSearch){
					uni.showToast({
						icon: 'none',
						title: '太快啦，歇一会再试试',
						mask: true,
						duration: 1000
					})
					return
				}
				this.isSearch = true
				uni.navigateTo({
					url: '/pages/list/list?type=search&pid=0&id='+e
				})
				this.isSearch = false
			}
		},
	}
</script>

<style>
</style>