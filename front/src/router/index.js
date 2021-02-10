import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HeaderBar from '../components/HeaderBar.vue'
import Login from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const newroutes = [
  { path: '/', component: HeaderBar, name: 'Header'}
]

const newlogin = [
  { path: '/', component: Login, name: 'Login'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  newroutes,
  newlogin
})

export default router
