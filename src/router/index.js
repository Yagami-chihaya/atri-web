import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/:catchAll(.*)',
      name:'404',
      component:()=>import('../views/Error.vue')
    },
    {
      path: '/home',
      name: 'home',

      component: ()=>import('../views/Home.vue')
    },
    {
      path: '/recommand',
      name: 'recommand',
      component: ()=>import('../views/Recommand.vue')
    },
    {
      path: '/',
      name: 'texture',
      component: ()=>import('../views/Texture.vue')
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/About.vue')
    }
  ]
})

export default router
