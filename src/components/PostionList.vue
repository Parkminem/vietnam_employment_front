<script setup>
defineProps({
  count: Number,
  content: String,
});
</script>

<template>
  <li>
    <input type="checkbox" :id="`contactChoice${count}`" /><label
      :for="`contactChoice${count}`"
    >
      <span>{{ content }}</span>
    </label>
  </li>
</template>
