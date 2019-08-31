import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
    //跨组建方法
  mutations: {
    addItem (state,value){
        state.list.push(value);
    }
  },
  actions: {

  }
})
