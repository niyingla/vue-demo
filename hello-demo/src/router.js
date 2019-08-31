import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import home from './views/home.vue'
import add from './views/add.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
      {
          path: '/add',
          name: 'add',
          component: add
      },
      {
      path: '/home',
      name: 'home',
      component: home,
      children:[
          {
            path:'list',
            name:'list',
            component:()=>import(/* webpackChunkName: "list" */'./views/list.vue')
          },
          {
            path:'user',
            name:'user',
            component:()=>import(/* webpackChunkName: "user" */'./views/user.vue')
          }
          ]
      }
  ]
})
