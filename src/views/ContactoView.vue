<template>
  <div>
    <h1>Contacto</h1>
    <p>Déjanos un mensaje y te contactaremos pronto.</p>

    <!-- Mensaje de éxito -->
    <div v-if="mensajeExito" class="exito">
      <p>{{ mensajeExito }}</p>
    </div>

    <!-- Formulario -->
    <form v-else @submit.prevent="enviarFormulario" class="formulario">
      
      <div v-if="mensajeError" class="error">
        <p>{{ mensajeError }}</p>
      </div>

      <div class="campo">
        <label>Nombre:</label>
        <input type="text" v-model="formulario.nombre" placeholder="Tu nombre" />
      </div>

      <div class="campo">
        <label>Correo electrónico:</label>
        <input type="email" v-model="formulario.correo" placeholder="tu@correo.com" />
      </div>

      <div class="campo">
        <label>Servicio de interés:</label>
        <input type="text" v-model="formulario.servicio" placeholder="Ej: Gasfitería" />
      </div>

      <div class="campo">
        <label>Mensaje:</label>
        <textarea v-model="formulario.mensaje" placeholder="Escribe tu mensaje aquí..." rows="4"></textarea>
      </div>

      <button type="submit">Enviar Mensaje</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formulario = ref({
  nombre: '',
  correo: '',
  servicio: '',
  mensaje: ''
})

const mensajeError = ref('')
const mensajeExito = ref('')

const enviarFormulario = () => {
  // Resetear el error previo
  mensajeError.value = ''

  // Validar que no falten datos
  if (!formulario.value.nombre || !formulario.value.correo || !formulario.value.servicio || !formulario.value.mensaje) {
    mensajeError.value = 'Por favor, completa todos los campos antes de enviar.'
    return
  }

  // Validar correo (básico)
  if (!formulario.value.correo.includes('@')) {
    mensajeError.value = 'Por favor, ingresa un correo electrónico válido.'
    return
  }

  // Si todo es válido
  mensajeExito.value = '¡Gracias por escribirnos! Hemos recibido tu mensaje y te contactaremos a la brevedad.'
}
</script>

<style scoped>
.formulario {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}
.campo {
  display: flex;
  flex-direction: column;
}
.campo label {
  font-weight: bold;
  margin-bottom: 5px;
}
.campo input, .campo textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #555;
}
.error {
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
}
.exito {
  color: green;
  font-weight: bold;
  padding: 20px;
  border: 1px solid green;
  border-radius: 8px;
  background-color: #e8f5e9;
  margin-top: 20px;
}
</style>
