<template>
  <div class="header">
      <p>MovieApp</p>
        <b-button @click="redirect('/')" squared>Home</b-button>
        <b-button @click="redirect('/favorite')" squared>Favorite</b-button>
    </div>
</template>

<script>
import router from '@/router'

export default {
setup() {
  const redirect = (path) => {
    router.push(path);
  }

      return {
      redirect
    }
}
}
</script>