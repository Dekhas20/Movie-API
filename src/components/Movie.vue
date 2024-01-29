<template>
  <div class="card">
    <img :src="movie.Poster" @error="handleImageError()" :alt="movie.Title" />
    <div class="card-body">
      <h3>{{ movie.Title }}</h3>
      <p>{{ movie.Year }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

function handleImageError() {
  props.movie.Poster =
    "https://via.placeholder.com/300x450?text=Image+not+found";
}
</script>

<style>
.card {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  gap: 10px;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

img {
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
</style>