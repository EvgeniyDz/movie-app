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
import { onMounted, ref } from "vue";
export default {
  setup() {
    const showDismissibleAlert = ref(false);
    const fetching = ref(false);

    const showAlert = () => {
      showDismissibleAlert.value = true;
    };

    onMounted(async () => {
      fetching.value = true;
      const result = await getTopFilms();
      fetching.value = false;
      if (result.data.errorMessage) {
        showAlert();
      }
      console.log(result.data.errorMessage);
    });
    // const redirect = (path) => {
    //   router.push(path);
    // };

    return {
      showDismissibleAlert,
      fetching,
    };
  },
};
</script>
