<template>
	<view>
		<u-navbar
		:is-back="true" 
		title="选择分类" 
		title-width="325" 
		title-color="#333333" 
		title-size="28" 
		:border-bottom="false"
		></u-navbar>
		<view class="u-p-40">
			<view class="u-flex u-row-left u-flex-wrap" v-if="cateList.length > 0">
				<view class="tag"
				v-for="(item, index) in cateList" :key="index" 
				@click="cateClick(item._id,item.name)">{{item.name}}</view>
			</view>
			<view class="u-flex u-row-center u-col-center" v-else>
				<view class="u-font-12 u-tips-color">选择分类</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cateList: [],
			}
		},
		async onLoad() {
			await this.getCateList()
		},
		methods: {
			async getCateList(){
				var that = this
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_category",
						pageIndex: 1,
						pageSize: 50
					},
				})
				that.cateList = list.result.data
			},
			cateClick(id,name){
				uni.setStorageSync('categoryId', id)
				uni.setStorageSync('categoryName', name)
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.tag{
		font-size: 14px;
		background-color: #F5F6F8;
		color: #909399;
		border-radius: 40rpx;
		line-height: 52rpx;
		padding: 0 42rpx;
		text-align: center;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
	}
	.tag-active{
		background-image: linear-gradient(100deg, #fcfc44 , #f8c93c);
		color: #333333;
		box-shadow: 0px 0px 10px #fff8ab;
	}
</style>
