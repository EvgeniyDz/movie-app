import { PAGINATION_LENGHT } from "../../constans/constans";

const state = {
  allMovies: [],
  favoriteIds: [],
};
const mutations = {
  setAllMovies(state, payload) {
    state.allMovies = payload;
  },
  addFavorite(state, payload) {
    state.favoriteIds = [...state.favoriteIds, payload];
  },
  removeFavorite(state, payload) {
    const newValue = state.favoriteIds.filter((el) => {
      return el !== payload;
    });
    state.favoriteIds = newValue;
  },
};
const getters = {
  getPaginatedMovies: (state) => (page) => {
    return state.allMovies.slice(
      page === 1 ? 0 : PAGINATION_LENGHT * (page - 1),
      PAGINATION_LENGHT * page
    );
  },
  getFavoriteMovies: (state) => () => {
    const result = state.allMovies.filter((el) => {
      return state.favoriteIds.includes(el.id);
    });
    return result;
  },
  getFavoriteLength: (state) => () => {
    return state.favoriteIds.length;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
