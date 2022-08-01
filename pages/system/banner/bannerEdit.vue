<template>
	<view v-if="vuex_user.system == 1">
		<view class="u-p-40">
			<u-form ref="uForm" :model="banner">
				<view class="u-p-b-20 u-flex u-row-left u-col-top">
					<u-upload ref="uUpload" 
					action="" max-count="1" 
					:file-list="bannerId!='-1'?imgList:''" 
					:auto-upload="false" 
					uploadText="上传图片"
					width="400" 
					height="166" 
					:maxSize="1024 * 200" 
					:show-progress="false" 
					:size-type="['compressed']" 
					:source-type="['album']" 
					:multiple="false" 
					del-icon="close" 
					del-bg-color="#ff7c7c" 
					del-color="#FFFFFF" 
					:limitType="['png', 'jpg', 'jpeg']" 
					></u-upload>
					<view class="u-p-l-20 u-p-t-20">
						<view class="u-font-12">注意事项：</view>
						<view class="u-font-12 u-tips-color u-p-t-15">比例：750 x 314</view>
						<view class="u-font-12 u-tips-color u-p-t-15">大小：500kb</view>
					</view>
				</view>
				<view class="" style="border-bottom: 1rpx solid #F4F4F4;border-top: 1rpx solid #F4F4F4;">
					<u-form-item label="类型" :border-bottom="false">
						<u-radio-group v-model="bannerType" @change="radioGroupChange">
							<u-radio active-color="#fdc621" size="50" :name="0">链接</u-radio>
							<u-radio active-color="#fdc621" size="50" :name="1">小程序</u-radio>
						</u-radio-group>
					</u-form-item>
				</view>
				<view class="" style="border-bottom: 1rpx solid #F4F4F4;border-top: 1rpx solid #F4F4F4;" v-if="bannerType===0">
					<u-form-item label="链接" :border-bottom="false">
						<u-input v-model="banner.url" type="textarea" :height="40" :clearable="false" placeholder="跳转链接（不跳转填写/）"/>
					</u-form-item>
				</view>
				<view class="" style="border-bottom: 1rpx solid #F4F4F4;border-top: 1rpx solid #F4F4F4;" v-if="bannerType===1">
					<u-form-item label="appid" :border-bottom="false">
						<u-input v-model="banner.appid" type="textarea" :height="40" :clearable="false" placeholder="小程序ID（不跳转填写/）"/>
					</u-form-item>
					<u-form-item label="路径" :border-bottom="false">
						<u-input v-model="banner.path" type="textarea" :height="40" :clearable="false" placeholder="跳转路径（不跳转填写/）"/>
					</u-form-item>
				</view>
				<view class="" style="border-bottom: 1rpx solid #F4F4F4;border-top: 1rpx solid #F4F4F4;">
					<u-form-item label="排序" :border-bottom="false">
						<u-input v-model="banner.sort" type="number" :height="40" :clearable="false" placeholder="排序，数字越大越靠前"/>
					</u-form-item>
				</view>
			</u-form>
			<view class="u-p-t-40">
				<view class="btn" hover-class="hover-class" hover-stay-time="50" @click="submit">发 布</view>
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
				bannerId: '',
				bannerType: 0,
				banner: {},
				newBanner: {},
				imgList: [],
			}
		},
		async onLoad({id}) {
			var that = this;
			that.bannerId = id
			if(id!='-1') that.getBanner(id)
		},
		methods: {
			async getBanner(id){
				let detail = await uniCloud.callFunction({
					name: 'query_map',
					data: {
						dbName: "wx_banner",
						id: id
					}
				})
				this.imgList.push({url: detail.result.image})
				delete detail.result._id
				this.banner = detail.result
				this.bannerType = detail.result.type?detail.result.type:0
				console.log(this.bannerType)
				this.newBanner = JSON.stringify(detail.result)
			},
			async submit() {
				var that = this
				var imgs = that.$refs.uUpload.lists;
		
				if (imgs.length === 0) {
					that.$u.toast("请上传轮播图");
					return;
				}
				if(that.bannerType===0 && !that.banner.url){
					that.$u.toast("请填写跳转路径");
					return;
				}
				if(that.bannerType===1 && (!that.banner.appid | !that.banner.path)){
					that.$u.toast("请填写完整小程序跳转路径");
					return;
				}
				if(!that.banner.sort){
					that.$u.toast("请填写轮播图排序");
					return;
				}
				if(that.bannerId != '-1' && that.imgList[0] && imgs[0].url === that.imgList[0].url && JSON.stringify(that.banner)===that.newBanner){
					that.$u.toast("请修改内容后再提交");
					return;
				}
				
				uni.showLoading({
					mask: true,
					title: '正在拼命加载中...'
				})
	
				if(that.bannerId == '-1' || (imgs.length > 0 && that.imgList[0] && imgs[0].url != that.imgList[0].url)){
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
					
					var cloudPath = 'banner_'+year+month+day+hours+minutes+seconds+'_'+random+'.'+extension
					await uniCloud.uploadFile({
					    filePath: path,
						cloudPath: cloudPath
					}).then(async res => {
						console.log(res)
						await uniCloud.getTempFileURL({
							fileList: [res.fileID]
						}).then(res => {
							console.log(res)
							if(res.fileList.length > 0){
								that.banner.image = res.fileList[0].tempFileURL
							}else{
								that.$u.toast("图片上传失败");
								return;
							}
						});
					})
				}
				
				that.banner.sort = parseInt(that.banner.sort)
				that.banner.type = parseInt(that.bannerType)
				let query = await uniCloud.callFunction({
					name: 'query_edit',
					data: {
						dbName: "wx_banner",
						filter: {
							'_id': that.bannerId
						},
						addData: that.banner,
						upData: that.banner
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
				var rectWidth = 350, rectHeight = 146, destWidth = 700, destHeight = 294
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
			radioGroupChange(name) {
				this.bannerType = parseInt(name);
			}
		}
	}
</script>

<style lang="scss">
	.btn{
		font-size: 16px;
		background-image: linear-gradient(100deg, #FCEF59 , #f8d319);
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
		height: 167rpx;
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