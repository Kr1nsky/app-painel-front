import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Itens from '../views/Itens.vue'
import Ferramentas from '../views/Ferramentas.vue'
import Perfil from '../views/Perfil.vue'
import Login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import Swiper from '../views/SwiperPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: HomePage
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/itens',
        name: 'Itens',
        component: Itens
      },
      {
        path: '/ferramentas',
        name: 'Ferramentas',
        component: Ferramentas
      },
      {
        path: '/perfil',
        name: 'Perfil',
        component: Perfil
      },
      {
        path: '/swiper',
        name: 'Swiper',
        component: Swiper
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
