<script setup>
defineProps({
  content: String,
  step: String,
});
</script>

<template>
  <p>
    <span>STEP{{ step < 10 ? `0${step}` : step }}.</span> {{ content }}
  </p>
</template>
