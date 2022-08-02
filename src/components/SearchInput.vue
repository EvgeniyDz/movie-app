<template>
  <div class="input-wrap">
    <b-form-input
      v-model="searchText"
      type="search"
      placeholder="Search movie"
      v-debounce:1s="handleChange"
    ></b-form-input>
  </div>
</template>

<script>
import { ref } from "vue";
import { vue3Debounce } from "vue-debounce";

export default {
  directives: {
    debounce: vue3Debounce({ lock: true }),
  },
  setup(props, { emit }) {
    const searchText = ref("");

    const handleChange = (e) => {
      emit("handlerSearch", e);
    };
    return {
      searchText,
      handleChange,
    };
  },
};
</script>
