<script setup>
defineProps({
  index: Number,
  processImgSrc: String,
  processImgAlt: String,
  iconImgSrc: String,
  content: String,
});
</script>
<template>
  <li>
    <div class="process_img">
      <img :src="processImgSrc" :alt="processImgAlt" />
    </div>
    <div class="icon_run_img">
      <img :src="iconImgSrc" alt="아콘이 사진" />
    </div>
    <span>{{ index }}. {{ content }}</span>
  </li>
</template>
