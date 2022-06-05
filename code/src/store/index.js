import { createStore } from 'vuex'

export default createStore({
  state: {
    userId:0
  },
  mutations: {
    setUserId(state,value){
    state.userId=value;
    }
  },
  actions: {
  },
  modules: {
  }
})
