import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from './modules/user-info'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userInfo,
  }
})
