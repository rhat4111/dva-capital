import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify";
import i18n from "@/plugins/i18n";
import VueApexCharts from "vue-apexcharts";
import VueIntercom from "vue-intercom";
import VueAnalytics from "vue-analytics";
import Chartkick from "vue-chartkick";
import Notifications from "vue-notification";
import VueMeta from "vue-meta";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

Vue.config.productionTip = false;

Chartkick.configure({ mapsApiKey: process.env.VUE_APP_GOOGLE_API_KEY });

Vue.use(Chartkick);
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
Vue.use(VueIntercom, { appId: process.env.VUE_APP_INTERCOM_APP_ID });
Vue.use(VueAnalytics, {
  id: "UA-68575253-1",
  router
});
Vue.use(Notifications);
Vue.use(VueMeta);

Sentry.init({
  Vue,
  dsn: process.env.VUE_APP_SENTRY_DSN,
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["dvacapital.com", /^\//]
    })
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
