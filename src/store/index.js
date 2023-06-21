import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import defaultState from "@/store/default-state";
import funds from "@/store/modules/funds";
import returns from "@/store/modules/returns";

Vue.use(Vuex);

const persistedData = createPersistedState({
  paths: ["funds", "returns"]
});

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: defaultState.actions,
  modules: {
    funds,
    returns
  },
  plugins: [persistedData]
});
