<template>
<view>
	
	<scroll-view scroll-x class="bg-white nav">
	    <view class="flex text-center">
	        <view v-for="(item, index) in categoryList" :key="index" @tap="tabSelect" :class="'cu-item flex-sub ' + (item.cid==TabCur?'text-cyan cur':'')" :data-cid="item.cid">
	            {{item.title}}
	        </view>
	    </view>
	</scroll-view>
<block v-if="!loadFlag">
      <view :class="['bottom',cssTran?'closeCss':'openCss']">
        <view class="nav-box">
          <view class="nav-tab">
            <u-icon vue-id="3db16520-5" name="/static/icon/back.png" :size="44" @__l="__l"></u-icon>
            <text>返回</text><button @tap="fh" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;" open-type="navigateBack"></button>
          </view>
          <view class="nav-tab">
            <u-icon vue-id="3db16520-5" name="/static/icon/shares.png" :size="44" @__l="__l"></u-icon>
            <text>分享</text><button style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;" open-type="share"></button>
          </view>
        </view>
      </view>
</block>

<view class="cu-card dynamic no-card">
    <view class="cu-item shadow">
        <view class="grid flex-sub padding-lr col-2 grid-square">
            <view v-for="(item, index) in photos" :key="index" @tap="info" class="bg-img" :data-src="item.pic" :style="'background-image:url(' + item.pic + ');'"></view>
        </view>
    </view>
</view>
</view>

</template>

<script>
var t = require("../../utils/1.js"),
    e = t(require("../../utils/2.js")),
    n = t(require("../../utils/3.js")),
    a = require("../../utils/4.js");

export default {
  data() {
    return {
      TabCur: 1,
      categoryList: [],
      photos: [],
      nextStart: 0,
      src: "",
      gglist: []
    };
  },
  components: {},
  props: {},
  onLoad: function (t) {
    var e = this;
    this.getCategory().then(function (t) {
      var n = t.categoryList;
      e.setData({
        categoryList: n
      });
    }).catch(function (t) {
      console.error(t);
    }), this.prepareData();
    var that = this;
    uni.request({
      url: 'https://wag.qmniy.cn/api.php',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值

      },

      success(res) {
        console.log(res.data);
        that.setData({
          gglist: res.data
        });
      }

    });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  
  onPullDownRefresh: function () {
    this.setData({
      nextStart: 0
    }), this.prepareData();
  },
  
  onReachBottom: function () {
	  
    var t = this,
        e = this.TabCur,
        n = this.nextStart;
    this.getPhotos(e, n).then(function (e) {
      t.setData({
        nextStart: e.nextStart,
        photos: t.photos.concat(e.list)
      });
    }).catch(function (t) {
      console.error(t);
    });
  },
  onShareAppMessage: function () {},
  methods: {
	  fh: function () {
	    uni.navigateBack();
	  },
    prepareData: function () {
      var t = this,
          e = this.TabCur,
          n = this.nextStart;
      this.getPhotos(e, n).then(function (e) {
        console.log(e.list), t.setData({
          nextStart: e.nextStart,
          photos: e.list
        }), uni.stopPullDownRefresh();
      }).catch(function (t) {
        console.error(t), uni.stopPullDownRefresh();
      });
    },
    getCategory: function () {
      var t = (0, n.default)(e.default.mark(function t() {
        return e.default.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, new Promise(function (t, e) {
                a.request("https://spare.maibaapp.com/bbs/newUgc/category/list/0").then(function (n) {
                  200 == n.statusCode && "request:ok" == n.errMsg && 0 == n.data.code && "success" == n.data.msg ? t(n.data.data) : e("获取分类失败");
                }).catch(function (t) {
                  e("获取分类失败");
                });
              });

            case 2:
              return t.abrupt("return", t.sent);

            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      }));
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    getPhotos: function () {
      var t = (0, n.default)(e.default.mark(function t(n, r) {
        return e.default.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, new Promise(function (t, e) {
                a.request("https://spare.maibaapp.com/bbs/newUgc/category/info/0/" + n + "/" + r + "/" + (r + 17)).then(function (n) {
                  200 == n.statusCode && "request:ok" == n.errMsg && 0 == n.data.code && "success" == n.data.msg ? t(n.data.data) : e("获取图片列表失败");
                }).catch(function (t) {
                  e("获取图片列表失败");
                });
              });

            case 2:
              return t.abrupt("return", t.sent);

            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      }));
      return function (e, n) {
        return t.apply(this, arguments);
      };
    }(),
    tabSelect: function (t) {
      var e = t.currentTarget.dataset.cid;
      this.setData({
        TabCur: e,
        nextStart: 0
      }), this.prepareData();
    },
    info: function (t) {
      var e = t.currentTarget.dataset.src;
      uni.navigateTo({
        url: "../photo/photo?src=" + e,
        success: function (t) {},
        fail: function (t) {},
        complete: function (t) {}
      });
    }
  }
};
</script>
<style lang="scss">
	
	.vtop{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		z-index: 999999;
		.title{
			position: relative;
			color: #303030;
			font-size: 20px;
			line-height: 80rpx;
		}
		.search{
			background: #F3F4F5;
			height: 68rpx;
			margin: 20rpx 40rpx 15rpx 40rpx;
			padding-left: 40rpx;
			border-radius: 50px;
			text{
				color: #a6a7a8;
				font-size: 14px;
			}
		}
	}
	.tab{
		position: relative;
		width: 215rpx;
		height: 350rpx;
		border-radius: 16rpx;
		margin-right: 15rpx;
		margin-bottom: 15rpx;
		image{
			border-radius: 16rpx;
		}
		.array{
			position: absolute;
			top: 18rpx;
			right: 0rpx;
			color: #FFFFFF;
			background-color: rgba(0, 0, 0, 0.4);
			padding: 0rpx 12rpx 0 16rpx;
			border-radius: 20rpx 0 0 20rpx;
			font-size: 12px;
		}
	}
	
	
	.bottom {
		position: fixed;
		left: 4%;
		right: 0;
		width: 92%;
		height: 52px;
		box-shadow: 0 0px 8px rgba(0, 0, 0, 0.06);
		background: rgba(0, 0, 0, 0.94);
		border-radius: 49px;
		z-index: 10;
		opacity: 0.8;
		.num{
			position: absolute;
			top: -20rpx;
			top: -70rpx;
			left: 44%;
			background: rgba(0,0,0,0.6);
			color: #FFF;
			padding: 4rpx 20rpx;
			font-size: 12px;
			border-radius: 36px;
		}
	}

	.nav-tab {
		position: relative;
		width: 100%;
		height: 52px;
		font-size: 12px;
		color: #D8D8D8;
		font-weight: 400;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.nav-box {
		/* position: absolute; */
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		box-sizing: border-box;
	}

	.openCss {
		animation-name: openLinear;
		animation-duration: 0.8s;
		animation-iteration-count: 1;
		bottom: 40px;
	}

	@keyframes openLinear {
		0% {
			transform: translateY(92px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	.closeCss {
		animation-name: closeLinear;
		animation-duration: 0.8s;
		animation-iteration-count: 1;
		bottom: -52px;
	}

	@keyframes closeLinear {
		0% {
			transform: translateY(-92px);
		}
		100% {
			transform: translateY(0px);
		}
	}
	
	.u-indicator-item-number {
		padding: 6rpx 16rpx;
		line-height: 1;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 100rpx;
		font-size: 26rpx;
		color: rgba(255, 255, 255, 0.8);
	}
</style>