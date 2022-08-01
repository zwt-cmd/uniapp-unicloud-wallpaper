<template>
	<view>
		<u-navbar
		:is-back="true" 
		title="我的收藏" 
		title-width="325" 
		title-color="#333333" 
		title-size="28" 
		:border-bottom="false"
		></u-navbar>
		<view class="safe-area-inset-bottom u-skeleton">
			<view class="u-flex u-row-left u-flex-wrap u-p-l-40 u-p-t-30">
				<view class="tab u-skeleton-fillet" @click="detail(item._id)" v-for="(item, index) in coverList" :key="index">
					<image :src="item.image+'?x-oss-process=image/resize,w_600/quality,q_80'" style="width: 215rpx;height: 350rpx;" mode="aspectFill"></image>
					<view class="array">{{item.images.length}}</view>
				</view>
			</view>
		</view>
		<ad-custom unit-id="adunit-8aba3702eaa4804f"></ad-custom>
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
		<u-skeleton :loading="skeletonLoad" :animation="true" bgColor="#FFF" el-color="#F3F3F3"></u-skeleton>
		
		<view class="" v-if="!noData">
			<u-loadmore :status="loadStatus" :font-size="24" :margin-top="30" :margin-bottom="30" color="#B8B8B8"/>
		</view>
		<view class="safe-area-inset-bottom">
			<view class="" style="height: 1px;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				skeletonLoad: true,
				coverList: [{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'},
							{cover_img: 'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'}],
				// 无数据
				noData: false,
				// 分页
				pageIndex: 1,
				loadStatus: 'loadmore',
			}
		},
		async onShow() {
			var that = this
			await that.getColl(1)
			var timestamp1 = new Date().getTime()
			var timestamp2 = new Date().getTime()
			if((timestamp2 - timestamp1) < 1500){
				var time = 1500 - (timestamp2 - timestamp1)
				setTimeout(function(){
					that.skeletonLoad = false
				},time)
			}else{
				that.skeletonLoad = false
			}
		},
		methods: {
			async getColl(on){
				var that = this
				
				var newList = that.recordList
				that.loadStatus = 'loading'
				
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_cover",
						filter: {
							"coll.user_id": that.vuex_user._id,
							"status": 1
						},
						order: {
							name: 'time',
							type: 'desc'
						},
						pageIndex: that.pageIndex,
						pageSize: 15
					},
				})
				
				if(on == 1){
					newList = []
				}
				
				if(list.result.hasMore) that.loadStatus = 'loadmore'
				else that.loadStatus = 'nomore'
				
				newList = newList.concat(list.result.data)
				that.recordList = newList
				
				if(that.recordList.length == 0) that.noData = true
				that.coverList = list.result.data
			},
			cateClick(e){
				this.modelId = e
			},
			detail(id){
				uni.navigateTo({
					url: '/pages/detail/detail?id='+id+'&index=0'
				})
			},
		},
		onReachBottom(){
			let that = this;
			if(that.loadStatus == 'nomore') return
			that.pageIndex = that.pageIndex + 1
			that.getColl()
		},
	}
</script>

<style lang="scss">
	.tab{
		position: relative;
		border-radius: 32rpx;
		margin-right: 15rpx;
		margin-bottom: 15rpx;
		image{
			border-radius: 16rpx;
		}
		.array{
			position: absolute;
			top: 15rpx;
			right: 15rpx;
			color: #FFFFFF;
			background-color: rgba(0, 0, 0, 0.4);
			padding: 4rpx 16rpx;
			border-radius: 8rpx;
			font-size: 12px;
		}
	}
</style>