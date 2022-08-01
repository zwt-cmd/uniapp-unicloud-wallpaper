<template>
	<view  v-if="vuex_user.system == 1">
		<view class="">
			<view class="u-m-l-20 u-m-r-20 u-m-t-20 u-p-30 cover" style="background-color: #FFF;border-radius: 12rpx;" v-for="(item, index) in designList" :key="index" @click="detailClick(item._id)">
				<view class="u-flex u-row-left u-col-top">
					<view class="tab">
						<image :src="item.image" style="width: 120rpx;height: 120rpx;" mode="aspectFill"></image>
					</view>
					<view class="btns u-flex-col u-row-between u-p-l-20 u-p-t-10">
						<view class="">
							<view class="title u-font-16 u-line-1">
								刘海设计
							</view>
							<view class="">
								<view class="u-tips-color u-p-t-10 u-font-12">
									类型：{{item.mode==1?'收费':'免费'}}
								</view>
							</view>
						</view>
						<view class="u-flex u-row-right">
							<view class="tags u-m-r-20" @click.stop="editClick(item._id)">编辑</view>
							<view class="tags" @click.stop="delClick(item._id)">删除</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="noData"
		class="u-flex u-flex-col u-col-center"
		style="width: 100vw;height: 100vh;padding-top: 200rpx;background-color: #FFFFFF;">
			<view class="">
				<image style="width: 300rpx;height: 300rpx;" src="/static/nodata.png"></image>
			</view>
			<view class="u-tips-color u-font-12 u-p-t-30">
				没有数据哦~
			</view>
		</view>
		
		<view class="add" @click="editClick('-1')">
			<image src="/static/icon/add.png"></image>
		</view>
		
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
				designList: [],
				// 无数据
				noData: false,
				// 分页
				pageIndex: 0,
				loadStatus: 'loadmore'
			}
		},
		onShow() {
			var that = this
			that.getDesignList(1)
		},
		methods: {
			async getDesignList(on){
				var that = this
				var newList = that.designList
				// 第一次进入触发
				if(on == 1){
					that.designList = []
					newList = []
					that.pageIndex = 0
				}
				
				that.pageIndex = that.pageIndex + 1
				that.noData = false
				that.loadStatus = 'loading'
				
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_design",
						order: {
							name: 'time',
							type: 'asc'
						},
						pageIndex: that.pageIndex,
						pageSize: 30
					},
				})
				
				if(list.result.hasMore) that.loadStatus = 'loadmore'
				else that.loadStatus = 'nomore'
				
				newList = newList.concat(list.result.data)
				that.designList = newList
				
				if(that.designList.length == 0) that.noData = true
				else that.noData = false
			},
			delClick(id){
				var that = this
				uni.showModal({
				    title: '删除提示',
				    content: '确定删除当前刘海吗？',
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
				            		dbName: 'wx_design',
				            		filter: {
				            			'_id': id
				            		}
				            	},
				            })
				            if(query.result.success){
				            	that.getDesignList(1)
				            }
				            uni.showToast({
				            	icon: 'none',
				            	title: query.result.msg,
				            	mask: true,
				            	duration: 1000
				            })
				        }
				    }
				});
			},
			editClick(id){
				uni.navigateTo({
					url: '/pages/system/design/designEdit?id='+id
				})
			}
		},
		onReachBottom(){
			let that = this;
			if(that.loadStatus == 'nomore') return
			that.getDesignList()
		},
	}
</script>
<style>
	page{
		background-color: #F5F6F8;
	}
</style>
<style lang="scss">
	.tags{
		font-size: 12px;
		border: 1rpx solid #B8B8B8;
		color: #909399;
		border-radius: 8rpx;
		line-height: 46rpx;
		padding: 0 20rpx;
	}
	.tab{
		position: relative;
		margin-right: 15rpx;
		margin-bottom: 15rpx;
		image{
			background-color: #F5F5F5;
		}
	}
	.btns{
		width: 530rpx;
		.title{
			font-weight: 550;
		}
	}
	.border-bottom{
		border-bottom: 1rpx solid #F3F4F6;
		position: relative;
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