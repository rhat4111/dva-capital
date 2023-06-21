<template>
  <div class="benefits">
    <div>
      <v-row no-gutters>
        <v-col cols="12" class="benefits-title">
          <v-col cols="12" class="how-to-invest-text">
            <p class="heading">
              {{ $i18n.t("landing.benefits.heading") }}
            </p>
            <div class="p-center py-16">
              <div
                :class="{
                  'p-center-sm': $vuetify.breakpoint.smAndDown,
                  'p-center-md': $vuetify.breakpoint.mdAndUp
                }"
              >
                <div class="title-why-us" v-html="$i18n.t('landing.benefits.title')" />
              </div>
            </div>
          </v-col>
        </v-col>

        <v-col cols="12" class="bg-dark-green">
          <v-row no-gutters class="max-width-wrapper">
            <v-col cols="12" md="6" lg="3">
              <why-us-text
                :icon="vector3"
                :title="$i18n.t('landing.benefits.first.title')"
                :text="$i18n.t('landing.benefits.first.text')"
                :maxTextWidth="whyUsTextWidth"
              />
            </v-col>
            <v-col cols="12" md="6" lg="3">
              <why-us-text
                :icon="vector4"
                :title="$i18n.t('landing.benefits.second.title')"
                :text="$i18n.t('landing.benefits.second.text')"
                :maxTextWidth="whyUsTextWidth"
              />
            </v-col>
            <v-col cols="12" md="6" lg="3">
              <why-us-text
                :icon="vector6"
                :title="$i18n.t('landing.benefits.third.title')"
                :text="$i18n.t('landing.benefits.third.text')"
                :maxTextWidth="whyUsTextWidth"
              />
            </v-col>
            <v-col cols="12" md="6" lg="3">
              <why-us-text
                :icon="vector5"
                :title="$i18n.t('landing.benefits.fourth.title')"
                :text="$i18n.t('landing.benefits.fourth.text')"
                :maxTextWidth="whyUsTextWidth"
              />
            </v-col>

            <v-col cols="12" class="p-center benefits-button">
              <purple-button
                :text="$i18n.t('landing.benefits.button.text')"
                :link="$i18n.t('ourFundsView.fundsList.buttonHref')"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import WhyUsText from "@/components/home/WhyUsText";
import PurpleButton from "@/components/PurpleButton";
export default {
  name: "Benefits",
  data: () => ({
    vector3: require("@/assets/2.png"),
    vector4: require("@/assets/1.png"),
    vector5: require("@/assets/3.png"),
    vector6: require("@/assets/4.png")
  }),

  components: {
    WhyUsText,
    PurpleButton
  },

  computed: {
    whyUsTextWidth() {
      let width = "230px"; // for sm
      if (this.$vuetify.breakpoint.mdAndUp) {
        width = "250px";
      }
      return width;
    }
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

.benefits {
  padding-bottom: 60px;
}
</style>
