<script setup>
defineProps({
  processImgSrc: String,
  processImgAlt: String,
  iconImgSrc: String,
  iconImgAlt: String,
  content: String,
});
</script>
<template>
  <li>
    <div class="process_img">
      <img :src="[processImgSrc]" :alt="[processImgAlt]" />
    </div>
    <div class="icon_run_img">
      <img :src="[iconImgSrc]" :alt="[iconImgAlt]" />
    </div>
    <span>{{ content }}</span>
  </li>
</template>
