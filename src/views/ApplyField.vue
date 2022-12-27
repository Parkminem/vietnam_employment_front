<script setup>
import { onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { CHANGECATEGORYINDEX } from "../store";
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import ProcessList from "../components/ProcessList.vue";
import ApplyFieldPosition from "../components/ApplyFieldPosition.vue";
import sanitizeHtml from "sanitize-html";

const store = useStore();
onBeforeUnmount(() => store.commit(CHANGECATEGORYINDEX, 1));
</script>
<template>
  <HeaderWrap />
  <div class="sub_wrap">
    <div class="sub_cont_wrap">
      <TopTitWrap
        :title="$t('applyField.topTitWrap.title')"
        :content="$t('applyField.topTitWrap.content')"
      />
      <div class="sub_cont_area">
        <div class="work_process_wrap">
          <h4>{{ $t("applyField.workProcessWrap.title") }}</h4>
          <div class="process_box">
            <ul>
              <ProcessList
                :index="1"
                process-img-src="images/img/process01.png"
                process-img-alt="작업공정 첫번째 사진"
                icon-img-src="images/img/acon_face.png"
                :content="$t('applyField.workProcessWrap.process.1')"
              />
              <ProcessList
                :index="2"
                process-img-src="images/img/process02.png"
                process-img-alt="작업공정 두번째 사진"
                icon-img-src="images/img/acon_left.png"
                :content="$t('applyField.workProcessWrap.process.2')"
              />
              <ProcessList
                :index="3"
                process-img-src="images/img/process03.png"
                process-img-alt="작업공정 세번째 사진"
                icon-img-src="images/img/acon_walk.png"
                :content="$t('applyField.workProcessWrap.process.3')"
              />
              <ProcessList
                :index="4"
                process-img-src="images/img/process04.png"
                process-img-alt="작업공정 네번째 사진"
                icon-img-src="images/img/acon_final.png"
                :content="$t('applyField.workProcessWrap.process.4')"
              />
            </ul>
          </div>
          <div class="info_txt_box">
            <p v-html="sanitizeHtml($t('applyField.infoTxtBox.content'))"></p>
          </div>
        </div>
        <div class="recruitment_position_wrap">
          <h3>{{ $t("applyField.recruitmentPositionWrap.title") }}</h3>
          <p>{{ $t("applyField.recruitmentPositionWrap.content") }}</p>
        </div>
        <ApplyFieldPosition />
      </div>
    </div>
  </div>
</template>
