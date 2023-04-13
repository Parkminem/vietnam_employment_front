<script setup>
import HeaderWrap from "../components/HeaderWrap.vue";
import MainContWrap from "../components/MainContWrap.vue";
import MainBtmImgWrap from "../components/MainBtmImgWrap.vue";
import sanitize from "../util/sanitize";
import main_img01 from "@/assets/images/img/main_img01_toon.png";
import main_img02 from "@/assets/images/img/main_img02_toon.png";
import main_img03 from "@/assets/images/img/main_img03_toon.png"
import img_roket from "@/assets/images/img/icon_rocket.png"
import img_noran from "@/assets/images/img/img_acon_noran.png"
import img_allstart from "@/assets/images/img/img_allstar.png"


</script>
<template>
  <HeaderWrap />
  <div class="main_cont_set">
    <MainContWrap
      bgColor="bg_blue"
      circleLine="01"
      :title="$t('main.mainContWrap.1.title')"
      :subTitle="$t('main.mainContWrap.1.subTitle')"
      :content="$t('main.mainContWrap.1.content')"
      :mainImg= main_img01
    />
    <MainContWrap
      bgColor="bg_aqua"
      circleLine="02"
      flexOrder="2"
      :title="$t('main.mainContWrap.2.title')"
      :subTitle="$t('main.mainContWrap.2.subTitle')"
      :content="$t('main.mainContWrap.2.content')"
      :mainImg= main_img02
    />
    <MainContWrap
      bgColor="bg_green"
      circleLine="03"
      :title="$t('main.mainContWrap.3.title')"
      :subTitle="$t('main.mainContWrap.3.subTitle')"
      :content="$t('main.mainContWrap.3.content')"
      :mainImg= main_img03
    />
  </div>
  <div class="main_btm_cont bg_space_img">
    <div class="cont_btm_wrap">
      <MainBtmImgWrap
        :img= img_roket
        imgAlt="로켓"
        marginTop="20"
      />
      <div class="main_text_area txt_align_center">
        <dl>
          <dt class="font_current">{{ $t("main.mainText.title") }}</dt>
          <dd class="color02">
            {{ $t("main.mainText.content") }}
          </dd>
        </dl>
      </div>
      <MainBtmImgWrap
        :img= img_noran
        imgAlt="아콘이와 노란이"
        marginTop="70"
        marginBottom="70"
      />
      <p v-html="sanitize($t('main.mainText.subContent'))"></p>
      <MainBtmImgWrap
        :img= img_allstart
        imgAlt="아이디어콘서트 만화"
        marginTop="a"
        class="img_allstar"
      />
      <div class="main_btm_logo">
        <a href="http://ideaconcert.com/" target="_blank">
          <img
            src="@/assets/images/layout/logo_round.png"
            class=""
            alt="아이디어콘서트 로고"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.img_allstar {
  margin-bottom: -4px;
}
</style>
