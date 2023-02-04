<template>
  <div
    class="hidden md:block p-2 border-t border-b bg-gray-50"
    v-show="menuService.history.value.length"
  >
    <div class="m-3 grid grid-flow-col gap-3 justify-start">
      <div
        v-for="(link, index) of menuService.history.value"
        :key="index"
        class="bg-white flex rounded-md py-2 px-3 text-sm border border-gray-100 duration-300 text-gray-600 hover:bg-violet-600 hover:text-white"
        :class="{ 'bg-violet-600 !text-white': $route.name == link.route }"
      >
        <router-link :to="{ name: link.route }">
          {{ link.title }}
        </router-link>
        <!-- <i
        @click="menuService.removeHistoryMenu(link)"
          class="fas fa-xmark "
        ></i> -->
        <icon-close-small 
        @click="menuService.removeHistoryMenu(link)"
        theme="outline" size="16" fill="#eee" class=" text-white ml-2 p-1 duration-300 rounded-full hover:bg-red-500 cursor-pointer "/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import menuStore from "@/store/menuStore";
// const menus = menuStore().historyMenus;
import menuService from "@/composables/menu";
</script>

<style></style>
