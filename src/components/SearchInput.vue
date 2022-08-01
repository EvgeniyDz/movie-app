<template>
  <div class="input-wrap">
    <b-form-input
      v-model="searchText"
      type="search"
      placeholder="Search movie"
    ></b-form-input>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const searchText = ref("");

    return {
      searchText,
    };
  },
};
</script>
