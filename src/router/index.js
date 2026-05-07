// Importación de funciones necesarias para crear el sistema de rutas en Vue
import { createRouter, createWebHistory } from 'vue-router'

// Importación de las vistas (pantallas) del proyecto
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import SolicitudViajeView from '../views/SolicitudViajeView.vue'
import ConfirmacionView from '../views/ConfirmacionView.vue'

// Definición de las rutas de la aplicación
// Cada ruta representa una pantalla del sistema RoyalMove
const routes = [
  {
    path: '/', // Ruta principal (inicio de la app)
    component: LoginView, // Vista de login
  },
  {
    path: '/dashboard', // Pantalla principal después de iniciar sesión
    component: DashboardView,
  },
  {
    path: '/solicitud', // Pantalla para solicitar un viaje
    component: SolicitudViajeView,
  },
  {
    path: '/confirmacion', // Pantalla de confirmación del viaje
    component: ConfirmacionView,
  },
]

// Creación del router usando historial web (URLs limpias sin #)
const router = createRouter({
  history: createWebHistory(),
  routes, // Se asignan las rutas definidas anteriormente
})

// Exportación del router para usarlo en la aplicación principal
export default router