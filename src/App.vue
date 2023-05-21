<script setup>
import AOS from "aos";
import axios from "axios";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useI18n } from "vue-i18n";
import "aos/dist/aos.css";
import "./assets/css/common.css";
import "./assets/css/style_kr.css";
import "./assets/css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const { locale } = useI18n();

const getLocaleFromCountry = (country) => {
  if (country === 'KR') {
    return 'Korean';
  } else if (country === 'EN') {
    return 'English';
  } else {
    return 'Vietnam';
  }
};

const fetchGeoIP = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const country = response.data.country;
    const newLocale = getLocaleFromCountry(country);
    locale.value = newLocale;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  AOS.init();
  fetchGeoIP();
});
</script>

<template>
  <div class="wrap wrap_basic">
    <RouterView />
  </div>
</template>
