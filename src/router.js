import Vue from 'vue'
import Router from 'vue-router'
// import Product from './views/Product'

Vue.use(Router)
function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/collection'
    },
    {
      path: '/collection',
      name: 'collection',
      component: lazyLoad('Product')
    }
  ]
})
export default router
