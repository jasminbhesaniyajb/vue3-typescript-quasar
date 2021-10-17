// import { Component } from 'vue-property-decorator'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/single-user/:id',
    name: 'SingleUser',
    component: () => import('../components/SingleUser.vue')
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/Task.vue')
  },
  {
    path: '/fields',
    name: 'Fields',
    component: () => import('../views/Fields.vue')
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import('../components/Error404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log("to", to);
  console.log("from", from);
  next();
  // if (to.path == '/about') {
  //   router.push('/jakadknkd');
  // }
})


export default router
