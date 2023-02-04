import { RouteRecordRaw } from "vue-router";
// 获取跟layouts布局相关的路由vue文件
const layouts = import.meta.glob("../layouts/*.vue");

// 获取子路由
const views = import.meta.glob("../views/**/*.vue");

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[];
  // 获取所有属性值的数组
  Object.entries(layouts).forEach(([file, module]) => {
    // 获取处理后的路由
    const route = getRouteByModule(file, module);
    // 处理子路由
    route.children = getChildrenRoutes(route);
    // 添加到路由表
    layoutRoutes.push(route);
  });
  return layoutRoutes;
}

// 处理子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  // 定义路由数组
  const routes = [] as RouteRecordRaw[];
  // 遍历处理
  Object.entries(views).forEach(([file, module]) => {
    // 获取我们要处理的路由
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      // 处理路由
      const route = getRouteByModule(file, module);
      //  添加到路由表
      routes.push(route);
    }
  });
  //  将路由表返回
  return routes;
}

// 处理路由组件的信息
function getRouteByModule(file: string, module: { [key: string]: any }) {
  // 获取路由名称
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  // 路由模块配置
  const route = {
    name: name.replace("/", "."),
    path: `/${name}`,
    component: module,
  } as RouteRecordRaw;
  return Object.assign(route,module?.route);
}

export default getRoutes
