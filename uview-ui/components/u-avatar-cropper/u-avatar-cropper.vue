<template>
	<view class="content">
		<view class="cropper-wrapper" :style="{ height: cropperOpt.height + 'px' }">
			<canvas
				class="cropper"
				:disable-scroll="true"
				@touchstart="touchStart"
				@touchmove="touchMove"
				@touchend="touchEnd"
				:style="{ width: cropperOpt.width, height: cropperOpt.height, backgroundColor: 'rgba(0, 0, 0, 0.8)' }"
				canvas-id="cropper"
				id="cropper"
			></canvas>
			<canvas
				class="cropper"
				:disable-scroll="true"
				:style="{
					position: 'fixed',
					top: `-${cropperOpt.width * cropperOpt.pixelRatio}px`,
					left: `-${cropperOpt.height * cropperOpt.pixelRatio}px`,
					width: `${cropperOpt.width * cropperOpt.pixelRatio}px`,
					height: `${cropperOpt.height * cropperOpt.pixelRatio}`
				}"
				canvas-id="targetId"
				id="targetId"
			></canvas>
		</view>
		<view class="cropper-buttons safe-area-padding" :style="{ height: bottomNavHeight + 'px' }">
			<!-- #ifdef H5 -->
			<view class="upload" @tap="uploadTap">选择图片</view>
			<!-- #endif -->
			<!-- #ifndef H5 -->
			<view class="upload" @tap="uploadTap">重新选择</view>
			<!-- #endif -->
			<view class="getCropperImage" @tap="getCropperImage(false)">确定</view>
		</view>
	</view>
</template>

<script>
import WeCropper from './weCropper.js';
export default {
	props: {
		// 裁剪矩形框的样式，其中可包含的属性为lineWidth-边框宽度(单位rpx)，color: 边框颜色，
		// mask-遮罩颜色，一般设置为一个rgba的透明度，如"rgba(0, 0, 0, 0.35)"
		boundStyle: {
			type: Object,
			default() {
				return {
					lineWidth: 4,
					borderColor: 'rgb(245, 245, 245)',
					mask: 'rgba(0, 0, 0, 0.35)'
				};
			}
		}
	},
	data() {
		return {
			// 底部导航的高度
			bottomNavHeight: 50,
			originWidth: 200,
			width: 0,
			height: 0,
			cropperOpt: {
				id: 'cropper',
				targetId: 'targetCropper',
				pixelRatio: 1,
				width: 0,
				height: 0,
				scale: 2.5,
				zoom: 8,
				cut: {
					x: (this.width - this.originWidth) / 2,
					y: (this.height - this.originWidth) / 2,
					width: this.originWidth,
					height: this.originWidth
				},
				boundStyle: {
					lineWidth: uni.upx2px(this.boundStyle.lineWidth),
					mask: this.boundStyle.mask,
					color: this.boundStyle.borderColor
				}
			},
			// 裁剪框和输出图片的尺寸，高度默认等于宽度
			// 输出图片宽度，单位px
			destWidth: 200,
			destHeight: 200,
			// 裁剪框宽度，单位px
			rectWidth: 200,
			rectHeight: 200,
			// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
			fileType: 'jpg',
			src: '', // 选择的图片路径，用于在点击确定时，判断是否选择了图片
			// 允许上传的图片后缀
			limitType: ['png', 'jpg', 'jpeg'],
			// 文件大小限制，单位为byte
			maxSize: 1024 * 1024 * 1,
		};
	},
	onLoad(option) {
		let rectInfo = uni.getSystemInfoSync();
		this.width = rectInfo.windowWidth;
		this.height = rectInfo.windowHeight - this.bottomNavHeight;
		this.cropperOpt.width = this.width;
		this.cropperOpt.height = this.height;
		this.cropperOpt.pixelRatio = rectInfo.pixelRatio;

		if (option.limitType) this.limitType = option.limitType;
		if (option.maxSize) this.maxSize = option.maxSize;
		
		if (option.destWidth) this.destWidth = option.destWidth;
		if (option.destHeight) this.destHeight = option.destHeight;
		if (option.rectWidth && option.rectHeight) {
			let rectWidth = Number(option.rectWidth);
			let rectHeight = Number(option.rectHeight);
			this.cropperOpt.cut = {
				x: (this.width - rectWidth) / 2,
				y: (this.height - rectHeight) / 2,
				width: rectWidth,
				height: rectHeight
			};
		}
		this.rectWidth = option.rectWidth;
		this.rectHeight = option.rectHeight;
		if (option.fileType) this.fileType = option.fileType;
		// 初始化
		this.cropper = new WeCropper(this.cropperOpt)
			.on('ready', ctx => {
				// wecropper is ready for work!
			})
			.on('beforeImageLoad', ctx => {
				// before picture loaded, i can do something
			})
			.on('imageLoad', ctx => {
				// picture loaded
			})
			.on('beforeDraw', (ctx, instance) => {
				// before canvas draw,i can do something
			});
		// 设置导航栏样式，以免用户在page.json中没有设置为黑色背景
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#000000'
		});
		var chooseFile = new Promise((resolve, reject) => {
			uni.chooseImage({
				count: 1, // 默认9
				sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: resolve,
				fail: reject
			});
		});
		chooseFile.then(res => {
			res.tempFiles.map((val, index) => {
				// 检查文件后缀是否允许，如果不在this.limitType内，就会返回false
				if(!this.checkFileExt(val)){
					this.$u.toast('不支持当前文件类型');
					return ;
				}
				// 如果是非多选，index大于等于1或者超出最大限制数量时，不处理
				if (index >= 1) return;
				if (val.size > this.maxSize) {
					this.$u.toast('超出允许的文件大小');
					return
				} else {
					this.src = val.path;
					//  获取裁剪图片资源后，给data添加src属性及其值
					this.cropper.pushOrign(this.src);
				}
			});
		})
		.catch(error => {
			this.$emit('on-choose-fail', error);
		});
	},
	methods: {
		touchStart(e) {
			this.cropper.touchStart(e);
		},
		touchMove(e) {
			this.cropper.touchMove(e);
		},
		touchEnd(e) {
			this.cropper.touchEnd(e);
		},
		getCropperImage(isPre = false) {
			if(!this.src) return this.$u.toast('请先选择图片再裁剪');

			let cropper_opt = {
				destHeight: Number(this.destHeight), // uni.canvasToTempFilePath要求这些参数为数值
				destWidth: Number(this.destWidth),
				fileType: this.fileType
			};
			this.cropper.getCropperImage(cropper_opt, (path, err) => {
				if (err) {
					uni.showModal({
						title: '温馨提示',
						content: err.message
					});
				} else {
					if (isPre) {
						uni.previewImage({
							current: '', // 当前显示图片的 http 链接
							urls: [path] // 需要预览的图片 http 链接列表
						});
					} else {
						uni.$emit('uAvatarCropper', path);
						this.$u.route({
							type: 'back'
						});
					}
				}
			});
		},
		uploadTap() {
			const self = this;
			var chooseFile = new Promise((resolve, reject) => {
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
					success: resolve,
					fail: reject
				});
			});
			chooseFile.then(res => {
				res.tempFiles.map((val, index) => {
					// 检查文件后缀是否允许，如果不在this.limitType内，就会返回false
					if(!self.checkFileExt(val)){
						self.$u.toast('不支持当前文件类型');
						return ;
					}
					// 如果是非多选，index大于等于1或者超出最大限制数量时，不处理
					if (index >= 1) return;
					if (val.size > self.maxSize) {
						self.$u.toast('超出允许的文件大小');
						return
					} else {
						self.src = val.path;
						//  获取裁剪图片资源后，给data添加src属性及其值
						self.cropper.pushOrign(this.src);
					}
				});
			})
			.catch(error => {
				this.$emit('on-choose-fail', error);
			});
		},
		// 判断文件后缀是否允许
		checkFileExt(file) {
			// 检查是否在允许的后缀中
			let noArrowExt = false;
			// 获取后缀名
			let fileExt = '';
			const reg = /.+\./;
			// 如果是H5，需要从name中判断
			// #ifdef H5
			fileExt = file.name.replace(reg, "").toLowerCase();
			// #endif
			// 非H5，需要从path中读取后缀
			// #ifndef H5
			fileExt = file.path.replace(reg, "").toLowerCase();
			// #endif
			// 使用数组的some方法，只要符合limitType中的一个，就返回true
			noArrowExt = this.limitType.some(ext => {
				// 转为小写
				return ext.toLowerCase() === fileExt;
			})
			if(!noArrowExt) self.$u.toast(`不允许选择${fileExt}格式的文件`);
			return noArrowExt;
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../libs/css/style.components.scss';

.content {
	background: rgba(255, 255, 255, 1);
}

.cropper {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 11;
}

.cropper-buttons {
	background-color: #000000;
	color: #eee;
}

.cropper-wrapper {
	position: relative;
	@include vue-flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: #000;
}

.cropper-buttons {
	width: 100vw;
	@include vue-flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	font-size: 28rpx;
}

.cropper-buttons .upload,
.cropper-buttons .getCropperImage {
	width: 50%;
	text-align: center;
}

.cropper-buttons .upload {
	text-align: left;
	padding-left: 50rpx;
}

.cropper-buttons .getCropperImage {
	text-align: right;
	padding-right: 50rpx;
}
</style>
