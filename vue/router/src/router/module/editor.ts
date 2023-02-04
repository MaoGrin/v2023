// editor 路由 模块
import { RouteRecordRaw } from "vue-router";
export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layouts/admin.vue"),
  meta: { auth:true,menu:{title: "编辑器", icon: 'EditTwo'} },
  children: [
    {
      name: "wangeditor",
      path: "wangeditor",
      component: () => import("@/views/editor/wangEditor.vue"),
      meta: { menu:{title: "富文本编辑器"},},
    },
    {
      name: "markdown",
      path: "markdown",
      component: () => import("@/views/editor/markdown.vue"),
      meta: { menu:{title: "markdown"},},
    },
  ],
} as RouteRecordRaw;
