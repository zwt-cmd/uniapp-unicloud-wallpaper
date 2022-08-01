<template>
	<view>
		<u-navbar
		:is-back="true" 
		title="选择标签" 
		title-width="325" 
		title-color="#333333" 
		title-size="28" 
		:border-bottom="false"
		></u-navbar>
		<view class="u-p-40">
			<view class="u-flex u-row-left u-flex-wrap" v-if="tagsList.length > 0">
				<view class="tag"
				v-for="(item, index) in tagsList" :key="index"
				@click="tagsClick(item.name)">{{item.name}}</view>
			</view>
			<view class="u-flex u-row-center u-col-center" v-else>
				<view class="u-font-12 u-tips-color">暂无标签</view>
			</view>
			<view class="" style="height: 300rpx;"></view>
		</view>
		<view class="safe-area-inset-bottom">
			<view class="bottom u-p-40">
				<view class="tags u-flex u-row-left u-flex-wrap" v-if="tags.length > 0">
					<view class="u-p-r-20 u-p-b-40" v-for="(item, index) in tags" :key="index">
						<u-tag :text="item" closeable  mode="dark" bg-color="#fff5a4" border-color="#fff5a4" color="#1a1607" close-color="#1a1607" shape="circle" type="warning" @close="removeClick(item)"/>
					</view>
				</view>
				<view class="u-flex u-row-center u-col-center u-p-b-40" v-else>
					<view class="u-font-12 u-tips-color">请点击上方标签选择</view>
				</view>
				<view class="btn" hover-class="hover-class" hover-stay-time="50" @click="submit">确 定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagsList: [],
				tag: '',
				tags: []
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
				if(list.result.data.length === 0){
					this.noData = true
				}
				that.tagsList = list.result.data
			},
			tagsClick(name){
				if(this.tags.length < 3){
					if(this.tags.indexOf(name)==-1){
						this.tags.push(name)
					}else{
						this.$u.toast("该标签已选择");
					}
					
				}else{
					this.$u.toast("最多设置3个标签");
				}
			},
			removeClick(name){
				var tags = []
				for (var i = 0; i < this.tags.length; i++) {
					if(this.tags[i] != name){
						tags.push(this.tags[i])
					}
				}
				this.tags = tags
			},
			submit(){
				uni.setStorageSync('tags', this.tags)
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
	.btn{
		font-size: 16px;
		background-image: linear-gradient(100deg, #fcfc44 , #f8c93c);
		color: #333333;
		border-radius: 40rpx;
		line-height: 86rpx;
		text-align: center;
		width: 100%;
	}
	.tag-active{
		background-image: linear-gradient(100deg, #fcfc44 , #f8c93c);
		color: #333333;
		box-shadow: 0px 0px 10px #fff8ab;
	}
	.bottom{
		width: 100vw;
		position: fixed;
		bottom: 0px;
		box-shadow: 0px 0px 16px #D8D8D8;
		border-radius: 24rpx 24rpx 0 0;
		background-color: #FFFFFF;
	}
	.hover-class{
		transform:scale(0.92);
		transition: all 0.2s;
	}
	.u-size-default {
		padding: 15rpx 30rpx!important;
	}
</style>