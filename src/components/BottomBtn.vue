<script setup>
defineProps({
  route: String,
  color: String,
  content: String,
});
</script>
<template>
  <button v-if="content === '확인'" type="submit" :class="`btn_basic ${color}`">
    {{ content }}
  </button>
  <router-link v-else :to="route" :class="`btn_basic ${color}`">{{
    content
  }}</router-link>
</template>
