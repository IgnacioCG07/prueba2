<template>
  <div class="tarjeta-servicio">
    <h3>{{ servicio.nombre }}</h3>
    <p><strong>Categoría:</strong> {{ servicio.categoria }}</p>
    <p>{{ servicio.descripcion }}</p>
    <p><strong>Precio:</strong> ${{ servicio.precio }}</p>
    <p><strong>Disponible:</strong> <span :class="servicio.disponible ? 'verde' : 'rojo'">{{ servicio.disponible ? 'Sí' : 'No' }}</span></p>
    
    <div class="acciones">
      <RouterLink :to="`/servicios/${servicio.id}`">Ver Detalle</RouterLink>
      <button @click="$emit('toggle-favorito', servicio.id)">
        {{ esFavorito ? 'ya no me guta' : 'si me guta' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  servicio: {
    type: Object,
    required: true
  },
  esFavorito: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-favorito'])
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
.acciones {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
