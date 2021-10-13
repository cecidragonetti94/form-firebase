import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/login',
    name: 'Login',
  
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
  
    component: () => import('../views/Register.vue')
  },
  {
    path: '/form',
    name: 'Form',
    meta: {protectedRoute: true},
  
    component: () => import('../views/Form.vue')
  },
 

  {
    path: '/edit/:id',
    name: 'Edit',
    meta: {protectedRoute: true},
  
    component: () => import('../views/Edit.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//recorre todas las rutas si le mandas el next pinta el componente el to sirve para acceder al meta
router.beforeEach((to,from,next) => {
  console.log(to.meta.protectedRoute)
  if(to.meta.protectedRoute){ //si la ruta es protegida 
     if(store.getters.authenticatedUser) { //si existe el usuario
       next()
     }else {
       next('/Login') //si no existe el usuario vuelvo al login
     }
  }else{
    next()
  }
})
export default router
