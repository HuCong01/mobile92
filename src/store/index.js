import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // vuex通过localStorage获得用户token等信息
    user: auth.getUser()
  },
  mutations: {
    // 参数state是固定的，代表vuex本身的state，用以获取其中的共享数据
    updateUser (state, user) {
      // 更新vuex中用户token等信息
      state.user = user
      // 更新localStorage的用户token等信息
      auth.setUser(user)
    },
    clearUser (state, user) {
      // 删除vuex中用户token等信息
      state.user = {}
      // 清除localStorage的用户token等信息
      auth.setUser(user)
    }

  },
  actions: {
  },
  modules: {
  }
})
