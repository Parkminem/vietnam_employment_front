<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import store, { CHANGEAPPLYFORM } from "../store";
import { baseUrl } from "../api";
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import BottomBtn from "../components/BottomBtn.vue";

const email = ref("");
const name = ref("");
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
      :title="$t('applyTrendLogin.topTitWrap.title')"
      :content="$t('applyTrendLogin.topTitWrap.content')"
    />
    <div class="sub_cont_area">
      <div className="img_deco_wrap">
        <img src="@/assets/images/img/icon_line_rocket.png" alt="로켓" />
      </div>
      <form @submit.prevent="userAuthenticate">
        <div className="login_wrap">
          <input
            type="email"
            :placeholder="$t('applyTrendLogin.email')"
            v-model="email"
            className="id_area"
            required
          />
          <input
            type="text"
            :placeholder="$t('applyTrendLogin.name')"
            className="password_area"
            v-model="name"
            required
          />
          <div className="btn_wrap">
            <BottomBtn
              color="btn_color_bg"
              :content="$t('applyTrendLogin.button')"
              isRoute
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
