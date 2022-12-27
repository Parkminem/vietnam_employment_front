<script setup>
import BottomBtn from "./BottomBtn.vue";
import store, { RESETAPPLY, ISMODAL } from "../store";
import sanitize from "../util/sanitize";
const onClickCancel = () => {
  store.commit(ISMODAL);
  store.commit(RESETAPPLY);
};

const onClickContinue = () => {
  store.commit(ISMODAL);
};
</script>

<template>
  <div :style="{ display: store.state.modalShow }" class="modal_wrap">
    <div class="modal_box_wrap">
      <div class="modal_box">
        <h2>{{ $t("modal.title") }}</h2>
        <p v-html="sanitize($t('modal.content'))"></p>
        <div class="btn_wrap">
          <BottomBtn
            color="btn_line"
            route="/"
            :content="$t('modal.cancel')"
            @click="onClickCancel"
            isRoute
          />
          <BottomBtn
            color="btn_color_bg"
            :content="$t('modal.continue')"
            @click="onClickContinue"
          />
        </div>
      </div>
    </div>
  </div>
</template>
