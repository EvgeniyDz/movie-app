<template>
  <div class="page-wrap">
    <b-card-group deck v-if="favoriteMovies.length > 0">
      <MovieItem
        v-for="item in favoriteMovies"
        :key="item.id"
        :title="item.title"
        :image="item.image"
        :year="item.year"
        :crew="item.crew"
        :imDbRating="item.imDbRating"
        :id="item.id"
      />
    </b-card-group>
    <p v-else>Movies added to favorites will be displayed here</p>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: { MovieItem },
  setup() {
    const store = useStore();
    const favoriteMovies = computed(() =>
      store.getters["movies/getFavoriteMovies"]()
    );

    return {
      favoriteMovies,
    };
  },
};
</script>
