<template>
  <div class="animate-list">
    <transition-group
    :tag="props.tag"
      name="animate"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
    <slot/>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { RendererElement } from "@vue/runtime-core";
import gsap from "gsap";
interface Props{
  tag?:string,
  duration?:number,
  delay?:number
}
const props = withDefaults(defineProps<Props>(),{
  tag:'',
  duration:.5,
  delay:.2
})
const beforeEnter = (el:RendererElement) => {
  gsap.set(el, {
    opacity: 0,
  });
};
const enter = (el:RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay,
  });
};
</script>

<style lang="less" scoped>
.animate-list {
  position: relative;
  .animate-leave-active {
    transition: all 1s ease;
    position: absolute;
    width: 100%;
  }
  .animate-leave-to {
    opacity: 0;
  }
  .animate-move {
    transition: all 1s ease;
  }
}
</style>
