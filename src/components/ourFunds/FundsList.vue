<template>
  <v-container fluid class="funds-list" id="our-funds-list">
    <div class="max-width-wrapper">
      <v-row no-gutters>
        <v-col cols="12" class="text-container">
          <p class="pre-title">
            {{ $i18n.t("ourFundsView.fundsList.preTitle") }}
          </p>
          <p class="funds-title stronger-font" v-html="$i18n.t('ourFundsView.fundsList.title')" />
          <p class="text">
            {{ $i18n.t("ourFundsView.fundsList.text") }}
          </p>
        </v-col>
      </v-row>
      <div v-if="!loadingFunds && !errorOnFundsLoad" class="pa-12 flex-container">
        <div v-for="(fund, index) in funds" :key="`fund-${index}`" class="mb-10 mx-10">
          <fund-card
            :investmentType="fund.investmentType"
            :investmentSector="getInvestmentSector(fund.id)"
            :fundName="fund.fundName"
            :descriptionShort="fund.descriptionShort"
            :commissionValue="fund.commissionValue"
            :currency="fund.currency"
            :idealTerm="fund.idealTerm"
            :taxBenefit="fund.taxBenefit"
            :type="fund.type"
            :fundColor="fund.color"
            :fundId="fund.id"
          />
        </div>
      </div>
      <div v-else class="pa-12 flex-container">
        <v-col cols="12" class="mb-16" v-if="errorOnFundsLoad">
          <v-alert dismissible border="left" elevation="2" colored-border type="error">
            {{ $i18n.t("ourFundsView.fundsList.errorLoading") }}
          </v-alert>
        </v-col>
        <div v-for="index in [1, 2, 3, 4]" :key="`skeleton-${index}`" class="ma-3">
          <v-skeleton-loader type="card" width="300" class="mb-3" />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import FundCard from "@/components/ourFunds/FundCard";

import { mapGetters } from "vuex";

export default {
  name: "fundsList",
  components: {
    FundCard
  },
  computed: {
    ...mapGetters(["funds", "loadingFunds", "errorOnFundsLoad"])
  },

  methods: {
    getInvestmentSector(fundRun) {
      return this.$i18n.t(`ourFundsView.fundsList.investmentSector.${fundRun}`);
    }
  }
};
</script>

<style lang="scss">
.funds-list {
  background: #f2f2f2;

  .text-container {
    max-width: 580px;
    text-align: center;
    margin: 0 auto;
  }

  .pre-title {
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #828282;
  }

  .funds-title {
    font-size: 40px !important;
    line-height: 49px !important;
    letter-spacing: -0.02em !important;
    color: #333333;
  }

  .text {
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.02em;
    color: #828282;
    max-width: 425px;
    margin: 0 auto;
  }

  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .invitation {
    font-size: 25px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #333333;
    margin: 1em !important;
    text-align: center;
  }
}
</style>
