<template>
  <div>
    <!-- 轮播图 -->
    <swiper class="banner" indicator-dots="true" autoplay="true" interval="5000" circular="true">
      <swiper-item><img src="/static/images/1.png"/></swiper-item>
      <swiper-item><img src="/static/images/2.png"/></swiper-item>
      <swiper-item><img src="/static/images/3.png"/></swiper-item>
      <swiper-item><img src="/static/images/4.png"/></swiper-item>
    </swiper>
    <!-- 导航栏 -->
    <nav>
      <ul>
        <li v-for="item in nav">{{item}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      nav: ['课程', '资料', '习题'],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style>
  .banner{
    width: 100%;
  }
  .banner img{
    width: 100%;
    height: 100%;
  }

  /* 导航栏 */
  nav ul li{
    width: 140rpx;
    height: 80rpx;
    border: 1rpx solid #000;
    border-radius: 20rpx;
    text-align: center;
    line-height: 78rpx;
    margin: 20rpx;
  }
  nav ul{
    display: flex;
    justify-content: space-around;
  }
</style>
