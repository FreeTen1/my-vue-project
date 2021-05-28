import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from "@/views/Shop"
import Car from "@/views/Car"
import Main from "@/views/Main"
import ToDo from "@/views/ToDo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/ToDo',
    name: 'ToDo',
    component: ToDo
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Car',
    name: 'Car',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Car
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
