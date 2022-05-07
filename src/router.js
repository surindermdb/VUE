import Vue from 'vue'
import Router from 'vue-router'
import Product from './views/Product'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/Product'
    },
    {
      path: '/Product',
      name: 'product',
      component: Product
    }
  ]
})
export default router
