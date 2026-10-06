import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import DetalleServicioView from '../views/DetalleServicioView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import ContactoView from '../views/ContactoView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView
    },
    {
      path: '/servicios/:id',
      name: 'detalle',
      component: DetalleServicioView
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: FavoritosView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
