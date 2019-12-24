import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = () => import(/* webpackChunkName: "Main" */ '@/views/Main')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Main,
    children: [
      {
        path: '/vue',
        name: 'vue'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
