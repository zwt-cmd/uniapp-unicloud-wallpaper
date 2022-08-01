<template>
	<view>
		<view class="" v-show="!loadShow">
			<u-navbar :is-back="true" title="积分任务" title-width="325" title-color="#333333" title-size="28"
				:border-bottom="false"></u-navbar>
			<view class="top">
				<view class="icon u-flex u-row-center u-col-center u-p-t-20">
					<image src="../../static/icon/jinbi.png"></image>
				</view>
				<view class="kapian u-flex-col u-row-center u-col-center u-p-t-30">
					<view class="price">{{ userIntegral }}</view>
					<view class="shuom u-font-12 u-tips-color u-p-t-10">当前可用积分</view>
				</view>
			</view>
			<view class="u-p-l-40 u-p-r-40">
				<view class="u-font-18 u-m-t-80 u-m-b-30 title">积分任务</view>
				<view class="safe-area-inset-bottom">

					<view class="tab u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30">
						<view class="u-flex u-row-left u-col-center">
							<view class="icon u-flex u-row-center u-col-center">
								<u-icon name="/static/icon/user2.png" size="46"></u-icon>
							</view>
							<view class="u-p-l-20 u-p-t-10">
								<view class="">每日签到</view>
								<view class="u-font-12 u-light-color">+{{ signIntegral }}积分/天</view>
							</view>
						</view>
						<!-- @click="signClick" -->
						<ad-interstitial adpid="1772865180" :loadnext="true" v-slot:default="{loading, error}"
							@load="onadload" @close="onadclose" @error="onaderror">
							<view :disabled="loading" :loading="loading" class="btn" hover-class="hover-class"
								hover-stay-time="50">去签到</view>
							<view v-if="error">{{error}}</view>
						</ad-interstitial>
					</view>
					<view class="tab u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30">
						<view class="u-flex u-row-left u-col-center">
							<view class="icon u-flex u-row-center u-col-center">
								<u-icon name="/static/icon/user1.png" size="46"></u-icon>
							</view>
							<view class="u-p-l-20 u-p-t-10">
								<view class="">邀请好友</view>
								<view class="u-font-12 u-light-color">+{{ inviteIntegral }}积分/位</view>
							</view>
						</view>
						<view class="btn" hover-class="hover-class" hover-stay-time="50">
							去邀请
							<button open-type="share"
								style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;"></button>
						</view>
					</view>
					<view class="tab u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30" v-if="adUnitId">
						<view class="u-flex u-row-left u-col-center">
							<view class="icon u-flex u-row-center u-col-center">
								<u-icon name="/static/icon/video.png" size="46"></u-icon>
							</view>
							<view class="u-p-l-20 u-p-t-10">
								<view class="">看广告</view>
								<view class="u-font-12 u-light-color">+{{ adIntegral }}积分/次</view>
							</view>
						</view>
						<view class="btn" hover-class="hover-class" hover-stay-time="50" @click="adClick">去观看</view>
					</view>
					<view class="u-font-12 u-light-color u-text-center u-p-t-40">更多任务敬请期待~</view>
				</view>
				<ad adpid="1277515757"></ad>
			</view>
		</view>
		<view class="loading_page" v-show="loadShow">
			<image src="/static/loading/loading.gif"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIntegral: 0,
				signIntegral: 0,
				inviteIntegral: 0,
				adIntegral: 0,
				chargeShow: false,
				cashShow: false,
				loadShow: true,
				//adUnitId: '0'
			};
		},
		async onLoad() {
			await this.getConfig();
			this.loadShow = false;
		},
		async onShow() {
			this.getUser();
		},
		methods: {
			onadload(e) {
				console.log('广告数据加载成功');
			},
			onadclose(e) {
				this.signClick()
				console.log("onadclose", e);
			},
			onaderror(e) {
				// 广告加载失败
				console.log("onaderror: ", e.detail);
			},
			async getUser() {
				let that = this;
				let detail = await uniCloud.callFunction({
					name: 'query_map',
					data: {
						dbName: 'wx_user',
						id: that.vuex_user._id
					}
				});
				that.userIntegral = detail.result.integral;
			},
			async getConfig() {
				let that = this;
				let config = {};
				config = await uniCloud.callFunction({
					name: 'config_map',
					data: {
						keys: ['signIntegral', 'inviteIntegral', 'adIntegral', 'chargeShow', 'adUnitId']
					}
				});
				if (config.result.success) {
					that.signIntegral = parseInt(config.result.data[0])
					that.inviteIntegral = parseInt(config.result.data[1])
					that.adIntegral = parseInt(config.result.data[2])
					that.chargeShow = config.result.data[3]
					that.adUnitId = config.result.data[4]
				}
			},
			async signClick() {
				var that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}
				if (that.isSign) return

				uni.showLoading({
					mask: true,
					title: '签到中...'
				})
				let sign = await uniCloud.callFunction({
					name: 'sign_add',
					data: {
						"userId": that.vuex_user._id
					},
				})
				uni.hideLoading()
				if (sign.result.success) {
					that.getUser()
					that.signTitle =
						"<p style='font-weight: 550;font-size: 16px;'>签到成功</p><p style='padding-top: 10px;'>获得<span class='num'>" +
						sign.result.integral + "</span>积分</p>"
					that.signShow = true
					that.isSign = true
				} else {
					uni.showToast({
						icon: 'none',
						mask: true,
						title: sign.result.msg,
						duration: 1500
					})
				}
			},
			adClick() {
				var that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}
				if (videoAd) {
					videoAd.show().catch(err => {
						// 失败重试
						// console.log("广告拉去失败")
						videoAd.load().then(() => videoAd.show())
					})
				}
			},
			adLoad() {
				var that = this
				if (uni.createRewardedVideoAd) {
					// 加载激励视频广告
					// #ifdef MP-QQ
					videoAd = wx.createRewardedVideoAd({
						adUnitId: "{{ qqexcitation }}"
					});
					// #endif
					// #ifdef MP-WEIXIN
					videoAd = uni.createRewardedVideoAd({
						adUnitId: "1320507820"
					});
					// #endif
					//捕捉错误
					videoAd.onError(err => {
						// 进行适当的提示
						console.log('videoAd onError', err);
					});
					// 监听关闭
					videoAd.onClose(status => {
						if ((status && status.isEnded) || status === undefined) {
							// 正常播放结束，下发奖励
							if (that.vuex_user) {
								that.userIntegral()
							}
						} else {
							// 播放中途退出，进行提示
							console.log('中途退出')
						}
					});
				}
			},
			charge() {
				uni.navigateTo({
					url: '/pages/integral/charge'
				});
			},
			cash() {
				uni.navigateTo({
					url: '/pages/integral/cash'
				});
			},
			adClick() {
				var videoAd = null;
				if (wx.createRewardedVideoAd) {
					// 加载激励视频广告
					videoAd = wx.createRewardedVideoAd({
						adUnitId: this.adUnitId
					});
					//捕捉错误
					videoAd.onError(err => {
						// 进行适当的提示
						console.log('videoAd onError', res);
					});
					// 监听关闭
					videoAd.onClose(status => {
						if ((status && status.isEnded) || status === undefined) {
							// 正常播放结束，下发奖励
							// continue you code
						} else {
							// 播放中途退出，进行提示
						}
					});
				}
			}
		},
		onShareAppMessage(res) {
			return {
				title: '我等风也等你，近听水无声~',
				path: '/pages/index/index?userId=' + this.vuex_user._id
			};
		}
	};
</script>

<style lang="scss">
	.top {
		image {
			width: 120rpx;
			height: 120rpx;
		}

		.kapian {
			height: 240rpx;
			margin: -60rpx 40rpx 0 40rpx;
			background: linear-gradient(to bottom right, #6cb3ff, #866bf1);
			color: #ffffff;
			border-radius: 36rpx;
			box-shadow: 0px 10px 20px #a2beff;

			.price {
				font-size: 32px;
				font-weight: 700;
			}

			.shuom {
				color: #e5e5e5;
			}
		}
	}

	.title {
		border-left: 6rpx solid #648af1;
		padding-left: 15rpx;
		line-height: 34rpx;
		color: #808080;
	}

	.tab {
		.icon {
			width: 80rpx;
			height: 80rpx;
			border-radius: 80rpx;
		}

		.btn {
			position: relative;
			background-image: linear-gradient(to right, #fcfc44, #f8c93c);
			padding: 7px 15px;
			border-radius: 20px;
			font-size: 12px;
		}

		.hover-class {
			transform: scale(0.95);
			transition: all 0.2s;
		}
	}

	.tab:nth-child(1) .icon {
		background-image: linear-gradient(to right, #f5d553, #f0b347);
	}

	.tab:nth-child(2) .icon {
		background-image: linear-gradient(to right, #84d787, #5fbb92);
	}

	.tab:nth-child(3) .icon {
		background-image: linear-gradient(to right, #6cb3ff, #5476f1);
	}

	.tab:nth-child(4) .icon {
		background-image: linear-gradient(to right, #fa7a09, #ee6000);
	}
</style>
