

import { http } from "@/plugins/axios";
// 数据类型
export interface Img {
  url: string;
}
// 上传图片
export function uploadImage(data:FormData) {
  return http.request<Img>({
    url: `/upload/image`,
    method:"post",
    data
  });
}

