<template>
	<view class="">
		<view class="" @touchmove.stop.prevent="a = false" @catchtouchmove="a = false" v-show="!loadFlag">
			<view class="" style="">
				<swiper style="height: 100vh;width: 100vw;" :circular="true" @change="swiperChange"
					:current="activeCurrent">
					<swiper-item v-for="(item,index) in detail.images" :key="index">
						<image :src="vuex_compressPicture?item + '?x-oss-process=image/quality,q_80':item"
							@click="cssClick" style="height: 100vh;width: 100vw;display: flex;" mode="aspectFill">
						</image>
					</swiper-item>
				</swiper>
			</view>
			<view class="date-container">
				<text class="time">{{time}}</text>
				<text class="date">{{date}}</text>
			</view>
			<view class="bottom" :class="cssTran ? 'closeCss' : 'openCss'" v-if="!loadFlag">
				<view class="num">{{indexCurrent}} / {{detail.images.length}}</view>
				<view class="nav-box">
					<view class="nav-tab" @click="backClick">
						<u-icon name="/static/icon/back.png" :size="44"></u-icon>
						<text>返回</text>
					</view>
					<view class="nav-tab" @click="collectClick()">
						<u-icon :name="isColl?'/static/icon/coll_art.png':'/static/icon/coll.png'" :size="40"></u-icon>
						<text>{{isColl?'已收藏':'收藏'}}</text>
					</view>
					<ad-interstitial adpid="1772865180" :loadnext="true" v-slot:default="{loading, error}"
						@load="onadload" @close="onadclose" @error="onaderror">
						<view :disabled="loading" :loading="loading" class="nav-taba">
							<u-icon name="/static/icon/duihuan.png" :size="65"></u-icon>
							<!-- @click="winClick(detail._id)" -->
							<!-- <text>下载</text> -->
						</view>
						<view v-if="error">{{error}}</view>
					</ad-interstitial>

					<view class="nav-tab" @click="zanClick(isZan)">
						<u-icon :name="isZan?'/static/icon/zan_art.png':'/static/icon/zan.png'" :size="isZan?48:42">
						</u-icon>
						<text>{{isZan?'已点赞':'点赞'}}</text>
					</view>
					<view class="nav-tab">
						<u-icon name="/static/icon/shares.png" :size="44"></u-icon>
						<text>分享</text>
						<button open-type="share"
							style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;"></button>
					</view>
				</view>
			</view>
			<!-- <view v-if="tipsShow" style="position: absolute;top: 0;left: 0;width: 100vw;height: 100vh;z-index: 11;" @click="tipsClick">
				<image src="../../static/tips.png" style="width: 100%;height: 100%;display: flex;" mode="aspectFill"></image>
			</view> -->

			<models v-if="loginShow" title="为了更好体验，快去授权登录吧" btnText="授权登录" @getUserInfo="getUserInfo"
				@close="loginShow = false"></models>

			<models v-if="downShow" :title="downTitle" :btnText="'看广告领 '+adIntegral+' 积分'" :authorize="false"
				@close="downShow = false" @save="adClick"></models>

			<models v-if="signShow" :authorize="false" :title="signTitle" btnText="知道了" closeText=" "
				@save="signShow = false"></models>

			<models v-show="adShow" :authorize="false" :ad="true" title="已成功保存到相册，别忘了分享给朋友哦！" btnText="分享给好友"
				closeText="暂时不用" @save="adShow = false" @close="adShow = false"></models>
		</view>
		<view class="loading_page" v-show="loadFlag">
			<image src="/static/loading/loading.gif"></image>
		</view>
	</view>
</template>

<script>
	let videoAd = null;
	var w = uni.getSystemInfoSync().windowWidth;
	var h = uni.getSystemInfoSync().windowHeight;
	import models from '@/components/model/model.vue'
	export default {
		components: {
			models
		},
		data() {
			return {
				loadFlag: true,
				loginShow: false,
				detail: {},
				time: '',
				date: '',

				adIntegral: 0,

				downShow: false,
				downIntegral: 0,
				downTitle: '',
				downBtn: '',
				adShow: false,

				isColl: false,
				isZan: false,
				zanStatus: true,
				collStatus: true,

				cssTran: false,
				indexCurrent: 1,
				activeCurrent: 0,

				signShow: false,
				signTitle: '',
				w: w,
				h: h,
			}
		},
		async onLoad({
			id,
			index,
			images
		}) {
			var that = this
			await that.getDate()
			that.indexCurrent = parseInt(index) + 1
			that.activeCurrent = parseInt(index)
			if (images) {
				that.detail.images = JSON.parse(images)
				that.detail._id = id
				await that.addView(id)
			} else {
				await that.getDetail(id)
			}

			await that.getConfig()
			if (that.vuex_user) {
				that.getIsZan()
				that.getIsColl()
				that.getUser()
			}
			// that.adLoad()
			that.loadFlag = false
		},
		methods: {
			onadload(e) {
				console.log('广告数据加载成功');
			},
			onadclose(e) {
				this.winClick()
				console.log("onadclose", e);
			},
			onaderror(e) {
				this.winClick()
				// 广告加载失败
				console.log("onaderror: ", e.detail);
			},
			async getDate() {
				var t = new Date(),
					e = (t.getFullYear(), t.getMonth() + 1),
					o = t.getDate(),
					a = t.getHours(),
					n = t.getMinutes(),
					i = (t.getSeconds(), e + "月" + o + "日"),
					s = [a, n].map(this.formatNumber).join(":");
				console.log(i), console.log(s), this.setData({
					date: i,
					time: s
				});
			},
			formatNumber: function(t) {
				return (t = t.toString())[1] ? t : "0" + t;
			},
			async getDetail(id) {
				var that = this
				let detail = await uniCloud.callFunction({
					name: 'query_map',
					data: {
						dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
						id: id
					},
				})
				that.detail = detail.result
				if (!that.detail) {
					uni.showToast({
						title: '壁纸不存在',
						icon: 'none',
						duration: 1500
					});
					setTimeout(function() {
						uni.navigateBack()
					}, 1500)
					return
				}
				that.addView(id)
			},
			async getConfig() {
				let that = this
				let config = await uniCloud.callFunction({
					name: 'config_map',
					data: {
						'keys': ['downIntegral', 'adIntegral']
					},
				})
				if (config.result.success) {
					that.downIntegral = parseInt(config.result.data[0])
					that.adIntegral = parseInt(config.result.data[1])
				}
			},
			async getIsZan() {
				var that = this
				let count = await uniCloud.callFunction({
					name: 'query_count',
					data: {
						dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
						filter: {
							"_id": that.detail._id,
							"zan.user_id": that.vuex_user._id
						}
					},
				})
				that.zanStatus = false
				if (count.result > 0) that.isZan = true
			},
			async getIsColl() {
				var that = this
				let count = await uniCloud.callFunction({
					name: 'query_count',
					data: {
						dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
						filter: {
							"_id": that.detail._id,
							"coll.user_id": that.vuex_user._id
						}
					},
				})
				that.collStatus = false
				if (count.result > 0) that.isColl = true
			},
			async winClick() {
				var that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}

				if (that.downIntegral > 0) {
					var integral = that.vuex_user.integral
					if (integral < that.downIntegral) {
						that.downShow = true
						that.downTitle = "<p style='font-weight: 550;font-size: 16px;'>下载需要 " + that.downIntegral +
							" 积分</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>" + integral +
							"</span>积分，无法下载当前作品，快去赚积分吧~</p>"
						return
					}

					uni.showLoading({
						mask: true,
						title: '保存中...'
					})

					let query = await uniCloud.callFunction({
						name: 'place_order',
						data: {
							userId: that.vuex_user._id,
							coverId: that.detail._id,
							integral: that.downIntegral,
							index: that.indexCurrent - 1
						},
					})
					console.log('query', query)
					if (query.result.success) {
						// 下载成功 请求用户积分
						that.getUser()
						// 获取图片信息
						var url = that.detail.images[that.indexCurrent - 1]
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
															success(
																settingdata) {
																if (settingdata
																	.authSetting[
																		'scope.writePhotosAlbum'
																	]) {
																	//用户打开了保存图片授权开关
																	uni.saveImageToPhotosAlbum({
																		filePath: benUrl,
																		success: function(
																			data
																		) {
																			uni.hideLoading()
																			that.adShow =
																				true
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
					} else {
						uni.showToast({
							mask: true,
							icon: 'none',
							title: query.result.msg,
							duration: 1000
						})
					}
				} else {
					// 获取图片信息
					var url = that.detail.images[that.indexCurrent - 1]
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
															if (settingdata
																.authSetting[
																	'scope.writePhotosAlbum'
																]) {
																//用户打开了保存图片授权开关
																uni.saveImageToPhotosAlbum({
																	filePath: benUrl,
																	success: function(
																		data
																	) {
																		uni.hideLoading()
																		that.adShow =
																			true
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
			backClick() {
				uni.navigateBack()
			},
			async collectClick() {
				var that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}

				if (that.collStatus) {
					uni.showToast({
						icon: 'none',
						title: '太快啦，歇一会再试试',
						mask: true,
						duration: 1000
					})
					return
				}
				that.collStatus = true
				// 先显示  再请求 视觉上更适应
				that.isColl = !that.isColl

				let coll = await uniCloud.callFunction({
					name: 'zan_and_coll',
					data: {
						dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
						type: 'coll',
						userId: that.vuex_user._id,
						filter: {
							"_id": that.detail._id,
							"coll.user_id": that.vuex_user._id
						}
					},
				})
				if (!coll.result.success) {
					// 更新失败
					uni.showToast({
						mask: true,
						icon: 'none',
						title: coll.result.msg,
						duration: 2000
					})
					that.isColl = !that.isColl
				}
				setTimeout(function() {
					that.collStatus = false
				}, 5000)
			},
			async zanClick(zan) {
				var that = this
				if (!that.vuex_user) {
					that.loginShow = true
					return
				}

				var timestamp = new Date().getTime()
				if (zan) {
					uni.showToast({
						icon: 'none',
						title: '你已经点过赞啦~',
						mask: true,
						duration: 1000
					})
				} else {
					if (that.zanStatus) {
						uni.showToast({
							icon: 'none',
							title: '太快啦，歇一会再试试',
							mask: true,
							duration: 1000
						})
						return
					}
					that.zanStatus = true
					// 先显示  再请求 视觉上更适应
					that.isZan = !that.isZan

					let zan = await uniCloud.callFunction({
						name: 'zan_and_coll',
						data: {
							dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
							type: 'zan',
							userId: that.vuex_user._id,
							filter: {
								"_id": that.detail._id,
								"zan.user_id": that.vuex_user._id
							}
						},
					})
					if (!zan.result.success) {
						// 更新失败
						uni.showToast({
							mask: true,
							icon: 'none',
							title: zan.result.msg,
							duration: 2000
						})
						that.isZan = !that.isZan
					}
				}
				setTimeout(function() {
					that.zanStatus = false
				}, 5000)
			},
			cssClick() {
				this.cssTran = !this.cssTran
			},
			swiperChange(e) {
				this.indexCurrent = e.detail.current + 1
			},
			async addView(id) {
				let result = await uniCloud.callFunction({
					name: 'view_raise',
					data: {
						coverId: id
					}
				})
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
						console.log('videoAd onError', res);
					});
					// 监听关闭
					videoAd.onClose(status => {
						that.downShow = false
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
					// 登陆成功  获取收藏点赞
					that.getIsZan()
					that.getIsColl()
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
		},
		onShareAppMessage(res) {
			var that = this
			setTimeout(function() {
				that.adShow = false
			}, 2000)
			return {
				title: '送你一张超级好看的壁纸~',
				imageUrl: that.detail.images[that.indexCurrent - 1],
				path: '/pages/index/index?userId=' + that.vuex_user._id + '&detailId=' + that.detail._id + '&index=' + (
					that.indexCurrent - 1)
			}
		},
		onShareTimeline(res) {
			return {

				title: '表，我的聊天背景都是在这找的~',
				path: '/pages/index/index',
				imageUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ed8ec0e-de90-4ed2-8830-c36512ae8fc0/793331ab-9a2a-4236-a7d4-1d19bdff6ae8.png",
			}
		}
	}
</script>
<style lang="scss">
	.bottom {
		position: fixed;
		left: 4%;
		right: 0;
		width: 92%;
		height: 52px;
		box-shadow: 0 0px 8px rgba(0, 0, 0, 0.06);
		background: rgba(0, 0, 0, 0.94);
		border-radius: 49px;
		z-index: 10;
		opacity: 0.8;

		.num {
			position: absolute;
			top: -20rpx;
			top: -70rpx;
			left: 44%;
			background: rgba(0, 0, 0, 0.6);
			color: #FFF;
			padding: 4rpx 20rpx;
			font-size: 12px;
			border-radius: 36px;
		}
	}

	.nav-tab {
		position: relative;
		width: 100%;
		height: 52px;
		font-size: 12px;
		color: #D8D8D8;
		font-weight: 400;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	
	.nav-taba {
		position: relative;
		width: 100%;
		height: 52px;
		font-size: 12px;
		color: #D8D8D8;
		font-weight: 400;
		padding: 0 10rpx;
		
		display: flex;
		flex-direction: row;
		align-items: center;
		// border: solid 1px red;
	}

	.nav-box {
		/* position: absolute; */
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		box-sizing: border-box;
	}

	.openCss {
		animation-name: openLinear;
		animation-duration: 0.8s;
		animation-iteration-count: 1;
		bottom: 3%;
	}

	@keyframes openLinear {
		0% {
			transform: translateY(92px);
		}

		100% {
			transform: translateY(0px);
		}
	}

	.closeCss {
		animation-name: closeLinear;
		animation-duration: 0.8s;
		animation-iteration-count: 1;
		bottom: -52px;
	}

	@keyframes closeLinear {
		0% {
			transform: translateY(-92px);
		}

		100% {
			transform: translateY(0px);
		}
	}

	.u-indicator-item-number {
		padding: 6rpx 16rpx;
		line-height: 1;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 100rpx;
		font-size: 26rpx;
		color: rgba(255, 255, 255, 0.8);
	}

	.date-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 150rpx;
		opacity: .9;
	}

	.time {
		font-size: 120rpx;
		color: #fff;
	}

	.date {
		font-size: 40rpx;
		color: #fff;
	}
</style>
