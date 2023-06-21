<template>
  <v-container class="our-funds pa-0" fluid>
    <v-row class="pa-0 ma-0" no-gutters>
      <v-col cols="12" class="pa-0 ma-0">
        <fund-banner
          :title="$i18n.t('ourFundsView.banner.title')"
          :img="bannerImage.img"
          :height="bannerHeight"
          :align="bannerTextAlign"
          :lazyImg="bannerImage.lazyImg"
          :dark="false"
        />
      </v-col>

      <v-col cols="12" class="pa-0 ma-0">
        <how-we-do-it class="new-section" />
      </v-col>

      <v-col cols="12" class="pa-0 ma-0">
        <diversify />
      </v-col>

      <!-- <v-col cols="12" class="pa-0 ma-0">
        <our-strategy />
      </v-col> -->

      <v-col cols="12" class="pa-0 ma-0">
        <funds-list class="new-section" />
      </v-col>

      <v-col cols="12" class="pa-0 ma-0">
        <funds-fees class="new-section" />
      </v-col>

      <v-col cols="12" class="pa-0 ma-0">
        <one-step />
      </v-col>

      <v-col cols="12" class="pa-0 ma-0">
        <tips />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import OurStrategy from "@/components/ourFunds/OurStrategy";
import FundsList from "@/components/ourFunds/FundsList";
import Tips from "@/components/ourFunds/Tips";

import { mapActions, mapGetters } from "vuex";
import FundsFees from "@/components/ourFunds/FundsFees.vue";
import HowWeDoIt from "@/components/ourFunds/HowWeDoIt.vue";
import Diversify from "@/components/ourFunds/Diversify.vue";
import OneStep from "../components/ourFunds/OneStep.vue";
import FundBanner from "@/components/banner/FundBanner";

export default {
  name: "OurFunds",
  metaInfo: {
    title: "Nuestros Fondos"
  },
  components: {
    // OurStrategy,
    FundsList,
    Tips,

    FundsFees,
    HowWeDoIt,
    Diversify,
    OneStep,
    FundBanner
  },
  data: () => ({
    banner: require("@/assets/our-funds-banner.jpg"),
    bannerMobile: require("@/assets/our-funds-banner.jpg"),
    lazyBanner: require("@/assets/lazy-our-funds-banner.jpg"),
    lazyBannerMobile: require("@/assets/lazy-our-funds-banner.jpg")
  }),
  computed: {
    ...mapGetters(["funds", "loadingFunds"]),

    bannerImage() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return { img: this.bannerMobile, lazyImg: this.lazyBannerMobile };
      }
      return { img: this.banner, lazyImg: this.lazyBanner };
    },
    bannerTextAlign() {
      let align = "left";
      if (this.$vuetify.breakpoint.smAndDown) {
        return "bottom";
      }
      return align;
    },
    bannerHeight() {
      // for smartphones
      let height = "500px";

      // for tablets like ipad
      if (this.$vuetify.breakpoint.sm) height = "850px";

      // for tablets like iPad Pro
      if (this.$vuetify.breakpoint.md) height = "500px";

      // for HD resolutions
      if (this.$vuetify.breakpoint.lg) height = "650px";

      // for FULL HD or higher resolutions
      if (this.$vuetify.breakpoint.xl) {
        height = "900px";
      }
      return height;
    }
  },
  methods: {
    ...mapActions(["fetchFunds"])
  },
  created() {
    this.fetchFunds();
  }
};
</script>

<style lang="scss">
.new-section {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-top: 80px;
}
</style>
