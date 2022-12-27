<script setup>
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
defineProps({
  color: String,
  size: String,
});
</script>

<template>
  <div class="modal_wrap">
    <clip-loader :color="color" :size="size"></clip-loader>
  </div>
</template>
