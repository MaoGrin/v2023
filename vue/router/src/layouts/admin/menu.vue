<script setup lang="ts">
import menuService from "@/composables/menu";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";
import * as icons from "@icon-park/vue-next";
const route = useRoute();

watchEffect(() => {
  menuService.setCurrentMenu(route);
});
</script>

<template>
  <div class="menu w-[200px]" :class="{ close: menuService.close.value }">
    <div class="logo">
      <!-- <i class="fas fa-futbol text-fuchsia-300 mr-2 text-[25px]"></i>
       -->
      <icon-airpods theme="filled" class="mr-2" size="24" fill="#6d28d9" />
      <span>最长的电影</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(menu, index) of menuService.menus.value" :key="index">
        <dt @click="menuService.toggleParentMenu(menu)">
          <section>
            <!-- <i :class="menu.icon"></i> -->
            <component
              :is="icons[menu.icon!]"
              class="mr-2"
              theme="outline"
              size="18"
              fill="#aaa"
            />
            <span class="text-md">{{ menu.title }}</span>
          </section>
          <section>
            <icon-down
              theme="outline"
              size="16"
              fill="#ccc"
              :class="{ 'rotate-180': !menu.isClick }"
            />
          </section>
        </dt>
        <dd
          :class="!menu.isClick || menuService.close.value ? 'hidden' : 'block'"
        >
          <div
            :class="{ active: cmenu?.isClick }"
            class="duration-300"
            @click="$router.push({ name: cmenu.route })"
            v-for="(cmenu, key) of menu.children"
            :key="key"
          >
            {{ cmenu?.title }}
          </div>
        </dd>
      </dl>
    </div>
  </div>
  <div
    class="bg block md:hidden"
    @click="menuService.toggleState"
    :class="{ close: menuService.close.value }"
  ></div>
</template>

<style lang="less" scoped>
.menu {
  @apply bg-gray-800 p-4 z-20;
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
        div {
          @apply py-3 pl-4 my-2  text-white rounded-md cursor-pointer bg-gray-700 duration-300 hover:bg-violet-500;
          &.active {
            @apply bg-violet-700;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .menu {
    &.close {
      width: auto;
      .logo {
        span {
          @apply hidden;
          &.i-icon {
            @apply block mr-0;
          }
        }
      }
      .left-container {
        dl {
          @apply  relative flex justify-center items-center my-3 ;

          dt {
            @apply flex   justify-center items-center w-full;
            section {
              span {
                @apply hidden;
                &.i-icon {
                  @apply block mr-0;
                }
              }
              &:nth-of-type(2) {
                @apply hidden;
              }
            }
          }

          &:hover {
            dd {
              @apply block absolute left-full top-1/2  bg-gray-700;
              width: 200px;
              div {
                @apply m-0 rounded-none;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and(max-width:768px) {
  .menu {
    @apply h-screen  absolute left-0 top-0 z-50 duration-300;
    width: 200px;
  }
  &.close {
    @apply hidden;
  }
  .bg {
    @apply bg-gray-100 z-40 opacity-75 w-screen h-screen absolute left-0 top-0;
    &.close {
      @apply hidden;
    }
  }
}
</style>
