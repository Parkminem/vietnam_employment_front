<script setup>
defineProps({
  count: Number,
  content: String,
});
const onChange = (e) => {
  console.dir(e.target);
};
</script>

<template>
  <li>
    <input
      type="checkbox"
      :id="`contactChoice${count}`"
      @change="onChange"
    /><label :for="`contactChoice${count}`">
      <span>{{ content }}</span>
    </label>
  </li>
</template>
