<template>
	<view class="content">
		<view class="" v-show="!loadShow">
			<view class="vtop">
				<view class="title u-flex u-row-left u-p-l-40" :style="{marginTop: menuButtonInfo.top+'px'}"
					v-if="!homeTop || scrollTop <= homeTop - (menuButtonInfo.top + 30 + 15)">
					<text></text>
					<u-icon class="u-p-l-15 fenxiang" name="/static/icon/share.png" size="40"></u-icon>
					<button open-type="share"
						style="position: absolute;top: 20rpx;left: 20rpx;width: 50rpx;height: 50rpx;opacity: 0;"></button>
					<view class="search u-flex u-row-left" @click="search">
						<u-icon name="/static/icon/search.png" size="36"></u-icon>
						<text class="u-p-l-15">搜索你想要的壁纸</text>
					</view>
				</view>
				<view v-else>
					<scroll-view scroll-x style="height: 100rpx;" :scroll-into-view="rolldistance"
						:scroll-with-animation="true">
						<view class="u-flex u-row-left u-p-t-20 u-p-b-20">
							<view class="" id="akun1" style="padding: 0 16rpx;"></view>
							<view class="scroll-view-item tags" :id="'akun'+(index+1)"
								:class="cateStatic==item.type?'tag-active':''"
								@click="cateClick(item.type,item.more,'akun'+(index+2))"
								v-for="(item,index) in cateList" :key="index">
								{{item.name}}
							</view>
							<view class="" style="width: 40rpx;">ㅤ</view>
						</view>
					</scroll-view>
				</view>
				<view class="div3"></view>
				<view class="div2"></view>
				<view class="div1"></view>
			</view>
			<view class="" :style="{marginTop: 'calc('+menuButtonInfo.top+'px + 80rpx + 45rpx + 24rpx)'}"></view>

			<view class="u-p-l-25 u-p-r-25 u-p-t-25">
				<!-- <image v-if="reviewed" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-676f0968-fd33-480e-a7e7-40d1564c0de0/1fa52e45-abfa-4fe2-9291-efc2e3e9e7c1.png" style="width:700rpx;height: 343rpx" @click="txsignClick"></image> -->
				<image v-if="reviewed"
					src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-676f0968-fd33-480e-a7e7-40d1564c0de0/f88fc852-427e-414a-899c-8254da623f84.png"
					style="width:700rpx;height: 343rpx" @click="ttsignClick"></image>
				<image
					src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-676f0968-fd33-480e-a7e7-40d1564c0de0/c46c1f58-520d-4245-a411-6a25c9339012.png"
					style="width:700rpx;height: 343rpx" @click="designClick"></image>

				<ad-interstitial adpid="1300872376" :loadnext="true" v-slot:default="{loading, error}" @load="onadload"
					@close="onadclose" @error="onaderror">
					<image :disabled="loading" :loading="loading"
						src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-676f0968-fd33-480e-a7e7-40d1564c0de0/03ed58b7-f37d-469a-89ce-a2e0393692c9.png"
						style="width:700rpx;height: 343rpx"></image>
					<view v-if="error">{{error}}</view>
				</ad-interstitial>

				<!-- <image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-676f0968-fd33-480e-a7e7-40d1564c0de0/03ed58b7-f37d-469a-89ce-a2e0393692c9.png" style="width:700rpx;height: 343rpx" @click="signClick"></image> -->
				<ad-rewarded-video adpid="1320507820" :loadnext="true" v-slot:default="{loading, error}"
					@load="onadloads" @close="onadcloses" @error="onaderrors">
					<image :disabled="loading" :loading="loading"
						src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-676f0968-fd33-480e-a7e7-40d1564c0de0/5aad881c-a40a-4b3a-bf69-fd30dd299f2a.png"
						style="width:700rpx;height: 343rpx"></image>
					<view v-if="error">{{error}}</view>
				</ad-rewarded-video>
				<!-- <image
					src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-676f0968-fd33-480e-a7e7-40d1564c0de0/5aad881c-a40a-4b3a-bf69-fd30dd299f2a.png"
					style="width:700rpx;height: 343rpx" @click="adClick"></image> -->
			</view>
			<view class="tags u-p-l-40 u-p-t-40 u-p-r-30">
				<ad adpid="1602146097"></ad>
			</view>

			<view class="" style="height: 180rpx;"></view>
		</view>
		<view class="loading_page" v-show="loadShow">
			<image src="/static/loading/loading.gif"></image>
		</view>
		<view @click="search" class="back backSearch u-flex u-flex-col u-row-center u-col-center"
			:class="backShow?'backTop_show':'backTop_hide'">
			<image src="/static/search.png" style="width: 30rpx;height: 30rpx;"></image>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<foo-bar @toIndex="toIndex" :home="2"></foo-bar>
		<!-- #endif -->
		<models v-if="loginShow" title="授权登录探索更多精彩内容!" btnText="授权登录" @getUserInfo="getUserInfo"
			@close="loginShow = false"></models>

		<models v-if="signShow" :authorize="false" :title="signTitle" btnText="知道了" closeText=" "
			@save="signShow = false"></models>
	</view>
</template>

<script>
	let videoAd = null;
	let menuButtonInfo = {};
	// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)
	// #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO || MP-QQ
	menuButtonInfo = uni.getMenuButtonBoundingClientRect();
	// #endif
	var app = getApp()

	import fooBar from '@/components/fooBar/fooBar.vue'
	import models from '@/components/model/model.vue'
	export default {
		components: {
			fooBar,
			models
		},
		data() {
			return {
				menuButtonInfo: menuButtonInfo,
				loadShow: true,
				signShow: false,
				signTitle: '',
				isSign: false,
				// 登录弹窗
				loginShow: false,
				reviewed: true,
			}
		},
		async onLoad() {
			this.reviewed = uni.getStorageSync('boolean')
			// uni.hideTabBar()
			let that = this
			that.loadShow = false
			// that.adLoad()
		},
		methods: {
			onadloads(e) {
				console.log('广告数据加载成功');
			},
			onadcloses(e) {
				const detail = e.detail
				// 用户点击了【关闭广告】按钮
				if (detail && detail.isEnded) {
					// 正常播放结束
					this.userIntegral()
					console.log("onadclose " + detail.isEnded);
				} else {
					// 播放中途退出
					console.log("onadclose " + detail.isEnded);
				}
			},
			onaderrors(e) {
				// 广告加载失败
				console.log("onaderror: ", e.detail);
			},
			onadload(e) {
				console.log('广告数据加载成功');
			},
			onadclose(e) {
				console.log("1111", e);
				this.signClick()
			},
			onaderror(e) {
				// 广告加载失败
				console.log("222: ", e.detail);
			},
			async toIndex(index) {
				let that = this
				if (index == 0) {
					uni.switchTab({
						url: '/pages/index/index'
					})
				} else if (index == 1) {
					uni.switchTab({
						url: '/pages/center/center'
					})
				} else if (index == 3) {
					uni.switchTab({
						url: '/pages/user/user'
					})
				}
			},
			designClick() {
				let that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/find/design/design'
				})
			},
			txsignClick() {
				let that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/find/profile/profile'
				})
			},
			ttsignClick() {
				let that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/find/gallery/gallery'
				})
			},
			// 搜索
			async search() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			async getSign() {
				let that = this
				const startTime = new Date(new Date().toLocaleDateString()).getTime()
				const endTime = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1
				let query = await uniCloud.callFunction({
					name: 'sign_flag',
					data: {
						dbName: 'wx_sign',
						"userId": that.vuex_user._id,
						"startTime": startTime,
						"endTime": endTime
					},
				})
				if (query.result.success) that.isSign = true
				else that.isSign = false
			},
			async signClick() {
				var that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}
				await that.getSign()
				if (that.isSign) {
					uni.showToast({
						icon: 'none',
						mask: true,
						title: '今日已签到',
						duration: 1500
					})
					return
				}

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
			luckClick() {
				let that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}
			},
			adClick() {
				var that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}
				// if (videoAd) {
				// 	videoAd.show().catch(err => {
				// 		// 失败重试
				// 		// console.log("广告拉去失败")
				// 		videoAd.load().then(() => videoAd.show())
				// 	})
				// }
			},
			adLoad() {
				var that = this
				if (uni.createRewardedVideoAd) {
					// 加载激励视频广告
					// #ifdef MP-QQ
					videoAd = wx.createRewardedVideoAd({
						adUnitId: "cbe2baa6cdb9b4f2c75269d000476ee6"
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
								
							}
						} else {
							// 播放中途退出，进行提示
							console.log('中途退出')
						}
					});
				}
			},
			async userIntegral() {
				var that = this
				uni.showLoading({
					mask: true,
					title: '正在拼命加载中...'
				})
				let data = await uniCloud.callFunction({
					name: 'user_integral',
					data: {
						userId: that.vuex_user._id
					},
				})
				uni.hideLoading()
				if (data.result.success) {
					that.getUser()
					that.signTitle =
						"<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" +
						data.result.integral + "</span>积分</p>"
					that.signShow = true
				}
			},
			async getUser() {
				let that = this
				let detail = await uniCloud.callFunction({
					name: 'query_map',
					data: {
						dbName: "wx_user",
						id: that.vuex_user._id
					},
				})
				that.$u.vuex('vuex_user', detail.result)
			},


			// 登录
			getUserInfo() {
				var that = this
				// #ifdef MP-WEIXIN
				uni.getUserProfile({
					desc: '个人登录，记录数据', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success(res) {
						console.log(res)
						that.name = res.userInfo.nickName; //昵称
						that.avatar = res.userInfo.avatarUrl; //头像
						that.wxlogin();
					},
					fail() {
						console.log("获取用户信息失败");
					}
				});
				// #endif
				// #ifdef MP-QQ
				uni.getUserInfo({
					// 获取信息成功
					success(res) {
						console.log(res)
						that.name = res.userInfo.nickName; //昵称
						that.avatar = res.userInfo.avatarUrl; //头像
						that.wxlogin();
					},
					fail() {
						console.log("获取用户信息失败");
					}
				});
				// #endif
			},
			//已经授权，自动登录
			async wxlogin() {
				let that = this;
				uni.showLoading({
					title: '登录中...'
				});
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let code = loginRes.code;
						that.wxloginres(code);
					},
				});

			},
			//登录后提交服务器获取进一步信息
			async wxloginres(wxcode) {
				let that = this;

				var userId = uni.getStorageSync('userId')

				var mptype
				// #ifdef MP-WEIXIN
				mptype = 'wx'
				// #endif
				// #ifdef MP-QQ
				mptype = 'qq'
				// #endif
				// #ifdef MP-TOUTIAO
				mptype = 'tt'
				// #endif

				let authorize = await uniCloud.callFunction({
					name: 'user_authorize',
					data: {
						name: that.name,
						avatar: that.avatar,
						mptype: mptype,
						code: wxcode,
						userId: userId,
					},
				})
				if (authorize.result.success) {
					that.$u.vuex('vuex_user', authorize.result.data)
					that.getUser()
					uni.showToast({
						icon: 'none',
						mask: true,
						title: '登录成功，再次点击探索新功能吧！',
						duration: 1500
					})
					uni.removeStorageSync('userId')
				} else {
					uni.showToast({
						icon: 'none',
						mask: true,
						title: authorize.result.msg,
						duration: 1500
					})
				}
				that.loginShow = false
			},
			onShareAppMessage(res) {
				return {
					title: '手机墙纸精选发现更多有趣的手机壁纸玩法~',
					path: '/pages/find/find?userId=' + this.vuex_user._id
				}
			},
			onShareTimeline(res) {
				return {
					title: '手机墙纸精选发现更多有趣的手机壁纸玩法~',
					path: '/pages/find/find'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vtop {
		position: fixed;
		top: 0px;
		left: 0;
		width: 100%;
		background: linear-gradient(90deg, #ffb821 0, #ffcd33 45%, #ffd833);
		z-index: 999999;
		height: 15%;

		.title {
			position: relative;
			color: #303030;
			font-size: 20px;
			line-height: 80rpx;
		}

		.fenxiang {
			margin-left: -20rpx;
			margin-top: -10px;
		}

		.search {
			width: 55%;
			background: #F3F4F5;
			height: 60rpx;
			margin: 20rpx 20rpx 20rpx 20rpx;
			padding-left: 20rpx;
			border-radius: 50px;
			margin-top: 1px;

			text {
				color: #a6a7a8;
				font-size: 14px;
			}
		}

		.div1 {
			height: 40rpx;
			width: 100%;
			background: #ffffff;
			border-radius: 30px 30px 0px 0px;
			position: absolute;
			bottom: 0px;
		}

		.div2 {
			height: 40rpx;
			width: 92%;
			background: #ffffffb0;
			border-radius: 10px 10px 0px 0px;
			position: absolute;
			bottom: 5px;
			left: 4%;
			right: 6%;
		}

		.div3 {
			height: 40rpx;
			width: 88%;
			background: #ffffff59;
			border-radius: 10px 10px 0px 0px;
			position: absolute;
			bottom: 10px;
			left: 6%;
			right: 8%;
		}
	}

	.tab {
		background-image: linear-gradient(to top, #50e4c0, #23ccbe);
		width: 690rpx;
		height: 300rpx;
		border-radius: 24rpx;
	}
</style>
