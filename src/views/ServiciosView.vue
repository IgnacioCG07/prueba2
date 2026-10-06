<template>
  <div>
    <h1>Catálogo de Servicios</h1>
    <p>Aquí puedes ver todos los servicios disponibles en Ñuble.</p>
    
    <div v-if="cargando" class="mensaje-carga">
      <p>Cargando servicios...</p>
    </div>

    <div v-else-if="error" class="mensaje-error">
      <p>{{ error }}</p>
    </div>

    <div v-else>
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'

const servicios = ref([])
const cargando = ref(true)
const error = ref('')

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

onMounted(async () => {
  // Cargar favoritos
  const datosGuardados = localStorage.getItem('favoritos')
  if (datosGuardados) {
    favoritos.value = JSON.parse(datosGuardados)
  }

  // Obtener datos con fetch
  try {
    const respuesta = await fetch('/servicios.json')
    if (!respuesta.ok) {
      throw new Error('No se pudo cargar la información de los servicios.')
    }
    const datos = await respuesta.json()
    servicios.value = datos
  } catch (err) {
    error.value = 'Ocurrió un error al cargar los servicios. Por favor, intenta de nuevo.'
  } finally {
    cargando.value = false
  }
})

const manejarFavorito = (id: number) => {
  if (favoritos.value.includes(id)) {
    favoritos.value = favoritos.value.filter(favId => favId !== id)
  } else {
    favoritos.value.push(id)
  }
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
.mensaje-carga {
  margin-top: 20px;
  color: blue;
  font-weight: bold;
}
.mensaje-error {
  margin-top: 20px;
  color: red;
  font-weight: bold;
}
</style>
