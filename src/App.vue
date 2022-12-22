<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/common.css";
import "./assets/css/style_kr.css";
import "./assets/css/style.css";
onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div class="wrap wrap_basic">
    <RouterView />
  </div>
</template>

<style scoped></style>
