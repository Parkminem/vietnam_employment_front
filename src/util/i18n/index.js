import { createI18n } from "vue-i18n";
import ko from "./nations/ko.json";
import vt from "./nations/vt.json";
import en from "./nations/en.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "ko",
  messages: { ko, vt, en },
});

export default i18n;
