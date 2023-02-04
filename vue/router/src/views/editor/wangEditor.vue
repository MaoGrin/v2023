<template>
  <div>
    <WangEditorEditor :height="300" v-model="content" />
    <div class=" bg-gray-100 mt-3 border p-3">{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const content = ref("<p>周杰伦</p>");
</script>

<style></style>
