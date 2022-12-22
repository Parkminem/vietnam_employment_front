<script setup>
import { onMounted, onUpdated } from "vue";
import { RouterView } from "vue-router";
import AOS from "aos";
import "./asset/css/common.css";
import "./asset/css/style_kr.css";
import "./asset/css/style.css";

onMounted(() => {
  AOS.init();
}),
</script>

<template>
  <div class="wrap wrap_basic">
    <RouterView />
  </div>
</template>
