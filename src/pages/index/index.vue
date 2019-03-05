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
        <li v-for="item in nav" >{{item}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: ['课程', '资料', '习题']
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

<style lang="less">
@import "./../../theme.less";
  html{
    background-color: #f6f6f6;
  }
  .banner{
    width: 100%;
  }
  .banner img{
    width: 100%;
    height: 100%;
  }

  /* 导航栏 */
  nav ul li{
    width: 33.3%;
    height: 80rpx;
    border: 2rpx solid @border;
    text-align: center;
    line-height: 78rpx;
    color: @text-dark;
    background-color: #EFF7FF;
  }
  nav ul{
    display: flex;
  }
</style>
