import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        "navigationBarTitleText": "学习",
        "usingComponents":{
            "txv-video":"plugin://myPlugin/video"
        }    
    }
}
