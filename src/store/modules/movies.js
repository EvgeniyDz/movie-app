// import { SET_ALL_MOVIES } from "../mutationsTypes";

const state = {
  allMovies: [],
};
const mutations = {
  setAllMovies(state, payload) {
    state.allMovies = payload;
  },
};
const getters = {
  getMovies(state) {
    return state.allMovies;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
