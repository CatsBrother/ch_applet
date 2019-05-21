<template>
  <div class="page">
    <button v-if="!userInfo" open-type="getUserInfo"  @getuserinfo="bindGetUserInfo">登陆</button>
    <!-- 个人信息 -->
    <div v-if="userInfo" class="information">
      <img v-bind:src="userInfo.avatarUrl" alt="头像">
      <div class="infor-text">
        <p>昵称：{{userInfo.nickName}}</p>
        <p>学号：{{stu_num}}</p>
      </div>
    </div>
    <!-- 签到 成绩评定 -->
    <div class="btn">
      <button @click="turnToSign">签到</button>
      <button @click="turnToGrade">成绩评定</button>
      <button>课表</button>
    </div>
    <!-- 通知栏 -->
    <div class="msg_title">
      <img src="/static/images/msg.png">
      <h2>通知栏</h2>
    </div>
    <div class="messages">
      <div class="msg" v-for="msg in messages" :key="msg">
        <div class="point"></div>
        <h3>{{msg.title}}</h3>
        <p class="content">{{msg.content}}</p>
        <p class="date">{{msg.date}}</p>
      </div>
    </div>
    <!-- 每日任务 -->
    <div class="msg_title">
      <img src="/static/images/msg.png">
      <h2>每日任务</h2>
    </div>
    <div class="task" v-for="task in tasks" :key="task">
      <h3>{{task.title}}</h3>
      <p class="content">{{task.content}}</p>
      <button>DO</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: '',
      stu_num: 'B15090704',
      messages:[
        {
          title: '下周三前交实验报告',
          content: '下周三前交实验报告下周三前交实验报告下周三前交实验报告下周三前交实验报告@theme-middle',
          date: '5.20'
        },{
          title: '调课通知',
          content: '下周三的摄影测量课调到下下周二',
          date: '5.21'
        }
      ],
      tasks:[
        {
          title:'登陆',
          content:'每日登陆系统学习'
        },{
          title:'签到',
          content:'今天准时到教室学习了吗'
        },
        {
          title:'阅读文章',
          content:'阅读首页文章学习课外知识'
        },
        {
          title:'视听学习',
          content:'观看公开课视频学习'
        },
        {
          title:'每日答题',
          content:'每日答题检验学习成果'
        },{
          title:'分享',
          content:'分享有趣的知识给朋友一起学习吧'
        }
      ]
    }
  },

  methods: {
    bindGetUserInfo (e) {
      console.log(e.mp.detail.userInfo)
      this.userInfo = e.mp.detail.userInfo
    },
    turnToSign () {
      const url = '../map/main'
      wx.navigateTo({
        url
      })
    },
    turnToGrade () {
      const url = '../grade/main'
      wx.navigateTo({
        url
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
html{
  background-color: @bg;
}
button{
  background-color: @theme-middle;
  color: #fff;
}
.page{
  margin: 30rpx;
}
.information{
  margin: 10rpx 0;
  display: flex;
  // border: solid 2rpx @border;
  border-radius: 20rpx;
  background-color: @theme-dark;
}
.information p{
  color: #fff;
  font: 35rpx/80rpx Sans-serif;
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

// button
.btn{
  display: flex;
  justify-content:space-between;
  border-bottom: solid 1rpx @line;
}
.btn button{
  display: inline-block;
  padding: 0 40rpx;
  margin: 20rpx 0;
}

// 通知栏
.msg_title{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10rpx;
}
.msg_title img{
  width: 50rpx;
  height: 50rpx;
  margin: 10rpx;
}
.msg_title h2{
  font: 40rpx serif;
}
.msg{
  border-right: solid 10rpx @theme-dark;
  background-color: @theme-light;
  border-radius: 10rpx;
  padding: 15rpx 20rpx;
  margin-bottom: 15rpx;
}
.msg h3{
  font-weight:600;
  font-family: sans-serif;
  display: inline-block;
  color: @text-dark;
  font-size: 35rpx;
}
.msg .point{
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  margin: 0rpx 20rpx 10rpx 10rpx;
  display: inline-block;
  background-color: @theme-dark;
}
.content{
  font: 28rpx/40rpx serif;
  color: @text-middle;
  padding: 10rpx;
}
.msg .date{
  font: 28rpx serif;
  color: @text-light;
  padding: 0 10rpx;
}
.messages{
  border-bottom: solid 1rpx @line;
}
// 每日任务
.task{
  border-top: solid 1rpx @line;
  margin-bottom: 15rpx;
  position: relative;
}
.task h3{
  font: 35rpx sans-serif;
  padding: 15rpx 15rpx 0;
}
.task button{
  display: inline-block;
  padding: 0rpx 25rpx;
  font: 30rpx/55rpx sans-serif;
  position: absolute;
  right: 20rpx;
  top: 30rpx;
}
</style>
