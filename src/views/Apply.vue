<script setup>
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import InputGroupTitle from "../components/InputGroupTitle.vue";
import InputGroup from "../components/InputGroup.vue";
import BottomBtn from "../components/BottomBtn.vue";
import Modal from "../components/Modal.vue";
import store, { ISMODAL, ONSPINNER, RESETAPPLY } from "../store";
import { baseUrl } from "../api";
import axios from "axios";
import { useRouter } from "vue-router";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { onUnmounted } from "vue";

const router = useRouter();

const onClickCancel = () => {
  store.commit(ISMODAL);
};

const onSubmit = () => {
  store.commit(ONSPINNER);
  const url = `${baseUrl}/api/apply/`;
  const formData = new FormData();
  for (let i in store.state.applyForm) {
    formData.append(i, store.state.applyForm[i]);
  }

  axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
      store.commit(ONSPINNER);
      res.status === 201 && router.push("/applycomplete");
    })
    .catch((err) => {
      store.commit(ONSPINNER);
      alert("전송에 실패했습니다");
      console.log(err);
    });
  console.log(store.state.applyForm);
};

onUnmounted(() => {
  store.commit(RESETAPPLY);
  store.commit(ISMODAL, true);
});
</script>
<template>
  <HeaderWrap />
  <div class="sub_wrap">
    <div class="sub_cont_wrap">
      <TopTitWrap
        :title="$t('apply.topTitWrap.title')"
        :content="$t('apply.topTitWrap.content')"
        :notice = "$t('apply.topTitWrap.notice')"
      />
      <div class="sub_cont_area">
        <form @submit.prevent="onSubmit">
          <div class="input_set_wrap">
            <InputGroupTitle :step="1" :content="$t('apply.inputGroupTitle')" />
            <InputGroup
              category="position"
              :title="$t('apply.inputGroup.position.title')"
              need
            />
            <InputGroup
              category="name"
              :title="$t('apply.inputGroup.name.title')"
              need
            />
            <InputGroup
              category="eng_name"
              :title="$t('apply.inputGroup.engName.title')"
              need
            />
            <InputGroup
              category="nickname"
              :title="$t('apply.inputGroup.nickname.title')"
              need
            />
            <InputGroup
              category="mail"
              :title="$t('apply.inputGroup.mail.title')"
              need
            />
            <InputGroup
              category="number"
              :title="$t('apply.inputGroup.number.title')"
              need
            />
            <InputGroup
              category="country"
              :title="$t('apply.inputGroup.country.title')"
            />
            <InputGroup
              category="genre"
              :title="$t('apply.inputGroup.genre.title')"
              need
            />
            <InputGroup
              category="intro"
              :title="$t('apply.inputGroup.intro.title')"
            />
            <InputGroup
              category="portfolio_url"
              :title="$t('apply.inputGroup.portfolio.title')"
            />
            <InputGroup
              category="file"
              :title="$t('apply.inputGroup.file.title')"
              need
            />
          </div>
          <div class="txt_box_wrap">
            <div class="txt_box">
              <h5>{{ $t("apply.txtBox.title") }}</h5>
              <ul>
                <li>
                  {{ $t("apply.txtBox.content.1") }}
                </li>
                <li>
                  {{ $t("apply.txtBox.content.2") }}
                </li>
              </ul>
            </div>
          </div>
          <div class="agree_box_wrap">
            <input
              type="checkbox"
              name="agree_check"
              id="agree_check"
              required
            />
            <label for="agree_check">
              <span>{{ $t("apply.agree") }}</span>
            </label>
          </div>
          <div class="btn_wrap">
            <BottomBtn
              color="btn_line"
              :content="$t('apply.cancel')"
              @click="onClickCancel"
            />
            <BottomBtn
              route="/applycomplete"
              color="btn_color_bg"
              :content="$t('apply.submit')"
              isRoute
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  <LoadingSpinner v-if="store.state.spinnerShow" color="#F5A520" size="100px" />
  <Modal />
</template>
