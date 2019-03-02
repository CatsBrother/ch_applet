<template>
  <div>
    <div class="tag">
      <a href="#">学习笔记</a>
      <a href="#">课程记录</a>
    </div>
    <!-- 学习笔记 -->
    <div v-for="item in note">
      <article class="note">
        <h3>{{item.title}}</h3>
        <p>{{item.content}}</p>
        <div class="footer">
          <span>{{item.lesson}}</span>
          <span>{{item.date}}</span>
        </div>
      </article>
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
      ]
    }
  },

  created () {
  }
}
</script>

<style lang="less">
  @import "./../../theme.less";
  div{
    background: @bg;
  }
</style>
