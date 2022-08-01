<template>
	<view v-if="vuex_user.system == 1">
		<view class="u-p-40">
			<view class="u-flex u-row-left u-flex-wrap">
				<view class="u-p-r-20 u-p-b-40" v-for="(item, index) in tagsList" :key="index">
					<u-tag :text="item.name" closeable  mode="dark" bg-color="#F5F6F8" border-color="#F5F6F8" color="#909399" close-color="#909399" shape="circle" type="warning" @close="removeClick(item._id)"/>
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
		</view>
		<view class="safe-area-inset-bottom">
			<view class="" style="height: 1px;"></view>
		</view>
		
		<view class="add" @click="addClick">
			<image src="/static/icon/add.png"></image>
		</view>
		
		<u-modal ref="uModal" v-model="tagsShow" title="添加标签" :show-cancel-button="true" confirm-text="添加" confirm-color="#fcc600" content="content" :async-close="true"  @confirm="tagsChange">
			<view class="u-p-40">
				<u-input v-model="tagsName" :border="true" border-color="#F7F7F7" :clearable="false" :height="80" placeholder="填写标签名称"/>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagsList: [],
				noData: false,
				tagsShow: false,
				tagsName: ''
			}
		},
		onLoad() {
			this.getTagsList()
		},
		methods: {
			async getTagsList(){
				var that = this
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_tags",
						order: {
							name: 'time',
							type: 'asc'
						},
						pageIndex: 1,
						pageSize: 100
					},
				})
				if(list.result.data.length === 0) that.noData = true
				else that.noData = false
				that.tagsList = list.result.data
			},
			addClick(){
				this.tagsShow = true
			},
			async tagsChange(){
				var that = this
				var tagsName = that.tagsName
				that.tagsName = ''
				if(!tagsName){
					that.$refs.uModal.clearLoading();
					that.$u.toast("请填写标签名称");
					return
				}
				uni.showLoading({
					mask: true,
					title: '正在拼命加载中...'
				})
				let query = await uniCloud.callFunction({
					name: 'query_edit',
					data: {
						dbName: 'wx_tags',
						filter: {
							'_id': '-1'
						},
						addData: {
							name: tagsName
						}
					},
				})
				that.tagsShow = false
				if(query.result.success){
					that.getTagsList()
				}
				uni.showToast({
					icon: 'none',
					title: query.result.msg,
					mask: true,
					duration: 1000
				})
			},
			removeClick(id){
				var that = this
				uni.showModal({
				    title: '删除提示',
				    content: '确定删除当前标签吗？',
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
				            		dbName: 'wx_tags',
				            		filter: {
				            			'_id': id
				            		}
				            	},
				            })
				            if(query.result.success){
				            	that.getTagsList()
				            }
				            uni.showToast({
				            	icon: 'none',
				            	title: query.result.msg,
				            	mask: true,
				            	duration: 1000
				            })
				        }
				    }
				});
			},
		}
	}
</script>

<style lang="scss">
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