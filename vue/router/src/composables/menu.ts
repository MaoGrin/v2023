import { IMenu } from "#/menu";
import { CacheEnum } from "@/enum/cacheEnum";
import router from "@/router";
import utils from "@/utils";
import store from "@/utils/store";
import { ref } from "vue";
import { RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordRaw } from "vue-router";

class Menu{
  
  public menus = ref<IMenu[]>([])  // 菜单
  public history = ref<IMenu[]>([]) // 历史菜单
  public close = ref(store.get(CacheEnum.MENU_IS_CLOSE) ?? true) // 是否关闭菜单
  public route = ref(null as null | RouteLocationNormalizedLoaded) // 路由

  constructor(){
    this.menus.value = this.getMenusByRoute() // 获取菜单
    this.history.value = this.getHistoryMenu() // 获取历史菜单
  }
  // 获取历史菜单
  private getHistoryMenu(){
    // 空数组
    const routes = [] as RouteRecordRaw[]
    // 获取路由表中的所有子路由
    router.getRoutes().map(r=>routes.push(...r.children))
    // 获取历史路由表
    let menus:IMenu[] = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
    // 过滤掉与当前路由对不上的路由
    return menus.filter(m=>{
      return routes.some(r=>r.name == m.route)
    })
  }

  // 切换父级菜单显示
  toggleParentMenu(menu:IMenu){
    // 遍历菜单
    this.menus.value.forEach(m=>{
      // 将全部父级菜单设置为false,也就是不显示
      m.isClick = false
      if(m == menu){
        // 点击的菜单显示
        m.isClick = true
      }
    })
  }

   // 添加历史菜单
   addHistoryMenu(route:RouteLocationNormalized){
    // 如果路由没有menu信息,直接返回
    if(!route.meta.menu) return
    // 记录路由
    this.route.value  = route
    // 合并数据
    const menu:IMenu = {...route.meta.menu,route:route.name as string}
    // 去重
    const isHas = this.history.value.some(menu=>menu.route == route.name)
    // 往前压入数组
    if(!isHas) this.history.value.unshift(menu)
    // 数组长度超过10就弹出
    if(this.history.value.length > 10){
      // 弹出最后的菜单元素
      this.history.value.pop()
    }
    // 重新存储在pinia中
    utils.store.set(CacheEnum.HISTORY_MENU,this.history.value)
  }
  // 移除历史菜单
  removeHistoryMenu(menu:IMenu){
    // 获取点击的菜单项
    const index = this.history.value.indexOf(menu)
    // 移除
    this.history.value.splice(index,1)
    // 重新设置pinia存储
    utils.store.set(CacheEnum.HISTORY_MENU,this.history.value)

  }
  // 切换菜单
  toggleState(){
    // 取反
    this.close.value = !this.close.value
    // 重新设置pinia存储
    store.set(CacheEnum.MENU_IS_CLOSE,this.close.value)
  }
  // 设置菜单不选中
  setCurrentMenu(route:RouteLocationNormalizedLoaded){
    // 遍历菜单数组
    this.menus.value.forEach(m=>{
      // 父级菜单全设置为假,不显示
      m.isClick = false
      // 开始遍历子菜单
      m.children?.forEach(c=>{
        // 隐藏
        c.isClick = false
        // 匹配到点击的菜单路由
        if(c.route == route.name){
          // 父级和子级的菜单同时显示
          m.isClick = true  
          c.isClick = true
        }
      })
    })
  }
  // 根据路由获取菜单
  getMenusByRoute() {
    // 获取路由表,并且遍历
    return router
      .getRoutes()
      .filter((route) => route.children.length && route.meta.menu) // 过滤
      .map((route) => { 
        let menu: IMenu = { ...route.meta?.menu }; // 解构
        // 继续对子菜单遍历
        menu.children = route.children
          .filter((route) => route.meta?.menu) // 过滤
          .map((route) => {
            return {...route.meta?.menu,route:route.name} // 解构合并
          }) as IMenu[];
        return menu; // 返回菜单
      })
      .filter((menu) => menu.children?.length) as IMenu[]; // 返回子菜单有内容的路由
  }
}

export default new Menu()