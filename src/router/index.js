import Vue from 'vue'
import VueRouter from 'vue-router'
import Warning from '../views/Warning.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Calendar from '../views/Calendar.vue'
import Arm from '../views/diagnosis/Arm.vue'
import Incomplete from '../views/diagnosis/Incomplete.vue'
import LowerBack from '../views/diagnosis/LowerBack.vue'
import LowerLeg from '../views/diagnosis/LowerLeg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Warning',
    component: Warning
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/arm',
    name: 'Arm',
    component: Arm
  },
  {
    path: '/incomplete',
    name: 'Incomplete',
    component: Incomplete
  },
  {
    path: '/lowerback',
    name: 'LowerBack',
    component: LowerBack
  },
  {
    path: '/lowerleg',
    name: 'LowerLeg',
    component: LowerLeg
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
