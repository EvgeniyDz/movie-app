<template>
  <div v-if="fetching" class="d-flex justify-content-center mt-2">
    <b-spinner variant="primary" />
  </div>
  <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
    Movies request error
  </b-alert>
</template>

<script>
import { getTopFilms } from "../services/apiServices";
// import { SET_ALL_MOVIES } from "../store/mutationsTypes";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const showDismissibleAlert = ref(false);
    const fetching = ref(false);

    const store = useStore();

    const allMovies = computed(() => store.state.movies.allMovies);
    const setAllMovies = (e) => store.commit("movies/setAllMovies", e);

    const showAlert = () => {
      showDismissibleAlert.value = true;
    };

    onMounted(async () => {
      if (allMovies.value.length > 0) return;
      fetching.value = true;
      const result = await getTopFilms();
      fetching.value = false;
      if (result.data.errorMessage) {
        showAlert();
      } else {
        setAllMovies(result.data.items);
      }
    });

    return {
      showDismissibleAlert,
      fetching,
      setAllMovies,
      allMovies,
    };
  },
};
</script>
