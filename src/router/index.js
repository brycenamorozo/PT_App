import Vue from 'vue'
import VueRouter from 'vue-router'
import Warning from '../views/Warning.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Calendar from '../views/Calendar.vue'
import Rice from '../views/Rice.vue'
import Arm from '../views/diagnosis/Arm.vue'
import Incomplete from '../views/diagnosis/Incomplete.vue'
import UpperLeg from '../views/diagnosis/UpperLeg.vue'
import LowerLeg from '../views/diagnosis/LowerLeg.vue'
import Glutes from '../views/UpperLegExercises/Glutes.vue'
import Groin from '../views/UpperLegExercises/Groin.vue'
import Hamstring from '../views/UpperLegExercises/Hamstring.vue'
import Psoas from '../views/UpperLegExercises/Psoas.vue'
import Quads from '../views/UpperLegExercises/Quads.vue'
import UpperLegQ from '../views/UpperLegExercises/UpperLegQ.vue'

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
    path: '/Rice',
    name: 'Rice',
    component: Rice
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
    path: '/UpperLeg',
    name: 'UpperLeg',
    component: UpperLeg
  },
  {
    path: '/lowerleg',
    name: 'LowerLeg',
    component: LowerLeg
  },
  {
    path: '/Glutes',
    name: 'Glutes',
    component: Glutes
  },
  {
    path: '/Groin',
    name: 'Groin',
    component: Groin
  },
  {
    path: '/Hamstring',
    name: 'Hamstring',
    component: Hamstring
  },
  {
    path: '/Psoas',
    name: 'Psoas',
    component: Psoas
  },
  {
    path: '/Quads',
    name: 'Quads',
    component: Quads
  },
  {
    path: '/UpperLegQ',
    name: 'UpperLegQ',
    component: UpperLegQ
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
