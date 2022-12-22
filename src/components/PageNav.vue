<script setup>
import { onMounted } from "vue";
const props = defineProps({
  content: String,
  color: String,
});
</script>
<template>
  <li ref="" :class="[props.color]">
    <router-link to="/">{{ props.content }}</router-link>
  </li>
</template>
<style scoped></style>
