<template>
	<view class="bottom">
		<view class="nav-box">
			<view class="nav-tab" :class="{'nav-tab-active':home===0}" @click="toIndex(0)">
				<u-icon :name="home===0?'/static/tabbar/home_art.png':'/static/tabbar/home.png'" size="42"></u-icon>
				<text>首页</text>
			</view>
			<view class="nav-tab" :class="{'nav-tab-active':home===1}" @click="toIndex(1)">
				<u-icon :name="home===1?'/static/tabbar/center_art.png':'/static/tabbar/center.png'" size="42"></u-icon>
				<text>分类</text>
			</view>
			
			<view class="nav-tab" :class="{'nav-tab-active':home===2}" @click="toIndex(2)">
				<u-icon :name="home===2?'/static/tabbar/find_art.png':'/static/tabbar/find.png'" size="42"></u-icon>
				<text>发现</text>
			</view>
			<view class="nav-tab" :class="{'nav-tab-active':home===3}" @click="toIndex(3)">
				<u-icon :name="home===3?'/static/tabbar/user_art.png':'/static/tabbar/user.png'" size="42"></u-icon>
				<text>我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {

			}
		},
		props: ['home'],
		methods: {
			toIndex(index) {
				this.$emit('toIndex', index)
			}
		}
	}
	
	
	
</script>
<style scoped lang="scss">
	.bottom {
		position: fixed;
		bottom: 3%;
		left: 5%;
		right: 5%;
		width: 90%;
		background: #fff;
		box-shadow: 0 0px 24px rgba(231, 231, 231, 0.65);
		border-radius: 50rpx
	}
	
	.nav-tab {
		width: 100%;
		height: 50px;
		font-size: 12px;
		color: #000;
		font-weight: 400;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.nav-tab-active text {
		color: #000000;
	}

	.nav-box {
		/* position: absolute; */
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		box-sizing: border-box;
	}

	/*苹果x适配 H5APP*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.bottom {}
	}

	/*苹果xs适配 H5APP*/
	@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
		.bottom {}
	}

	/*苹果xr适配 H5APP*/
	@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
		.bottom {}
	}
</style>
