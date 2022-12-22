<script setup>
const props = defineProps({
  content: String,
  color: String,
  route: String,
});
</script>
<template>
  <li ref="" :class="[props.color]">
    <router-link :to="route">{{ props.content }}</router-link>
  </li>
</template>
<style scoped></style>
