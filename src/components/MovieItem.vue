<template>
  <b-card
    :title="props.title"
    :img-src="props.image"
    img-alt="Image"
    img-top
    class="custom-card"
  >
    <b-card-text>
      <p>Year: {{ props.year }}</p>
      <p>Crew: {{ props.crew }}</p>
      <p>Rating: {{ props.imDbRating }}</p>
    </b-card-text>
    <b-button
      @click="handleClick"
      class="mt-1"
      :variant="isFavorite ? 'danger' : 'primary'"
      >{{ isFavorite ? "Remove from favorite" : "Add to favorite" }}</b-button
    >
  </b-card>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    id: String,
    title: String,
    year: String,
    image: String,
    crew: String,
    imDbRating: String,
  },
  setup(props) {
    const store = useStore();
    const isFavorite = computed(() =>
      store.state.movies.favoriteIds.includes(props.id)
    );
    const addToFavorite = (e) => store.commit("movies/addFavorite", e);
    const removeFromFavorite = (e) => store.commit("movies/removeFavorite", e);

    const handleClick = () => {
      if (!isFavorite.value) {
        addToFavorite(props.id);
      } else {
        removeFromFavorite(props.id);
      }
    };
    return {
      props,
      isFavorite,
      handleClick,
    };
  },
};
</script>
