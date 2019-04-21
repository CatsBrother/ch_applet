<template>
  <div>
    <map id="map" 
      @latitude = "latitude" 
      @longitude = "longitude" 
      scale="14" 
      show-location 
      style="width: 100%; height: 700rpx;">
    </map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 指定经纬度
      aim_latitude: 32.060255,
      aim_longitude: 118.796877,
      // 当前经纬度
      latitude: '',
      longitude: ''
    }
  },
  // mathod: {
  //   getLocation () {
  //     wx.getLocation({
  //       type: 'wgs84',
  //       success (res) {
  //         console.log('lication', res)
  //       }
  //     })
  //   }
  // }
  onLoad: function (options) {
    let that = this
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log('lication', res)
        console.log('llllllllllllaaaaaaaaaaa', res.latitude)
        that.latitude = res.latitude
        that.longitude = res.longitude
      }
    })
  }
}
</script>

