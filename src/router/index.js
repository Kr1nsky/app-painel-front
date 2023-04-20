import Vue from 'vue'
import VueRouter from 'vue-router'
import Panel from '../views/Panel.vue'
import Dashboard from '../views/Dashboard.vue'
import Itens from '../views/Itens.vue'
import Ferramentas from '../views/Ferramentas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Panel,
    children: [
      {
        path:'/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path:'/itens',
        name:'itens',
        component: Itens
      },
      {
        path:'/ferramentas',
        name: 'ferramentas',
        component: Ferramentas
      }
    ]
  },
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
