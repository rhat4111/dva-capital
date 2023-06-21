const actions = {
  resetGlobalState({ commit }) {
    commit("RESET_FUNDS_STATE");
  },
  fixFooter({ commit }, payload) {
    commit("setLoading", payload);
  }
};

export default {
  actions
};
