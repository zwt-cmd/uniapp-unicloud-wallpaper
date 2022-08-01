<template>
<u8-ad>
    <view :class="adID" data-type="1" v-if="adData[adID].adtype===1">
        <view style="width:100%;" v-if="adData[adID].hasshow">
            <view @tap="clickAd" class="u8_banner_wrap" v-if="adData[adID].show_type==1">
                <view class="u8_banner_logo_wrap">
                    <image @load="adLoad" class="image" :src="adData[adID].pic"></image>
                </view>
                <view class="u8_banner_desc_wrap">
                    <text class="u8_banner_name">{{adData[adID].name}}</text>
                    <text class="u8_banner_desc">{{adData[adID].desc}}</text>
                </view>
                <view class="u8_banner_button">打 开</view>
                <text class="u8_banner_tip">U8AD.COM</text>
                <navigator :appId="adData[adID].to_appid" @fail="navFail" @tap="clickAd" class="u8AD_nav" :data-id="adID" :extraData="adData[adID].encdata" :path="adData[adID].load_page" target="miniProgram" v-if="adData[adID].jump_type===2"></navigator>
            </view>
            <view class="u8_banner_wrap1" v-else>
                <image @load="adLoad" @tap="clickAd" class="image" :data-id="adID" mode="widthFix" :src="adData[adID].pic"></image>
                <navigator :appId="adData[adID].to_appid" @fail="navFail" @tap="clickAd" class="u8AD_nav" :data-id="adID" :extraData="adData[adID].encdata" :path="adData[adID].load_page" target="miniProgram" v-if="adData[adID].jump_type===2"></navigator>
            </view>
        </view>
    </view>
    <view :class="adID" data-type="2" v-if="adData[adID].adtype===2">
        <view @tap="close" class="u8_insert_wrap" :data-closeid="adID" v-if="adData[adID].hasshow">
            <block v-if="adData[adID].show_type==1">
                <view @tap="clickAd" class="u8_insert_content">
                    <view class="u8_insert_logo">
                        <image @load="adLoad" class="image" :src="adData[adID].pic"></image>
                        <text class="text">{{adData[adID].name}}</text>
                    </view>
                    <view class="u8_insert_desc">{{adData[adID].desc}}</view>
                    <view class="u8_insert_button">立即体验</view>
                    <navigator :appId="adData[adID].to_appid" @fail="navFail" @tap="clickAd" class="u8AD_nav" :data-id="adID" :extraData="adData[adID].encdata" :path="adData[adID].load_page" target="miniProgram" v-if="adData[adID].jump_type===2"></navigator>
                </view>
                <view class="u8_insert_close">
                    <image @tap="close" class="image" src="https://www.u8ad.com/Public/images/insert_close.png"></image>
                </view>
            </block>
            <view class="u8_insert_content1" v-else>
                <image @load="adLoad" @tap="clickAd" class="u8_insert_adimg" :data-id="adID" mode="widthFix" :src="adData[adID].pic"></image>
                <image @tap="close" class="u8_insert_close1" :data-closeid="adID" src="https://www.u8ad.com/Public/images/ad_sdk_close.png"></image>
                <navigator :appId="adData[adID].to_appid" @fail="navFail" @tap="clickAd" class="u8AD_nav" :data-id="adID" :extraData="adData[adID].encdata" :path="adData[adID].load_page" target="miniProgram" v-if="adData[adID].jump_type===2"></navigator>
            </view>
        </view>
    </view>
    <view :class="adID" data-type="4" v-if="adData[adID].adtype===4">
        <view class="u8_fixed_wrap" v-if="adData[adID].hasshow">
            <image @tap="close" class="u8_fixed_close" src="https://www.u8ad.com/Public/images/fixed_close.png"></image>
            <image @load="adLoad" @tap="clickAd" class="u8_fixed_img" :data-id="adID" mode="widthFix" :src="adData[adID].pic"></image>
            <navigator :appId="adData[adID].to_appid" @fail="navFail" @tap="clickAd" class="u8AD_nav" :data-id="adID" :extraData="adData[adID].encdata" :path="adData[adID].load_page" target="miniProgram" v-if="adData[adID].jump_type===2"></navigator>
        </view>
    </view>
</u8-ad>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    adData: Object
  },
  beforeMount: function () {
    this.setData({
      adID: this.dataset.id
    });
  },
  methods: {
    adLoad: function () {
      this.$emit("adload");
    },
    clickAd: function () {
      this.$emit("click");
    },
    navFail: function (t) {},
    close: function () {
      this.$emit("close");
    }
  }
};
</script>
<style>
.u8_banner_wrap {
    position: relative;
    display: flex;
    align-items: center;
    height: 150rpx!important;
    padding: 0 20rpx;
    background: #fff!important;
    box-shadow: 0 0 7rpx 0 rgba(0,127,255,.5);
}

.u8_banner_logo_wrap {
    width: 100rpx;
    height: 100rpx;
    overflow: hidden;
    margin-right: 30rpx;
}

.u8_banner_logo_wrap .image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin: 0 auto;
}

.u8_banner_desc_wrap {
    display: flex;
    flex-direction: column;
    width: 64%;
}

.u8_banner_name {
    color: #333!important;
    font-size: 30rpx!important;
    line-height: 42rpx!important;
}

.u8_banner_desc,.u8_banner_name {
    display: block!important;
    width: 100%!important;
    height: auto!important;
}

.u8_banner_desc {
    color: #666!important;
    font-size: 22rpx!important;
    line-height: 34rpx!important;
}

.u8_banner_button {
    width: 110rpx!important;
    height: 52rpx!important;
    line-height: 52rpx!important;
    text-align: center;
    font-size: 22rpx!important;
    color: #06c;
    border: 1rpx solid #06c;
    border-radius: 27rpx;
}

.u8_banner_tip {
    position: absolute;
    top: 122rpx;
    right: 0rpx;
    align-items: center;
    justify-content: center;
    width: 120rpx!important;
    height: 28rpx!important;
    font-size: 18rpx!important;
    line-height: 16px!important;
    color: #fff!important;
    background: #b7b7b7!important;
    border-radius: 14rpx 0 0 14rpx;
}

.u8_banner_tip,.u8_banner_wrap1 {
    display: flex;
}

.u8_banner_wrap1 {
    position: relative;
    width: 100%!important;
    overflow: hidden;
}

.u8_banner_wrap1 .image {
    width: 100%;
    margin: 0 auto;
}

.u8_insert_wrap {
    position: fixed;
    width: 100%!important;
    height: 100%!important;
    left: 0;
    top: 0;/*  #ifdef  H5  */
    top: calc(88rpx + constant(safe-area-inset-top));
    top: calc(88rpx + env(safe-area-inset-top));/*  #endif  */
    background: rgba(0,0,0,.3);
    z-index: 9999;
}

.u8_insert_content {
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    left: calc(50% - 255rpx);
    top: calc(35% - 250rpx);
    width: 510rpx;
    height: 600rpx;
    background: #fff;
    border-radius: 8rpx;
}

.u8_insert_content,.u8_insert_logo {
    display: flex;
    justify-content: center;
}

.u8_insert_logo {
    flex-direction: column;
    align-items: center;
    margin: 20rpx 0;
}

.u8_insert_logo .image {
    width: 140rpx;
    height: 140rpx;
    border-radius: 50%;
}

.u8_insert_logo .text {
    font-weight: bolder;
    font-size: 36rpx!important;
    color: #333!important;
    margin-top: 20rpx;
}

.u8_insert_desc {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(0,102,204,.8);
    color: #fff!important;
    width: 100%;
    height: 80rpx;
    font-size: 24rpx!important;
    line-height: 40rpx;
    padding: 20rpx 40rpx;
}

.u8_insert_button {
    width: 280rpx!important;
    height: 70rpx!important;
    border: 1px solid #06c;
    border-radius: 8rpx;
    font-size: 28rpx!important;
    color: #06c!important;
    text-align: center;
    line-height: 70rpx;
}

.u8_insert_close {
    display: flex;
    position: relative;
    left: calc(50% - 35rpx);
    top: calc(40% - 270rpx);
}

.u8_insert_close .image {
    width: 50rpx!important;
    height: 50rpx!important;
    z-index: 2;
}

.u8_insert_content1 {
    position: relative;
    display: flex;
    width: 600rpx!important;
    overflow: hidden;
    left: calc(50% - 300rpx);
    top: calc(50% - 250rpx);
}

.u8_insert_adimg {
    width: 100%;
}

.u8_insert_close1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 34rpx!important;
    height: 34rpx!important;
    padding: 10rpx;
    z-index: 2;
}

.u8_fixed_wrap {
    position: fixed;
    display: flex;
    width: 110rpx!important;
    height: 110rpx!important;
    right: 40rpx;
    bottom: 140rpx;
    z-index: 9998;
}

.u8_fixed_close {
    position: absolute;
    top: -10rpx;
    right: -14rpx;
    width: 26rpx!important;
    height: 26rpx!important;
    z-index: 2;
}

.u8_fixed_img {
    width: 100%;
    border-radius: 50%;
}

.u8AD_nav {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>