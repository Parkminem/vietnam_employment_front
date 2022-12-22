<script setup>
defineProps({
  content: String,
  step: Number,
});
</script>

<template>
  <p>
    <span>STEP{{ step < 10 ? `0${step}` : step }}.</span> {{ content }}
  </p>
</template>
