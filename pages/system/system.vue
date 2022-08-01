<template>
	<view v-if="vuex_user.system == 1">
		<u-navbar
		:is-back="true" 
		title=" " 
		title-width="325" 
		title-color="#333333" 
		title-size="28" 
		:background="navbarBackground"
		:border-bottom="false"
		></u-navbar>
		<view class="top relative u-flex u-row-around u-p-b-60 u-p-l-30 u-p-r-30">

			<view class="nums">后台管理</view>
		</view>
		<view class="relative bg-white u-p-30 border-bottom">
			<view class="title">数据统计</view>
		</view>
		<view class="grid u-text-center u-flex u-row-between u-flex-wrap">
			<view class="tab u-flex-col u-row-center">
				<view class="u-p-b-15"><text class="num">{{userCount}}</text></view>
				<view class="">用户数</view>
			</view>
			<view class="tab u-flex-col u-row-center">
				<view class="u-p-b-15"><text class="num">{{coverCount}}</text></view>
				<view class="">作品数</view>
			</view>
			<view class="tab u-flex-col u-row-center">
				<view class="u-p-b-15"><text class="num">{{orderCount}}</text></view>
				<view class="">下载数</view>
			</view>
		</view>
		<u-gap height="15" bg-color="#F5F6F8"></u-gap>
		<view class="relative bg-white u-p-30 border-bottom">
			<view class="title">系统菜单</view>
		</view>
		<view class="u-flex u-row-left u-col-center u-flex-wrap u-text-center u-p-t-30 u-p-b-30">
			<view class="tab" @click="configClick">
				<u-icon name="/static/icon/qianbao.png" size="44"></u-icon>
				<view class="u-p-t-10">程序配置</view>
			</view>
			<view class="tab" @click="bannerClick">
				<u-icon name="/static/icon/banner.png" size="44"></u-icon>
				<view class="u-p-t-10">轮播图管理</view>
			</view>
			<view class="tab" @click="categoryClick">
				<u-icon name="/static/icon/list.png" size="44"></u-icon>
				<view class="u-p-t-10">分类管理</view>
			</view>
			<view class="tab" @click="userClick">
				<u-icon name="/static/icon/users.png" size="44"></u-icon>
				<view class="u-p-t-10">用户管理</view>
			</view>
			<view class="tab" @click="coverClick">
				<u-icon name="/static/icon/dingdan.png" size="44"></u-icon>
				<view class="u-p-t-10">作品管理</view>
			</view>
			<view class="tab" @click="tagsClick">
				<u-icon name="/static/icon/yuyue.png" size="44"></u-icon>
				<view class="u-p-t-10">标签管理</view>
			</view>
			<view class="tab" @click="designClick">
				<u-icon name="/static/icon/liuhai.png" size="44"></u-icon>
				<view class="u-p-t-10">刘海管理</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navbarBackground: {
					background: 'rgba(0,0,0,0)'
				},
				userCount: 0,
				coverCount: 0,
				orderCount: 0,
			}
		},
		onLoad() {
			this.getUserCount()
			this.getCoverCount()
			this.getOrderCount()
		},
		methods: {
			async getUserCount(){
				let count = await uniCloud.callFunction({
					name: 'query_count',
					data: {
						dbName: "wx_user"
					},
				})
				this.userCount = count.result
			},
			async getCoverCount(){
				let count = await uniCloud.callFunction({
					name: 'query_count',
					data: {
						dbName: "wx_cover"
					},
				})
				this.coverCount = count.result
			},
			async getOrderCount(){
				let count = await uniCloud.callFunction({
					name: 'query_count',
					data: {
						dbName: "wx_order"
					},
				})
				this.orderCount = count.result
			},
			configClick(){
				uni.navigateTo({
					url: '/pages/system/config/configList'
				})
			},
			bannerClick(){
				uni.navigateTo({
					url: '/pages/system/banner/bannerList'
				})
			},
			categoryClick(){
				uni.navigateTo({
					url: '/pages/system/category/categoryList'
				})
			},
			userClick(){
				uni.navigateTo({
					url: '/pages/system/user/userList'
				})
			},
			coverClick(){
				uni.navigateTo({
					url: '/pages/system/cover/coverList'
				})
			},
			cashClick(){
				uni.navigateTo({
					url: '/pages/system/cash/cashList'
				})
			},
			tagsClick(){
				uni.navigateTo({
					url: '/pages/system/tags/tagsList'
				})
			},
			designClick(){
				uni.navigateTo({
					url: '/pages/system/design/designList'
				})
			},
			advertiClick(){
				uni.navigateTo({
					url: '/pages/system/adverti/advertiList'
				})
			},
		}
	}
</script>

<style lang="scss">
	.tab{
		width: 33.33%;
		padding: 30rpx;
	}
	.top{
		width: 100vw;
		height: 460rpx;
		margin-top: -250rpx;
		padding-top: 250rpx;
		background-image: linear-gradient(100deg, #fce638 , #f8c93c);
		position: fixed;
		top: 0;
	}
	.title{
		border-left: 6rpx solid #333333;
		padding-left: 15rpx;
		line-height: 28rpx;
		color: #333333;
		font-weight: 550;
	}
	.border-bottom{
		border-bottom: 1rpx solid #F3F3F3;
	}
	.relative{
		position: relative;
	}
	.bg-white{
		background-color: #FFFFFF;
	}
	.grid{
		.tab{
			width: 33%;
			height: 180rpx;
		}
	}
	.num{
		font-weight: 550;
		font-size: 48rpx;
		color: #ffb907;
	}
	.nums{
		color: #3a1300;
		font-size: 36rpx;
		font-weight: 550;
	}
	.utit{
		color: #3a1300;
	}
</style>