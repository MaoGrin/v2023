<script setup lang="ts">
import { nextTick } from "vue";
import ToastEditor from "./toastEditor";
interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  height: 500,
  placeholder: "",
});

const emit = defineEmits(["update:modelValue"]);
nextTick(() => {
  const toastUI = new ToastEditor(
    "#markdownEditor",
    `${props.modelValue}`,
    `${props.height}px`
  );
  toastUI.editor.on("change", (type: string) => {
    emit(
      "update:modelValue",
      toastUI.editor[type == "markdown" ? "getMarkdown" : "getHTML"]()
    );
  });
});
</script>
<template>
  <div id="markdownEditor"></div>
</template>

<style lang="less">
@import url(https://uicdn.toast.com/editor/latest/toastui-editor.min.css);
#markdownEditor {
  @apply bg-white;
  .toastui-editor-mode-switch {
    display: none !important;
  }
  .fullscreen {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    z-index: 999;
    background-color: #fff;
  }
}
</style>
