import Vue from 'vue'
import Router from 'vue-router'
import Shoplist from '../pages/shoplist'
import ShopDetial from '../pages/shopDetial'
import EditDetail from '../pages/editDetail'
import NewDetail from '../pages/newDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shoplist',
      component: Shoplist
    },
    {
      path: '/shopDetail',
      name: 'ShopDetial',
      component: ShopDetial,
    },
    {
      path: '/editDetail',
      name: 'EditDetail',
      component: EditDetail,
    },
    {
      path: '/newDetail',
      name: 'NewDetail',
      component: NewDetail,
    }

  ]
})
