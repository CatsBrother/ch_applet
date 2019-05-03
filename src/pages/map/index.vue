<template>
  <div>
    <map id="map" 
      :longitude = "longitude" 
      :latitude = "latitude" 
      scale="18" 
      :markers="markers" 
      :circle="circle" 
      show-location 
      style="width: 100%; height: 800rpx;">
    </map>
    <div class="site">
      <img src="../../../static/images/GPS.png" alt="">
      <p class="now">当前位置：</p>
      <p class="nowsite">{{nowsite}}</p>
    </div>
    <div class="ans">
      <button @click="sign" v-if="!msg">确认签到</button>
      <p v-if="msg">{{msg}}</p>
    </div>
  </div>
</template>

<script>

import QQMapWX from '../../../static/qqmap-wx-jssdk.js';
export default {
  data () {
    return {
      // 指定经纬度
      aim_latitude: 32.113950,
      aim_longitude: 118.92920,
      // 当前经纬度
      latitude: '',
      longitude: '',
      markers: [{
        iconPath: '../../../static/images/GPS.png',
        id: 0,
        latitude: 32.113950,
        longitude: 118.92920,
        width: 30,
        height: 30
      }],
      circle: [{
        latitude: 32.113950,
        longitude: 118.92920,
        color: '#666',
        fillColor: '#aaa',
        radius: 3000
      }],
      nowsite: '',   // 当前位置
      msg:''
    }
  },

  methods: {
    getAddress (lat,lng) {
      let that = this;
      let qqmapsdk = new QQMapWX({
        key: 'XEOBZ-WMEKU-MEEVF-2A3WV-XYRNK-WLBS6'
      });
      qqmapsdk.reverseGeocoder({
        location: {
          latitude: lat,
          longitude: lng
        },
        success (res) {
          console.log('success', res.result.address);
          that.nowsite =  res.result.address;
        },
        fail (res) {
          console.log('error');
        }
      })
    },
    sign () {
      let aim_distance = 1000
      let lat = wx.getStorageSync('latitude');
      let lng = wx.getStorageSync('longitude');
      let distance = 100000 * Math.sqrt(Math.pow(lat - this.aim_latitude,2)+Math.pow(lng - this.aim_longitude,2));
      console.log('目标点距离',distance);
      if(distance < aim_distance){
        console.log('签到成功');
        this.msg = '签到成功';
      }else if(distance >= aim_distance){
        console.log('签到失败');
        this.msg = '签到失败';
      }
    }
  },
  onLoad: function (options) {
    let that = this
    wx.getLocation({
      type: 'gcj02',
      success (res) {
        console.log('lication', res);
        that.latitude = res.latitude;
        that.longitude = res.longitude;
        wx.setStorageSync('latitude', res.latitude);
        wx.setStorageSync('longitude', res.longitude);
      }
    });
    let lat = wx.getStorageSync('latitude');
    let lng = wx.getStorageSync('longitude');
    that.getAddress(lat,lng);
  }
}
</script>
<style>
  html{
    background-color: #f7f7f7;
  }
  .site{
    margin: 20rpx;
    border: solid 1px #bdbdbd;
    border-radius: 20rpx;
    position: relative;
    background-color: #fff;
  }
  .site img{
    width: 80rpx;
    height: 80rpx;
    margin: 20rpx;
  }
  .site .now{
    position: absolute;
    left: 120rpx;
    top: 40rpx;
  }
  .site .nowsite{
    padding: 0 40rpx 40rpx 20rpx;
  }
  .ans{
    border: 1rpx solid #dbdbdb;
    margin: 20rpx;
    padding: 20rpx;
    background-color: #fff;
    border-radius: 20rpx;
  }
  .ans button{
    background-color: #fff;
  }
  .ans button::after{
    border: none; 
  }
</style>
