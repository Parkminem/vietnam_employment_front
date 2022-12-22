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
    <div class="question_wrap">
      <div class="question_txt_area">
        <span>Q.</span>
        <p>
          {{ question }}
        </p>
      </div>
      <button type="button" @click="changeDisplay">
        <span class="material-icons">expand_more</span>
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
