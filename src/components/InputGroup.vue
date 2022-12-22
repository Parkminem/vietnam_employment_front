<script setup>
defineProps({
  category: String,
  required: Boolean,
  title: String,
  color: String,
});
</script>

<template>
  <div class="input_group">
    <div :class="`input_categry ${color && color}`">
      <label :for="`add_${category}`">
        {{ required && `*` }}
        {{ title }}
      </label>
    </div>
    <!-- result -->
  </div>
</template>
