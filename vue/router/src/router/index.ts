import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import autoload from "./autoload";
import guard from "./guard";
import userStore from "@/store/userStore";
const router = createRouter({
  history: createWebHistory(),
  routes:[...routes]
});

export async function setupRouter(app:App) {
  await userStore().getUserInfo(); // 获取用户信息
  // 自动加载路由
  autoload(router)
  // 路由守卫
  guard(router)
  // 装载路由
  app.use(router);
}

export default router;
