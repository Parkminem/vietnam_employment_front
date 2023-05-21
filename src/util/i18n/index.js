import { createI18n } from "vue-i18n";
import Korean from "./nations/ko.json";
import Vietnam from "./nations/vt.json";
import English from "./nations/en.json";

const i18n = createI18n({
  legacy: false,
  locale: "Vietnam",
  fallbackLocale: "English",
  messages: { Korean, Vietnam, English },
});

export default i18n;