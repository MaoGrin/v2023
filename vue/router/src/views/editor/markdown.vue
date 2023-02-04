<template>
  <div>
    <MarkdownEditor v-model="content" :height="300" placeholder="请输入markdown内容" />
    {{ content }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const content = ref("abc");
</script>

<style></style>
