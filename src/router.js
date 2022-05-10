import Vue from 'vue'
import Router from 'vue-router'
import Product from './views/Product'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/collection'
    },
    {
      path: '/collection',
      name: 'collection',
      component: Product
    }
  ]
})
export default router
