<template>
  <div>
    <h1>Detalle del Servicio</h1>
    
    <div v-if="servicioEncontrado" class="detalle">
      <h2>{{ servicioEncontrado.nombre }}</h2>
      <p><strong>Categoría:</strong> {{ servicioEncontrado.categoria }}</p>
      <p><strong>Descripción completa:</strong> {{ servicioEncontrado.descripcion }}</p>
      <p><strong>Precio:</strong> ${{ servicioEncontrado.precio }}</p>
      <p><strong>Disponibilidad:</strong> 
        <span :class="servicioEncontrado.disponible ? 'verde' : 'rojo'">
          {{ servicioEncontrado.disponible ? 'Disponible' : 'No disponible' }}
        </span>
      </p>
      <RouterLink to="/servicios">Volver al catálogo</RouterLink>
    </div>

    <div v-else class="no-existe">
      <p>El servicio que buscas no existe o fue eliminado.</p>
      <RouterLink to="/servicios">Volver al catálogo</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const servicioEncontrado = ref(null)

// Usamos los mismos datos por ahora
const servicios = [
  { id: 1, nombre: 'Gasfitería Express', categoria: 'Hogar', descripcion: 'Reparación de cañerías y fugas.', precio: 25000, disponible: true },
  { id: 2, nombre: 'Asesoría Contable', categoria: 'Negocios', descripcion: 'Declaración de impuestos y balances.', precio: 50000, disponible: true },
  { id: 3, nombre: 'Clases de Matemáticas', categoria: 'Educación', descripcion: 'Preparación para la PAES.', precio: 15000, disponible: false },
  { id: 4, nombre: 'Instalación Eléctrica', categoria: 'Hogar', descripcion: 'Revisión y cambio de enchufes.', precio: 30000, disponible: true },
  { id: 5, nombre: 'Diseño Gráfico', categoria: 'Tecnología', descripcion: 'Creación de logos y banners.', precio: 40000, disponible: true },
  { id: 6, nombre: 'Entrenador Personal', categoria: 'Salud', descripcion: 'Rutinas de gimnasio a domicilio.', precio: 20000, disponible: true },
  { id: 7, nombre: 'Jugador de fuchibol', categoria: 'Deporte', descripcion: 'Ankara Messi, el jugadorazo.', precio: 676767, disponible: true }
]

onMounted(() => {
  // route.params.id es un string, lo pasamos a numero
  const idBuscado = Number(route.params.id)
  const servicio = servicios.find(s => s.id === idBuscado)
  
  if (servicio) {
    servicioEncontrado.value = servicio
  }
})
</script>

<style scoped>
.detalle {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-top: 20px;
}
.no-existe {
  color: red;
  margin-top: 20px;
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
