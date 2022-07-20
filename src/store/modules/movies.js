import { PAGINATION_LENGHT } from "../../constans/constans";

const state = {
  allMovies: [],
};
const mutations = {
  setAllMovies(state, payload) {
    state.allMovies = payload;
  },
};
const getters = {
  getPaginatedMovies: (state) => (page) => {
    return state.allMovies.slice(
      page === 1 ? 0 : PAGINATION_LENGHT * (page - 1),
      PAGINATION_LENGHT * page
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
