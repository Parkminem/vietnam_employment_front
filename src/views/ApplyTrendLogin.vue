<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import store, { CHANGEAPPLYFORM } from "../store";
import { baseUrl } from "../api";
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import BottomBtn from "../components/BottomBtn.vue";

const email = ref();
const name = ref();
const router = useRouter();

const userAuthenticate = () => {
  axios
    .post(`${baseUrl}/find/`, { email: email.value, full_name: name.value })
    .then((res) => {
      for (let i in res.data) {
        const arr = [i, res.data[i]];
        if (i !== "id") {
          store.commit(CHANGEAPPLYFORM, arr);
        }
      }
      router.push("/applytrend");
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
            v-model="email"
            className="id_area"
            required
          />
          <input
            type="text"
            placeholder="이름을 기입해 주세요."
            className="password_area"
            v-model="name"
            required
          />
          <div className="btn_wrap">
            <BottomBtn
              route="/applycomplete"
              color="btn_color_bg"
              content="확인"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
