<template>
	<view class="">
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
			<view class="" :style="{marginTop: 'calc('+menuButtonInfo.top+'px + 8% + 45rpx + 24rpx)'}"></view>
			<view class="u-p-t-20 banner">
				<u-swiper :effect3d="true" height="280" bg-color="#FFFFFF" name="image" border-radius="35"
					effect3d-previous-margin="0" :list="bannerList" @click="bannerClick"></u-swiper>
			</view>
			<!-- v-if="hotList.length>3" -->
			<ad adpid="1908798146"></ad>
			<view>
				<view class="u-p-t-40">
					<scroll-view scroll-x style="" :scroll-into-view="rolldistance" :scroll-with-animation="true">
						<view class="m-nav">
							<view class="" id="akun1" style="padding: 0 16rpx;"></view>
							<view class="scroll-view-item dhs" :id="'akun'+(index+1)"
								:class="cateStatic==item.type?'tag-active':''"
								@click="cateClick(item.type,item.more,'akun'+(index+2))"
								v-for="(item,index) in indexList" :key="index">
								<navigator v-if="index==0 || index==1" class="item">
									<view class="image-wrap">
										<image mode="widthFix" :src="item.image"></image>
									</view>
									<view>
										{{item.name}}
									</view>
								</navigator>
								<navigator v-if="index>1" class="item" :url="item.url">
									<view class="image-wrap">
										<image mode="widthFix" :src="item.image"></image>
									</view>
									<view>
										{{item.name}}
									</view>
								</navigator>
							</view>
						</view>
					</scroll-view>
					<scroll-view scroll-x style="" :scroll-into-view="rolldistance" :scroll-with-animation="true">
						<view class="m-nav">
							<view class="" id="akun1" style="padding: 0 15rpx;"></view>
							<view class="scroll-view-item dhs" :id="'akun'+(index+1)"
								:class="cateStatic==item.type?'tag-active':''"
								@click="cateClick(item.type,item.more,'akun'+(index+2))"
								v-for="(item,index) in indesList" :key="index">
								<navigator class="item" :url="item.url">
									<view class="image-wrap">
										<image mode="widthFix" :src="item.image"></image>
									</view>
									<view>
										{{item.name}}
									</view>
								</navigator>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="u-p-t-40">
				<view class="u-p-l-40 u-p-r-40">
					<u-section title="热门推荐" :show-line="false" :bold="false" :font-size="36" sub-title="更多"
						@click="listClick('category','',-2)"></u-section>
				</view>
				<scroll-view scroll-x class="u-p-t-30" style="height: 380rpx;">
					<view class="u-flex u-row-left u-p-l-40 u-p-r-40">
						<!-- <block> -->
						<view class="tab" v-for="(item, index) in hotList" :key="index"
							@click="detail(item._id, 0, item.images)">
							<image :src="item.image+'?x-oss-process=image/resize,w_200/quality,q_100'"
								style="width: 215rpx;height: 350rpx;" mode="aspectFill"></image>
							<!-- <view class="array">{{item.images.length}}</view> -->
						</view>
						<!-- </block> -->
						<view class="" style="width: 40rpx;">ㅤ</view>
					</view>
				</scroll-view>
			</view>
			<view class=" u-p-l-40 u-p-t-40 u-p-r-30" >
				<ad adpid="1277515757"></ad>
			</view>
			<view class="u-p-t-30">

				<view class="u-p-l-40 u-p-r-40 u-p-t-20 u-adpidp-b-20">
					<u-section title="官方推荐" :show-line="false" :bold="false" :font-size="36" sub-title="更多"
						@click="listClick('category','',-1)"></u-section>
				</view>
				<scroll-view scroll-x style="height: 80rpx;" :scroll-into-view="rolldistance"
					:scroll-with-animation="true">
					<view class="query u-m-t-10 u-m-b-10 u-m-r-30 u-flex u-row-left">
						<view class="" id="akun1" style="padding: 0 18rpx;"></view>
						<view class="scroll-view-item tags" :id="'akun'+(index+1)"
							:class="cateStatic==item.type?'tag-active':''"
							@click="cateClick(item.type,item.more,'akun'+(index+2))" v-for="(item,index) in cateList"
							:key="index">
							{{item.name}}
						</view>
						<view class="" style="width: 40rpx;">ㅤ</view>
					</view>
				</scroll-view>
				<view class="u-flex u-row-left u-flex-wrap u-p-l-40 u-p-t-15">
					<block v-for="(item, index) in coverList" :key="index">
						<block v-for="(item_, index_) in item.images" :key="index_">
							<!-- #ifdef MP-WEIXIN -->
							<!-- <view class="tab u-flex u-row-center u-col-center" v-show="adFlag" v-if="index != 0 && index%2 === 0 && index_ === 0">
								<ad-custom unit-id="adunit-eaa3677a75ab13a7" @load="adLoad" @error="adError" @close="adClose"></ad-custom>
							</view> -->
							<!-- #endif -->
							<!-- #ifdef MP-QQ -->
							<!-- <view class="tab u-flex u-row-center u-col-center" v-show="adFlag" v-if="index != 0 && index%2 === 0 && index_ === 0">
								<ad unit-id="8597b7537f8d1f46d49448430eb341bd" block-orientation="vertical" block-size="2" @load="adLoad" @error="adError" @close="adClose"></ad>
							</view> -->
							<!-- #endif -->
							<view class="tab" @click="detail(item._id, index_, item.images)">
								<image :src="item_+'?x-oss-process=image/resize,w_200/quality,q_80'" lazy-load
									style="width: 215rpx;height: 350rpx;" mode="aspectFill"></image>
								<!-- <view class="array">{{item.images.length}}</view> -->
							</view>
						</block>
					</block>
				</view>
			</view>

			<u-loadmore :status="loadStatus" :font-size="24" :margin-top="30" :margin-bottom="20" color="#B8B8B8" />
			<view class="" style="height: 180rpx;"></view>
		</view>
		<view class="loading_page" v-show="loadShow">
			<image src="/static/loading/loading.gif"></image>
		</view>
		<view @click="backTop" class="back backTop u-flex u-flex-col u-row-center u-col-center"
			:class="backShow?'backTop_show':'backTop_hide'">
			<image src="/static/backtop.png" style="width: 36rpx;height: 36rpx;"></image>
		</view>
		<view @click="search" class="back backSearch u-flex u-flex-col u-row-center u-col-center"
			:class="backShow?'backTop_show':'backTop_hide'">
			<image src="/static/search.png" style="width: 30rpx;height: 30rpx;"></image>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<foo-bar @toIndex="toIndex" :home="0"></foo-bar>
		<!-- #endif -->

	</view>
</template>

<script>
	// // #ifdef MP-WEIXIN
	// // 在页面中定义插屏广告
	// let interstitialAd = null
	// // 在页面onLoad回调事件中创建插屏广告实例
	// if (uni.createInterstitialAd) {
	// 	interstitialAd = uni.createInterstitialAd({
	// 		adpid: '1300872376'
	// 	})
	// 	interstitialAd.onLoad((res) => {
	// 		console.log(res, '显示');
	// 	})
	// 	interstitialAd.onError((err) => {
	// 		console.log(err, '不显示');
	// 	})
	// 	interstitialAd.onClose((e) => {
	// 		console.log(e, 'onClose');
	// 	})
	// }

	// // 在适合的场景显示插屏广告
	// if (interstitialAd) {
	// 	interstitialAd.show().catch((err) => {
	// 		console.error(err, '触发show')
	// 	})
	// }
	// //#endif

	// // #ifdef MP-TOUTIAO
	// // 在页面中定义插屏广告
	// let interstitialAd = null

	// // 在页面onLoad回调事件中创建插屏广告实例
	// if (tt.createInterstitialAd) { 
	// 	interstitialAd = uni.createInterstitialAd({
	// 		adUnitId: 'adunit-5535dcfab75cc691'
	// 	})
	// }
	// // 在适合的场景显示插屏广告
	// if (interstitialAd) {
	// 	interstitialAd.show().catch((err) => {
	// 		console.error(err)
	// 	})
	// }
	// //#endif

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
				// 加载
				loadShow: true,
				scrollTop: 0,

				// 首页数据
				bannerList: [],
				indexList: [],
				indesList: [],
				hotList: [],
				coverList: [],
				cateStatic: 'new',
				cateList: [{
						type: 'new',
						name: '最新',
						more: '',
					},
					{
						type: 'hot',
						name: '精选',
						more: '',

					},
					{
						type: '小姐姐',
						name: '小姐姐',
						more: 'tags',

					},
					{
						type: '抖音热图',
						name: '抖音热图',
						more: 'category',
					}
				],
				// 下拉
				pageIndex: 0,
				loadStatus: 'loadmore',
				// 滚动的位置
				rolldistance: '',

				adFlag: true,
				backShow: false,
			}
		},
		async onLoad({
			userId,
			detailId,
			index
		}) {
			// uni.hideTabBar()
			if (userId) uni.setStorageSync('userId', userId)
			if (detailId) uni.navigateTo({
				url: '/pages/detail/detail?id=' + detailId + '&index=' + index
			})
			let that = this
			await that.getBannerList()
			await that.getindexList()
			await that.getindesList()
			await that.getHotList()
			await that.getList(that.cateStatic)

			// #ifdef MP-WEIXIN
			// uni.preloadAd([{
			// 	  unitId: 'adunit-eaa3677a75ab13a7',
			// 	  type: 'custom'
			// 	},{
			//       unitId: 'adunit-1c046e0d44c59f46',
			//       type: 'banner'
			//     },
			//     {
			//       unitId: 'adunit-498ed7897ec58c23',
			//       type: 'video'
			//     }
			// ])
			// #endif

			// 获取分类位置
			that.$nextTick(function() {
				const query = uni.createSelectorQuery().in(that);
				query.select(".query").boundingClientRect(res => {
					if (res.top) {
						that.homeTop = res.top
					}
				}).exec()
			})

			that.loadShow = false
		},
		methods: {

			onadload(e) {
				console.log('广告数据加载成功');
			},
			onadclose(e) {
				console.log("onadclose", e);
			},
			onaderror(e) {
				// 广告加载失败
				console.log("onaderror: ", e.detail);
			},
			async toIndex(index) {
				let that = this
				that.index = index
				if (index == 1) {
					uni.switchTab({
						url: '/pages/center/center'
					})
				} else if (index == 2) {
					uni.switchTab({
						url: '/pages/find/find'
					})
				} else if (index == 3) {
					uni.switchTab({
						url: '/pages/user/user'
					})
				}
			},
			// 首页
			async getBannerList() {
				let that = this;
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_banner",
						pageIndex: 1,
						pageSize: 10,
						order: {
							name: 'sort',
							type: 'desc'
						}
					}
				})
				that.bannerList = list.result.data
			},
			async getindexList() {
				let that = this;
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_index",
						pageIndex: 1,
						pageSize: 4,
						order: {
							name: 'sort',
							type: 'desc'
						}
					}
				})
				that.indexList = list.result.data
			},
			async getindesList() {
				let that = this;
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_index1",
						pageIndex: 1,
						pageSize: 4,
						order: {
							name: 'sort',
							type: 'desc'
						}
					}
				})
				that.indesList = list.result.data
			},
			async getHotList() {
				let that = this;
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_cover",
						filter: {
							"status": 1
						},
						order: {
							name: 'view',
							type: 'desc'
						},
						pageIndex: 1,
						pageSize: 20
					},
				})
				that.hotList = list.result.data
				if (that.hotList.length <= 3) {
					uni.setStorageSync('boolean', false)
				} else {
					uni.setStorageSync('boolean', true)
				}

			},
			cateClick(e, f, t) {
				var that = this
				if (e != that.cateStatic) {
					if (t) that.rolldistance = t
					that.cateStatic = e
					that.getList(e, f, 1)
				}
			},
			async getList(type, more, on) {
				let that = this;

				var newList = that.coverList
				// 点击切换菜单 回复初始状态
				if (on == 1) {
					uni.showLoading({
						mask: true,
						title: '正在拼命加载中...'
					})
					newList = []
					that.pageIndex = 0
				}

				that.pageIndex = that.pageIndex + 1
				that.loadStatus = 'loading'

				let list
				if (more) {
					if (more === 'tags') {
						list = await uniCloud.callFunction({
							name: 'query_list',
							data: {
								dbName: "wx_cover",
								tags: type,
								pageIndex: that.pageIndex,
								pageSize: 5
							},
						})
					} else if (more === 'category') {
						list = await uniCloud.callFunction({
							name: 'query_list',
							data: {
								dbName: "wx_cover",
								filter: {
									"status": 1,
									"category_name": type
								},
								order: {
									"name": "time",
									"type": "desc",
								},
								pageIndex: that.pageIndex,
								pageSize: 5
							},
						})
					}
				} else {
					var filter = {
							"status": 1
						},
						order = {}
					if (type == 'new') order = {
						"name": "time",
						"type": "desc"
					}
					else if (type == 'hot') order = {
						"name": "view",
						"type": "desc"
					}
					list = await uniCloud.callFunction({
						name: 'query_list',
						data: {
							dbName: "wx_cover",
							filter: filter,
							order: order,
							pageIndex: that.pageIndex,
							pageSize: 5
						},
					})
				}

				uni.hideLoading()

				if (list.result.hasMore) that.loadStatus = 'loadmore'
				else that.loadStatus = 'nomore'

				that.coverList = newList.concat(list.result.data)
			},
			search() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			backTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			bannerClick(index) {
				var bannerType = this.bannerList[index].type
				if (bannerType === 1) {
					uni.navigateToMiniProgram({
						appId: this.bannerList[index].appid,
						path: this.bannerList[index].path
					})
				}
				if (bannerType === 0) {
					uni.navigateTo({
						url: this.bannerList[index].url
					})
				}
			},
			detail(id, index, images) {
				var str = JSON.stringify(images)
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + id + '&index=' + index + '&images=' + str
				})
			},
			listClick(type, pid, id) {
				uni.navigateTo({
					url: '/pages/list/list?type=' + type + '&pid=' + pid + '&id=' + id
				})
			},
			adLoad() {
				this.adFlag = true
			},
			adError(err) {
				this.adFlag = false
			},
			adClose() {
				this.adFlag = false
			}
		},
		async onReachBottom() {
			let that = this;
			if (that.loadStatus == 'nomore') return
			await that.getList(that.cateStatic)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
			if (e.scrollTop > 1000) {
				this.backShow = true
			} else {
				this.backShow = false
			}
		},
		onShareAppMessage(res) {
			return {
				title: '精选手机壁纸、动漫二次元壁纸、明星创意潮图、抖音网红壁纸~',
				path: '/pages/index/index?userId=' + this.vuex_user._id,
				imageUrl: "https://s1.ax1x.com/2022/03/21/qm0tHg.png"
			}
		},
		onShareTimeline(res) {
			return {
				title: '精选手机壁纸、动漫二次元壁纸、明星创意潮图、抖音网红壁纸~',
				path: '/pages/index/index',
				imageUrl: "https://s1.ax1x.com/2022/03/21/qm0tHg.png"
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

	.gridSm {
		margin: 0 -5px;
		width: auto;
	}

	.g2 {
		width: 50%;
		padding: 0 5px;
		margin-bottom: 10px;
	}

	.tab {
		position: relative;
		width: 215rpx;
		height: 350rpx;
		border-radius: 16rpx;
		margin-right: 15rpx;
		margin-bottom: 15rpx;

		image {
			border-radius: 16rpx;
		}

		.array {
			position: absolute;
			top: 18rpx;
			right: 0rpx;
			color: #FFFFFF;
			background-color: rgba(0, 0, 0, 0.4);
			padding: 0rpx 12rpx 0 16rpx;
			border-radius: 20rpx 0 0 20rpx;
			font-size: 12px;
		}
	}

	.tags {
		font-size: 14px;
		background-color: #F5F6F8;
		color: #909399;
		border-radius: 40rpx;
		line-height: 60rpx;
		padding: 0 40rpx;
		margin-right: 20rpx;
		white-space: nowrap;
	}

	.banner {
		width: 100%;
		padding: 0 40rpx;
	}

	.tag-active {
		background-image: linear-gradient(100deg, #fcfc44, #f8c93c);
		color: #333333;
		box-shadow: 0px 0px 10px #fff8ab;
		animation: tiaobig 0.8s ease-in-out alternate infinite;
		animation-iteration-count: 1;
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

	.back {
		position: fixed;
		right: -80rpx;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50rpx;
		padding: 8rpx;
		box-shadow: 0 0px 16px rgba(0, 0, 0, 0.2);
		transition-property: right;
		transition-duration: 0.6s;

		image {
			display: block;
		}

		.text {
			font-size: 12px;
		}
	}

	.backSearch {
		bottom: 300rpx;
		background-color: #21222385;

		.text {
			color: #FFFFFF;
		}
	}

	.backTop {
		bottom: 200rpx;
		background-color: #f4cc47;

		.text {
			color: #fff;
		}
	}

	.backTop_show {
		right: 20rpx !important;
	}

	.backTop_hide {
		right: -80rpx !important;
	}

	.m-nav {
		margin-bottom: 0rpx;
		padding: 0 20rpx;
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 25rpx;
	}

	.m-nav .item {
		padding: 15rpx 0;
		flex: 1;
	}

	.m-nav .image-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;

	}

	.dhs {
		font-size: 12px;
		color: #000000;
		border-radius: 10rpx;
		line-height: 60rpx;
		padding: 0 40rpx;
		margin-right: 20rpx;
		white-space: nowrap;
	}

	.m-nav .item image {
		width: 100rpx;
		height: 100rpx;
		margin: 0 auto 30rpx;
	}
</style>
