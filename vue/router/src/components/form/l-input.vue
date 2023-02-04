<template>
  <input
    type="text"
    class="l_input"
    :value="props.modelValue"
    @input="input"
  />
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const input = (e:any) =>{
  emit('update:modelValue',e.target.value)
}
const props = defineProps({
  modelValue: String,
});
</script>

<style lang="less">
.l_input {
  @apply my-4 border w-full border-gray-200 rounded-sm py-1 px-2 outline-none  
            placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>
