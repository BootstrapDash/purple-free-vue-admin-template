import Vue from 'vue'
import Router from 'vue-router'

import layout from '../layout'


Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  base: '/demo/purple-free-vue/preview/demo_1/',
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/dashboard')
        }
      ]
    },
    {
      path: '/basic-ui',
      component: layout,
      children: [
        {
          path: 'buttons',
          name: 'buttons',
          component: () => import('@/pages/basic-ui/buttons')
        },
        {
          path: 'dropdowns',
          name: 'dropdowns',
          component: () => import('@/pages/basic-ui/dropdowns')
        },
        {
          path: 'typography',
          name: 'typography',
          component: () => import('@/pages/basic-ui/typography')
        }
      ]
    },
    {
      path: '/charts',
      component: layout,
      children: [
        {
          path: 'chartjs',
          name: 'chartjs',
          component: () => import('@/pages/charts/chartjs')
        },
      ]
    },
    {
      path: '/tables',
      component: layout,
      children: [
        {
          path: 'basic-tables',
          name: 'basic-tables',
          component: () => import('@/pages/tables/basic-tables')
        }
      ]
    },
    {
      path: '/auth-pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/pages/samples/auth-pages/login')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/pages/samples/auth-pages/register')
        }
      ]
    },
    {
      path: '/error-pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'error-404',
          name: 'error-404',
          component: () => import('@/pages/samples/error-pages/error-404')
        },
        {
          path: 'error-500',
          name: 'error-500',
          component: () => import('@/pages/samples/error-pages/error-500')
        }
      ]
    },
    {
      path: '/icons',
      component: layout,
      children: [
        {
          path: 'mdi-icons',
          name: 'mdi-icons',
          component: () => import('@/pages/icons/mdi-icons')
        }
      ]
    },
    {
      path: '*',
      redirect: '/error-404',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'error-404',
          component: () => import('@/pages/samples/error-pages/error-404')
        }
      ]
    }
  ]
})
