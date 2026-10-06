<template>
  <div class="tarjeta-servicio">
    <h3>{{ servicio.nombre }}</h3>
    <p class="categoria">{{ servicio.categoria }}</p>
    <p class="descripcion">{{ servicio.descripcion }}</p>
    <p class="precio">${{ servicio.precio.toLocaleString('es-CL') }}</p>
    <p class="disponibilidad">
      <span :class="servicio.disponible ? 'verde' : 'rojo'">
        {{ servicio.disponible ? '✓ Disponible' : '✗ No disponible' }}
      </span>
    </p>
    
    <div class="acciones">
      <RouterLink :to="`/servicios/${servicio.id}`" class="btn-detalle">Ver Detalle</RouterLink>
      <button :class="['btn-favorito', { activo: esFavorito }]" @click="$emit('toggle-favorito', servicio.id)">
        {{ esFavorito ? '★ Favorito' : '☆ Marcar' }}
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
  border: 1px solid #e1e8ed;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}
.tarjeta-servicio:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}
h3 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}
.categoria {
  font-size: 0.85em;
  color: #7f8c8d;
  text-transform: uppercase;
  margin: 0 0 15px 0;
}
.descripcion {
  flex-grow: 1;
  color: #555;
  margin-bottom: 15px;
}
.precio {
  font-size: 1.2em;
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 5px;
}
.disponibilidad {
  margin-bottom: 20px;
  font-size: 0.9em;
}
.verde {
  color: #27ae60;
  font-weight: bold;
}
.rojo {
  color: #e74c3c;
  font-weight: bold;
}
.acciones {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 15px;
}
.btn-detalle {
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
  font-size: 0.9em;
}
.btn-detalle:hover {
  text-decoration: underline;
}
.btn-favorito {
  padding: 6px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 20px;
  background-color: #ecf0f1;
  color: #7f8c8d;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}
.btn-favorito:hover {
  background-color: #e0e6ed;
}
.btn-favorito.activo {
  background-color: #f1c40f;
  color: #fff;
  border-color: #f1c40f;
}
</style>
