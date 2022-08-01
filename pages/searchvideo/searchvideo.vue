<template>
	<view>
		<view class="search-container">
			<image class="search" src="/static/icon/search.png"></image>
			<input @confirm="handleConfirm" @input="inputChange" confirmType="search" maxlength="-1"
				placeholder="在此处搜索视频壁纸" :value="keyword">
		</view>
		<scroll-view @scrolltolower="onScrollToLower" @scroll="scroll" :throttle="false" class="scroll-body scrollHG"
			enhanced="true" :lowerThreshold="100" :scroll-top="scrollTop" scroll-y="true" showScrollbar="false">
			<view @tap="preview" class="grid-item" :data-url="item.video_preview_url" v-for="(item, index) in videos"
				:key="index">
				<view class="g">
					<image class="photo" mode="aspectFill" :src="item.thumb_img"></image>
					<view class="info">
						<view class="count-container">
							<image class="iv" src="/static/images/play_num.png"></image>
							<text class="count">{{item.play_num}}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var e,
		t = require("../utils/api.js");
	var i = ''
	export default {
		data() {
			return {
				keyword: "美女",
				videos: [],
				scrollTop: -1,
			};
		},

		components: {},
		props: {},
		onLoad: function(e) {},
		onShareAppMessage: function() {
			return {
				title: "精选高清手机壁纸，动态壁纸，头像",
				path: "pages/dynamic/dynamic"
			};
		},
		onLoad() {
			this.search()
		},
		methods: {
			scroll(e) {
				// 吧滚动条的高度事实给到old.scrollTop
				// this.setData({
				// 	scrollTop: e.detail.scrollTop
				// });
				i = e.detail.scrollTop

			},
			search: function() {
				if (this.keyword) {
					var a = this;
					t.getSearchVideo(this.keyword, e, function(t) {
						console.log(t);
						var o = a.videos;

						if (1 == e) {
							if (0 == t.length) return void uni.showToast({
								title: "暂无结果",
								icon: "error"
							});
							o = [], a.setData({
								videos: o,
								scrollTop: 0
							});
						}

						for (var i = 0; i < t.length; i++) "1" != t[i].is_ads && o.push(t[i]);

						a.setData({
							videos: o,
						});

					}, function(e) {});
				}
			},
			preview: function(e) {
				var t = e.currentTarget.dataset.url;
				uni.navigateTo({
					url: "../../pages/dynamicdetail/dynamicdetail?url=" + encodeURIComponent(t)
				});
			},
			onScrollToLower: function(t) {
				e += 1, this.search();
			},
			inputChange() {
				this.scrollTop = i
				console.log('scrollTop',
					this.scrollTop)
			},
			handleConfirm: function(t) {
				this.setData({
					keyword: t.detail.value,
					scrollTop: 0
				}), this.keyword && (uni.showLoading({
					title: "搜索中..."
				}), e = 1, this.search());
			}
		}
	};
</script>
<style>
	.search-container {
		height: 6%;
		margin: 20rpx;
		background: #f7f8fa;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 5rpx;
		border-radius: 25px;
	}

	.scrollHG {
		height: calc(100vh - 8vh) !important;
	}

	.search {
		width: 30rpx;
		height: 30rpx;
		margin-right: 15rpx;
	}

	input {
		width: 90%;
		font-size: 30rpx;
	}

	.scroll-body {
		height: 92%;
		width: 100%;
	}

	.grid-item {
		margin: 10rpx 0 10rpx 20rpx;
		width: 46%;
		height: 560rpx;
		float: left;
	}

	.g {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.g,
	.photo {
		width: 100%;
		height: 100%;
	}

	.photo {
		border-radius: 8px;
	}

	.info,
	.photo {
		position: absolute;
	}

	.info {
		width: 100%;
		display: flex;
		flex-direction: column;
		bottom: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
	}

	.title {
		height: 40%;
		width: 100%;
		font-size: 28rpx;
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		color: #fff;
		text-shadow: 0 0 2px #000;
	}

	.count-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.count {
		font-size: 28rpx;
		color: #fff;
		text-shadow: 0 0 2px #000;
	}

	.iv {
		width: 40rpx;
		height: 40rpx;
		margin-right: 5rpx;
		box-shadow: 0 0 2px #fff;
		border-radius: 50px;
	}
</style>
