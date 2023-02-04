<template>
  <transition appear  class="animate__animated " enter-active-class="animate__bounceIn" >
    <div
      class="h-screen w-screen bg-gray-700 flex flex-col items-center justify-center"
    >
      <img :src="zjl" alt="周杰伦" class="logo" />
      <div class="mt-4">
        <router-link :to="{ name: 'admin.home' }" class="l_button"
          >后台管理</router-link
        >
        <router-link
          v-if="!utils.user.isLogin()"
          :to="{ name: 'auth.login' }"
          class="l_button ml-3 l_danger"
          >用户登录</router-link
        >
      </div>
      <div class="tips">一首不能说的秘密送给你~</div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import utils from "@/utils";
import zjl from "../../public/images/zjl.jpg";
</script>

<style lang="less" scoped>
.logo {
  @apply w-40 h-40 rounded-full border-8 object-cover border-white mb-5;
}
.tips {
  @apply text-gray-100 text-sm font-mono drop-shadow-md mt-6;
}
</style>

<script lang="ts">
export default {
  route: { name: "home", meta: { guest: true } },
};
</script>
