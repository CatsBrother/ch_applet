import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: ['^pages/index/main'],
        window: {
          backgroundTextStyle: 'light',
          navigationBarBackgroundColor: '#00B26A',
          navigationBarTitleText: 'WeChat',
          navigationBarTextStyle: 'black',
        },
        "plugins":{
          "myPlugin":{
          "version":"1.2.1",
          "provider":"wxa75efa648b60994b"
          }
        }
    }
}
