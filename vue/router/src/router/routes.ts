// 基本路由表

import { RouteRecordRaw } from "vue-router"

const routes =  [
  {
    path: "/",
    name:"home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/auth/login",
    name:"auth.login",
    meta:{guest:true},
    component: () => import("@/views/auth/login.vue"),
  },
  {
    path: "/article",
    name:"article",
    // meta:{guest:true},
    component: () => import("@/views/article.vue"),
  },
  {
    path: "/:any(.*)",
    name:"notFound",
    component: () => import("@/views/error/404.vue"),
  }
] as RouteRecordRaw[]

export default routes