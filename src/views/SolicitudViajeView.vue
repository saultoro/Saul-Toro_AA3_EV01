<template>
  <div class="container">

    <!-- Título de la pantalla de solicitud de viaje -->
    <h1>Solicitud de Viaje</h1>

    <!-- Mapa embebido usando OpenStreetMap para referencia visual -->
    <div class="mapa-real">
      <iframe
        src="https://www.openstreetmap.org/export/embed.html"
        width="100%"
        height="250"
        style="border:0; border-radius:15px;"
        allowfullscreen=""
        loading="lazy">
      </iframe>
    </div>

    <!-- Campo para ingresar el punto de origen del viaje -->
    <input v-model="origen" placeholder="Ingrese el origen" />

    <!-- Campo para ingresar el punto de destino del viaje -->
    <input v-model="destino" placeholder="Ingrese el destino" />

    <!-- Selección del tipo de vehículo para el viaje -->
    <select v-model="vehiculo">
      <option>Motocicleta</option>
      <option>Automóvil</option>
    </select>

    <!-- Botón para calcular la tarifa según el vehículo seleccionado -->
    <button @click="calcularTarifa">
      Calcular tarifa
    </button>

    <!-- Muestra la tarifa calculada del viaje -->
    <h3>Tarifa estimada: ${{ tarifa }}</h3>

    <!-- Información del conductor asignado cuando ya hay tarifa -->
    <div v-if="tarifa > 0" class="conductor">
      <h4>Conductor asignado</h4>

      <p>Nombre: Carlos Ramírez</p>
      <p>Vehículo: Toyota Corolla</p>
      <p>Placa: ABC 123</p>
    </div>

    <!-- Botón para confirmar el viaje y continuar al proceso -->
    <button @click="confirmarViaje">
      Confirmar viaje
    </button>

  </div>
</template>

<script setup>

// Importación de ref para manejar variables reactivas
import { ref } from 'vue'

// Importación del router para navegación entre vistas
import { useRouter } from 'vue-router'

// Variable reactiva para el origen del viaje
const origen = ref('')

// Variable reactiva para el destino del viaje
const destino = ref('')

// Tipo de vehículo seleccionado por el usuario
const vehiculo = ref('Motocicleta')

// Valor de la tarifa calculada
const tarifa = ref(0)

// Instancia del router
const router = useRouter()

// Función para calcular la tarifa según el tipo de vehículo
const calcularTarifa = () => {
  tarifa.value =
    vehiculo.value === 'Motocicleta'
      ? 8000
      : 15000
}

// Función para confirmar el viaje y redirigir a la pantalla de confirmación
const confirmarViaje = () => {
  router.push('/confirmacion')
}

</script>

<style scoped>

/* Estilo del contenedor del mapa */
.mapa-real {
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 15px;
}

/* Estilo del bloque de información del conductor */
.conductor {
  background: #f3f4f6;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

</style>