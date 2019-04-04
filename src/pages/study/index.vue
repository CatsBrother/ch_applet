<template>
  <div>
    <div class="tag">
      <a href="#" v-bind:class="btn_choose?'bg_black':'bg_white'">学习笔记</a>
      <a href="#" v-bind:class="btn_choose?'bg_white':'bg_black'">待办清单</a>
    </div>
    <!-- 学习笔记 -->
    <div v-for="item in note" :key="item" v-if="btn_choose">
      <article class="note">
        <h3>{{item.title}}</h3>
        <p>{{item.content}}</p>
        <div class="footer">
          <span>{{item.lesson}}</span>
          <span class="one"></span>
          <span>{{item.date}}</span>
        </div>
      </article>
    </div>
    <!-- 待办清单 -->
    <div v-if="!btn_choose">
      <form class="task">
        <input type="text" placeholder="创建任务" class="text-task">        
        <button class="submit-task"></button>
      </form>
    </div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

export default {

  data () {
    return {
      note: [
        {
          title: '单相空间后方交会',
          content: '空间后方交会，是指利用航摄像片上三个以上不在一条直线上的控制点按共线方程计算该像片外方位元素的方法。是单幅影像解析过程中的一个步骤。',
          lesson: '摄影测量与遥感',
          date: '2019-02-07'
        }, {
          title: '单相空间后方交会',
          content: '空间后方交会，是指利用航摄像片上三个以上不在一条直线上的控制点按共线方程计算该像片外方位元素的方法。是单幅影像解析过程中的一个步骤。',
          lesson: '摄影测量与遥感',
          date: '2019-02-07'
        }, {
          title: '单相空间后方交会',
          content: '空间后方交会，是指利用航摄像片上三个以上不在一条直线上的控制点按共线方程计算该像片外方位元素的方法。是单幅影像解析过程中的一个步骤。',
          lesson: '摄影测量与遥感',
          date: '2019-02-07'
        }
      ],
      // 默认选择学习笔记
      btn_choose: false
    }
  },

  created () {
  }
}
</script>

<style lang="less">
  @import "./../../theme.less";
  *{
    border: none;
  }
  html{
    background: @bg;
  }
  button{
    margin: 0;
    padding: 0;
    border: none;  //自定义边框
    position: absolute;
}
  .tag{
    width: 500rpx;
    height: 60rpx;
    display: flex;
    margin: 30rpx auto;
    background-color: #fff;
    border: 1rpx solid @text-dark;
    border-radius: 10rpx;
    overflow: hidden;
  }
  .tag a{
    width: 250rpx;
    display: inline-block;
    line-height: 58rpx;
    text-align: center;
  }
  .bg_black{
    background-color: #000;
    color: #fff;
  }
  .bg_white{
    background-color: #fff;
    color: #000;
  }

  .note{
    width: 710rpx;
    padding: 20rpx 20rpx;
    margin-bottom: 20rpx;
    background-color: #fff;
  }
  .note h3{
    font: 35rpx/50rpx sans-serif;
    color: @text-dark;
  }
  .note p{
    font: 28rpx/45rpx sans-serif;
    color: @text-middle;
    padding: 10rpx 0;
  }
  .footer{
    display: flex;
    justify-content: left;
    font: 28rpx/40rpx sans-serif;
    color: @text-light;
    height: 40rpx;
  }
  .footer span{
    display: inline-block;
  }
  .footer .one{
    width: 1px;
    height: 40rpx;
    margin: 0 20rpx;
    border-right: solid 1px @text-light;
  }

  .task{
    width: 750rpx;
    display: flex;
    overflow: hidden;
    position: absolute;
    left: 25rpx;
  }
  .text-task{
    box-sizing: border-box;
    width: 600rpx;
    height: 100rpx;
    background-color: #fff;
    border-top-left-radius: 10rpx;
    border-bottom-left-radius: 10rpx;
    border: 1rpx solid @border;
    border-right: none;
    display: inline-block;
    padding: 0 20rpx;
  }
  .task button{
    border-radius: 0;
    height: 100rpx;
    width: 100rpx;
    border-top-right-radius: 10rpx;
    border-bottom-right-radius: 10rpx;
    border:1rpx solid @border;
    border-left: none;
    display: inline-block;
    background:url("../../../static/images/submit.png");
    background-size:90rpx 90rpx;
    background-repeat:no-repeat;
    background-position: center;
    background-color: #fff;
  }
</style>
