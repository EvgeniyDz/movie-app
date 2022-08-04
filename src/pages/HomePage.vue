<template>
  <div v-if="fetching" class="d-flex justify-content-center mt-2">
    <b-spinner variant="primary" />
  </div>
  <div v-else class="page-wrap">
    <SearchInput @handlerSearch="handlerSearch" />
    <template v-if="!filteredMovies">
      <b-card-group deck>
        <MovieItem
          v-for="item in paginatedMovies"
          :key="item.id"
          :title="item.title"
          :image="item.image"
          :year="item.year"
          :crew="item.crew"
          :imDbRating="item.imDbRating"
          :id="item.id"
        />
      </b-card-group>
      <b-pagination
        v-if="!filteredMovies"
        v-model="currentPage"
        :total-rows="allMovies.length"
        :per-page="PAGINATION_LENGHT"
        first-text="⏮"
        prev-text="⏪"
        next-text="⏩"
        last-text="⏭"
        class="mt-4"
        @page-click="paginationHandler"
      />
    </template>
    <b-card-group deck v-else>
      <MovieItem
        v-for="item in filteredMovies.value"
        :key="item.id"
        :title="item.title"
        :image="item.image"
        :year="item.year"
        :crew="item.crew"
        :imDbRating="item.imDbRating"
        :id="item.id"
      />
    </b-card-group>
  </div>
  <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
    Movies request error
  </b-alert>
</template>

<script>
import { getTopFilms } from "../services/apiServices";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import MovieItem from "../components/MovieItem.vue";
import SearchInput from "../components/SearchInput.vue";
import { PAGINATION_LENGHT } from "../constans/constans";
export default {
  components: { MovieItem, SearchInput },
  setup() {
    const showDismissibleAlert = ref(false);
    const fetching = ref(false);
    const currentPage = ref(1);
    const filteredMovies = ref(undefined);

    const store = useStore();

    const allMovies = computed(() => store.state.movies.allMovies);
    const paginatedMovies = computed(() =>
      store.getters["movies/getPaginatedMovies"](currentPage.value)
    );
    const setAllMovies = (e) => store.commit("movies/setAllMovies", e);

    const showAlert = () => {
      showDismissibleAlert.value = true;
    };

    const handlerSearch = (txt) => {
      const searchedMovies = computed(() =>
        store.getters["movies/getSearchedMovies"](txt)
      );
      if (txt.length === 0) {
        filteredMovies.value = undefined;
        if (router.currentRoute.value.query.search) {
          router.replace({
            path: router.currentRoute.value.path,
          });
        }
      } else {
        filteredMovies.value = searchedMovies;
        router.replace({
          path: router.currentRoute.value.path,
          query: { search: txt },
        });
      }
    };

    const paginationHandler = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const getAllMovies = async () => {
      if (allMovies.value.length > 0) return;
      fetching.value = true;
      const result = await getTopFilms();
      fetching.value = false;
      if (result.data.errorMessage) {
        showAlert();
      } else {
        setAllMovies(result.data.items);
      }
    };

    onMounted(() => {
      getAllMovies();
      if (router.currentRoute.value.query.search) {
        handlerSearch(router.currentRoute.value.query.search);
      }
    });

    return {
      showDismissibleAlert,
      fetching,
      setAllMovies,
      allMovies,
      paginatedMovies,
      currentPage,
      paginationHandler,
      PAGINATION_LENGHT,
      handlerSearch,
      filteredMovies,
    };
  },
};
</script>
