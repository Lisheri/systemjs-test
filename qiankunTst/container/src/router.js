import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: defineAsyncComponent(() => import('@/pages/Home')),
    name: 'Home',
  },
  {
    path: '/login',
    component: defineAsyncComponent(() => import('@/pages/Login')),
    name: 'Login'
  }
];

const router = createRouter({
  // hash: createWebHashHistory(), // hash模式
  history: createWebHistory(), // history模式
  base: '/',
  scrollBehavior: () => ({ y: 0 }), //跳转页面后-新页面没有位于顶部
  routes,
});

// router.beforeEach(beforeEachFn)

export default router;
