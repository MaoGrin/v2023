<script setup lang="ts">
import Menu from "./admin/menu.vue";
import NavBar from "./admin/navbar.vue";
import HistoryLink from "./admin/historyLink.vue";
import { useRoute } from "vue-router";
import menuStore from "@/store/menuStore";
import { watchEffect } from "vue";
import menu from "@/composables/menu";
const route = useRoute();
watchEffect(() => {
  menu.addHistoryMenu(route);
});
</script>

<template>
  <transition
    appear
    class="animate__animated"
    enter-active-class="animate__bounceIn"
  >
    <div class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
      <Menu />
      <div class="content flex-1 bg-gray-100 grid grid-rows-[auto_1fr]">
        <div>
          <nav-bar></nav-bar>
          <history-link></history-link>
        </div>
        <div class="m-3 relative overflow-y-auto overflow-x-hidden">
          <router-view #default="{ Component }">
            <transition
              class="animate__animated"
              enter-active-class="animate__fadeInRight"
              leave-active-class="animate__fadeOutLeft"
            >
              <component :is="Component" class="absolute w-full"></component>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
.admin {
  @apply w-screen min-h-screen;
  .menu {
    @apply bg-gray-800 p-4;
    .logo {
      @apply text-gray-300 flex items-center;
    }
    .left-container {
      dl {
        @apply text-gray-300 text-sm;
        dt {
          @apply text-sm mt-6 flex justify-between cursor-pointer items-center;
          section {
            @apply flex items-center;
            i {
              @apply mr-2 text-sm;
            }
          }
        }
        dd {
          @apply py-3 pl-4 my-2  text-white rounded-md cursor-pointer  duration-300 hover:bg-violet-500;
          &.active {
            @apply bg-violet-700;
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
// 定义需要权限才能访问到这个路由
export default {
  name: "admin",
  route: { meta: { auth: true } },
};
</script>
