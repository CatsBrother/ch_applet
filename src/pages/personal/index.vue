<template>
  <div>
    <button v-if="!userInfo" open-type="getUserInfo"  @getuserinfo="bindGetUserInfo">登陆</button>
    <!-- 个人信息 -->
    <div v-if="userInfo" class="information">
      <img v-bind:src="userInfo.avatarUrl" alt="头像">
      <div class="infor-text">
        <p>昵称：{{userInfo.nickName}}</p>
        <p>学号：{{stu_num}}</p>
      </div>
    </div>
    <!-- 签到 -->
    <div class="sign" @click="getLocation">
      <button>签到</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: '',
      stu_num: 'B15090704'
    }
  },

  methods: {
    bindGetUserInfo (e) {
      console.log(e.mp.detail.userInfo)
      this.userInfo = e.mp.detail.userInfo
    },
    getLocation () {
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          // const latitude = res.latitude
          // const longitude = res.longitude
          // const speed = res.speed
          // const accuracy = res.accuracy
          console.log(res)
        }
      })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="less">
@import "./../../theme.less";
.information{
  margin: 10rpx;
  display: flex;
  border: solid 2rpx @border;
  border-radius: 20rpx;
  background-color: @bg-blue;
}
.information p{
  color: @text-dark;
  font: 30rpx/80rpx Sans-serif;
}
.information img{
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
  border: solid 2rpx @border;
  margin: 20rpx;
  display: inline-block;
}
.information .infor-text{
  padding: 40rpx;
}
</style>
