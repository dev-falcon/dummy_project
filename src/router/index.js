import Vue from 'vue'
import VueRouter from 'vue-router'
import SalesPortalLogin from '../views/SalesPortalLogin.vue'
import Leads from '../views/Leads.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SalesPortalLogin',
    component: SalesPortalLogin
  },
  {
    path: '/leads',
    name: 'leads',
    component: Leads
  },
  
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
