<template>
<view>
	<view class="tab-container" :hidden="tabHidden">
	    <view @tap="searchTap" class="tab-item">
	        <view class="img-container1">
	            <image class="img" src="/static/images/item_search.png"></image>
	        </view>
	        <text>搜索</text>
	    </view>
	    <view @tap="dayTap" class="tab-item">
	        <view class="img-container2">
	            <image class="img" src="/static/images/item_hot.png"></image>
	        </view>
	        <text>每日精选</text>
	    </view>
	    <view @tap="chaoQingTap" class="tab-item">
	        <view class="img-container3">
	            <image class="img" src="/static/images/item_sixty.png"></image>
	        </view>
	        <text>60帧超清</text>
	    </view>
	    <view @tap="QLTap" class="tab-item">
	        <view class="img-container4">
	            <image class="img" src="/static/images/item_couple.png"></image>
	        </view>
	        <text>情侣壁纸</text>
	    </view>
	</view>
<scroll-view >
    <view @tap="preview" class="grid-item" :data-url="item.video_preview_url" v-for="(item, index) in videos" :key="index">
        <view class="g">
            <image class="photo" mode="aspectFill" :src="item.thumb_img"></image>
            <view class="info">
                <view class="count-container">
                    <image class="iv" src="/static/images/play_num.png"></image>
                    <text class="count">{{item.play_num}}</text>
                </view>
            </view>
        </view>
    </view>
</scroll-view>

<view class="u8_fixed">
    <u8-ad :adData="u8ad.adData" @adload="u8adLoad" @click="u8adClick" @close="u8adClose" class="u8_component" :data-id="u8ad.ad.fixed"></u8-ad>
</view>
<block v-if="!loadFlag">
      <view :class="['bottom',cssTran?'closeCss':'openCss']">
        <view class="nav-box">
          <view class="nav-tab">
            <u-icon vue-id="3db16520-5" name="/static/icon/back.png" :size="44" @__l="__l"></u-icon>
            <text>返回</text><button @tap="fh" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;" open-type="navigateBack"></button>
          </view>
		  <view class="nav-tab">
		    <u-icon vue-id="3db16520-5" name="/static/images/backtop.png" :size="44" @__l="__l"></u-icon>
		    <text>顶部</text><button @click="backTop" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;" open-type="navigateBack"></button>
		  </view>
		  <view class="nav-tab">
		    <u-icon vue-id="3db16520-5" name="/static/images/shuaxin.png" :size="44" @__l="__l"></u-icon>
		    <text>刷新</text><button @tap="sx" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;" open-type="navigateBack"></button>
		  </view>
          <view class="nav-tab">
            <u-icon vue-id="3db16520-5" name="/static/icon/shares.png" :size="44" @__l="__l"></u-icon>
            <text>分享</text><button style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;" open-type="share"></button>
          </view>
        </view>
      </view>
</block>
</view>
</template>

<script>
var e,
    t = require("../../utils/api.js"),
    a = "",
    app = getApp();
import u8Ad from "../../../components/u8AD/u8AD";
export default {
  data() {
    return {
      videos: [],
      tabHidden: !0,
      refreshStatus: !1,
      scrollTop: 0,
      u8ad: {
        adData: {},
        ad: {
          banner: "banner",
          insert: "insert",
          fixed: "fixed"
        }
      }
    };
  },

  components: {
    u8Ad
  },
  props: {},
  onLoad: function () {
    a = "";
    var o = this;
    uni.showLoading({
      title: "正在拼命加载中..."
    }), t.getConfig(function () {
      o.setData({
        tabHidden: app.globalData.isShenHe
      }), e = 1, app.globalData.isShenHe ? (a = "情侣壁纸", o.getTabVideo()) : o.getRecommendVideo();
    });
    getApp();
  },
  onShareAppMessage: function () {
    return {
      title: "精选高清手机壁纸，动态壁纸，头像",
      path: "pages/find/dynamic/dynamic"
    };
  },
  onShareTimeline: function () {
    return {
      title: "精选高清手机壁纸，动态壁纸，头像"
    };
  },
  methods: {
	  fh: function () {
	    uni.navigateBack();
	  },
    getRecommendVideo: function () {
      var a = this,
          i = this.videos;
      t.getRecommendVideo(e, function (t) {
        1 == e && (i = [], a.setData({
          scrollTop: 0
        }));
        for (var o = 0; o < t.length; o++) "1" != t[o].is_ads && i.push(t[o]);
        a.setData({
          videos: i,
          refreshStatus: !1
        }), uni.stopPullDownRefresh(), uni.hideLoading();
      }, function (e) {
        uni.stopPullDownRefresh(), uni.hideLoading();
      });
    },
    getTabVideo: function () {
      var i = this,
          o = this.videos;
      console.log("tag=" + a), t.getTabVideo(e, a, function (t) {
        1 == e && (o = [], i.setData({
          scrollTop: 0
        }));
        for (var a = 0; a < t.length; a++) "1" != t[a].is_ads && o.push(t[a]);
        i.setData({
          videos: o,
          refreshStatus: !1
        }), uni.stopPullDownRefresh(), uni.hideLoading();
      }, function (e) {
        uni.stopPullDownRefresh(), uni.hideLoading();
      });
    },
    preview: function (e) {
      var t = e.currentTarget.dataset.url;
      uni.navigateTo({
        url: "../../dynamicdetail/dynamicdetail?url=" + encodeURIComponent(t)
      });
    },
    
    
    searchTap: function (e) {
      uni.navigateTo({
        url: "../../searchvideo/searchvideo"
      });
    },
    dayTap: function (t) {
      uni.showLoading({
        title: "正在拼命加载中..."
      }), a = "每日精选", e = 1, this.getTabVideo();
    },
    chaoQingTap: function (t) {
      uni.showLoading({
        title: "正在拼命加载中..."
      }), a = "60帧超清", e = 1, this.getTabVideo();
    },
    QLTap: function (t) {
      uni.showLoading({
        title: "正在拼命加载中..."
      }), a = "情侣壁纸", e = 1, this.getTabVideo();
    },
	sx: function (t) {
	  a = "每日精选", 
	  e = 1, 
	  this.getTabVideo(),
	  uni.pageScrollTo({
	  	scrollTop: 0,
	  	duration: 300
	  });
	},
	backTop(){
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 300
		});
	},
  }
};
</script>
<style>
.scroll-body {
    height: 88%;
    width: 100%;
}

.tab-container {
    height: 12%;
    width: 100%;
    flex-direction: row;
    box-sizing: border-box;
    padding-bottom: 10rpx;
    padding-top: 10rpx;
}

.tab-container,.tab-item {
    display: flex;
    align-items: center;
}

.tab-item {
    width: 25%;
    height: 100%;
    flex-direction: column;
    font-size: 25rpx;
    font-weight: 700;
    margin-top: 4rpx;
}

.img-container1 {
    background-color: #20b2aa;
}

.img-container1,.img-container2 {
    width: 80rpx;
    height: 80rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.img-container2 {
    background-color: red;
}

.img-container3 {
    background-color: #87cefa;
}

.img-container3,.img-container4 {
    width: 80rpx;
    height: 80rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.img-container4 {
    background-color: plum;
}

.img {
    width: 50rpx;
    height: 50rpx;
}

.search {
    width: 45rpx;
    height: 45rpx;
    margin-left: 30rpx;
}

.grid-item {
    margin: 10rpx 0 10rpx 20rpx;
    width: 46%;
    height: 560rpx;
    float: left;
}

.g {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.g,.photo {
    width: 100%;
    height: 100%;
}

.photo {
    border-radius: 8px;
}

.info,.photo {
    position: absolute;
}

.info {
    width: 100%;
    display: flex;
    flex-direction: column;
    bottom: 10rpx;
    padding-bottom: 10rpx;
    padding-left: 20rpx;
    box-sizing: border-box;
}

.title {
    height: 40%;
    width: 100%;
    font-size: 28rpx;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: #fff;
    text-shadow: 0 0 2px #000;
}

.count-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.count {
    font-size: 28rpx;
    color: #fff;
    text-shadow: 0 0 2px #000;
}

.iv {
    width: 40rpx;
    height: 40rpx;
    margin-right: 5rpx;
    box-shadow: 0 0 2px #fff;
    border-radius: 50px;
}

.adContainer {
    width: 100%;
    float: left;
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