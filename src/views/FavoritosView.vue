<template>
  <div>
    <h1>Mis Favoritos</h1>
    <p>Aquí puedes ver los servicios que guardaste.</p>

    <div v-if="serviciosFavoritos.length > 0" class="grilla-servicios">
      <ServicioCard 
        v-for="servicio in serviciosFavoritos" 
        :key="servicio.id" 
        :servicio="servicio"
        :esFavorito="true"
        @toggle-favorito="quitarFavorito"
      />
    </div>
    <div v-else class="mensaje-vacio">
      <p>Aún no tienes servicios favoritos guardados.</p>
      <RouterLink to="/servicios">Ir al catálogo para buscar</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'

// Como aún no tenemos fetch (Etapa 8), repetimos los datos base
const todosLosServicios = [
  { id: 1, nombre: 'Gasfitería Express', categoria: 'Hogar', descripcion: 'Reparación de cañerías y fugas.', precio: 25000, disponible: true },
  { id: 2, nombre: 'Asesoría Contable', categoria: 'Negocios', descripcion: 'Declaración de impuestos y balances.', precio: 50000, disponible: true },
  { id: 3, nombre: 'Clases de Matemáticas', categoria: 'Educación', descripcion: 'Preparación para la PAES.', precio: 15000, disponible: false },
  { id: 4, nombre: 'Instalación Eléctrica', categoria: 'Hogar', descripcion: 'Revisión y cambio de enchufes.', precio: 30000, disponible: true },
  { id: 5, nombre: 'Diseño Gráfico', categoria: 'Tecnología', descripcion: 'Creación de logos y banners.', precio: 40000, disponible: true },
  { id: 6, nombre: 'Entrenador Personal', categoria: 'Salud', descripcion: 'Rutinas de gimnasio a domicilio.', precio: 20000, disponible: true },
  { id: 7, nombre: 'Jugador de fuchibol', categoria: 'Deporte', descripcion: 'Ankara Messi, el jugadorazo.', precio: 676767, disponible: true }
]

const favoritosIds = ref<number[]>([])

onMounted(() => {
  const datosGuardados = localStorage.getItem('favoritos')
  if (datosGuardados) {
    favoritosIds.value = JSON.parse(datosGuardados)
  }
})

// Filtramos solo los servicios cuyo ID esté en favoritosIds
const serviciosFavoritos = computed(() => {
  return todosLosServicios.filter(servicio => favoritosIds.value.includes(servicio.id))
})

const quitarFavorito = (id: number) => {
  favoritosIds.value = favoritosIds.value.filter(favId => favId !== id)
  // Actualizamos localStorage al instante
  localStorage.setItem('favoritos', JSON.stringify(favoritosIds.value))
}
</script>

<style scoped>
.grilla-servicios {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.mensaje-vacio {
  margin-top: 20px;
  color: gray;
}
</style>
