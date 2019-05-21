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
      <div v-for="item in nav" :key='item' @click="navView">
        <img :src="item.imgsrc" alt="理论">
        <p>{{item.name}}</p>
      </div>
    </nav>
    <!-- 个人小程序直接打开微信公众号链接 -->
    <div class="container">
      <p class="outside-reading">课外阅读:</p>
      <div v-for="item in cardTeam" @click="bindView" :key='item' class="article">
        <img :src="item.imgsrc" alt="图"/>
        <div class="number-wrapper">
          <p class="name">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [{
        'name':'下载中心',
        'imgsrc':'/static/images/box_theory.png'
      }, {
        'name':'课外实践',
        'imgsrc':'/static/images/box_practice.png'
      }, {
        'name':'成绩评定',
        'imgsrc':'/static/images/box_self.png'
      }],
      cardTeam: [{
        'viewid': '1',
        'imgsrc': '/static/images/article/title1.jpg',
        'name': '测绘无人机的应用前景'
      }, {
        'viewid': '2',
        'imgsrc': '/static/images/article/title2.jpg',
        'name': '摄影测量到底是一个什么样的专业'
      }, {
        'viewid': '3',
        'imgsrc': '/static/images/article/title3.jpg',
        'name': '北斗导航系统有多厉害'
      }, {
        'viewid': '4',
        'imgsrc': '/static/images/article/title4.jpg',
        'name': '为什么看地图总觉得美国面积比中国大很多'
      }]
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
    },
    bindView (e) {
      let t = e.currentTarget.dataset.eventid
      let idx = t.split('_')[1]
      console.log(idx)
      wx.navigateTo({
        url: '../article/main?idx=' + idx
      })
    },
    navView (e) {
      let t = e.currentTarget.dataset.eventid;
      let idx = parseInt(t.split('_')[1]);
      switch (idx){
        case 0:
          wx.navigateTo({
            url: '../download/main'
          })
          break;
        case 1:
          wx.navigateTo({
            url: '../download/main'
          })
          break;
        case 2:
          wx.navigateTo({
            url: '../grade/main'
          })
          break;
      }
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
    background-color: @bg;
  }
  .banner{
    width: 100%;
  }
  .banner img{
    width: 100%;
    height: 100%;
  }

  /* 导航栏 */
  nav{
    display: flex;
    justify-content: space-around;
    margin: 30rpx 0 0 0;
  }
  nav div img{
    width: 120rpx;
    height: 120rpx;
    border-radius: 20rpx;
    background-color: #fff;
  }
  nav div p{
    text-align: center;
    font-size: 30rpx;
  }
  
  // 文章样式
  .container{
    padding: 20rpx 20rpx;
    width: 100%;
    overflow: hidden;
  }
  .outside-reading{
    font: bold 40rpx/80rpx sans-serif;
    color: @text-dark;
    margin: 0 auto 0 0;
  }
  .container .article{
    width: 100%;
    margin-bottom: 30rpx;
    background-color: #fff;
    border-bottom: solid 1rpx @line;
    border-radius: 10rpx;
  }
  .article img{
    width: 710rpx;
    height: 260rpx;
    margin: 0;
    padding: 0;
  }
  .article p{
    color: @text-dark;
    font: 32rpx/60rpx sans-serif;
    display: inline-block;
    padding: 0 20rpx 10rpx 20rpx;
  }
</style>
