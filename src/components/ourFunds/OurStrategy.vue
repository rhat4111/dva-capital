<template>
  <v-container class="our-strategy" fluid>
    <div class="max-width-wrapper">
      <v-row class="pa-12">
        <v-col cols="12" md="4" class="text-container">
          <p class="pre-title">
            {{ $i18n.t("ourFundsView.ourStrategy.preTitle") }}
          </p>
          <br />
          <p
            class="stronger-font strategy-title"
            v-html="$i18n.t('ourFundsView.ourStrategy.title')"
          />
          <br />
          <p class="text">{{ $i18n.t("ourFundsView.ourStrategy.text") }}</p>
        </v-col>
        <v-col
          cols="12"
          md="8"
          class="image-container d-flex align-center pa-0"
          :class="{
            'px-12': $vuetify.breakpoint.mdAndUp,
            'px-n12 my-12': $vuetify.breakpoint.smAndDown
          }"
        >
          <v-img :src="ourStrategyImg" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "OurStrategy",
  data: () => ({
    ourStrategyImg: require("@/assets/our-strategy.jpg")
  }),
  components: {}
};
</script>

<style lang="scss">
.our-strategy {
  // background: #ebf0ff;

  .pre-title {
    color: #828282;
    font-size: 11px;
    letter-spacing: 0.1em;
    line-height: 13px;
    text-transform: uppercase;
    margin: 0;
  }

  .strategy-title {
    font-size: 25px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #333333;
    margin: 0;
  }

  .text {
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.02em;
    color: #828282;
    margin: 0;
    text-align: left;
  }

  @media (max-width: 960px) {
    .pre-title {
      text-align: center;
    }
    .strategy-title {
      text-align: center;
    }
    .text {
      text-align: center;
    }
  }

  .text-container {
    max-width: 320px;
    margin: 0 auto;
  }
}
</style>
