<script setup>
import logo from './assets/logo.png'
</script>

<template>
  <div>
    <nav class="navbar">
      <img
        :src="logo"
        alt="Logo"
        class="logo"
      />

      <h2>RoyalMove</h2>
    </nav>

    <router-view />
  </div>
</template>

<style>
.navbar {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  padding: 15px;
}

.logo {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.navbar h2 {
  color: white;
  font-size: 28px;
}
</style>