import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import VueJWT from 'vuejs-jwt'

Vue.config.productionTip = false

Vue.use(VueJWT)
Vue.use(VueCookies)
VueCookies.config('7d')

new Vue({
  render: h => h(App),
}).$mount('#app')
