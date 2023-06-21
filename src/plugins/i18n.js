import Vue from "vue";
import VueI18n from "vue-i18n";
import es from "@/lang/es.json";
import en from "@/lang/en.json";

const numberFormats = {
  es: {
    currency: {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  },
  en: {
    currency: {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  }
};

Vue.use(VueI18n);
export default new VueI18n({
  locale: "es",
  fallbackLocale: ["es", "en"],
  silentFallbackWarn: true,
  numberFormats,
  messages: {
    es,
    en
  }
});
