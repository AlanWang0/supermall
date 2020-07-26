import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"

Vue.config.productionTip = false

//通过原型给Vue加一个$bus属性(事件总线)--给这个$bus赋值是Vue实例
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
