<script setup>
import PageNav from "./PageNav.vue";
import sanitize from "../util/sanitize";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const languages = ["Korean", "English", "Vietnam"]

const changeLanguage = (lang) => {
  locale.value = lang;
}

</script>
<template>
  <div class="header_wrap">
    <div class="header_con_area">
      <ul class="logo_wrap">
        <li>
          <router-link to="/">
            <img src="@/assets/images/layout/space_logo.png" alt="스페이스 로고" />
          </router-link>
        </li>
        <li class="ideacon_logo">
          <a href="http://ideaconcert.com/" target="_blank"
            ><img
              src="@/assets/images/layout/ideacon_logo.png"
              alt="아이디어콘서트 로고"
          /></a>
        </li>
      </ul>
      <div class="txt_wrap">
        <div class="txt_img">
          <img src="@/assets/images/img/idea-space.png" alt="스페이스 문구" />
        </div>
        <h2 class="font_current"><span>HELLO,</span>WEBTOONIST</h2>
        <p v-html="sanitize($t('header.content'))"></p>
      </div>
    </div>
  </div>
  <div data-aos="flip-left" data-aos-duration="700" class="menu_wrap">
    <ul class="right_menu">
      <PageNav
        color="bg_yellow"
        route="/applyfield"
        :content="$t('header.nav.1')"
      />
      <PageNav color="bg_blue" route="/apply" :content="$t('header.nav.2')" />
      <PageNav
        color="bg_blue"
        route="/applytrendlogin"
        :content="$t('header.nav.3')"
      />
      <PageNav color="bg_darkgrey" route="/qna" :content="$t('header.nav.4')" />
      <ul class="dropdown bg_darkgrey" @click="() => toggleDropdown">
        <li class="dropbtn">language</li>
        <div class="dropdown-content">
          <li v-for="item in languages" :key="item" @click="() => changeLanguage(item)">{{ item }}</li>
        </div>
      </ul>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .dropdown {
    border-radius: 25px;
    margin-top: 30px;
    cursor: pointer;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .dropdown-content {
      display: none;
    }
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
