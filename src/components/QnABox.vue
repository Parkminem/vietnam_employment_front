<script setup>
import { ref } from "vue";

defineProps({
  question: String,
  answer: String,
});
const boxRef = ref(null);
const changeDisplay = () => {
  boxRef.value.classList.contains("show")
    ? boxRef.value.classList.replace("show", "hide")
    : boxRef.value.classList.replace("hide", "show");
};
</script>
<template>
  <div ref="boxRef" class="qna_box_wrap hide">
    <div class="question_wrap" @click="changeDisplay">
      <div class="question_txt_area">
        <span>Q.</span>
        <p>
          {{ question }}
        </p>
      </div>
      <button type="button">
        <i class="bi bi-chevron-down icon"></i>
      </button>
    </div>
    <div class="answer_wrap">
      <span>A.</span>
      <p>
        {{ answer }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.icon {
  font-size: 15px;
}
</style>
