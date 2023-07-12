import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Photography from '../views/Photography.vue'
import NotFound from '../views/404.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/technology', name: 'Technology', component: 'Technology' },
  { path: '/photography', name: 'Photography', component: Photography },
  { path: '/literature', name: 'Literature', component: 'Literature' },
  { path: '/exploration', name: 'Exploration', component: 'Exploration' },
  { path: '/about', name: 'About', component: 'About' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
