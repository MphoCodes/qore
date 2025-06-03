import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import InvestmentTerms from '../views/InvestmentTerms.vue'
import HowItWorks from '../views/HowItWorks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks
  },
  {
    path: '/investment-terms',
    name: 'InvestmentTerms',
    component: InvestmentTerms
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
