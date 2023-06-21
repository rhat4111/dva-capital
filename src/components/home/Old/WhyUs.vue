<template>
  <div id="why-us" class="p-center">
    <div class="max-width-wrapper">
      <p class="heading">{{ $i18n.t("landing.whyUs.heading") }}</p>
      <div class="p-center">
        <p
          class="title-why-us"
          :class="{
            'p-center-sm': $vuetify.breakpoint.smAndDown,
            'p-center-md': $vuetify.breakpoint.mdAndUp
          }"
        >
          <strong>{{ $i18n.t("landing.whyUs.titleBold") }}</strong>
          {{ $i18n.t("landing.whyUs.title") }}
        </p>
      </div>

      <v-row no-gutters class="my-8">
        <v-col cols="12" md="6">
          <div
            class="mx-5"
            :class="{
              'why-us-margin-left-lg': $vuetify.breakpoint.lgAndUp,
              'margin-sm': $vuetify.breakpoint.smAndDown
            }"
          >
            <why-us-text
              :icon="vector1"
              :title="$i18n.t('landing.whyUs.left.title')"
              :text="$i18n.t('landing.whyUs.left.text')"
            />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div
            class="mx-5"
            :class="{
              'why-us-margin-right-lg': $vuetify.breakpoint.lgAndUp,
              'margin-sm': $vuetify.breakpoint.smAndDown
            }"
          >
            <why-us-text
              :icon="vector2"
              :title="$i18n.t('landing.whyUs.right.title')"
              :text="$i18n.t('landing.whyUs.right.text')"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import WhyUsText from "@/components/home/WhyUsText";
export default {
  name: "WhyUs",

  data: () => ({
    vector1: require("@/assets/5.png"),
    vector2: require("@/assets/6.png")
  }),

  components: {
    WhyUsText
  }
};
</script>

<style lang="scss" scoped>
.heading {
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #828282;
}
</style>
