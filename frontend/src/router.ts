import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import BlogArticle from './pages/BlogArticle';
import Home from './pages/Home';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/:slug',
    name: 'BlogArticle',
    component: BlogArticle,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
