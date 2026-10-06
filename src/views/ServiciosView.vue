<template>
  <div>
    <h1>Catálogo de Servicios</h1>
    <p>Aquí puedes ver todos los servicios disponibles en Ñuble.</p>
    
    <div class="filtros">
      <input type="text" v-model="busqueda" placeholder="Buscar por nombre..." />
      <select v-model="categoriaSeleccionada">
        <option value="">Todas las categorías</option>
        <option value="Hogar">Hogar</option>
        <option value="Negocios">Negocios</option>
        <option value="Educación">Educación</option>
        <option value="Tecnología">Tecnología</option>
        <option value="Salud">Salud</option>
        <option value="Deporte">Deporte</option>
      </select>
    </div>

    <div v-if="serviciosFiltrados.length > 0" class="grilla-servicios">
      <ServicioCard 
        v-for="servicio in serviciosFiltrados" 
        :key="servicio.id" 
        :servicio="servicio"
        :esFavorito="favoritos.includes(servicio.id)"
        @toggle-favorito="manejarFavorito"
      />
    </div>
    <div v-else class="mensaje-vacio">
      <p>No se encontraron servicios para los criterios seleccionados.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'

// Por ahora los datos están aquí, en la Etapa 8 los traeremos con fetch
const servicios = ref([
  { id: 1, nombre: 'Gasfitería Express', categoria: 'Hogar', descripcion: 'Reparación de cañerías y fugas.', precio: 25000, disponible: true },
  { id: 2, nombre: 'Asesoría Contable', categoria: 'Negocios', descripcion: 'Declaración de impuestos y balances.', precio: 50000, disponible: true },
  { id: 3, nombre: 'Clases de Matemáticas', categoria: 'Educación', descripcion: 'Preparación para la PAES.', precio: 15000, disponible: false },
  { id: 4, nombre: 'Instalación Eléctrica', categoria: 'Hogar', descripcion: 'Revisión y cambio de enchufes.', precio: 30000, disponible: true },
  { id: 5, nombre: 'Diseño Gráfico', categoria: 'Tecnología', descripcion: 'Creación de logos y banners.', precio: 40000, disponible: true },
  { id: 6, nombre: 'Entrenador Personal', categoria: 'Salud', descripcion: 'Rutinas de gimnasio a domicilio.', precio: 20000, disponible: true },
  { id: 7, nombre: 'Jugador de fuchibol', categoria: 'Deporte', descripcion: 'Ankara Messi, el jugadorazo.', precio: 676767, disponible: true }
])

const busqueda = ref('')
const categoriaSeleccionada = ref('')

const serviciosFiltrados = computed(() => {
  return servicios.value.filter(servicio => {
    const coincideNombre = servicio.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria = categoriaSeleccionada.value === '' || servicio.categoria === categoriaSeleccionada.value
    return coincideNombre && coincideCategoria
  })
})

// Lógica de favoritos
const favoritos = ref<number[]>([])

onMounted(() => {
  const datosGuardados = localStorage.getItem('favoritos')
  if (datosGuardados) {
    favoritos.value = JSON.parse(datosGuardados)
  }
})

const manejarFavorito = (id: number) => {
  if (favoritos.value.includes(id)) {
    // Si ya es favorito, lo quitamos
    favoritos.value = favoritos.value.filter(favId => favId !== id)
  } else {
    // Si no es favorito, lo agregamos
    favoritos.value.push(id)
  }
  // Guardamos en localStorage
  localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
}
</script>

<style scoped>
.filtros {
  margin-bottom: 20px;
}
.filtros input, .filtros select {
  padding: 5px;
  margin-right: 10px;
}
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
