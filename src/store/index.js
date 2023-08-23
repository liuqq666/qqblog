import { createStore } from 'vuex'

export default createStore({
  state: {
    IsUser:false
  },
  getters: {
  },
  mutations: {
    changeIsUser(state,value){
      state.IsUser = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
