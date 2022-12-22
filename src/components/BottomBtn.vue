<script setup>
defineProps({
  route: String,
  color: String,
  content: String,
});
</script>
<template>
  <router-link :to="route" :class="`btn_basic ${color}`">{{
    content
  }}</router-link>
</template>
