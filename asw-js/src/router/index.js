// 1.引入路由
import {createRouter,createWebHistory} from 'vue-router'
const Login = () => import('../views/Login.vue') // 登录组件的路由
const NotFound = () => import('../views/404.vue') // 404路由
// 2.封装路由表
const router = createRouter({
  routes:[
    {
      path:"/",
      redirect:"/index",
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
  history:createWebHistory()
})

export default router;
