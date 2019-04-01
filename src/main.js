import Vue from 'vue'
import App from './App.vue'
import myScript from './scripts'

// var VueWeb3 = require('vue-web3')
// import VueWeb3 from 'vue-web3'
 
// explicit installation required in module environments
// Vue.use(VueWeb3)

Vue.use(myScript)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  myScript
}).$mount('#app')
