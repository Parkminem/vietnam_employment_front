<script setup>
import { useRoute, useRouter } from "vue-router";
import sanitize from "../util/sanitize";
defineProps({
  title: String,
  content: String,
  notice: String
});

const router = useRouter();
const route = useRoute();

const moveApplyField = () => {
  router.push('/applyField')
}

</script>
<template>
  <div class="top_tit_wrap">
    <h2 class="tit">{{ title }}</h2>
    <p class="sub_txt" v-html="sanitize(content)"></p>
    <h1 class="notice">{{ notice }} <span v-if="route.path === '/apply'" @click="moveApplyField" class="material-symbols-outlined"> pan_tool_alt</span></h1>
  </div>
</template>
<style lang="scss" scoped>
.material-symbols-outlined {
  cursor: pointer;
  font-size: 40px;
  transform: translateY(10px);
}
</style>