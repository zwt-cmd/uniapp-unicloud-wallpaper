<template name="search">
	<view>
		<view class="search">
			<!-- #ifdef APP-PLUS -->
				<image src="/static/search/voice.svg" mode="aspectFit" @click="startRecognize()" class="voice-icon"></image>
			<!-- #endif -->
			<template v-if="isFocus">
				<input maxlength="20" focus type="text" value="" confirm-type="search" placeholder-style="color:#a6a7a8;font-size:14px;" placeholder="输入关键字搜索" v-model.trim="searchText"/>
			</template>
			<template v-else>
				<input maxlength="20" type="text" value="" confirm-type="search" placeholder-style="color:#a6a7a8;font-size:14px;" placeholder="输入关键字搜索" v-model.trim="searchText"/>
			</template>
			<image src="/static/icon/search.png" mode="aspectFit" @click="searchStart()" class="search-icon"></image>
		</view>
		<view :class="'s-' + theme" v-if="hList.length > 0">
			<view class="header">
				搜索历史
				<image src="/static/search/delete.png" mode="aspectFit" @click="delhistory"></image>
			</view>
			<view class="list">
				<view v-for="(item,index) in hList" :key="index" @click="keywordsClick(item)">{{item}}</view>
			</view>
		</view>
		<view :class="'wanted-' + theme" v-if="showWant">
			<view class="header">猜你想搜</view>
			<view class="list">
				<view v-for="(item,index) in hotList" :key="index" @click="keywordsClick(item)">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"search",
		props:{
			isFocus:{	//是否自动获取焦点
				type: Boolean,
				default: false
			},
			theme:{	//选择块级显示还是圆形显示
				type: String,
				default: 'block'
			},
			showWant:{	//是否展示推荐菜单
				type: Boolean,
				default: false
			},
			hotList: { //推荐列表数据
				type: Array,
				default () {
					return []
				}
			},
			speechEngine: { //语音引擎=>讯飞:iFly,百度:'baidu'
				type: String,
				default: 'baidu'
			}
		},
		data() {
			return {
				searchText:'',								//搜索关键词
				hList:uni.getStorageSync('search_cache')		//历史记录
			};
		},
		methods: {
			searchStart: function() {	//触发搜索
				let _this = this;
				if (_this.searchText == '') {
					uni.showToast({
						title: '请输入关键字',
						icon: 'none',
						duration: 1000
					});
				}else{
					_this.$emit('getSearchText', _this.searchText);
					uni.getStorage({
						key:'search_cache',
						success(res){
							let list = res.data;
							if(list.length > 5){
								for(let item of list){
									if(item == _this.searchText){
										return;
									}
								}
								list.pop();
								list.unshift(_this.searchText);
							}else{
								for(let item of list){
									if(item == _this.searchText){
										return;
									}
								}
								list.unshift(_this.searchText);
							}
							_this.hList = list;
							uni.setStorage({
								key: 'search_cache',
								data: _this.hList
							});
						},
						fail() {
							_this.hList = [];
							_this.hList.push(_this.searchText);
							uni.setStorage({
								key: 'search_cache',
								data: _this.hList
							});
							_this.$emit('getSearchText', _this.searchText);
						}
					})
				}
			},
			keywordsClick (item) {	//关键词搜索与历史搜索
				this.searchText = item;
				this.searchStart();
			},
			delhistory () {		//清空历史记录
				this.hList = [];
				uni.setStorage({
					key: 'search_cache',
					data: []
				});
			},
			startRecognize: function() {	//语音输入
				let _this = this;
				let options = {};
				options.engine = _this.speechEngine;
				options.punctuation = false; // 是否需要标点符号 
				options.timeout = 10 * 1000;
				plus.speech.startRecognize(options, function(s) {
					_this.searchText = _this.searchText + s;
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.search{
		width: 670upx;
		margin: 40upx auto 0;
		position: relative;
		input{
			background-color: #F5F6F8;
			line-height: 68rpx;
			height: 68rpx;
			padding: 0 40rpx;
			font-size: 28upx;
			border-radius: 50upx;
		}
		.voice-icon{
			width: 36upx;
			height: 36upx;
			padding: 18upx 10upx 16upx 30upx;
			position: absolute;
			left: 16upx;
			top: 4upx;
			z-index: 10;
		}
		.search-icon{
			width: 55upx;
			height: 55upx;
			padding-top: 15upx;
			padding-right: 20upx;
			position: absolute;
			right: 0;
			top: -2upx;
			z-index: 10;
		}
	}
	.s-block{
		margin-top: 30upx;
		.header{
			font-size: 32upx;
			padding: 30upx 40rpx;
			position: relative;
			image{
				width: 38rpx;
				height: 38rpx;
				position: absolute;
				right: 40rpx;
				top: 33rpx;
			}
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			padding-left: 20rpx;
			padding-right: 20rpx;
			view{
				color: #909399;
				margin-left: 20rpx;
				margin-bottom: 20rpx;
				font-size: 28rpx;
				box-sizing: border-box;
				text-align: center;
				padding: 10rpx 30rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				background-color: #F5F6F8;
				border-radius: 50rpx;

			}
		}
	}
	.s-circle{
		margin-top: 30upx;
		.header{
			font-size: 32upx;
			padding: 30upx;
			border-bottom: 2upx solid #F9F9F9;
			position: relative;
			image{
				width: 36upx;
				height: 36upx;
				padding: 10upx;
				position: absolute;
				right: 40upx;
				top: 24upx;
			}
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			padding: 0 30upx 20upx;
			view{
				padding: 8upx 30upx;
				margin: 20upx 30upx 0 0;
				font-size: 28upx;
				color: #909399;
				background-color: #F5F6F8;
				box-sizing: border-box;
				text-align: center;
				border-radius: 20upx;
			}
		}
	}
	.wanted-block{
		margin-top: 30upx;
		.header{
			font-size: 32upx;
			padding: 30upx 40upx;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			padding-left: 20rpx;
			padding-right: 20rpx;
			view{
				color: #909399;
				margin-left: 20rpx;
				margin-bottom: 20rpx;
				font-size: 28rpx;
				box-sizing: border-box;
				text-align: center;
				padding: 10rpx 30rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				background-color: #F5F6F8;
				border-radius: 50rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
	.wanted-circle{
		margin-top: 30upx;
		.header{
			font-size: 32upx;
			padding: 30upx;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			padding: 0 30upx 20upx;
			view{
				padding: 8upx 30upx;
				margin: 20upx 30upx 0 0;
				font-size: 28upx;
				color: #909399;
				background-color: #F5F6F8;
				box-sizing: border-box;
				text-align: center;
				border-radius: 20upx;
			}
		}
	}
</style>
