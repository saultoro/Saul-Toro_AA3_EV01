<template>

  <!-- Contenedor principal de la pantalla de confirmación -->
  <div class="container">

    <!-- Vista inicial: viaje confirmado -->
    <div v-if="!mostrarCalificacion">

      <!-- Título de confirmación del viaje -->
      <h1>Viaje Confirmado</h1>

      <!-- Mensaje informativo al usuario -->
      <p>Tu conductor llegará en pocos minutos.</p>

      <!-- Botón para finalizar el viaje -->
      <button @click="finalizarViaje">
        Finalizar
      </button>

    </div>

    <!-- Vista alternativa: sistema de calificación -->
    <div v-else>

      <!-- Título de calificación del conductor -->
      <h1>Califica tu conductor</h1>

      <!-- Sistema de estrellas para calificación -->
      <div class="stars">
        <span v-for="star in 5" :key="star" @click="calificar(star)">
          {{ star <= puntuacion ? '⭐' : '☆' }}
        </span>
      </div>

      <!-- Mensaje de agradecimiento al calificar -->
      <p v-if="puntuacion > 0">
        Gracias por tu calificación.
      </p>

    </div>

  </div>

</template>

<script setup>

// Importación de ref para variables reactivas
import { ref } from 'vue'

// Importación del router para navegación
import { useRouter } from 'vue-router'

// Instancia del router
const router = useRouter()

// Controla si se muestra la pantalla de calificación
const mostrarCalificacion = ref(false)

// Guarda la puntuación seleccionada por el usuario
const puntuacion = ref(0)

// Función para finalizar el viaje y mostrar calificación
const finalizarViaje = () => {
  mostrarCalificacion.value = true
}

// Función para calificar al conductor
const calificar = (valor) => {
  puntuacion.value = valor

  // Después de 2 segundos vuelve al inicio de la aplicación
  setTimeout(() => {
    router.push('/')
  }, 2000)
}

</script>

<style scoped>

/* Contenedor principal centrado en pantalla */
.container {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 20px;
}

/* Estilo del botón principal */
button {
  margin-top: 20px;

  padding: 15px 25px;

  border: none;
  border-radius: 12px;

  background: #ffd700;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
}

/* Estilo del sistema de estrellas */
.stars {
  margin-top: 30px;

  font-size: 50px;

  cursor: pointer;
}

</style>