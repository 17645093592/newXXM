// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from '@/utils/global'
import store from './store'
import utils from '@/utils/utils'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/reset.css'
// import './css/element-variables.scss';

Vue.prototype.global = global
Vue.prototype.utils = utils

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
