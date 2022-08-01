<template>
	<view  v-if="vuex_user.system == 1">
		<view class="u-p-l-20 u-p-r-20">
			<view class="tab u-m-t-20" v-for="(item, index) in configList" :key="index" v-if="item.key != 'access_token'">
				<view class="u-p-l-30 u-p-r-30 u-p-t-30 u-p-b-30 border-bottom u-flex u-row-between">
					<view class="title">{{item.name}}</view>
					<view class="yes">{{item.key}}</view>
				</view>
				<view class="u-font-12 u-tips-color u-p-l-30 u-p-r-30 u-p-t-15 u-p-b-15 u-flex u-row-between">
					<view class="" style="width: 80%;">当前：{{item.val}}</view>
					<view class="">
						<view class="" v-if="item.val === true || item.val === false">
							<u-switch v-model="item.val" size="28" active-color="#f1c929" inactive-color="#F8F8F8" @change="switchChange(item._id, index)"></u-switch>
						</view>
						<view class="u-flex u-row-right" v-else @click="sheetClick(item._id, index)">
							<view class="u-p-r-10">操作</view>
							<view class="arror-right"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="noData"
		class="u-flex u-flex-col u-col-center"
		style="width: 100vw;height: 50vh;padding-top: 200rpx;">
			<view class="">
				<image style="width: 300rpx;height: 300rpx;" src="/static/nodata.png"></image>
			</view>
			<view class="u-tips-color u-font-12 u-p-t-30">
				没有数据哦~
			</view>
		</view>
		
		<view class="add" @click="addClick">
			<image src="/static/icon/add.png"></image>
		</view>

		<view class="safe-area-inset-bottom">
			<view class="" style="height: 10px;"></view>
		</view>
		
		<u-modal v-model="editShow" title="配置" :show-cancel-button="true" confirm-text="保存" confirm-color="#fcc600" content="content" :async-close="true"  @confirm="editChange" negative-top="280">
			<view class="u-p-40">
				<view class="">
					<u-input v-model="config.name" :border="true" border-color="#F7F7F7" :clearable="false" :height="80" disabled placeholder="填写配置的说明"/>
				</view>
				<!-- <view class="u-p-t-15">
					<u-input v-model="config.key" :border="true" border-color="#F7F7F7" :clearable="false" :height="80" disabled placeholder="填写配置的键"/>
				</view> -->
				<view class="u-p-t-15">
					<u-input v-model="config.val" :border="true" border-color="#F7F7F7" :clearable="false" :height="80" placeholder="填写配置的值"/>
				</view>
			</view>
		</u-modal>
		
		<u-action-sheet :list="sheetList" :safe-area-inset-bottom="true" v-model="sheetShow" @click="sheetChange"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sheetList: [{
					text: '编辑',
				}, {
					text: '删除' 
				}],
				configId: '-1',
				sheetShow: false,
				configList: [],
				// 无数据
				noData: false,
				// 分页
				editShow: false,
				config: {
					name: '',
					key: '',
					val: ''
				}
			}
		},
		onLoad() {
			this.getConfigList()
		},
		methods: {
			async getConfigList(){
				var that = this
				
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_config",
						pageIndex: 1,
						pageSize: 100
					},
				})
				
				if(list.result.hasMore) that.loadStatus = 'loadmore'
				else that.loadStatus = 'nomore'
				
				that.configList = list.result.data
				
				if(that.configList.length == 0) that.noData = true
				else that.noData = false
			},
			sheetClick (id, index){
				this.configId = id
				this.config.name = this.configList[index].name
				this.config.key = this.configList[index].key
				this.config.val = this.configList[index].val
				this.sheetShow = true
			},
			addClick(){
				this.config = {
					name: '',
					key: '',
					val: ''
				}
				this.configId = '-1'
				this.editShow = true
			},
			async sheetChange(index){
				var that = this
				
				if(that.sheetList[index].text === '编辑'){
					that.editShow = true
				}else if(that.sheetList[index].text === '删除'){
					uni.showModal({
					    title: '删除提示',
					    content: '确定删除当前配置吗？',
						confirmText: '删除',
						confirmColor: '#fcc600',
					    success: async function (res) {
					        if (res.confirm) {
					            uni.showLoading({
					            	mask: true,
					            	title: '删除中...'
					            })
					            let query = await uniCloud.callFunction({
					            	name: 'query_del',
					            	data: {
					            		dbName: 'wx_config',
					            		filter: {
					            			'_id': that.configId,
					            		}
					            	},
					            })
					            if(query.result.success){
					            	that.getConfigList()
					            }
					            uni.showToast({
					            	icon: 'none',
					            	title: query.result.msg,
					            	mask: true,
					            	duration: 1000
					            })
					        }
					    }
					})
				}
			},
			async editChange(){
				var that = this
				if(!that.config.name){
					that.$u.toast("请填写配置的说明");
					return;
				}else if(!that.config.name){
					that.$u.toast("请填写配置的键");
					return;
				}else if(!that.config.name){
					that.$u.toast("请填写配置的值");
					return;
				}else{
					uni.showLoading({
						mask: true,
						title: '正在拼命加载中...'
					})
					if(that.config.val == 'true') that.config.val = true
					else if(that.config.val == 'false') that.config.val = false
					let query = await uniCloud.callFunction({
						name: 'query_edit',
						data: {
							dbName: "wx_config",
							filter: {
								'_id': that.configId
							},
							upData: that.config,
							addData: that.config,
						},
					})
					if(query.result.success){
						that.getConfigList()
					}
					uni.showToast({
						icon: 'none',
						title: query.result.msg,
						mask: true,
						duration: 1000
					})
				}
				that.editShow = false
			},
			async switchChange(id, index){
				this.configId = id
				this.config.name = this.configList[index].name
				this.config.key = this.configList[index].key
				this.config.val = this.configList[index].val
				uni.showLoading({
					mask: true,
					title: '正在拼命加载中...'
				})
				if(this.config.val == 'true') this.config.val = true
				else if(this.config.val == 'false') this.config.val = false
				let query = await uniCloud.callFunction({
					name: 'query_edit',
					data: {
						dbName: "wx_config",
						filter: {
							'_id': this.configId
						},
						upData: this.config
					},
				})
				if(!query.result.success){
					this.configList[index].val = !this.configList[index].val
				}
				uni.showToast({
					icon: 'none',
					title: query.result.msg,
					mask: true,
					duration: 1000
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F7F7F7;
	}
	.tab{
		background-color: #FFFFFF;
		border-radius: 12rpx;
	}
	.arror-right{
		width: 15rpx;
		height: 15rpx;
		border-top: 3rpx solid #a9acb3;
		border-right: 3rpx solid #a9acb3;
		transform: rotate(45deg);
	}
	.border-bottom{
		border-bottom: 1rpx solid #F3F4F6;
	}
	.yes{
		color: #19BE6B;
	}
	.title{
		font-weight: 550;
	}
	.add{
		animation: tiaobig 1.5s ease-in-out alternate infinite;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 140rpx;
		right: 30rpx;
		border-radius: 120rpx;
		width: 90rpx;
		height: 90rpx;
		box-shadow: 0px 1px 8px #C8C8C8;
		image{
			width: 90rpx;
			height: 90rpx;
		}
	}
	@keyframes tiaobig {
		0% {
			transform: scale(0.92);
		}
		25% {
			transform: scale(1.08);
		}
		50% {
			transform: scale(0.96);
		}
		75% {
			transform: scale(1.06);
		}
		100% {
			transform: scale(0.94);
		}
	}
</style>