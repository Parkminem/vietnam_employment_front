<script setup>
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import InputGroup from "../components/InputGroup.vue";
import BottomBtn from "../components/BottomBtn.vue";
import { onBeforeMount, onUnmounted } from "vue";
import store, { RESETAPPLY } from "../store";
import { useRouter } from "vue-router";

const router = useRouter();
onBeforeMount(() => {
  if (!store.state.applyForm.full_name) {
    router.push("/applytrendlogin");
  }
});
onUnmounted(() => {
  store.commit(RESETAPPLY);
});
</script>

<template>
  <HeaderWrap />
  <div class="sub_wrap">
    <div class="sub_cont_wrap">
      <TopTitWrap
        :title="$t('applyTrend.topTitWrap.title')"
        :content="$t('applyTrend.topTitWrap.content')"
      />
      <div class="sub_cont_area">
        <div class="input_set_wrap">
          <InputGroup
            category="position"
            :title="$t('apply.inputGroup.position.title')"
            need
            color="input_categry_black"
          />
          <InputGroup
            category="name"
            :title="$t('apply.inputGroup.name.title')"
            need
            color="input_categry_black"
          />
          <InputGroup
            category="nickname"
            :title="$t('apply.inputGroup.nickname.title')"
            color="input_categry_black"
          />
          <InputGroup
            category="mail"
            :title="$t('apply.inputGroup.mail.title')"
            need
            color="input_categry_black"
          />
          <InputGroup
            category="number"
            :title="$t('apply.inputGroup.number.title')"
            need
            color="input_categry_black"
          />
          <InputGroup
            category="country"
            :title="$t('apply.inputGroup.country.title')"
            color="input_categry_black"
          />
          <InputGroup
            category="genre"
            :title="$t('apply.inputGroup.genre.title')"
            need
            color="input_categry_black"
          />
          <InputGroup
            category="intro"
            :title="$t('apply.inputGroup.intro.title')"
            color="input_categry_black"
          />
          <InputGroup
            category="portfolio_url"
            :title="$t('apply.inputGroup.portfolio.title')"
            color="input_categry_black"
          />
          <InputGroup
            category="file"
            :title="$t('apply.inputGroup.file.title')"
            need
            color="input_categry_black"
          />
        </div>
        <div class="txt_box_wrap mgt30">
          <div class="comment">{{ $t("applyTrend.adminComment.title") }}</div>
          <div class="txt_box">
            <p>{{ $t("applyTrend.adminComment.default") }}</p>
          </div>
        </div>
        <div class="btn_wrap">
          <BottomBtn
            route="/"
            color="btn_color_bg"
            :content="$t('applyTrend.mainBtn')"
            isRoute
          />
        </div>
      </div>
    </div>
  </div>
</template>
