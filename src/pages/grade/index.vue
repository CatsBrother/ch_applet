<template>
  <div>
    <div class="block">
        <p class="annotation">请输入考试成绩比例,小数形式，如70%为0.7</p>
        <div class="a_input">
          <p class="ask">考试成绩占比：</p>
          <input type="text" name="percentage" id="percentage"/>
        </div>
    </div>
    <div class="block">
        <p class="annotation">请输入分数</p>
        <div class="a_input">
            <p class="ask">考勤成绩：</p>
            <input type="text" name="check" id="check"/>
        </div>
        <div class="a_input">
            <p class="ask">实验成绩：</p>
            <input type="text" name="test" id="test"/>
        </div>
        <div class="a_input">
            <p class="ask">考试成绩：</p>
            <input type="text" name="exam" id="exam"/>
        </div>
        <div class="a_input">
            <p class="ask">其他成绩：</p>
            <input type="text" name="else" id="else"/>
        </div>
    </div>
    <div class="block">
        <p class="annotation">点击按钮进行成绩计算</p>
        <button>总评成绩</button>
        <p></p>
    </div>
    <p class="last_annotation">计算按照考试成绩*考试成绩占比+平时成绩计算，由于各科老师习惯将平时成绩的满分定为平时成绩在百分制计算中所占比例，因此平时成绩不再按比例加权</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
    
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="less">
@import "./../../theme.less";
input{
  border: solid 1rpx @line;
  display: inline-block;
  height: 70rpx;
  width: 200rpx;
  border-radius: 10rpx;
  padding: 0 20rpx;
}
.annotation{
  color: @text-light;
  font-size: 30rpx;
}
.ask{
  display:inline-block;
  font: 36rpx/70rpx @text-middle sans-serif;
}
.block{
  margin: 0 30rpx;
  padding: 40rpx 10rpx;
  border-bottom: solid 1rpx @border;
}
.a_input{
  display: flex;
  height: 80rpx;
  align-items: center;
  margin: 10rpx 0;
}
.last_annotation{
  color: @text-light;
  font-size: 28rpx;
  padding: 30rpx;
}
</style>
