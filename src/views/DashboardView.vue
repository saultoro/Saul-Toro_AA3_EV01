<template>
  <div class="dashboard">

    <!-- Contenedor principal con fondo del dashboard -->
    <div class="overlay">

      <!-- Título principal de la aplicación -->
      <h1>RoyalMove</h1>

      <!-- Mensaje de bienvenida para el usuario -->
      <p>
        Solicita viajes rápidos y seguros.
      </p>

      <!-- Contenedor donde se renderiza el mapa -->
      <div id="map"></div>

      <!-- Botón para ir a la pantalla de solicitud de viaje -->
      <button @click="irSolicitud">
        Solicitar viaje
      </button>

    </div>

  </div>
</template>

<script setup>

// Hook de Vue que se ejecuta cuando el componente se monta
import { onMounted } from 'vue'

// Router para la navegación entre vistas
import { useRouter } from 'vue-router'

// Librería Leaflet para mapas interactivos
import L from 'leaflet'

// Instancia del router
const router = useRouter()

// Función que redirige a la vista de solicitud de viaje
const irSolicitud = () => {
  router.push('/solicitud')
}

// Evento que se ejecuta cuando la vista ya está cargada en pantalla
onMounted(() => {

  // Creación del mapa centrado inicialmente en Medellín
  const map = L.map('map').setView([6.2442, -75.5812], 13)

  // Capa de mapa usando OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  // Obtención de la ubicación actual del usuario
  navigator.geolocation.getCurrentPosition(
    (position) => {

      // Coordenadas del usuario
      const lat = position.coords.latitude
      const lng = position.coords.longitude

      // Centrar el mapa en la ubicación del usuario
      map.setView([lat, lng], 16)

      // Agregar marcador en la ubicación actual
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup('Tu ubicación actual')
        .openPopup()

    },
    () => {
      // Mensaje en caso de error al obtener ubicación
      alert('No se pudo obtener la ubicación')
    }
  )

})
</script>

<style scoped>

/* Contenedor principal del dashboard */
.dashboard {
  min-height: 100vh;

  /* Imagen de fondo tipo app de transporte */
  background-image: url('/logo.png');
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* Caja central con efecto transparente */
.overlay {
  width: 90%;
  max-width: 500px;

  background: rgba(0,0,0,0.6);

  padding: 25px;
  border-radius: 20px;

  color: white;
  text-align: center;

  backdrop-filter: blur(5px);
}

/* Estilo del contenedor del mapa */
#map {
  width: 100%;
  height: 350px;

  border-radius: 20px;

  margin-top: 20px;
  margin-bottom: 20px;
}

/* Estilo del botón principal */
button {
  width: 100%;

  padding: 15px;

  border: none;
  border-radius: 12px;

  background: #ffd700;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
}
</style>
