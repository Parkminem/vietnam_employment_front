<script setup>
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import QnABox from "../components/QnABox.vue";

</script>
<template>
  <HeaderWrap />
  <div class="sub_wrap">
    <div class="sub_cont_wrap">
      <TopTitWrap
        :title="$t('qna.topTitWrap.title')"
        :content="$t('qna.topTitWrap.content')"
      />
      <div class="sub_cont_area">
        <QnABox :question= "$t('qna.question.work')" :answer= "$t('qna.answer.work')" link="http://www.ideaconcert.art/applyField" />
        <QnABox :question= "$t('qna.question.applicationDocuments')" :answer= "$t('qna.answer.applicationDocuments')" link="http://www.ideaconcert.art/applyField"/>
        <QnABox :question= "$t('qna.question.process')" :answer= "$t('qna.answer.process')" />
        <QnABox :question= "$t('qna.question.to')" :answer= "$t('qna.answer.to')" />
        <QnABox :question= "$t('qna.question.result')" :answer= "$t('qna.answer.result')" />
        <QnABox :question= "$t('qna.question.reApplycation')" :answer= "$t('qna.answer.reApplycation')" />
        <QnABox :question= "$t('qna.question.movePart')" :answer= "$t('qna.answer.movePart')" />
        <QnABox :question= "$t('qna.question.feedback')" :answer= "$t('qna.answer.feedback')" />
      </div>
    </div>
  </div>
</template>
