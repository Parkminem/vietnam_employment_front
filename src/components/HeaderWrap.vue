<script setup>
import PageNav from "./PageNav.vue";
</script>
<template>
  <div class="header_wrap">
    <div class="header_con_area">
      <ul class="logo_wrap">
        <li>
          <router-link to="/">
            <img src="images/layout/space_logo.png" alt="스페이스 로고" />
          </router-link>
        </li>
        <li class="ideacon_logo">
          <a href="http://ideaconcert.com/" target="_blank"
            ><img
              src="images/layout/ideacon_logo.png"
              alt="아이디어콘서트 로고"
          /></a>
        </li>
      </ul>
      <div class="txt_wrap">
        <div class="txt_img">
          <img src="images/img/idea-space.png" alt="스페이스 문구" />
        </div>
        <h2 class="font_current"><span>HELLO,</span>WEBTOONIST</h2>
        <p v-html="$t('header.content')"></p>
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
    </ul>
  </div>
</template>
