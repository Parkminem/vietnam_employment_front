<script setup>
defineProps({
  title: String,
  content: String,
});
</script>
<template>
  <div class="top_tit_wrap">
    <h2 class="tit">{{ title }}</h2>
    <p class="sub_txt">{{ content }}</p>
  </div>
</template>
<style></style>
