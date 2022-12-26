<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { baseUrl } from "../api";
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import BottomBtn from "../components/BottomBtn.vue";
import store from "../store";

// const { full_name, email } = store.state.applyForm;

// const email = ref("");
// const name = ref("");
const router = useRouter();
console.log(store.state.applyForm);

const userAuthenticate = () => {
  axios
    .post(`${baseUrl}/find/`, {
      email: store.state.applyForm.email,
      full_name: store.state.applyForm.full_name,
    })
    .then((res) => {
      console.log(res);
      // router.push("/applytrend");
    })
    .catch((err) => console.log(err));
};
</script>
<template>
  <HeaderWrap />
  <div class="sub_cont_wrap">
    <TopTitWrap
      title="지원 현황 보기"
      content="지원서에 기입한 이메일과 이름을 아래에 넣어 지원 현황을 확인해 보세요."
    />
    <div class="sub_cont_area">
      <div className="img_deco_wrap">
        <img src="images/img/icon_line_rocket.png" alt="로켓" />
      </div>
      <form @submit.prevent="userAuthenticate">
        <div className="login_wrap">
          <input
            type="email"
            placeholder="이메일 주소를 기입해 주세요."
            v-model="store.state.applyForm.email"
            className="id_area"
            required
          />
          <input
            type="text"
            placeholder="이름을 기입해 주세요."
            className="password_area"
            v-model="store.state.applyForm.full_name"
            required
          />
          <div className="btn_wrap">
            <BottomBtn color="btn_color_bg" content="확인" isRoute />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
