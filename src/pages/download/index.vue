<template>
  <div>
    <web-view :src="url"></web-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 课外阅读链接
      url: 'http://mp.weixin.qq.com/s?__biz=MzUzMTk5NzA0MA==&mid=2247483689&idx=1&sn=731509f574dd8744f1c4fad66b61ecc2&chksm=fabb4936cdccc0202a4a6761765a99883e8ebbe11ba5f5e85f952c3c3bb5c0bba2b0a9c12b7c&mpshare=1&scene=23&srcid=#rd',
      idx: 0
    }
  },
}
</script>

