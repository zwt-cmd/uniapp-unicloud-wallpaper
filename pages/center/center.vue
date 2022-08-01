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
			<view class="" :style="{marginTop: 'calc('+menuButtonInfo.top+'px + 70rpx + 45rpx + 24rpx)'}"></view>
			<!--<view class="ranking u-p-l-40 u-p-t-20 u-p-r-40 u-flex u-row-left">
				<view class="tab u-flex-col u-col-center u-row-center" hover-class="cate-active" hover-stay-time="50" @click="listClick('ranking','','hot')">
					<view class="">热门榜</view>
					<view class="u-font-10 u-p-t-10 eng">Hot download</view>
				</view>
				<view class="tab u-flex-col u-col-center u-row-center" hover-class="cate-active" hover-stay-time="50" @click="listClick('ranking','','zan')">
					<view class="">点赞榜</view>
					<view class="u-font-10 u-p-t-10 eng">Like ranking</view>
				</view>
				<view class="tab u-flex-col u-col-center u-row-center" hover-class="cate-active" hover-stay-time="50" @click="listClick('ranking','','coll')">
					<view class="">收藏榜</view>
					<view class="u-font-10 u-p-t-10 eng">Collection ranking</view>
				</view>
			</view>
			<ad-custom unit-id="adunit-8aba3702eaa4804f"></ad-custom>-->
			<view class="tags u-p-l-40 u-p-t-40 u-p-r-30">
				<view class="u-font-18">热门标签</view>
				<view class="u-flex u-row-left u-flex-wrap u-p-t-30">
					<view class="tag" @click="listClick('tags','',item.name)" v-for="(item, index) in zodiacList"
						:key="index">{{item.name}}</view>
				</view>
			</view>
			<view class="tags u-p-l-40 u-p-t-40 u-p-r-30">
				<ad adpid="1602146097"></ad>
			</view>
			<view class="category u-p-l-30 u-p-t-40 u-p-r-30">
				<view class="u-font-18 u-p-l-10">壁纸分类</view>
				<view class="u-flex u-row-left u-flex-wrap u-p-t-30">
					<!--  -->
					<view class="cate" @click="listClick('category',index,item._id,item)" v-if="index==0 && reviewed"
						v-for="(item, index) in categoryList" :key="index">
						<image v-if="" :src="item.image" mode="aspectFill"></image>
						<view class="texts">{{item.name}}</view>
					</view>
					<view class="cate" @click="listClick('category',index,item._id,item)" v-if="index>0"
						v-for="(item, index) in categoryList" :key="index">
						<image :src="item.image" mode="aspectFill"></image>
						<view class="texts">{{item.name}}</view>
					</view>
				</view>
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
		<foo-bar @toIndex="toIndex" :home="1"></foo-bar>
		<!-- #endif -->
	</view>
</template>

<script>
	let menuButtonInfo = {};
	// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)
	// #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO || MP-QQ
	menuButtonInfo = uni.getMenuButtonBoundingClientRect();
	// #endif

	import fooBar from '@/components/fooBar/fooBar.vue'
	export default {
		components: {
			fooBar
		},
		data() {
			return {
				menuButtonInfo: menuButtonInfo,
				loadShow: true,
				// 分类页数据
				zodiacList: [],
				categoryList: [],
				reviewed: true
			}
		},
		async onLoad() {
			this.reviewed = uni.getStorageSync('boolean')
			// uni.hideTabBar()
			let that = this
			await that.getZodiacList()
			await that.getCateList()
			that.loadShow = false
		},

		methods: {
			async toIndex(index) {
				let that = this
				if (index == 0) {
					uni.switchTab({
						url: '/pages/index/index'
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
			// 搜索
			async search() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			// 分类
			async getZodiacList() {
				let that = this
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_tags",
						order: {
							"name": 'time',
							"type": "asc"
						},
						pageIndex: 1,
						pageSize: 10
					},
				})
				that.zodiacList = list.result.data
			},
			async getCateList() {
				let that = this
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_category",
						pageIndex: 1,
						pageSize: 20,
						order: {
							name: 'sort',
							type: 'desc'
						}
					}
				})
				that.categoryList = list.result.data
			},
			listClick(type, pid, id, item) {
				console.log('item.start', item.start)
				if (item.start !== undefined) {
					console.log('11')
					uni.navigateTo({
						url: '/pages/detail/video?type=' + type + '&pid=' + pid + '&id=' + id
					})
				} else {
					uni.navigateTo({
						url: '/pages/list/list?type=' + type + '&pid=' + pid + '&id=' + id
					})
				}

			},
			onShareAppMessage(res) {
				return {
					title: '精选手机壁纸、动漫二次元壁纸、明星创意潮图、抖音网红壁纸~',
					path: '/pages/center/center?userId=' + this.vuex_user._id
				}
			},
			onShareTimeline(res) {
				return {
					title: '精选手机壁纸、动漫二次元壁纸、明星创意潮图、抖音网红壁纸~',
					path: '/pages/center/center'
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

	.ranking {
		.tab {
			width: 225rpx;
			height: 100rpx;
			border-radius: 12rpx;
			color: #FFFFFF;

			.eng {
				color: #F5F5F5;
			}
		}

		.tab:nth-child(1) {
			background-image: linear-gradient(to bottom right, #8acfaf, #5FBB92, #5FBB92, #8acfaf);
			margin-right: 10rpx;
		}

		.tab:nth-child(2) {
			background-image: linear-gradient(to bottom right, #f0d35c, #F0B347, #F0B347, #f0d35c);
			margin-right: 10rpx;
		}

		.tab:nth-child(3) {
			background-image: linear-gradient(to bottom right, #8c99de, #836AF0, #836AF0, #8c99de);
		}
	}

	.tags {
		.tag {
			font-size: 14px;
			background-color: #F5F6F8;
			color: #909399;
			border-radius: 10rpx;
			line-height: 60rpx;
			padding: 0 20rpx;
			width: auto;
			text-align: center;
			margin-right: 10rpx;
			margin-bottom: 12rpx;
		}

		.tag:nth-child(1) {
			background-color: #d9f2fb;
			color: #1aa9fb;
		}

		.tag:nth-child(2) {
			background-color: #d9fcda;
			color: #3ab14a;
		}

		.tag:nth-child(3) {
			background-color: #fff3d0;
			color: #f67c23;
		}

		.tag:nth-child(4) {
			background-color: #f8cbff;
			color: #a123db;
		}

		.tag:nth-child(5) {
			background-color: #bbf1f2;
			color: #04839d;
		}

		.tag:nth-child(6) {
			background-color: #ffdede;
			color: #e84f4f;
		}

		.tag:nth-child(7) {
			background-color: #d9fcda;
			color: #3ab14a;
		}

		.tag:nth-child(8) {
			background-color: #d9f2fb;
			color: #1aa9fb;
		}

		.tag:nth-child(9) {
			background-color: #ffdede;
			color: #e84f4f;
		}

		.tag:nth-child(10) {
			background-color: #f8cbff;
			color: #a123db;
		}

		.tag:nth-child(11) {
			background-color: #fff3d0;
			color: #f67c23;
		}

		.tag:nth-child(12) {
			background-color: #bbf1f2;
			color: #04839d;
		}

		.tag:nth-child(13) {
			background-color: #bbf1f2;
			color: #3ab14a;
		}

		.tag:nth-child(14) {
			background-color: #ffdede;
			color: #e84f4f;
		}

		.tag:nth-child(15) {
			background-color: #d9fcda;
			color: #3ab14a;
		}

	}

	.category {
		.cate {
			position: relative;
			margin-right: 10rpx;
			margin-left: 10rpx;
			margin-bottom: 20rpx;

			image {
				display: block;
				width: 325rpx;
				height: 160rpx;
				border-radius: 12rpx;
			}

			.texts {
				position: absolute;
				bottom: 20rpx;
				left: 20rpx;
				color: #FFFFFF;
			}
		}
	}

	.cate-active {
		transform: scale(0.95);
		transition: all 0.2s;
	}
</style>
