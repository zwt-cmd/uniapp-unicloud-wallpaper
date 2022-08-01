<template>
	<view>
		<u-button :loading="loading" @click="showInterstitialAd">显示广告</u-button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loading: false,
				interstitialAd:null,
			}
		},
		onReady() {
			// 创建广告实例
			this.createInterstitialAd();
		},
		methods: {
			createInterstitialAd() {
				var interstitialAd = this.interstitialAd = uni.createInterstitialAd({
					adpid: '1772865180'
				});
				interstitialAd.onLoad(() => {
					this.loading = false;
					console.log("插屏 广告加载成功");
				});
				interstitialAd.onClose(() => {
					// 用户点击了关闭或返回键(仅Android有返回键)
					console.log("插屏 广告关闭");
				});
				interstitialAd.onError((err) => {
					this.loading = false;
					console.log("插屏 广告加载失败");
				});

				// 广告实例创建成功后默认会执行一次 load，加载广告数据
				// 如果界面有 "显示广告" 按钮，需要先禁用掉，防止用户点击，等待广告数据加载成功后在放开
				this.loading = true;
			},
			showInterstitialAd() {
				// 调用 interstitialAd.show()，如果数据正在加载中不会显示广告，加载成功后才显示
				// 在数据没有加载成功时，需要防止用户频繁点击显示广告
				if (this.loading == true) {
					return
				}
				this.loading = true;
				this.interstitialAd.show().then(() => {
					this.loading = false;
				});
			}
		},
		onUnload() {
			// 页面关闭后销毁实例
			this.interstitialAd.destroy()
		}
	}
</script>
