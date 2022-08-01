<template>
	<view  v-if="vuex_user.system == 1">
		<view class="u-p-40">
			<u-form ref="uForm" :model="design">
				<view class="u-p-b-20">
					<u-upload ref="uUpload" 
					action="" 
					max-count="1" 
					:file-list="designId!='-1'?imgList:''" 
					:auto-upload="false" 
					uploadText="上传刘海图片"
					width="230" 
					height="230" 
					:maxSize="1 * 1024 * 1024" 
					:show-progress="false" 
					:size-type="['original']" 
					:source-type="['album']" 
					:multiple="true" 
					del-icon="close" 
					del-bg-color="#ff7c7c" 
					del-color="#FFFFFF" 
					:limitType="['png', 'jpg', 'jpeg']" 
					></u-upload>
				</view>
				<view class="" style="border-bottom: 1rpx solid #F4F4F4;">
					<u-form-item label="类型" :border-bottom="false">
						<u-radio-group v-model="design.mode" @change="radioGroupChange">
							<u-radio active-color="#fdc621" size="50" :name="0">免费</u-radio>
							<u-radio active-color="#fdc621" size="50" :name="1">收费</u-radio>
						</u-radio-group>
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
				imgList: [],
				design: {
					mode: 0,
				},
				newDesign: {},
				designId: ''
			}
		},
		async onLoad({id}) {
			var that = this
			that.designId = id
			if(id!='-1') that.getDesign(id)
		},
		methods: {
			async getDesign(id){
				let detail = await uniCloud.callFunction({
					name: 'query_map',
					data: {
						dbName: "wx_design",
						id: id
					}
				})
				this.imgList.push({url: detail.result.image})
				delete detail.result._id
				this.design = detail.result
				this.newDesign = JSON.stringify(detail.result)
			},
			async submit() {
				var that = this
				var imgs = that.$refs.uUpload.lists
				
				if(imgs.length == 0){
					that.$u.toast("请上传图片");
					return;
				}
				
				uni.showLoading({
					mask: true,
					title: '正在拼命加载中...'
				})
				
				if(that.designId == '-1' || (imgs.length > 0 && imgs[0].url != that.imgList[0].url)){
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
					
					var cloudPath = 'design_'+year+month+day+hours+minutes+seconds+'_'+random+'.'+extension
					
					await uniCloud.uploadFile({
						filePath: path,
						cloudPath: cloudPath
					}).then(async res => {
						await uniCloud.getTempFileURL({
							fileList: [res.fileID]
						}).then(res => {
							if(res.fileList.length > 0){
								that.design.image = res.fileList[0].tempFileURL
							}else{
								that.$u.toast("图片上传失败");
								return;
							}
						});
					})
				}
				
				let query = await uniCloud.callFunction({
					name: 'query_edit',
					data: {
						dbName: "wx_design",
						filter: {
							'_id': that.designId
						},
						addData: that.design,
						upData: that.design
					},
				})
				uni.hideLoading()
				if(query.result.success){
					setTimeout(function(){
						uni.navigateBack()
					},1000)
				}
				uni.showToast({
					icon: 'none',
					title: query.result.msg,
					mask: true,
					duration: 1000
				})
			},
			radioGroupChange(name){
				this.design.mode = parseInt(name)
			}
		}
	}
</script>

<style lang="scss">
	.btn{
		font-size: 16px;
		background-image: linear-gradient(to right, #fcfc44 , #f8c93c);
		color: #333333;
		border-radius: 40rpx;
		line-height: 86rpx;
		text-align: center;
	}
	.hover-class{
		transform:scale(0.92);
		transition: all 0.2s;
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