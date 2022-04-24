/* eslint-disable no-undef */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import compositionApi from '@vue/compositionApi'

Vue.use(compositionApi)
Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App),
  router,
}).$mount('#app')
