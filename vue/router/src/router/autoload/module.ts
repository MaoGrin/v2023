import { RouteRecordRaw } from "vue-router";
export default function autoloadModuleRoutes() {
  // 遍历module下的某些文件
  const modules = import.meta.globEager("../module/**/*.ts");
  const routes = [] as RouteRecordRaw[];
  // 遍历获取到的文件列表并压入路由表中
  Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default);
  });

  return routes;
}
