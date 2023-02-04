// 路由守卫
import userStore from "@/store/userStore";
import utils from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router";
class Guard {
  constructor(private router: Router) {}
  // 绑定路由
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }
  // 路由进入前
  private async beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    // 权限认证
    if(to.meta.auth && !this.token()) return {name:"auth.login"}
    // 游客权限
    if (to.meta.guest && this.token()) return from;
  } 
  // 获取用户信息
  private getUserInfo() {
    if (this.token()) return userStore().getUserInfo();
  } 
  // 判断token是否存在
  private token(): string | null {
    return utils.store.get("login_token");
  }

 
}
export default (router: Router) => {
  new Guard(router).run();
};
