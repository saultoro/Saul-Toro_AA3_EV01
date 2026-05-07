<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '../assets/logo.png'

const correo = ref('')
const password = ref('')

const router = useRouter()

const ingresar = () => {
  if (correo.value && password.value) {
    router.push('/dashboard')
  }
}
</script>

<template>
  <div class="login-page">
    <div class="overlay">
      <div class="login-card">

        <img
          :src="logo"
          alt="RoyalMove"
          class="login-logo"
        />

        <h1>RoyalMove</h1>

        <p class="subtitle">
          Plataforma inteligente de transporte
        </p>

        <input
          v-model="correo"
          placeholder="Correo electrónico"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
        />

        <button @click="ingresar">
          Ingresar
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;

  background:
    linear-gradient(rgba(0,0,0,0.7),
    rgba(0,0,0,0.7)),
    url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop');

  background-size: cover;
  background-position: center;
}

.overlay {
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 400px;

  background: rgba(255,255,255,0.12);

  backdrop-filter: blur(15px);

  padding: 40px;

  border-radius: 25px;

  text-align: center;

  color: white;
}

.login-logo {
  width: 180px;
  margin-bottom: 20px;
}

.subtitle {
  margin-bottom: 25px;
  color: #e5e7eb;
}

input {
  width: 100%;

  padding: 14px;

  margin-bottom: 15px;

  border: none;

  border-radius: 12px;

  background: rgba(255,255,255,0.9);
}

button {
  width: 100%;

  padding: 14px;

  border: none;

  border-radius: 12px;

  background: #2563eb;

  color: white;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}
</style>