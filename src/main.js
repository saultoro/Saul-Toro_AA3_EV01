// Importación de estilos globales del proyecto
import './style.css'

// Importación de estilos de Leaflet (librería de mapas)
import 'leaflet/dist/leaflet.css'

// Importación de Vue para crear la aplicación
import { createApp } from 'vue'

// Importación de Pinia para manejo de estado global
import { createPinia } from 'pinia'

// Importación del componente principal de la aplicación
import App from './App.vue'

// Importación del sistema de rutas (Vue Router)
import router from './router'

// Creación de la instancia de la aplicación Vue
const app = createApp(App)

// Uso de Pinia como gestor de estado en la aplicación
app.use(createPinia())

// Uso del sistema de rutas en la aplicación
app.use(router)

// Montaje de la aplicación en el elemento HTML con id "app"
app.mount('#app')