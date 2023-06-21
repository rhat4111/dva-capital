<template>
  <div class="fund-detail">
    <div v-if="!loadingFundData && !errorOnFundLoad">
      <v-row class="pa-0 ma-0">
        <v-col cols="12" class="pa-0 ma-0">
          <fund-banner />
        </v-col>
      </v-row>

      <v-row class="pa-0 ma-0">
        <v-col cols="12" class="pa-0 ma-0">
          <fund-description />
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" class="pa-0 ma-0">
          <returns-chart v-if="!loadingReturns" />
          <v-skeleton-loader v-else class="mx-auto my-12" type="card-avatar" max-width="1000" />
        </v-col>
      </v-row>

      <v-row class="pa-0 ma-0">
        <v-col cols="12" class="pa-0 ma-0">
          <returns-table v-if="!loadingLongTerm" />
          <v-skeleton-loader v-else class="mx-auto" type="table" max-width="1000" />
        </v-col>
      </v-row>

      <v-row class="pa-0 ma-0" v-if="fundRun !== 9994 && fundRun !== 10074">
        <v-col cols="12" class="pa-0 ma-0">
          <geo-distribution />
        </v-col>
      </v-row>

      <v-row class="pa-0 ma-0" v-if="fundRun !== 9994 && fundRun !== 10074">
        <v-col cols="12" class="pa-0 ma-0">
          <bar-chart />
        </v-col>
      </v-row>

      <v-row class="pa-0 ma-0" v-if="fundRun !== 9994 && fundRun !== 10074">
        <v-col cols="12" class="pa-0 ma-0">
          <portfolio-table />
        </v-col>
      </v-row>

      <div id="strategy-chars" v-if="fundRun !== 9994 && fundRun !== 10074">
        <strategy-chars />
      </div>

      <div id="remunerations">
        <fund-fees />
      </div>

      <div id="fund-how-to-invest">
        <how-to-invest />
      </div>

      <v-row class="pa-0 ma-0">
        <v-col cols="12" class="pa-0 ma-0">
          <purple-banner />
        </v-col>
      </v-row>
    </div>
    <div v-else class="skeleton-container">
      <v-col
        cols="12"
        class="ma-0"
        :class="{ 'pa-16': $vuetify.breakpoint.mdAndUp, 'pa-3': $vuetify.breakpoint.smAndDown }"
      >
        <!-- Begin:: Banner -->
        <div class="max-width-wrapper">
          <v-skeleton-loader type="image" class="mb-3" />
          <v-skeleton-loader type="divider" />
        </div>
      </v-col>
      <!-- End:: Banner -->
      <!-- Begin:: Fund Description -->
      <v-col cols="12" class="mb-16 max-width-wrapper" v-if="errorExists">
        <v-alert dismissible border="left" elevation="2" colored-border type="error">
          {{ $i18n.t("fundDetailView.errorLoading") }}
        </v-alert>
      </v-col>
      <!-- End:: Fund Description -->
      <v-progress-linear indeterminate />
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="5" class="pa-16 pt-0">
          <v-skeleton-loader class="mx-auto" type="list-item-two-line" max-width="300" />
        </v-col>
        <v-col cols="12" class="pa-16 ma-0">
          <div class="max-width-wrapper">
            <v-skeleton-loader type="heading" class="mb-3" />
            <v-skeleton-loader type="divider" />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-16">
          <div class="max-width-wrapper">
            <v-skeleton-loader class="mx-auto" type="list-item-two-line" max-width="400" />
            <v-skeleton-loader class="mx-auto" type="list-item-two-line" max-width="400" />
            <v-skeleton-loader class="mx-auto" type="list-item-two-line" max-width="400" />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-16 pt-0">
          <div class="max-width-wrapper">
            <v-skeleton-loader class="mx-auto" type="list-item-two-line" max-width="400" />
            <v-skeleton-loader class="mx-auto" type="list-item-two-line" max-width="400" />
            <v-skeleton-loader class="mx-auto" type="list-item-two-line" max-width="400" />
          </div>
        </v-col>
        <v-col cols="12" class="pa-16 ma-0">
          <div class="max-width-wrapper">
            <v-skeleton-loader type="heading" class="mb-3" />
            <v-skeleton-loader type="divider" />
          </div>
        </v-col>
        <v-col cols="12" class="pa-16 pt-0">
          <div class="max-width-wrapper">
            <v-skeleton-loader class="mx-auto" type="table" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FundDescription from "@/components/fundDetail/FundDescription";
import FundBanner from "@/components/fundDetail/FundBanner";
import StrategyChars from "@/components/fundDetail/StrategyChars";
import HowToInvest from "@/components/fundDetail/HowToInvest";
import PurpleBanner from "@/components/fundDetail/PurpleBanner";
import GeoDistribution from "@/components/fundDetail/GeoDistribution";
import BarChart from "@/components/fundDetail/BarChart";
import PortfolioTable from "@/components/fundDetail/PortfolioTable";
import ReturnsChart from "@/components/fundDetail/ReturnsChart";
import ReturnsTable from "@/components/fundDetail/ReturnsTable";
import FundFees from "@/components/fundDetail/FundFees";

export default {
  components: {
    FundDescription,
    FundBanner,
    StrategyChars,
    HowToInvest,
    PurpleBanner,
    GeoDistribution,
    BarChart,
    PortfolioTable,
    ReturnsChart,
    ReturnsTable,
    FundFees
  },
  name: "FundDetail",

  computed: {
    ...mapGetters([
      "loadingFund",
      "loadingReturns",
      "loadingLongTerm",
      "errorOnFundLoad",
      "errorOnReturnsLoad",
      "errorOnLongTermLoad"
    ]),

    fundRun() {
      return parseInt(this.$route.params.fundId, 10);
    },
    loadingFundData() {
      this.fixFooterBottom(this.loadingFund);
      return this.loadingFund;
    },
    errorExists() {
      return this.errorOnFundLoad || this.errorOnLongTermLoad || this.errorOnReturnsLoad;
    }
  },
  methods: {
    ...mapActions(["fetchFund", "fetchReturns", "fetchLongTerm", "fixFooter"]),

    fixFooterBottom(loading) {
      this.fixFooter(loading);
    }
  },
  async created() {
    await this.fetchFund(this.fundRun);
    await this.fetchReturns();
    await this.fetchLongTerm();
  }
};
</script>

<style lang="scss">
.fund-detail {
  .new-section {
    padding-bottom: 70px;
  }
}

.skeleton-container {
  .v-skeleton-loader__image {
    height: 500px;
  }
}

#strategy-chars {
  background: #e5e5e5;
  border-radius: 0px;
}

#fund-how-to-invest {
  background: #f2f2f2;
}
</style>
