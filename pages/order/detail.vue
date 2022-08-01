<template>
	<view>
		<u-navbar
		:is-back="true" 
		title=" " 
		title-width="325" 
		title-color="#333333" 
		title-size="28" 
		:background="navbarBackground"
		:border-bottom="false"
		></u-navbar>
		<view class="bg"></view>
		<view class="top u-p-l-40 u-p-t-10">
			<view class="title">下载成功</view>
			<view class="f_title u-p-t-10 u-p-l-5">壁纸/头像已下载成功</view>
		</view>
		<view class="kapian u-m-40">
			<view class="bg-white u-flex u-row-center u-p-t-30"  style="border-radius: 24rpx 24rpx 0 0;">
				<view class="tab">
					<image :src="order.image" style="width: 215rpx;height: 350rpx;" mode="aspectFill" @click="previewImage(order.image)"></image>
					<view class="down" @click="downClick(order.image)">
						<view class="u-flex u-row-center u-col-center">
							<u-icon name="/static/icon/duihuan.png" :size="42"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<image src="../../static/tabs.png" style="width: 100%;height: 32rpx;display: block;"></image>
			<view class="bg-white u-p-l-40 u-p-r-40 u-p-t-20 u-p-b-20">
				<view class="u-flex u-row-between u-p-t-20 u-p-b-20">
					<view class="">扣除积分</view>
					<view class="u-tips-color u-font-12">{{order.integral}}积分</view>
				</view>
				<view class="u-flex u-row-between u-p-t-20 u-p-b-20">
					<view class="">下载时间</view>
					<view class="u-tips-color u-font-12">{{$u.timeFormat(order.time, 'yyyy-mm-dd hh:MM:ss')}}</view>
				</view>
			</view>
			<image src="../../static/tabs.png" style="width: 100%;height: 32rpx;display: block;"></image>
			<view class="zhuyi bg-white u-p-l-40 u-p-r-40 u-p-b-40 u-p-t-20" style="border-radius: 0 0 24rpx 24rpx;">
				<view class="u-main-color u-text-center u-p-b-10">注意事项</view>
				<view class="u-tips-color u-font-12">下载成功时将同步扣除所需积分。</view>
				<view class="u-tips-color u-font-12">下载成功后将自动保存图片到相册。</view>
				<view class="u-tips-color u-font-12">需要自行将图片设置为壁纸或者头像。</view>
				<view class="u-tips-color u-font-12">下载过的图片再次下载不扣除积分。</view>
			</view>
		</view>
		
		<models v-show="adShow"
		:authorize="false" 
		:ad="true" 
		title="已成功保存到相册，别忘了分享给朋友哦！"
		btnText="分享给好友" 
		closeText="暂时不用" 
		@save="adShow = false"
		@close="adShow = false"></models>
	</view>
</template>

<script>
	import models from '@/components/model/model.vue'
	export default {
		components: {
			models
		},
		data() {
			return {
				navbarBackground: {
					background: 'rgba(0,0,0,0)'
				},
				order: {},
				adShow: false,
			}
		},
		onLoad({id}) {
			this.getOrder(id)
		},
		methods: {
			async getOrder(id){
				let detail = await uniCloud.callFunction({
					name: 'query_map',
					data: {
						dbName: "wx_order",
						id: id,
					}
				})
				this.order = detail.result
			},
			previewImage(image){
				uni.previewImage({
					current: image,
					urls: [image]
				})
			},
			downClick(url){
				var that = this
				
				var extension = url.substring(url.lastIndexOf('.') + 1)
				let fileName = new Date().valueOf();
				uni.downloadFile({
					url: url,
					filePath: wx.env.USER_DATA_PATH + '/' + fileName + '.' + extension,
					success: (res) => {
						var benUrl = res.filePath
						//图片保存到本地相册
						uni.saveImageToPhotosAlbum({
							filePath: benUrl,
							//授权成功，保存图片
							success: function(data) {
								uni.hideLoading()
								that.adShow = true
							},
							//授权失败
							fail: function(err) {
								if (err.errMsg) {
									//重新授权弹框确认
									uni.showModal({
										title: '提示',
										content: '无权限，请打开下载权限后再试！',
										showCancel: false,
										success(res) {
											if (res.confirm) {
												//重新授权弹框用户点击了确定
												uni.openSetting({
													//进入小程序授权设置页面
													success(settingdata) {
														if (settingdata.authSetting['scope.writePhotosAlbum']) {
															//用户打开了保存图片授权开关
															uni.saveImageToPhotosAlbum({
																filePath: benUrl,
																success: function(data) {
																	uni.hideLoading()
																	that.adShow = true
																}
															});
														} else {
															//用户未打开保存图片到相册的授权开关
															uni.showModal({
																title: '温馨提示',
																content: '授权失败，请稍后重新获取',
																showCancel: false
															});
														}
													}
												});
											}
										}
									});
								}
								uni.hideLoading()
							}
						});
					},
					fail: (error) => {
						console.log(error)
					}
				})
			}
		},
		onShareAppMessage(res) {
			var that = this
			setTimeout(function(){
				that.adShow = false
			},2000)
			return {
				title: '送你一张超级好看的壁纸~',
				imageUrl: that.order.image,
				path: '/pages/index/index?userId='+that.vuex_user._id+'&detailId='+that.order.cover_id+'&index='+that.order.current
			}
		},
	}
</script>

<style lang="scss">
	.bg{
		width: 100vw;
		height: 60vh;
		background-image: linear-gradient(#F8D246, #F8D246, rgba(255,255,255,0));
		position: fixed;
		top: 0;
	}
	.tab{
		position: relative;
		margin-right: 15rpx;
		margin-bottom: 15rpx;
		image{
			border-radius: 16rpx;
		}
		.down{
			position: absolute;
			width: 100%;
			height: 50rpx;
			bottom: 10rpx;
			background-color: rgba(0,0,0,0.38);
			border-radius: 0 0 16rpx 16rpx;
		}
	}
	.top{
		position: relative;
		.title{
			font-size: 22px;
			font-weight: 550;
		}
	}
	.kapian{
		position: relative;
		border-radius: 24rpx;
		box-shadow: 0px 9px 18px #E8E8E8;
	}
	.bg-white{
		background-color: #FFFFFF;
	}
	.zhuyi{
		line-height: 48rpx;
	}
</style>
