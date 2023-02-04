import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
// 引入路由
import router, { setupRouter } from "@/router";
// 引入插件
import { setupPlugins } from "@/plugins/index";
// 引入全局样式
import "@/styles/global.less";

import 'animate.css'
async function bootstrap() {
  const app = createApp(App);
  // 装载插件
  setupPlugins(app);
  // 装载路由
  setupRouter(app);

  // 等待路由加载完成
  await router.isReady();

  app.mount("#app");
}
bootstrap();
