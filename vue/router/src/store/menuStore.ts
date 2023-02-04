// 菜单公共管理

import { defineStore } from "pinia";
import { IMenu } from "#/menu";
import router from "@/router";
import utils from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";
export default defineStore("menu", {
  state: () => {
    return {
      menus: [] as IMenu[], // 路由菜单
      historyMenus:[] as IMenu[] // 历史菜单
    };
  },
  actions: {
    // 初始化
    init() {
      this.getMenusByRoute(); // 获取路由表
      this.historyMenus = utils.store.get(CacheEnum.HISTORY_MENU) ?? [] // 获取历史路由表
    },
   
    // 根据路由获取菜单
    getMenusByRoute() {
      this.menus = router
        .getRoutes()
        .filter((route) => route.children.length && route.meta.menu)
        .map((route) => {
          let menu: IMenu = { ...route.meta?.menu };
          menu.children = route.children
            .filter((route) => route.meta?.menu)
            .map((route) => {
              return {...route.meta?.menu,route:route.name}
            }) as IMenu[];
          return menu;
        })
        .filter((menu) => menu.children?.length) as IMenu[];
    },
  },
});
