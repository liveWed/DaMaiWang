import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mock from 'mockjs'
import './mock/mocks'
import Swiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Swiper)
Vue.use(ElementUI)
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Mock,
  render: h => h(App)
}).$mount('#app')
