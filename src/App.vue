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
/* Estilo super básico para que parezca de un estudiante, pero ordenado */
nav {
  padding: 20px;
  background-color: #eee;
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: black;
}
main {
  padding: 0 20px;
}
</style>
