<template>
  <div class="header">
    <p>MovieApp</p>
    <b-button @click="redirect('/')" squared>Home</b-button>
    <b-button class="position-relative" @click="redirect('/favorite')" squared
      >Favorite
      <b-badge v-if="favoriteLength > 0" variant="danger" text-indicator>
        {{ favoriteLength }}
      </b-badge></b-button
    >
  </div>
</template>

<script>
import router from "@/router";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const favoriteLength = computed(() =>
      store.getters["movies/getFavoriteLength"]()
    );
    const redirect = (path) => {
      router.push(path);
    };

    return {
      redirect,
      favoriteLength,
    };
  },
};
</script>
