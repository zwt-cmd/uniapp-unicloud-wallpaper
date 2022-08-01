<template>
	<view>
		<u-navbar
		:is-back="true" 
		title="我的下载" 
		title-width="325" 
		title-color="#333333" 
		title-size="28" 
		:border-bottom="false"
		></u-navbar>
		<view class="safe-area-inset-bottom u-skeleton">
			<view class="u-flex u-row-left u-flex-wrap u-p-l-40 u-p-t-20">
				<view class="tab u-skeleton-fillet" v-for="(item, index) in orderList" :key="index" @click="detailClick(item._id)">
					<image :src="item.image" style="width: 215rpx;height: 350rpx;" mode="aspectFill"></image>
				</view>
			</view>
			<!--ad-custom unit-id="adunit-8aba3702eaa4804f"></ad-custom-->
		</view>
		<view v-if="noData"
		class="u-flex u-flex-col u-col-center"
		style="width: 100vw;height: 50vh;padding-top: 200rpx;background-color: #FFFFFF;">
			<view class="">
				<image style="width: 300rpx;height: 300rpx;" src="/static/nodata.png"></image>
			</view>
			<view class="u-tips-color u-font-12 u-p-t-30">
				没有数据哦~
			</view>
		</view>
		
		<view class="" v-if="!noData">
			<u-loadmore :status="loadStatus" :font-size="24" :margin-top="30" :margin-bottom="30" color="#B8B8B8"/>
		</view>
		<view class="safe-area-inset-bottom">
			<view class="" style="height: 1px;"></view>
		</view>
		
		
		<u-skeleton :loading="skeletonLoad" :animation="true" bgColor="#FFF" el-color="#F3F3F3"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				skeletonLoad: true,
				navbarTop: 0,
				orderList: [{
					url: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'
				},{
					url: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/3/1/94.jpg'
				},{
					url: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/4/4/133.png'
				},{
					url: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/4/6/142.jpg'
				},{
					url: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/6/4/179.jpg'
				}],
				// 无数据
				noData: false,
				// 分页
				pageIndex: 0,
				loadStatus: 'loadmore',
				userId: '',
				authorId: ''
			}
		},
		async onLoad({userId,authorId}) {
			var that = this
			if(userId) that.userId = userId
			if(authorId) that.authorId = authorId
			
			await that.getOrderList(1)
			that.skeletonLoad = false;
		},
		methods: {
			async getOrderList(on){
				var that = this
				var newList = that.orderList
				// 第一次进入触发
				if(on == 1){
					that.orderList = []
					newList = []
					that.pageIndex = 0
				}
				
				that.pageIndex = that.pageIndex + 1
				that.noData = false
				that.loadStatus = 'loading'
				
				var filter = {}
				if(that.userId) filter.user_id = that.userId
				else if(that.authorId) filter.author_id = that.authorId
				else  filter.user_id = that.vuex_user._id
				
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_order",
						filter: filter,
						order: {
							name: 'time',
							type: 'desc'
						},
						pageIndex: that.pageIndex,
						pageSize: 18
					},
				})
				
				if(list.result.hasMore) that.loadStatus = 'loadmore'
				else that.loadStatus = 'nomore'
				
				newList = newList.concat(list.result.data)
				that.orderList = newList
				
				if(that.orderList.length == 0) that.noData = true
				else that.noData = false
			},
			detailClick(id){
				uni.navigateTo({
					url: '/pages/order/detail?id='+id
				})
			}
		},
		onReachBottom(){
			let that = this;
			if(that.loadStatus == 'nomore') return
			that.getOrderList()
		},
	}
</script>

<style lang="scss">
	.menu{
		position: fixed;
		left: 0;
		width: calc(100% - 60rpx);
		z-index: 99;
		background-color: #FFFFFF;
	}
	.tags{
		font-size: 14px;
		background-color: #F5F6F8;
		color: #909399;
		border-radius: 40rpx;
		line-height: 60rpx;
		padding: 0 40rpx;
	}
	
	.tag-active{
		background-image: linear-gradient(100deg, #fcfc44 , #f8c93c);
		color: #333333;
		box-shadow: 0px 0px 10px #fff8ab;
		animation: tiaobig 0.8s ease-in-out alternate infinite;
		animation-iteration-count:1;
	}
	@keyframes tiaobig {
		0% {
			transform: scale(0.98);
		}
		25% {
			transform: scale(1.08);
		}
		50% {
			transform: scale(0.94);
		}
		75% {
			transform: scale(1.06);
		}
		100% {
			transform: scale(1);
		}
	}
	
	.tab{
		position: relative;
		margin-right: 15rpx;
		margin-bottom: 15rpx;
		image{
			border-radius: 16rpx;
		}
	}
</style>
