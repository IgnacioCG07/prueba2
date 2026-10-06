<template>
  <header>
    <nav>
      <RouterLink to="/">Inicio</RouterLink> |
      <RouterLink to="/servicios">Servicios</RouterLink> |
      <RouterLink to="/favoritos">Favoritos</RouterLink> |
      <RouterLink to="/contacto">Contacto</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f6f8;
  margin: 0;
  padding: 0;
  color: #333;
}

header {
  background-color: #2c3e50;
  padding: 20px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

nav {
  display: flex;
  justify-content: center;
  gap: 15px;
}

nav a {
  text-decoration: none;
  color: #ecf0f1;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.2s;
}

nav a:hover {
  background-color: #34495e;
}

nav a.router-link-exact-active {
  background-color: #ecf0f1;
  color: #2c3e50;
  font-weight: bold;
}

main {
  max-width: 1000px;
  margin: 30px auto;
  padding: 0 20px;
}

h1 {
  color: #2c3e50;
}
</style>
