<script setup>
import { RouterLink } from "vue-router";
defineProps({
  route: String,
  style: String,
  content: String,
});

const isCancel = (e) => {
  // if (e.target.text === `취소`) {
  //   modalStyle === "none" && setModalStyle("flex");
  //   modalStyle === "flex" && setModalStyle("none");
  // } else {
  //   setModalStyle("none");
  // }
};
</script>
<template>
  content === '확인' ?
  <button type="submit" :class="[`btn_basic ${style}`]">{{ content }}</button>
  :
  <RouterLink :to="route" :class="[`btn_basic ${style}`]" @click="isCancel">
    {{ content }}
  </RouterLink>
</template>
