import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.css'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

//添加事件总线
Vue.prototype.$bus=new Vue()

//安装toast插件
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载的300ms的延迟
Vue.use(VueLazyLoad,{
  loading:require('../src/assets/img/common/placeholder.png')
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
