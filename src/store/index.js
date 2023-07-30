import { createStore } from 'vuex'

export default createStore({
  state: {
    isUser: false
  },
  getters: {
  },
  mutations: {
    changeIsUser(state,value){
      state.isUser = value
    }
  },
  actions: {
  },
  modules: {
  }
})
