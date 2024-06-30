import {createApp} from 'vue'
import App from './App'
import {$http} from "@escook/request-miniprogram"

$http.baseUrl = 'https://api-hmugo-web.itheima.net'
uni.$http = $http

$http.beforeRequest = function(option) {
	wx.showLoading({
		title: "数据加载中"
	})
}

$http.afterRequest = function(option) {
	wx.hideLoading()
}

uni.$showMsg =(msg)=>{
	uni.showToast({
		title:msg,
		duration:2000,
		icon: "none"
	})
} 

App.mpType = 'app'
const app = createApp(App)
app.mount('#app')