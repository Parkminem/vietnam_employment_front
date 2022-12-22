<script setup>
import { onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { changeCategoryIndex } from "../store";
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import ProcessList from "../components/ProcessList.vue";
import ApplyFieldPosition from "../components/ApplyFieldPosition.vue";
const store = useStore();
onBeforeUnmount(() => store.commit(changeCategoryIndex, 1));
</script>
<template>
  <HeaderWrap />
  <div class="sub_wrap">
    <div class="sub_cont_wrap">
      <TopTitWrap
        title="고민은 기회를 늦출뿐!"
        content="아이디어콘서트는 지금 웹툰작가 모집중! 좋은 웹툰을 만들어나갈 수 있도록
      함께 해주세요."
      />
      <div class="sub_cont_area">
        <div class="work_process_wrap">
          <h4>아이디어콘서트 작업 공정</h4>
          <div class="process_box">
            <ul>
              <ProcessList
                :index="1"
                process-img-src="images/img/process01.png"
                process-img-alt="작업공정 첫번째 사진"
                icon-img-src="images/img/acon_face.png"
                content="그림 콘티 (제공)"
              />
              <ProcessList
                :index="2"
                process-img-src="images/img/process02.png"
                process-img-alt="작업공정 두번째 사진"
                icon-img-src="images/img/acon_left.png"
                content="데생 콘티"
              />
              <ProcessList
                :index="3"
                process-img-src="images/img/process03.png"
                process-img-alt="작업공정 세번째 사진"
                icon-img-src="images/img/acon_walk.png"
                content="선화"
              />
              <ProcessList
                :index="4"
                process-img-src="images/img/process04.png"
                process-img-alt="작업공정 네번째 사진"
                icon-img-src="images/img/acon_final.png"
                content="채색 및 보정"
              />
            </ul>
          </div>
          <div class="info_txt_box">
            <p>
              작업은
              <span
                >그림 콘티 - 데생 콘티 - 선화 - 채색 및 보정 - 배경 작업</span
              >이 이루어 집니다.
            </p>
          </div>
        </div>
        <div class="recruitment_position_wrap">
          <h3>모집중인 포지션</h3>
          <p>데생콘티와 선화 채색및 보정이 가능한 자는 지원해 주세요.</p>
        </div>
        <ApplyFieldPosition />
      </div>
    </div>
  </div>
</template>
