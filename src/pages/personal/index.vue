<template>
  <div>
    <button open-type="getUserInfo"  @getuserinfo="bindGetUserInfo">获取用户信息</button>
    <div class="information">
      <img v-bind:src="userInfo.avatarUrl" alt="头像">
      <div class="infor-text">
        <p>昵称：{{userInfo.nickName}}</p>
        <p>学号：{{stu_num}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/OkDMzloNTP1IRkJoRmKRfq82KHThD9vibJH4XbHzicOpkoX0wtRZyK0bQl7cPRJzvvTCoe5h4tFgIv6GQVahopAg/132',
        city: 'Nanjing',
        country: 'China',
        gender: 2,
        language: 'zh_CN',
        nickName: '戳破的芝麻汤圆',
        province: 'Jiangsu'
      },
      stu_num: 'B15090704'
    }
  },

  methods: {
    bindGetUserInfo (e) {
      console.log(e.mp.detail.userInfo)
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
  padding: 10rpx;
  display: flex;
}
.information p{
  color: @text-dark;
  font: 24rpx/60rpx Sans-serif;
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
  padding: 50rpx;
}
</style>
