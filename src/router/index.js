import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: `/en`
    },
    {
      path: '/:lang',
      component: {
        render(c) {return c('router-view')},
      },
      children: [
        {
          path: `/`,
          name: 'Home',
          component: Home
        },
        {
          path: 'features',
          name: 'Features',
          component: () => import('../views/Features.vue')
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
