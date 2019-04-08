<template>
  <div>
    <web-view :src="url[0]"></web-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: [
        'http://mp.weixin.qq.com/s?__biz=MzUzMTk5NzA0MA==&mid=2247483659&idx=1&sn=f6075cd1d7b58a1d06e5a827e4929867&chksm=fabb4914cdccc002332098a18aff5915d307058fcb71c66d08ff17bb3deea7a9500538409567&mpshare=1&scene=23&srcid=#rd',
        'http://mp.weixin.qq.com/s?__biz=MzUzMTk5NzA0MA==&mid=2247483664&idx=1&sn=edcea8aba07974d2b0acd6da557a187a&chksm=fabb490fcdccc019884f0d4eff3a655e87f80ff53c60f280c7a29e80be1b20980828aec071b2&mpshare=1&scene=23&srcid=#rd',
        'http://mp.weixin.qq.com/s?__biz=MzUzMTk5NzA0MA==&mid=2247483669&idx=1&sn=29f2f6e7da78a1b241d3a56675381a86&chksm=fabb490acdccc01c67da9f2a1f01f70b3c141d0caf6472ec216e0d9ea0e9d53fae1751d9b963&mpshare=1&scene=23&srcid=#rd',
        'http://mp.weixin.qq.com/s?__biz=MzUzMTk5NzA0MA==&mid=2247483679&idx=1&sn=b53854b708e97f1f875aa9650dd6fd90&chksm=fabb4900cdccc016e68d09364ea318c36ef206fe5851328623bf52aad80cf687008d09b4b076&mpshare=1&scene=23&srcid=#rd'
      ]
    }
  },

  onLoad: function (options) {
    console.log(options.idx)
  }
}
</script>

