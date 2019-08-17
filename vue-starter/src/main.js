import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'

import globals from './globals'
// import Popper from 'popper.js'
import * as api from './Api'

Vue.prototype.$api = api;

// Required to enable animations on dropdowns/tooltips/popovers
// Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = false

Vue.use(BootstrapVue)

api.allHandle.handleSuccess = function (response, callback,error) {
  let body = response.data;

  switch (body.event){
    case 'SUCCESS':
      if(callback){
        callback(body.data);
      }
      break;
    case 'ERROR':
      Vue.prototype.$notify.error({
        title: 'Error',
        message: body.describe
      });
      if(error){
        error(body);
      }
      break;
    case 'RANGE_NOT_SUPPORTED':
      Vue.prototype.$notify.error({
        title: '操作提示',
        message: body.describe
      });
      if(error){
        error(body);
      }
      break;
    case 'EXCEPTION':
      Vue.prototype.$notify.error({
        title: '操作提示',
        message: body.describe
      });
      if(error){
        error(body);
      }
      break;
    case 'UNAUTHORIZED':
      router.push({name:'userlogin'});
      break;
    default:
      Vue.prototype.$notify.error({
        title: '操作提示',
        message: body.describe
      });
  }
};
api.allHandle.handleCatch = function (error) {
  console.log(error);
};

// Global RTL flag
Vue.mixin({
  data: globals
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
