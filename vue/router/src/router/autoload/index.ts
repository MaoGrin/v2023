// 路由自动注册

import utils from "@/utils";
import { Router, RouteRecordRaw } from "vue-router";
import getRoutes from "./view"; // 自动注册所有路由
import autoLoadModuleRoutes from "./module"; // 根据模块自动注册
import userStore from "@/store/userStore";
// 判断env文件中是否开启了路由自动注册功能
let routes: RouteRecordRaw[] = utils.env.VITE_ROUTER_AUTOLOAD? getRoutes(): autoLoadModuleRoutes();
/**
 * 自动加载路由
 * @param router 路由
 */
function autoload(router: Router) {
  // 获取存储在pinia中的用户信息
  const user = userStore(); 
  // 遍历当前的路由表
  routes = routes.map((route) => {
    // 过滤子路由中权限认证不通过的路由
    route.children = route.children?.filter((r) => {
      const permission = r.meta?.permission;
      return permission ? user.info?.permissions?.includes(permission) : true;
    });
    // 返回处理后的路由
    return route
  });
  // 遍历新路由表添加路由
  routes.forEach(r=>router.addRoute(r))
}
export default autoload;
