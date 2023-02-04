import { http } from "@/plugins/axios";
// 数据类型
export interface Article {
  id: number;
  title:string,
  content:string
}
// 获取文章列表
export function article() {
  return http.request<Article[]>({
    url: `article`,
    method:"get",
  });
}

