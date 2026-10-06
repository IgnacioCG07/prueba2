<template>
  <div class="tarjeta-servicio">
    <h3>{{ servicio.nombre }}</h3>
    <p><strong>Categoría:</strong> {{ servicio.categoria }}</p>
    <p>{{ servicio.descripcion }}</p>
    <p><strong>Precio:</strong> ${{ servicio.precio }}</p>
    <p><strong>Disponible:</strong> <span :class="servicio.disponible ? 'verde' : 'rojo'">{{ servicio.disponible ? 'Sí' : 'No' }}</span></p>
    
    <RouterLink :to="`/servicios/${servicio.id}`">Ver Detalle</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  servicio: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.tarjeta-servicio {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
}
.verde {
  color: green;
  font-weight: bold;
}
.rojo {
  color: red;
  font-weight: bold;
}
</style>
