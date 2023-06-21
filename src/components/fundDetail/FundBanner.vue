<template>
  <div class="fund-banner" :style="backgroundColor">
    <v-row no-gutters class="max-width-wrapper pb-16">
      <v-col cols="12">
        <v-btn icon dark class="mx-8 my-10" href="/funds#our-funds-list">
          <v-icon x-large> {{ arrowLeft }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" class="center-in-page flex-column">
        <v-card class="card" :style="textColor">
          <span class="card-text">
            {{ $i18n.t(`fundDetailView.fundDescription.${fundData.investmentType}`) }}
          </span>
        </v-card>

        <span class="banner-heading mx-8">
          {{ fundData.investmentSector }}
        </span>

        <span class="banner-title mx-5 my-2">
          {{ fundData.fundName }}
        </span>

        <div class="description-container mt-3 mb-8 px-8">
          <span class="description-text">
            {{ fundData.descriptionShort }}
          </span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mdiArrowLeftDropCircleOutline } from "@mdi/js";

export default {
  name: "FundBanner",
  data: () => ({
    arrowLeft: mdiArrowLeftDropCircleOutline
  }),
  computed: {
    ...mapGetters(["fund", "loadingFund"]),
    backgroundColor() {
      return `background: ${this.fundData.color}`;
    },
    textColor() {
      return `color: ${this.fundData.color}`;
    },

    fundData() {
      if (!this.loadingFund) return this.fund;
      return {};
    }
  }
};
</script>

<style lang="scss" scoped>
.fund-banner {
  .card {
    width: 250px;
    height: 60px;
    border-radius: 0;
    box-shadow: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    .card-text {
      text-align: center;
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }

  .banner-title {
    font-style: normal;
    font-weight: normal;
    text-align: center;
    font-size: 60px;
    line-height: 140%;

    letter-spacing: -0.02em;
    color: #ffffff;

    @media (max-width: 380px) {
      font-size: 58px;
    }
    @media (max-width: 360px) {
      font-size: 50px;
    }
  }
  .banner-heading {
    margin-top: 30px;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.02em;

    @media (max-width: 800px) {
      font-size: 16px;
    }

    text-align: center;

    /* Blanco */
    color: #ffffff;
  }

  .description-container {
    width: 100%;
    max-width: 600px;
    text-align: center;
  }
  .description-text {
    font-size: 16px;
    line-height: 160%;
    text-align: center !important;
    letter-spacing: -0.02em;

    /* Blanco */
    color: #ffffff;
  }
}
</style>
