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
  </b-card>
</template>

<script>
export default {
  props: {
    title: String,
    year: String,
    image: String,
    crew: String,
    imDbRating: String,
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>
