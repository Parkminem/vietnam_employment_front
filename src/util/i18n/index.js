import { createI18n } from "vue-i18n";
import ko from "./nations/ko.json";
import vt from "./nations/vt.json";
const i18n = createI18n({
  locale: "ko",
  fallbackLocale: "en",
  messages: { ko, vt },
});

export default i18n;
