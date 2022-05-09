import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
// import './plugins/element.js'
import lyfui from '../packages'
Vue.use(lyfui);

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
