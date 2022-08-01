<template>
	<view>
		<view class="" v-show="!loadShow">
			<view :style="{marginTop: menuButtonInfo.top + (menuButtonInfo.bottom - menuButtonInfo.top)/2+'px'}"></view>
			<view class="users u-flex u-row-between u-col-center u-p-r-40">
				<view class="user u-p-l-40 u-p-r-40 u-flex u-row-left u-col-center" @click="loginClick">
					<image class="avatar" :src="vuex_user?vuex_user.avatar:'../../static/man.jpg'"></image>
					<view class="u-p-l-20">
						<view class="name u-font-18">{{vuex_user?vuex_user.name:'登录/注册'}}</view>
						<view class="addr u-light-color u-p-t-10 u-font-12">人生是一场错过，愿你别蹉跎。</view>
					</view>
				</view>
				<view class="div3"></view>
				<view class="div2"></view>
				<view class="div1"></view>
			</view>
			<view style="margin-top: 310rpx;"></view>
			<view class="jifen u-flex u-row-left u-p-l-30 u-p-r-30 u-m-t-50">
				<view class="tab u-flex-col u-row-center u-col-center u-p-t-40 u-p-b-40 border-box"
					hover-class="hover-class" hover-stay-time="50">
					<view class="icon u-flex u-row-center u-col-center">
						<u-icon name="/static/icon/user1.png" size="50"></u-icon>
					</view>
					<view class="title u-main-color u-p-t-10 u-font-12">邀请好友</view>
					<view class="cont u-light-color u-p-t-10 u-font-12">+{{inviteIntegral}}积分/位</view>
					<button open-type="share"
						style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;"></button>
				</view>
				<view class="tab u-flex-col u-row-center u-col-center u-p-t-40 u-p-b-40 border-box"
					hover-class="hover-class" hover-stay-time="50" @click="signClick">
					<view class="icon u-flex u-row-center u-col-center" :class="isSign?'icons':''">
						<u-icon name="/static/icon/user2.png" size="46"></u-icon>
					</view>
					<view class="title u-main-color u-p-t-10 u-font-12">每日签到</view>
					<view class="cont u-light-color u-p-t-10 u-font-12">+{{signIntegral}}积分/天</view>
				</view>
				
				<ad-rewarded-video adpid="1320507820" :loadnext="true" v-slot:default="{loading, error}"
					@load="onadloads" @close="onadcloses" @error="onaderrors">
					<view :disabled="loading" :loading="loading" class="tab u-flex-col u-row-center u-col-center u-p-t-40 u-p-b-40 border-box"
						hover-class="hover-class" hover-stay-time="50" @click="adClick">
						<view class="icon u-flex u-row-center u-col-center">
							<u-icon name="/static/icon/video.png" size="46"></u-icon>
						</view>
						<view class="title u-main-color u-p-t-10 u-font-12">赚取积分</view>
						<view class="cont u-light-color u-p-t-10 u-font-12">+{{adIntegral}}积分/次</view>
					</view>
					<view v-if="error">{{error}}</view>
				</ad-rewarded-video>
				
			</view>
			<view class="menu u-m-l-40 u-m-r-40 u-m-t-40 border-box">
				<view class="u-flex u-row-between u-p-30" hover-class="hover-class1" hover-stay-time="50"
					@click="recordClick">
					<view class="u-flex u-row-left">
						<image src="/static/icon/jinbi1.png"></image>
						<view class="u-p-l-20">我的积分</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="u-light-color u-font-12 u-p-r-10">{{vuex_user?vuex_user.integral:0}}积分</view>
						<view class="arror-right"></view>
					</view>
				</view>
				<view class="u-flex u-row-between u-p-30" hover-class="hover-class1" hover-stay-time="50"
					@click="taskClick">
					<view class="u-flex u-row-left">
						<image src="/static/icon/liuhai1.png"></image>
						<view class="u-p-l-20">积分任务</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="u-light-color u-font-12 u-p-r-10">任务赚积分</view>
						<view class="arror-right"></view>
					</view>
				</view>
			</view>
			<view class="menu u-m-l-40 u-m-r-40 u-m-t-40 border-box">
				<view class="u-flex u-row-between u-p-30 border-bottom" hover-class="hover-class1" hover-stay-time="50"
					@click="collectClick">
					<view class="u-flex u-row-left">
						<image src="/static/icon/coll_art.png"></image>
						<view class="u-p-l-20">我的收藏</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="arror-right"></view>
					</view>
				</view>
				<view class="u-flex u-row-between u-p-30 border-bottom" hover-class="hover-class1" hover-stay-time="50"
					@click="orderClick">
					<view class="u-flex u-row-left">
						<image src="/static/icon/dingdan.png"></image>
						<view class="u-p-l-20">我的下载</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="arror-right"></view>
					</view>
				</view>
				<view class="u-flex u-row-between u-p-30" hover-class="hover-class1" hover-stay-time="50"
					@click="writeClick" v-if="writeShow">
					<view class="u-flex u-row-left">
						<image src="/static/icon/fabu.png"></image>
						<view class="u-p-l-20">我的投稿</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="u-light-color u-font-12 u-p-r-10">投稿赚积分</view>
						<view class="arror-right"></view>
					</view>
				</view>



			</view>
			<view class="menu u-m-l-40 u-m-r-40 u-m-t-40 border-box">
				<!-- #ifndef MP-QQ -->
				<view class="u-flex u-row-between u-p-30 border-bottom" style="position: relative;"
					hover-class="hover-class1" hover-stay-time="50">
					<view class="u-flex u-row-left">
						<image src="/static/icon/kefu.png"></image>
						<view class="u-p-l-20">联系客服</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="arror-right"></view>
					</view>
					<button open-type="contact"
						style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;"></button>
				</view>
				<!-- #endif -->

				<!-- 
				
				<view class="u-flex u-row-between u-p-30 border-bottom" hover-class="hover-class1" hover-stay-time="50" @click="feedClick">
					<view class="u-flex u-row-left">
						<image src="/static/icon/gonggao.png"></image>
						<view class="u-p-l-20">意见反馈</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="arror-right"></view>
					</view>
				</view> -->


				<view class="u-flex u-row-between u-p-30 border-bottom" hover-class="hover-class1" hover-stay-time="50"
					@click="cacheClick">
					<view class="u-flex u-row-left">
						<image src="/static/icon/qingchu.png"></image>
						<view class="u-p-l-20">清理缓存</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="arror-right"></view>
					</view>
				</view>

				<view class="u-flex u-row-between u-p-30" hover-class="hover-class1" hover-stay-time="50"
					@click="aboutClick">
					<view class="u-flex u-row-left">
						<image src="/static/icon/guanyu.png"></image>
						<view class="u-p-l-20">关于我们</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="arror-right"></view>
					</view>
				</view>

			</view>
			<view class="menu u-m-l-40 u-m-r-40 u-m-t-40 border-box">
				<view class="u-flex u-row-between u-p-30" hover-class="hover-class1" hover-stay-time="50"
					@click="systemClick" v-if="vuex_user.system == 1">
					<view class="u-flex u-row-left">
						<image src="/static/icon/qianbao.png"></image>
						<view class="u-p-l-20">管理后台</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="arror-right"></view>
					</view>
				</view>
			</view>

			<view class="quit u-text-center u-p-t-40" v-if="vuex_user" @click="exitClick">退出登录</view>
			<view class="" style="height: 180rpx;"></view>
		</view>
		<view class="loading_page" v-show="loadShow">
			<image src="/static/loading/loading.gif"></image>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<foo-bar @toIndex="toIndex" :home="3"></foo-bar>

		<models v-if="loginShow" title="为了更好体验，快去授权登录吧" btnText="授权登录" @getUserInfo="getUserInfo"
			@close="loginShow = false"></models>


		<models v-if="signShow" :authorize="false" :title="signTitle" btnText="知道了" closeText=" "
			@save="signShow = false"></models>
	</view>
</template>

<script>
	let videoAd = null;
	// 获取系统状态栏的高度
	let menuButtonInfo = {};
	// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)
	// #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO || MP-QQ
	menuButtonInfo = uni.getMenuButtonBoundingClientRect();
	// #endif

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
				// 签到
				isSign: false,
				signShow: false,
				signTitle: '',
				signIntegral: 0,
				inviteIntegral: 0,
				adIntegral: 0,
				// 投稿菜单显示
				writeShow: false,
				// 登录弹窗
				loginShow: false,
			}
		},
		async onLoad() {
			uni.hideTabBar()
			let that = this
			await that.getConfig()
			if (that.vuex_user) {
				that.getUser()
			}
			that.loadShow = false
			// that.adLoad()
		},
		async onShow() {
			let that = this
			if (that.vuex_user) {
				that.getSign()
			}
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
			async toIndex(index) {
				let that = this
				that.index = index
				if (index == 0) {
					uni.switchTab({
						url: '/pages/index/index'
					})
				} else if (index == 1) {
					uni.switchTab({
						url: '/pages/center/center'
					})
				} else if (index == 2) {
					uni.switchTab({
						url: '/pages/find/find'
					})
				}
			},
			loginClick() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
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
			recordClick() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/integral/record'
				})
			},
			gonggaoClick() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/about/gonggao'
				})
			},
			taskClick() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/integral/task'
				})
			},

			paihangClick() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/list/list?type=ranking&pid=&id=hot'
				})
			},

			modelSave() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
				}
				this.modelShow = false
			},
			collectClick() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/collect/collect'
				})
			},
			orderClick() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/order/order'
				})
			},
			writeClick() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/write/write'
				})
			},
			exitClick() {
				var that = this
				uni.showModal({
					title: '温馨提示',
					content: '确定退出当前登录账户？',
					confirmText: '退出',
					confirmColor: '#fcc600',
					success: async function(res) {
						if (res.confirm) {
							that.$u.vuex('vuex_user', '')
							that.isSign = false
						}
					}
				})
			},
			cacheClick() {
				var that = this
				uni.showModal({
					title: '温馨提示',
					content: '清除缓存后请重新登录！',
					confirmText: '确定',
					confirmColor: '#fcc600',
					success: async function(res) {
						if (res.confirm) {
							that.$u.vuex('vuex_user', '')
							that.isSign = false
						}
					}
				})
			},
			aboutClick() {
				uni.navigateTo({
					url: '/pages/about/about'
				})
			},
			feedClick() {
				if (!this.vuex_user) {
					this.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/pages/feed/feed'
				})
			},
			systemClick() {
				uni.navigateTo({
					url: '/pages/system/system'
				})
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
			// 我的
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
			async getConfig() {
				let that = this
				let config = await uniCloud.callFunction({
					name: 'config_map',
					data: {
						'keys': ['signIntegral', 'inviteIntegral', 'adIntegral', 'writeShow']
					},
				})
				if (config.result.success) {
					that.signIntegral = parseInt(config.result.data[0])
					that.inviteIntegral = parseInt(config.result.data[1])
					that.adIntegral = parseInt(config.result.data[2])
					that.writeShow = config.result.data[3]
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


			// 登录
			getUserInfo() {
				var that = this
				// #ifdef MP-TOUTIAO
				tt.getUserProfile({
					force: true,
					success(res) {
				  console.log(`getUserInfo 调用成功 ${res.userInfo}`);
					},
					fail(err) {
						console.log(err,`getUserInfo 调用失败`);
					},
				});
				// #endif
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
				// #ifdef MP-WEIXIN
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let code = loginRes.code;
						that.wxloginres(code);
					},
				});
				// #endif
				// #ifdef MP-TOUTIAO
				uni.login({
					provider: 'toutiao',
					success: function(loginRes) {
						let code = loginRes.code;
						that.wxloginres(code);
					},
				});
				// #endif

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
					await that.getSign()
					uni.showToast({
						icon: 'none',
						mask: true,
						title: '登录成功',
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
			getLoginShow() {
				let that = this
				that.loginShow = true
			},
		},
		onShareAppMessage(res) {
			return {
				title: '我等风也等你，近听水无声~',
				path: '/pages/index/index?userId=' + this.vuex_user._id
			}
		},
		onShareTimeline(res) {
			return {
				title: '我等风也等你，近听水无声~',
				path: '/pages/index/index'
			}
		}
	}
</script>

<style lang="scss">
	.users {
		position: fixed;
		top: 0px;
		left: 0;
		width: 100%;
		z-index: 999999;
		height: 300rpx;
		background: linear-gradient(90deg, #ffb821 0, #ffcd33 45%, #ffd833);

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


	.user {
		.avatar {
			width: 116rpx;
			height: 116rpx;
			border-radius: 116rpx;
		}

		.name {
			font-size: 20px;
			font-weight: 500;
			color: #fff;
		}

		.addr {
			color: #fff;
		}
	}

	.jifen {
		.tab {
			position: relative;
			background-color: #FFFFFF;
			width: 234rpx;
			margin-right: 10rpx;
			margin-left: 10rpx;

			.title {
				font-weight: 550;
			}

			.icon {
				width: 80rpx;
				height: 80rpx;
				border-radius: 80rpx;
			}
		}

		.tab:nth-child(1) .icon {
			background-image: linear-gradient(to bottom right, #4CCE84, #4BCD85, #49CD84);
			margin-right: 10rpx;
		}

		.tab:nth-child(2) .icon {
			background-image: linear-gradient(to bottom right, #f0d35c, #F0B347, #f0d35c);
			margin-right: 10rpx;
		}

		.tab:nth-child(2) .icons {
			background-image: linear-gradient(left top, #dadada, #dadada);
		}

		.tab:nth-child(3) .icon {
			background-image: linear-gradient(to bottom right, #8c99de, #836AF0, #8c99de);
		}
	}

	.border-box {
		box-shadow: 0 0px 20px rgba(231, 231, 231, 0.6);
		border-radius: 16rpx;
	}

	.menu {
		image {
			width: 38rpx;
			height: 38rpx;
		}
	}

	.border-bottom {
		border-bottom: 1rpx solid #F6F6F6;
	}

	.hover-class {
		transform: scale(0.95);
		transition: all 0.2s;
	}

	.hover-class1 {
		background-color: #F8F8F8;
	}

	.arror-right {
		width: 15rpx;
		height: 15rpx;
		border-top: 3rpx solid #a9acb3;
		border-right: 3rpx solid #a9acb3;
		transform: rotate(45deg);
	}

	.quit {
		color: #fa6868;
	}
</style>
