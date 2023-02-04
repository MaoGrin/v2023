// 用户接口
import { http } from "@/plugins/axios";
// 个人信息
function info() {
  return http.request({
    url: "info",

  });
}
// 数据类型
interface Login {
  token: string;
}
// 登录表单数据类型
export interface ILoginData {
  account: string;
  password: string;
}
// 登录
function login(data: ILoginData): any {
  return http.request<Login>({
    url: `login`,
    method: "post",
    data,
  });
}

export default { info, login };
