<template>
  <div class="background" @click="preventCloseModal ? null : closeModal()">
    <div
      class="modal"
      @mouseenter="preventCloseModal = true"
      @mouseleave="preventCloseModal = false"
    >
      <div class="header">
        <h3>{{ movie.Title }}</h3>
        <button class="close" @click="closeModal()">X</button>
      </div>
      <div class="body">
        <img
          class="poster"
          :src="movie.Poster"
          @error="handleImageError()"
          :alt="movie.Title"
        />
        <div class="info">
          <p><strong>Director:</strong> {{ movie.Director }}</p>
          <p><strong>Actores:</strong> {{ movie.Actors }}</p>
          <p><strong>Genero:</strong> {{ movie.Genre }}</p>
          <p><strong>Idioma:</strong> {{ movie.Language }}</p>
          <p><strong>Premios:</strong> {{ movie.Awards }}</p>
          <p><strong>Fecha de estreno:</strong> {{ movie.Released }}</p>
          <p><strong>Duración:</strong> {{ movie.Runtime }}</p>
          <p><strong>País:</strong> {{ movie.Country }}</p>
          <p><strong>Escritor:</strong> {{ movie.Writer }}</p>
          <p><strong>Producción:</strong> {{ movie.Production }}</p>
          <p><strong>Calificación:</strong> {{ movie.imdbRating }}</p>
          <p><strong>Reseña:</strong> {{ movie.Plot }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

let preventCloseModal = false;

const emit = defineEmits(["closeModal"]);
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

function closeModal() {
  emit("closeModal");
}

function handleImageError() {
  props.movie.Poster =
    "https://via.placeholder.com/300x450?text=Image+not+found";
}
</script>

<style>
.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 90%;
  height: auto;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  background: #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 70vw;
  border: 1px solid #aaaaaa;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #aaaaaa;
}

button {
  padding: 5px 10px !important;
}

.body {
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  max-height: 80vh;
  gap: 20px;
}

.poster {
}

.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 850px) {
  .modal {
    max-width: 90vw;
  }
}

@media (max-width: 660px) {
  .modal {
    max-width: 95vw;
  }

  .body {
    grid-template-columns: 1fr;
    gap: 10px;
    overflow: auto;
  }
}
</style>