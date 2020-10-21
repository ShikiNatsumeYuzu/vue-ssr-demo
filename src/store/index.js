import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
  });
}

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
