import { createStore } from "vuex";
import movies from "./modules/movies";

// Create a new store instance.
export default createStore({
  modules: {
    movies,
  },
});
