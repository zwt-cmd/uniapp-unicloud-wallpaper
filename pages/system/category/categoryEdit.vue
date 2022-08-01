<template>
	<view v-if="vuex_user.system == 1">
		<view class="u-p-40">
			<u-form ref="uForm" :model="category">
				<view class="u-flex u-row-left u-col-top u-p-b-20">
					<u-upload ref="uUpload" 
					action="" max-count="1" 
					:file-list="categoryId!='-1'?imgList:''" 
					:auto-upload="false" 
					uploadText="上传封面图"
					width="400" 
					height="197" 
					:maxSize="1024 * 100" 
					:show-progress="false" 
					:size-type="['compressed']" 
					:source-type="['album']" 
					:multiple="false" 
					del-icon="close" 
					del-bg-color="#ff7c7c" 
					del-color="#FFFFFF" 
					:limitType="['png', 'jpg', 'jpeg']" 
					></u-upload>
					<!-- <view class="" @click="chooseImage()">
						<view class="img-bg u-flex-col u-row-center u-col-center" v-if="!imgPath">
							<u-icon name="plus" size="36" color="#606266"></u-icon>
							<view class="u-p-t-20 u-font-12 u-content-color">上传封面图</view>
						</view>
						<view class="img" v-else>
							<image class="img-bg" :src="imgPath"></image>
							<view class="u-delete-icon" @click.stop="delImage">
								<u-icon class="u-icon" name="close" size="20" color="#FFFFFF"></u-icon>
							</view>
						</view>
					</view> -->
					<view class="u-p-l-20 u-p-t-20">
						<view class="u-font-12">注意事项：</view>
						<view class="u-font-12 u-tips-color u-p-t-15">比例：500 x 250</view>
						<view class="u-font-12 u-tips-color u-p-t-15">大小：200kb</view>
					</view>
				</view>
				<view class="" style="border-bottom: 1rpx solid #F4F4F4;border-top: 1rpx solid #F4F4F4;">
					<u-form-item label="名称" :border-bottom="false">
						<u-input v-model="category.name" :clearable="false" placeholder="填写分类名称"/>
					</u-form-item>
				</view>
				<view class="" style="border-bottom: 1rpx solid #F4F4F4;border-top: 1rpx solid #F4F4F4;">
					<u-form-item label="排序" :border-bottom="false">
						<u-input v-model="category.sort" type="number" :height="40" :clearable="false" placeholder="排序，数字越大越靠前"/>
					</u-form-item>
				</view>
			</u-form>
			<view class="u-p-t-40">
				<view class="btn" hover-class="hover-class" hover-stay-time="50" @click="submit">保 存</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconStyle: {
					fontSize: '12px',
					color: '#D8D8D8'
				},
				customStyle: {
					backgroundImage: 'linear-gradient(to right, #FCEF59 , #F8D246)',
					color: "#333333"
				},
				categoryId: '',
				imgList: [],
				category: {},
				newCategory: {},
			}
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.imgPath = path
			})
		},
		async onLoad({id}) {
			var that = this;
			that.categoryId = id
			if(id!='-1') that.getCategory(id)
		},
		methods: {
			async getCategory(id){
				let detail = await uniCloud.callFunction({
					name: 'query_map',
					data: {
						dbName: "wx_category",
						id: id
					}
				})
				this.imgList.push({url: detail.result.image})
				delete detail.result._id
				this.category = detail.result
				this.newCategory = JSON.stringify(detail.result)
			},
			async submit() {
				var that = this
				var imgs = that.$refs.uUpload.lists;

				if (imgs.length === 0) {
					that.$u.toast("请上传分类封面");
					return;
				}
				if(!that.category.name){
					that.$u.toast("请填写分类名称");
					return;
				}
				if(!that.category.sort){
					that.$u.toast("请填写分类排序");
					return;
				}
				if(that.categoryId != '-1' && imgs[0].url === that.imgList[0].url && JSON.stringify(that.category)===that.newCategory){
					that.$u.toast("请修改内容后再提交");
					return;
				}
				
				uni.showLoading({
					mask: true,
					title: '正在拼命加载中...'
				})
				
				if(that.categoryId == '-1' || (imgs.length > 0 && imgs[0].url != that.imgList[0].url)){
					var path = imgs[0].url
					var extension = path.substring(path.lastIndexOf('.') + 1)
					var random = String(Math.random()*100000).split('.')[0]
					var now = new Date()
					var year = now.getFullYear()
					var month = (now.getMonth() + 1) < 10?'0'+(now.getMonth() + 1):(now.getMonth() + 1)
					var day = now.getDate() < 10?'0'+now.getDate():now.getDate()
					var hours = now.getHours() < 10?'0'+now.getHours():now.getHours()
					var minutes = now.getMinutes() < 10?'0'+now.getMinutes():now.getMinutes()
					var seconds = now.getSeconds() < 10?'0'+now.getSeconds():now.getSeconds()
					
					var cloudPath = 'category_'+year+month+day+hours+minutes+seconds+'_'+random+'.'+extension
					await uniCloud.uploadFile({
					    filePath: path,
						cloudPath: cloudPath
					}).then(async res => {
						await uniCloud.getTempFileURL({
							fileList: [res.fileID]
						}).then(res => {
							if(res.fileList.length > 0){
								that.category.image = res.fileList[0].tempFileURL
							}else{
								that.$u.toast("图片上传失败");
								return;
							}
						});
					})
				}
				that.category.sort = parseInt(that.category.sort)
				let query = await uniCloud.callFunction({
					name: 'query_edit',
					data: {
						dbName: "wx_category",
						filter: {
							'_id': that.categoryId
						},
						addData: that.category,
						upData: that.category
					},
				})
				if(query.result.success){
					setTimeout(function(){
						uni.navigateBack()
					},1000)
					uni.setStorageSync("update_flag", 1)
				}
				uni.showToast({
					icon: 'none',
					title: query.result.msg,
					mask: true,
					duration: 1000
				})
			},
			chooseImage() {
				var rectWidth = 350, rectHeight = 175, destWidth = 350, destHeight = 175
				this.$u.route({
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					params: {
						rectWidth: rectWidth,
						rectHeight: rectHeight,
						destWidth: destWidth,
						destHeight: destHeight,
						fileType: 'jpg',
					}
				})
			},
			delImage(type){
				this.imgPath = ''
			},
		}
	}
</script>

<style lang="scss">
	.btn{
		font-size: 16px;
		background-image: linear-gradient(100deg, #fcfc44 , #f8c93c);
		color: #333333;
		border-radius: 40rpx;
		line-height: 86rpx;
		text-align: center;
	}
	.hover-class{
		transform:scale(0.92);
		transition: all 0.2s;
	}
	
	
	.img{
		position: relative;
	}
	.img-bg{
		width: 400rpx;
		height: 200rpx;
		background: #f4f5f6;
		border-radius: 10rpx;
		margin: 10rpx;
	}
	.u-delete-icon{
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		z-index: 10;
		background-color: rgba(255,255,255,0.35);
		border-radius: 100rpx;
		width: 44rpx;
		height: 44rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
