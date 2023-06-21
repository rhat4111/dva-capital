<template>
  <div class="philosophy p-center px-10">
    <div class="max-width-wrapper">
      <v-row no-gutters class="pb-12">
        <v-col cols="12" class="philosophy-title mb-16">
          <v-col cols="12" class="how-to-invest-text">
            <p class="heading">
              {{ $i18n.t("landing.philosophy.heading") }}
            </p>
            <div class="center-in-page">
              <div class="philosophy-title" v-html="$i18n.t('landing.philosophy.title')" />
            </div>
          </v-col>
        </v-col>

        <div class="flex">
          <div class="text-container">
            <div class="giant-grey-dot">.</div>

            <div class="philosophy-text ml-2 py-2">
              {{ $i18n.t("landing.philosophy.first.text") }}
            </div>
          </div>

          <div class="vl-container" v-if="$vuetify.breakpoint.mdAndUp">
            <div class="vl"></div>
          </div>
        </div>
        <div class="flex">
          <div class="text-container">
            <div class="giant-grey-dot">.</div>

            <div class="philosophy-text ml-2 py-2">
              {{ $i18n.t("landing.philosophy.second.text") }}
            </div>
          </div>

          <div class="vl-container" v-if="$vuetify.breakpoint.mdAndUp">
            <div class="vl"></div>
          </div>
        </div>

        <div class="flex">
          <div class="text-container">
            <div class="giant-grey-dot">.</div>

            <div class="philosophy-text ml-2 py-2">
              {{ $i18n.t("landing.philosophy.third.text") }}
            </div>
          </div>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Philosophy",
  data: () => ({
    sChars10: require("@/assets/sChars10.svg"),
    sChars7: require("@/assets/sChars7.svg"),
    sChars6: require("@/assets/sChars6.svg")
  }),

  components: {},

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
.philosophy {
  // equal to vuetify mb-5
  margin-bottom: 20px;
  // equal to vuetify mb-16
  @media (max-width: 800px) {
    margin-bottom: 64px;
  }

  .heading {
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: #828282;
  }

  .philosophy-title {
    text-transform: uppercase;

    @media (max-width: 800px) {
      font-size: 48px;
    }
    font-size: 56px;
    color: #49dd9f;
    font-weight: 800;
    text-align: center;
  }
  .philosophy-text {
    max-width: 300px;
    @media (max-width: 1150px) {
      max-width: 220px;
    }

    @media (max-width: 830px) {
      max-width: 200px;
    }

    @media (max-width: 600px) {
      max-width: 300px;
    }
  }

  .giant-grey-dot {
    font-size: 56px;
    font-weight: 800;
    color: #49dd9f;
  }

  .text-container {
    display: flex;
    align-items: baseline;
  }
  .flex {
    display: flex;
    justify-content: space-evenly;
  }

  .vl-container {
    display: flex;
    align-items: self-end;
  }

  .vl {
    height: 85%;
    border-left: 2px #49dd9f solid;
  }
}
</style>
