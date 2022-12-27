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
        <QnABox question="질문입니다1" answer="대답입니다1" />
        <QnABox question="질문입니다2" answer="대답입니다2" />
        <QnABox question="질문입니다3" answer="대답입니다3" />
        <QnABox question="질문입니다4" answer="대답입니다4" />
        <QnABox question="질문입니다5" answer="대답입니다5" />
        <QnABox question="질문입니다6" answer="대답입니다6" />
        <QnABox question="질문입니다7" answer="대답입니다7" />
      </div>
    </div>
  </div>
</template>
