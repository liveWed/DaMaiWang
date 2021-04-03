import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import xiqu from '../views/xiqu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path : '/shouye',
        name : 'Shouye',
        component : ()=>import('../views/首页.vue')
      },
      {
        path : '/',
        name : 'Shouye',
        component : ()=>import('../views/首页.vue')
      },
      {
        path : '/yaogun',
        name : 'Yaogun',
        component : ()=>import('../views/摇滚.vue')
      },
      {
        path: '/xiqu',
        name: 'xiqu',
        component: xiqu
      },{
        path:'/tiyu',
        name : 'tiyu',
        component : ()=>import('../views/tiyu.vue')
      },{
        path:'/qinzi',
        name : 'qinzi',
        component : ()=>import('../views/qinzi.vue')
      },
      // 个人中心
      // {
      //   path: '/',
      //   name: 'grzx',
      //   component:()=> import('../views/PersonalCenter/grzx_dy.vue')
      // },
      // {
      //   path: '/grzx',
      //   name: 'grzx',
      //   component:()=> import('../views/PersonalCenter/grzx_dy.vue')
      // },
      // {
      //   path: '/2',
      //   name: 'xlcd',
      //   component:()=> import('../components/xlcd_dy.vue')
      // },
      // {
      //   path: '/rili',
      //   name: 'rili',
      //   component:()=> import('../components/rili/rili.vue')
      // }
    ]
  },
  {
    path : '/xuanzuo',
    name : 'xuanZuo',
    component :()=>import('../views/选座.vue')
  },
  // 订单确认
  {
    path : '/order',
    name : 'xuanZuo',
    component :()=>import('../views/订单确认.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
