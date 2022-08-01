<template>
<view class="">
    <video autoplay loop @tap="videoTap" controls="false" enableProgressGesture="false" objectFit="cover" showCenterPlayBtn="false" showFullscreenBtn="false" showPlayBtn="false" :src="videoSrc"></video>
    <view class="date-container">
        <text class="time">{{time}}</text>
        <text class="date">{{date}}</text>
    </view>
    <view class="bottom-container">
        <view @tap="downloadTap" class="download-container">
      下载壁纸
    </view>
    </view>
    <image @tap="backTap" class="back" src="/static/images/back.png"></image>
</view>
</template>

<script>

export default {
  data() {
    return {
      videoSrc: "",
      hideBtn: !1
    };
  },

  components: {},
  props: {},
  onLoad: function (t) {
    var e = decodeURIComponent(t.url);
    console.log(e), this.setData({
      videoSrc: e
    }), this.getDate();
  },
  onShareAppMessage: function () {
    return {
      title: "精选高清手机壁纸，动态壁纸，头像",
      path: "pages/find/dynamic/dynamic"
    };
  },
  methods: {
    backTap: function (t) {
      uni.navigateBack({
        delta: 1
      });
    },
    videoTap: function (t) {
      this.setData({
        hideBtn: !this.hideBtn
      });
    },
    downloadTap: function (t) {
      var e = this;
      uni.getSetting({
        success: function (t) {
          t.authSetting["scope.writePhotosAlbum"] ? e.save() : uni.authorize({
            scope: "scope.writePhotosAlbum",
            success: function () {
              e.save();
            },
            fail: function () {
              uni.showModal({
                title: "温馨提示",
                content: "您未授权访问相册的权限，无法保存，请允许访问相册",
                showCancel: !1
              });
            }
          });
        }
      });
    },
    save: function () {
      uni.showLoading({
        title: "下载中"
      });
      var t = this;
      uni.downloadFile({
        url: t.videoSrc.replace("http", "https"),
        success: function (t) {
          200 === t.statusCode && uni.saveVideoToPhotosAlbum({
            filePath: t.tempFilePath,
            success: function (t) {
              uni.hideLoading(), uni.showModal({
                content: "保存成功，请在相册中查看",
                confirmText: "知道了",
                showCancel: !1
              });
            }
          });
        }
      });
    },
    getDate: function () {
      var t = new Date(),
          e = (t.getFullYear(), t.getMonth() + 1),
          o = t.getDate(),
          a = t.getHours(),
          n = t.getMinutes(),
          i = (t.getSeconds(), e + "月" + o + "日"),
          s = [a, n].map(this.formatNumber).join(":");
      console.log(i), console.log(s), this.setData({
        date: i,
        time: s
      });
    },
    formatNumber: function (t) {
      return (t = t.toString())[1] ? t : "0" + t;
    }
  }
};
</script>
<style>
.container {
    position: relative;
}

.container,video {
    width: 100%;
    height: 100%;
}

video {
    position: absolute;
}

.bottom-container {
    width: 100%;
    position: absolute;
    bottom: 50rpx;
}

.bottom-container,.download-container {
    height: 100rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.download-container {
    width: 70%;
    color: #fff;
    font-size: 32rpx;
    border-radius: 50px;
    background: #000;
    opacity: .7;
    font-weight: 700;
}

.back {
    width: 45px;
    height: 45px;
    position: absolute;
    background-color: #fff;
    left: 40rpx;
    top: 80rpx;
    opacity: .7;
    border-radius: 500px;
}

.date-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 150rpx;
    opacity: .9;
}

.time {
    font-size: 120rpx;
    color: #fff;
}

.date {
    font-size: 40rpx;
    color: #fff;
}
</style>