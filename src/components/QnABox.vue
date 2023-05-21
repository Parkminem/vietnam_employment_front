<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import sanitize from "../util/sanitize";

defineProps({
  question: String,
  answer: String,
  link: String,
});
const router = useRouter();
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
        <p v-if="link" v-html="sanitize($t('qna.answer.link'))"></p>
        <p style="cursor: pointer;" v-if="link" @click="router.push('/applyField')">
          <br>
          {{ link }}
        </p>
      </p>
    </div>
  </div>
</template>
<style scoped>
* {
  white-space: pre-wrap;
}
.icon {
  font-size: 15px;
}
</style>
