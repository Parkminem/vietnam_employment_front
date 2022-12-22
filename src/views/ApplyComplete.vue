<script setup>
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import BottomBtn from "../components/BottomBtn.vue";
</script>
<template>
  <HeaderWrap />
  <div class="sub_wrap">
    <div class="sub_cont_wrap">
      <TopTitWrap
        title="지원 하기 완료"
        content="아이디어콘서트에 지원해 주신 걸 감사합니다. 검토 후 빠른 시일 내에 결과를 알려드리겠습니다. <br> 다시 한번 더 감사합니다."
      />
      <div class="sub_cont_area">
        <div className="img_deco_wrap">
          <img src="images/img/noran_face.png" alt="노란이" />
        </div>
      </div>
      <div className="btn_wrap">
        <BottomBtn route="/" color="btn_line" content="메인가기" />
        <BottomBtn
          route="/applytrend"
          color="btn_color_bg"
          content="나의 지원 현황"
        />
      </div>
    </div>
  </div>
</template>
