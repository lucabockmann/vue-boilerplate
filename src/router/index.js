import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from 'vue-i18n'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render(c) {return c('router-view')},
      },
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'features',
          name: 'About',
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
