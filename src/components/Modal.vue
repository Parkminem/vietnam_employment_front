<script setup>
import BottomBtn from "./BottomBtn.vue";
import store, { RESETAPPLY, ISMODAL } from "../store";

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
        <h2>지원 취소 하기</h2>
        <p>
          취소 시 모든 기입한 정보들은 삭제됩니다.
          <br />
          그래도 취소하시겠습니까?
        </p>
        <div class="btn_wrap">
          <BottomBtn
            color="btn_line"
            route="/"
            content="취소"
            @click="onClickCancel"
            isRoute
          />
          <BottomBtn
            color="btn_color_bg"
            content="계속 하기"
            @click="onClickContinue"
          />
        </div>
      </div>
    </div>
  </div>
</template>
