import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import AppMain from '../containers/main.vue';
import AppCategory from '../containers/category.vue';
import AppCart from '../containers/cart.vue';
import AppMine from '../containers/mine.vue';

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
  routes: [
  	{
		path : '*',
		redirect : '/home'
  	},
    {
      path: '/home',
      name: 'main',
      component: AppMain
    },
    {
      path: '/category',
      name: 'category',
      component: AppCategory
    },
    {
      path: '/cart',
      name: 'cart',
      component: AppCart
    },
    {
      path: '/mine',
      name: 'mine',
      component: AppMine
    }
  ]
})
