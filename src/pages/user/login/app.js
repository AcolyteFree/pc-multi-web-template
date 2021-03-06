import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'
import './app.ts'
import 'es6-promise/auto'

Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
