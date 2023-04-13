<script setup>
import { onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { CHANGECATEGORYINDEX } from "../store";
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import ProcessList from "../components/ProcessList.vue";
import ApplyFieldPosition from "../components/ApplyFieldPosition.vue";
import sanitizeHtml from "sanitize-html";
import img_process01 from "@/assets/images/img/process01.png"
import img_process02 from "@/assets/images/img/process02.png"
import img_process03 from "@/assets/images/img/process03.png"
import img_process04 from "@/assets/images/img/process04.png"
import img_face01 from "@/assets/images/img/acon_face.png"
import img_left from "@/assets/images/img/acon_left.png"
import img_walk from "@/assets/images/img/acon_walk.png"
import img_final from "@/assets/images/img/acon_final.png"

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
                :process-img-src=img_process01
                process-img-alt="작업공정 첫번째 사진"
                :icon-img-src=img_face01
                :content="$t('applyField.workProcessWrap.process.1')"
              />
              <ProcessList
                :index="2"
                :process-img-src=img_process02
                process-img-alt="작업공정 두번째 사진"
                :icon-img-src= img_left
                :content="$t('applyField.workProcessWrap.process.2')"
              />
              <ProcessList
                :index="3"
                :process-img-src=img_process03
                process-img-alt="작업공정 세번째 사진"
                :icon-img-src= img_walk
                :content="$t('applyField.workProcessWrap.process.3')"
              />
              <ProcessList
                :index="4"
                :process-img-src=img_process04
                process-img-alt="작업공정 네번째 사진"
                :icon-img-src= img_final
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
