// pinia 用户信息

import userApi from "@/apis/userApi";
import { CacheEnum } from "@/enum/cacheEnum";
import store from "@/utils/store";
import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => {
    return {
      info: {} as any, // 用户信息
    };
  },
  actions: {
    // 获取用户信息
    async getUserInfo() {
      // 判断是否存在token
      if (store.get(CacheEnum.TOKEN_NAME)) {
        // mock 处理
        async function mockHandle() {
          const res = await userApi.info();
          return res.data;
        }
        // 本地处理
        function localHandle() {
          const data = {
            name: "周杰伦", // 用户名称
            age: 19, // 年龄
            avatar: "/images/zjl.jpg", // 头像
            permissions: ["editor_markdown", "article_edit"], // 权限表
          };
          return data
        }

        this.info = localHandle()
      }
    },
  },
});
