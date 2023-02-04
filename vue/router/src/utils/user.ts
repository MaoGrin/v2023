import userApi, { ILoginData } from "@/apis/userApi";
import { CacheEnum } from "@/enum/cacheEnum";
import router from "@/router";
import store from "./store";
import userStore from "@/store/userStore";
// 判断是否登录
export function isLogin(){
  return Boolean(store.get(CacheEnum.TOKEN_NAME))
}

export async function login(values: ILoginData) {
  // mock 处理
  async function mockHandle(){
     // mock请求数据
  const res = await userApi.login(values); 
  // 请求成功
  if(res.status !==  "success") return 
  // 获取token
  return res.data.token
  }
  // 本地处理
  function localHandle(){
    // 返回随机字符串模拟token信息
    return Math.random().toString(36).substr(2,10)
  }
  const token = localHandle()
  // 调用存储在公共管理中的方法存储token
  store.set(CacheEnum.TOKEN_NAME, { token });
  // 获取用户信息
  userStore().getUserInfo()
  // 获取缓存的路由值
  const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? "home";
  // 跳转路由
  router.push({ name: routeName });
}
// 退出登录
export function logout() {
  // 移除存储在本地的键值
  store.remove(CacheEnum.TOKEN_NAME);
  // 跳转到首页
  router.push("/");
  // 清除pinia中存储的用户信息
  userStore().info = null;
}
