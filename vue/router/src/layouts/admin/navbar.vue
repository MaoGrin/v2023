<template>
  <div class="navbar">
    <div class="flex">
      <div @click="menuService.toggleState" class="flex items-center">
        <icon-switch
          theme="outline"
          size="16"
          class="mr-6 cursor-pointer"
          fill="#333"
        />
      </div>
      <Breadcrumb class="hidden md:block" />
    </div>

    <div class="right-container">
      <Notification class="mr-8" />

      <icon-full-screen-one
        theme="outline"
        class="mr-8"
        size="24"
        fill="#333"
        @click="fullScreen"
      />
      <div class="info group">
        <img :src="userInfo.info?.avatar" alt="zjl" class="avatar" />
        <span class="name">{{ userInfo.info?.name }}</span>
        <section
          class="info-menu group-hover:block absolute right-0 top-full bg-white shadow-sm px-3 whitespace-nowrap border rounded-md hidden"
        >
          <router-link to="/">
            <div class="menu-item">
              <a href="" class="fas fa-house-user"></a>
              <span class="item-text">网站首页</span>
            </div>
          </router-link>
          <div class="menu-item">
            <a href="" class="fas fa-file-lines"></a>
            <span class="item-text">文档中心</span>
          </div>

          <div class="menu-item" @click="utils.user.logout()">
            <a href="" class="fas fa-outdent"></a>
            <span class="item-text">退出登录</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import user from "@/store/userStore";
import utils from "@/utils";
import menuService from "@/composables/menu";
const userInfo = user(); // 获取pinia中的用户信息
const isFull = ref<boolean>(false); // 全屏状态判断值
// 控制网页是否全屏
const fullScreen = () => {
  if (isFull.value) {
    // 为真点击时退出全屏
    document.exitFullscreen();
  } else {
    // 变成全屏
    document.documentElement.requestFullscreen();
  }
  // 取反值
  isFull.value = !isFull.value;
};
</script>

<style lang="less" scoped>
.navbar {
  @apply bg-white flex justify-between items-center p-4;
  .right-container {
    @apply flex justify-center items-center relative  cursor-pointer;
    .info {
      @apply flex items-center;
      .avatar {
        @apply h-12 w-12 rounded-full object-cover;
      }
      .name {
        @apply ml-1 text-sm text-gray-600;
      }
      .info-menu {
        // @apply  ;
        z-index: 99999999999999;
        .menu-item {
          @apply flex items-center cursor-pointer border-b py-3 hover:text-fuchsia-900;
          .item-text {
            @apply text-sm to-gray-600 ml-2;
          }
        }
      }
    }
  }
}
.full {
  @apply mr-8 text-gray-500 rotate-45 text-2xl;
}
.not-full {
  @apply mr-8 text-gray-500  text-2xl;
}
</style>
