import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Photography from '../views/Photography.vue'
import NotFound from '../views/404.vue'
import Technology from '../views/Technology.vue'
import Literature from '../views/Literature.vue'
import Exploration from '../views/Exploration.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import UploadImg from '../views/UploadImg.vue'
import UploadArticle from '../views/UploadArticle.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import store from '../store/index'; // 导入Vuex实例


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/technology', name: 'Technology', component: Technology },
  { path: '/photography', name: 'Photography', component: Photography },
  { path: '/literature', name: 'Literature', component: Literature },
  { path: '/exploration', name: 'Exploration', component: Exploration },
  { path: '/about', name: 'About', component: About },
  { path: '/login', name: 'Login', component: Login },
  { path: '/uploadImg', name: 'UploadImg', component: UploadImg},
  { path: '/uploadArticle', name: 'UploadArticle', component: UploadArticle },
  { path: '/article/:uid', name: 'Article', component: ArticleDetail },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => { 
//   // 判断用户是否登录
//   if (to.meta.requiresAuth) {
//     // 如果访问需要鉴权的页面并且用户未登录，重定向到登录页面
//     //在这里鉴权

//     next({ name: 'home' });
//   } else {
//     // 其他情况允许继续访问
//     next();
//   }
// });

export default router
