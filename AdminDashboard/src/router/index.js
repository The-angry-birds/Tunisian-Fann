import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/usersLists',
    component: Layout,
    redirect: '/usersLists/list',
    name: 'Users Lists',
    meta: { title: 'Users Lists', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'listClients',
        name: 'List Of Clients',
        component: () => import('@/views/ListOfClients/index'),
        meta: { title: 'List Of Clients', icon: 'table' }
      },
      {
        path: 'listArtists',
        name: 'List Of Artists',
        component: () => import('@/views/ListOfArtists/index'),
        meta: { title: 'List Of Artists', icon: 'table' }
      }
    ]
  },
  {
    path: '/categories',
    component: Layout,
    redirect: '/categories/list',
    name: 'Categories',
    meta: { title: 'Categories', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'categoriesList',
        name: 'Categories List',
        component: () => import('@/views/ListOfCategories/index'),
        meta: { title: 'Categories List', icon: 'table' }
      },
      {
        path: 'addCategory',
        name: 'Add Category',
        component: () => import('@/views/AddCategory/index'),
        meta: { title: 'Add Category', icon: 'form' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/The-angry-birds',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
