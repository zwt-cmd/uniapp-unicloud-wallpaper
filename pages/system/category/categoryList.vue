<template>
	<view v-if="vuex_user.system == 1">
		<view class="u-p-l-10 u-p-r-10 u-p-t-10 u-flex u-row-left u-flex-wrap">
			<view class="tab" v-for="(item, index) in categoryList" :key="index">
				<view class="u-flex u-row-between">
					<image class="banner_img" :src="item.image" mode="aspectFill"></image>
				</view>
				<view class="u-p-15 u-flex u-row-between">
					<view class="">{{item.name}}</view>
					<view class="tags_ tag-active_" @click.stop="sheetClick(item._id, index)">操作</view>
				</view>
			</view>
		</view>
		<view v-if="noData"
		class="u-flex u-flex-col u-col-center"
		style="width: 100vw;height: 50vh;padding-top: 200rpx;">
			<view class="">
				<image style="width: 300rpx;height: 300rpx;" src="/static/nodata.png"></image>
			</view>
			<view class="u-tips-color u-font-12 u-p-t-30">
				没有数据哦~
			</view>
		</view>
		
		<view class="add" @click="addClick">
			<image src="/static/icon/add.png"></image>
		</view>

		<view class="safe-area-inset-bottom">
			<view class="" style="height: 10px;"></view>
		</view>
		
		<u-action-sheet :list="sheetList" :safe-area-inset-bottom="true" v-model="sheetShow" @click="sheetChange"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sheetList: [{
					text: '编辑',
				}, {
					text: '删除' 
				}],
				categoryId: '-1',
				sheetShow: false,
				categoryList: [],
				// 无数据
				noData: false,
			}
		},
		onLoad() {
			this.getCategoryList()
		},
		async onShow() {
			var that = this
			if(uni.getStorageSync("update_flag")){
				that.getCategoryList()
				uni.removeStorageSync('update_flag')
			}
		},
		methods: {
			async getCategoryList(){
				var that = this
				
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_category",
						order: {
							name: 'sort',
							type: 'desc'
						},
						pageIndex: 1,
						pageSize: 100
					},
				})
				
				if(list.result.hasMore) that.loadStatus = 'loadmore'
				else that.loadStatus = 'nomore'
				
				that.categoryList = list.result.data
				
				if(that.categoryList.length == 0) that.noData = true
				else that.noData = false
			},
			sheetClick (id, index){
				this.categoryId = id
				this.sheetShow = true
			},
			addClick(){
				uni.navigateTo({
					url: '/pages/system/category/categoryEdit?id=-1'
				})
			},
			async sheetChange(index){
				var that = this
				if(that.sheetList[index].text === '编辑'){
					uni.navigateTo({
						url: '/pages/system/category/categoryEdit?id='+that.categoryId
					})
				}else if(that.sheetList[index].text === '删除'){
					uni.showModal({
					    title: '删除提示',
					    content: '确定删除当前分类吗？',
						confirmText: '删除',
						confirmColor: '#fcc600',
					    success: async function (res) {
					        if (res.confirm) {
					            uni.showLoading({
					            	mask: true,
					            	title: '删除中...'
					            })
					            let query = await uniCloud.callFunction({
					            	name: 'query_del',
					            	data: {
					            		dbName: 'wx_category',
					            		filter: {
					            			'_id': that.categoryId,
					            		},
					            		dbToName: 'wx_category',
					            		toFilter: {
					            			'parent_id': that.categoryId
					            		}
					            	},
					            })
					            if(query.result.success){
					            	that.getCategoryList()
					            }
					            uni.showToast({
					            	icon: 'none',
					            	title: query.result.msg,
					            	mask: true,
					            	duration: 1000
					            })
					        }
					    }
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F7F7F7;
	}
	.tab{
		background-color: #FFFFFF;
		width: calc(50% - 20rpx);
		margin: 10rpx;
		border-radius: 8rpx;
	}
	.tags_{
		font-size: 12px;
		color: #909399;
		border: 1rpx solid #B8B8B8;
		border-radius: 8rpx;
		line-height: 46rpx;
		padding: 0 20rpx;
	}
	
	.tag-active_{
		background-image: linear-gradient(100deg, #fcfc44 , #f8c93c);
		color: #3a1800;
		// box-shadow: 0px 0px 10px #fff8ab;
		animation: tiaobig 0.8s ease-in-out alternate infinite;
		animation-iteration-count:1;
		border: none;
	}
	.border-bottom{
		border-bottom: 1rpx solid #F3F4F6;
	}
	.banner_img{
		width: 100%;
		height: 160rpx;
		margin: 15rpx 15rpx 0 15rpx;
		border-radius: 8rpx;
	}
	.add{
		animation: tiaobig 1.5s ease-in-out alternate infinite;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 140rpx;
		right: 30rpx;
		border-radius: 120rpx;
		width: 90rpx;
		height: 90rpx;
		box-shadow: 0px 1px 8px #C8C8C8;
		image{
			width: 90rpx;
			height: 90rpx;
		}
	}
	@keyframes tiaobig {
		0% {
			transform: scale(0.92);
		}
		25% {
			transform: scale(1.08);
		}
		50% {
			transform: scale(0.96);
		}
		75% {
			transform: scale(1.06);
		}
		100% {
			transform: scale(0.94);
		}
	}
</style>