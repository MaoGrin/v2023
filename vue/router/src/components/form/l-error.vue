<template>
   <transition
   appear
   class="animate__animated"
   enter-active-class="animate__fadeIn"
   leave-active-class="animate__fadeOut"
   >
    <div class="l_error" v-show="props.error">
      {{ props.error }}
    </div>
   </transition>
</template>
  
<script setup lang='ts'>
  const props = defineProps({
    error:String
  })
</script>
  
<style>
  
</style>