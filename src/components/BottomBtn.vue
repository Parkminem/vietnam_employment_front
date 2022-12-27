<script setup>
defineProps({
  route: String,
  color: String,
  content: String,
  isRoute: Boolean,
});
</script>
<template>
  <button
    v-if="content === '확인' || content === 'XÁC NHẬN' || content === 'Agree'"
    type="submit"
    :class="`btn_basic ${color}`"
  >
    {{ content }}
  </button>
  <router-link v-else-if="isRoute" :to="route" :class="`btn_basic ${color}`">
    {{ content }}
  </router-link>
  <button v-else type="button" :class="`btn_basic ${color}`">
    {{ content }}
  </button>
</template>
