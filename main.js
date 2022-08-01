import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 全局mixins，用于实现setData等功能';
import Mixin from './polyfill/mixins';

Vue.mixin(Mixin);

Vue.config.productionTip = false;

App.mpType = 'app'


import store from '@/store';
let vuexStore = require('@/store/$u.mixin.js');
Vue.mixin(vuexStore);

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
	store,
    ...App
})

import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

app.$mount()


