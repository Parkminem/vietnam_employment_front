<script setup>
defineProps({
  active: Boolean,
  content: String,
});
</script>
<template>
  <li :class="[active[0] && 'active']">
    <a>{{ content }}</a>
  </li>
</template>
