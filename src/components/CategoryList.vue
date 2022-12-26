<script setup>
import store, { CHANGECATEGORYINDEX } from "../store";
const props = defineProps({
  active: Boolean,
  content: String,
  index: Number,
});
const changeCategory = () => {
  store.commit(CHANGECATEGORYINDEX, props.index);
};
</script>
<template>
  <li @click="changeCategory" :class="props.active && 'active'">
    <a>{{ props.content }}</a>
  </li>
</template>
