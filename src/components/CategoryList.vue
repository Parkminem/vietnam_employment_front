<script setup>
import { useStore } from "vuex";
import { changeCategoryIndex } from "../store";
const store = useStore();
const props = defineProps({
  active: Boolean,
  content: String,
  index: Number,
});
const changeCategory = () => {
  store.commit(changeCategoryIndex, props.index);
  // store.state.categoryIndex = props.index;
};
</script>
<template>
  <li @click="changeCategory" :class="[props.active[0] && 'active']">
    <a>{{ props.content }}</a>
  </li>
</template>
