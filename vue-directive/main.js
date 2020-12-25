import Vue from 'vue'
import Directives from './directives/index.js'
import LazyLoad from './directives/lazyload.js'
import App from './App.vue'

Vue.use(Directives)
Vue.use(LazyLoad, {default: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png'})

new Vue({
  el: '#app',
  render: h => h(App)
})