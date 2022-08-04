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
import { ref, onMounted } from "vue";
import { vue3Debounce } from "vue-debounce";
import router from "@/router";

export default {
  directives: {
    debounce: vue3Debounce({ lock: true, listenTo: "input" }),
  },
  setup(props, { emit }) {
    const searchText = ref("");

    const handleChange = (e) => {
      emit("handlerSearch", e);
    };

    onMounted(() => {
      if (router.currentRoute.value.query.search) {
        searchText.value = router.currentRoute.value.query.search;
      }
    });
    return {
      searchText,
      handleChange,
    };
  },
};
</script>
