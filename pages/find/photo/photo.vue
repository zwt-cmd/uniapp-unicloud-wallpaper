<template>
	<view>
		<block v-if="item==''">
			<view class="cu-card case">
				<view class="cu-item shadow">
					<view class="image">
						<image mode="aspectFit" :src="src"></image>
					</view>
				</view>
			</view>
			<!-- <view v-for="(item, index) in gglist" :key="index"> -->
				<ad adpid="1277515757"></ad>
			<!-- </view> -->
			<view class="weui-footer_fixed-bottom">
				<view class="padding flex flex-direction">
					<ad unit-id="adunit-806702de804a921d" ad-type="video" ad-theme="white"></ad>
					<button @tap="" class="cu-btn bg-yellow lg" :data-content="item.name">温馨提示：观看广告下载头像</button>
					<button @tap="saveImg" class="cu-btn bg-blue margin-tb-sm lg" :data-src="src">点击下载</button>
					<button @tap="fh" class="cu-btn bg-red margin-tb-sm lg" :data-avatar="item.avatar"
						:data-card="item.card">返回</button>
				</view>
			</view>
		</block>
		<block v-else>
			<view class="cu-card dynamic">
				<view class="cu-item shadow" style="height:260px;">
					<view class="grid flex-sub col-1">
						<view class="bg-img only-img"
							:style="'background-image:url(' + item.card + ');text-align:center'">
							<view class="cu-avatar round lg"
								:style="'background-image:url(' + item.avatar + ');width:100px;height:100px;margin-top:100px'">
							</view>
							<view class="content flex-sub">
								<view>{{item.name}}</view>
							</view>
							<view class="text-content">{{item.memo}}</view>
						</view>
					</view>
				</view>
			</view>
			<ad adpid="1277515757"></ad>
			<view class="weui-footer_fixed-bottom">
				<view class="padding flex flex-direction">
					<ad-custom unit-id="adunit-8aba3702eaa4804f"></ad-custom>
					<button @tap="copy" class="cu-btn bg-blue lg" :data-content="item.name">复制网名</button>
					<button @tap="copy" class="cu-btn bg-green margin-tb-sm lg" :data-content="item.memo">复制签名</button>
					<button @tap="" class="cu-btn bg-yellow lg" :data-content="item.name">温馨提示：观看广告下载套图</button>
					<!-- <button @tap="saveImg" class="cu-btn bg-pink margin-tb-sm lg" :data-avatar="item.avatar"
						:data-card="item.card">下载套图</button> -->

					<ad-rewarded-video adpid="1320507820" :loadnext="true" v-slot:default="{loading, error}"
						@load="onadload" @close="onadclose" @error="onaderror">
						<button  @tap="saveImgs" :data-avatar="item.avatar"
						:data-card="item.card" style="width: 100%;" class="cu-btn bg-pink margin-tb-sm lg" :disabled="loading"
							:loading="loading">下载套图</button>
						<view v-if="error">{{error}}</view>
					</ad-rewarded-video>

					<button @tap="fh" class="cu-btn bg-red margin-tb-sm lg" :data-avatar="item.avatar"
						:data-card="item.card">返回</button>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	var t = null;

	export default {
		data() {
			return {
				src: "",
				item: "",
				gglist: [],
				copeN:{}
			};
		},

		components: {},
		props: {},
		onLoad: function(n) {
			// uni.createRewardedVideoAd && ((t = uni.createRewardedVideoAd({
			// 	adUnitId: "1320507820"
			// })).onError(function(t) {}), t.onClose(function(t) {
			// 	t && t.isEnded;
			// }));
			var o = n.src;

			if (null != o && this.setData({
					src: o
				}), null != n.item) {
				var c = JSON.parse(n.item);
				this.setData({
					item: c
				});
			}

			var that = this;
			uni.request({
				url: 'https://wag.qmniy.cn/api.php',
				data: {},
				header: {
					'content-type': 'application/json' // 默认值

				},

				success(res) {
					console.log(res.data);
					that.setData({
						gglist: res.data
					});
				}

			});
		},
		onReady: function() {},
		onShow: function() {},
		onHide: function() {},
		onUnload: function() {},
		onPullDownRefresh: function() {},
		onReachBottom: function() {},
		onShareAppMessage: function() {
			return "" != this.src ? {
				title: "你觉得这个头像怎么样？",
				path: "/pages/photo/photo?src=" + this.src,
				imageUrl: this.src
			} : "" != this.item ? {
				path: "/pages/photo/photo?item=" + JSON.stringify(this.item)
			} : void 0;
		},
		methods: {
			onadload(e) {
				console.log('广告数据加载成功');
			},
			onadclose(e) {
				const detail = e.detail
				// 用户点击了【关闭广告】按钮
				if (detail && detail.isEnded) {
					// 正常播放结束
					console.log("正常播放结束 " + detail.isEnded);
					this.saveImg(this.copeN)
				} else {
					// 播放中途退出
					console.log("播放中途退出 " + detail.isEnded);
				}
			},
			onaderror(e) {
				// 广告加载失败
				console.log("onaderror: ", e.detail);
			},
			fh: function() {
				uni.navigateBack();
			},
			saveImgs(n){
				console.log(n);
				this.copeN=n
			},
			saveImg: function(n) {
				console.log(n,'下载');
				t && t.show().catch(function() {
					t.load().then(function() {
						return t.show();
					}).catch(function(t) {
						console.log("激励视频 广告显示失败");
					});
				});
				var o = n.currentTarget.dataset.avatar;
				null != o && (o = o.replace("http", "https"));
				var c = n.currentTarget.dataset.card;
				null != c && (c = c.replace("http", "https"));
				var e = n.currentTarget.dataset.src;
				null != e && (e = e.replace("http", "https")), uni.getSetting({
					success: function(t) {
						t.authSetting["scope.writePhotosAlbum"] ? (null != o && null != c && (uni
							.getImageInfo({
								src: o,
								success: function(t) {
									uni.saveImageToPhotosAlbum({
										filePath: t.path,
										success: function(t) {
											uni.showToast({
												title: "下载成功",
												icon: "success",
												image: "",
												duration: 1e3,
												mask: !0,
												success: function(
													t) {},
												fail: function(t) {},
												complete: function(
													t) {}
											});
										},
										fail: function(t) {},
										complete: function(t) {}
									});
								},
								fail: function(t) {},
								complete: function(t) {}
							}), uni.getImageInfo({
								src: c,
								success: function(t) {
									uni.saveImageToPhotosAlbum({
										filePath: t.path,
										success: function(t) {
											uni.showToast({
												title: "下载成功",
												icon: "success",
												image: "",
												duration: 1e3,
												mask: !0,
												success: function(
													t) {},
												fail: function(t) {},
												complete: function(
													t) {}
											});
										},
										fail: function(t) {},
										complete: function(t) {}
									});
								},
								fail: function(t) {},
								complete: function(t) {}
							})), null != e && uni.getImageInfo({
							src: e,
							success: function(t) {
								uni.saveImageToPhotosAlbum({
									filePath: t.path,
									success: function(t) {
										uni.showToast({
											title: "下载成功",
											icon: "success",
											image: "",
											duration: 1e3,
											mask: !0,
											success: function(t) {},
											fail: function(t) {},
											complete: function(t) {}
										});
									},
									fail: function(t) {},
									complete: function(t) {}
								});
							},
							fail: function(t) {},
							complete: function(t) {}
						})) : uni.authorize({
							scope: "scope.writePhotosAlbum",
							success: function() {
								null != o && null != c && (uni.getImageInfo({
									src: o,
									success: function(t) {
										uni.saveImageToPhotosAlbum({
											filePath: t.path,
											success: function(t) {
												uni.showToast({
													title: "下载成功",
													icon: "success",
													image: "",
													duration: 1e3,
													mask: !
														0,
													success: function(
														t
													) {},
													fail: function(
														t
													) {},
													complete: function(
														t
													) {}
												});
											},
											fail: function(t) {},
											complete: function(t) {}
										});
									},
									fail: function(t) {},
									complete: function(t) {}
								}), uni.getImageInfo({
									src: c,
									success: function(t) {
										uni.saveImageToPhotosAlbum({
											filePath: t.path,
											success: function(t) {
												uni.showToast({
													title: "下载成功",
													icon: "success",
													image: "",
													duration: 1e3,
													mask: !
														0,
													success: function(
														t
													) {},
													fail: function(
														t
													) {},
													complete: function(
														t
													) {}
												});
											},
											fail: function(t) {},
											complete: function(t) {}
										});
									},
									fail: function(t) {},
									complete: function(t) {}
								})), null != e && uni.getImageInfo({
									src: e,
									success: function(t) {
										uni.saveImageToPhotosAlbum({
											filePath: t.path,
											success: function(t) {
												uni.showToast({
													title: "下载成功",
													icon: "success",
													image: "",
													duration: 1e3,
													mask: !0,
													success: function(
														t
													) {},
													fail: function(
														t
													) {},
													complete: function(
														t
													) {}
												});
											},
											fail: function(t) {},
											complete: function(t) {}
										});
									},
									fail: function(t) {},
									complete: function(t) {}
								});
							},
							fail: function() {
								uni.showModal({
									title: "未授权",
									content: "请授权",
									showCancel: !0,
									cancelText: "取消",
									cancelColor: "",
									confirmText: "确定",
									confirmColor: "",
									success: function(t) {},
									fail: function(t) {},
									complete: function(t) {}
								});
							}
						});
					}
				});
			},
			copy: function(t) {
				var n = t.currentTarget.dataset.content;
				uni.setClipboardData({
					data: n,
					success: function(t) {
						uni.showToast({
							title: "复制完成",
							icon: "success",
							image: "",
							duration: 1e3,
							mask: !0,
							success: function(t) {},
							fail: function(t) {},
							complete: function(t) {}
						});
					},
					fail: function(t) {},
					complete: function(t) {}
				});
			}
		}
	};
</script>
<style>
	.weui-footer {
		color: #999;
		font-size: 14px;
		text-align: center;
	}

	.weui-footer_fixed-bottom {
		position: fixed;
		bottom: .52em;
		left: 0;
		right: 0;
	}

	.weui-footer__links {
		font-size: 0;
	}

	.weui-footer__link {
		display: inline-block;
		vertical-align: top;
		margin: 0 .62em;
		position: relative;
		font-size: 14px;
		color: #586c94;
	}

	.weui-footer__link:before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		bottom: 0;
		border-left: 1rpx solid #c7c7c7;
		color: #c7c7c7;
		left: -.65em;
		top: .36em;
		bottom: .36em;
	}

	.weui-footer__link:first-child:before {
		display: none;
	}

	.weui-footer__text {
		padding: 0 .34em;
		font-size: 12px;
	}
</style>
