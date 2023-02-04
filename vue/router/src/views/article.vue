<script setup lang="ts">
import { article } from "@/apis/articleApi";
const articles = ref();
article().then((res) => (articles.value = res.data));
// const del = (index: number) => {
//   articles.value.splice(index, 1);
// };

</script>

<template>
  <div class="article">
    <AnimateList tag="ul" :duration=".5">
      <li
        :data-index="index"
        v-for="(article, index) of articles"
        :key="article.id"
      >
        {{ article.title }}
      </li>
    </AnimateList>
  </div>
</template>

<style lang="less" scoped>
.article {
  padding: 30px;
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #2e4055;
  ul {
    li {
      padding: 10px;
      margin-bottom: 20px;
      background-color: #cfaa18;
      color: #333;
      border-radius: 10px;
    }
  }
}

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
</style>
