<template>
  <v-container
    fluid
    class="fund-description"
    :class="{
      'pa-3': $vuetify.breakpoint.smAndDown,
      'pt-12': $vuetify.breakpoint.smAndDown,
      'px-12 pt-12': $vuetify.breakpoint.mdAndUp
    }"
  >
    <div class="max-width-wrapper" v-if="!loadingFund">
      <v-row class="ma-0 pa-2">
        <div class="title px-12">
          {{ $i18n.t("fundDetailView.fundDescription.title") }}
        </div>
      </v-row>
      <hr />
      <v-row class="ma-0 pa-0">
        <v-col
          cols="12"
          md="7"
          class="left-text"
          :class="{
            'p-center': $vuetify.breakpoint.smAndDown
          }"
        >
          <p
            class="description-text"
            :class="{
              'pa-4': $vuetify.breakpoint.smAndDown,
              'pa-12': $vuetify.breakpoint.mdAndUp
            }"
          >
            {{ fundData.description }}
          </p>
        </v-col>
        <v-col
          cols="12"
          md="5"
          class="right-text"
          :class="{
            'pa-4': $vuetify.breakpoint.smAndDown,
            'pa-12': $vuetify.breakpoint.mdAndUp
          }"
        >
          <ul style="list-style-type: none">
            <li v-if="fund.currency === 'USD'">
              <div class="usd-fund">
                {{ $i18n.t("fundDetailView.fundDescription.dollarInvestments") }}
              </div>
            </li>
            <li>
              <strong> {{ $i18n.t("fundDetailView.fundDescription.type") }}: </strong>
              {{ fundData.type }}
            </li>
            <li
              v-if="
                !loadingFund &&
                  !errorOnFundLoad &&
                  fund.portfolio !== null &&
                  typeof fund.portfolio !== 'undefined'
              "
            >
              <strong> {{ $i18n.t("fundDetailView.fundDescription.companies") }}: </strong>
              {{ fund.portfolio.investmentsQuantity }}
            </li>
            <li>
              <strong> {{ $i18n.t("fundDetailView.fundDescription.creationDate") }}: </strong>
              {{ fundData.creationDate }}
            </li>
            <li>
              <strong> {{ $i18n.t("fundDetailView.fundDescription.AGM") }}: </strong>
              {{ fundData.agf }}
            </li>
            <li>
              <strong> {{ $i18n.t("fundDetailView.fundDescription.investmentsTeam") }}: </strong>
              {{ fundData.team }}
            </li>
            <li>
              <strong> {{ $i18n.t("fundDetailView.fundDescription.horizon") }}: </strong>
              {{ $i18n.t(`fundDetailView.fundDescription.${fundData.idealTerm}`) }}
            </li>
            <li v-if="!loadingFund && !errorOnFundLoad && typeof fund.portfolio !== 'undefined'">
              <strong> {{ $i18n.t("fundDetailView.fundDescription.fundAssets") }}: </strong>
              {{
                `${$i18n
                  .n(parseInt(fund.portfolio.totalCashAmount), "currency", "en")
                  .replaceAll(",", ".")} USD`
              }}
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row
        v-if="$route.params.fundId === '9118' || $route.params.fundId === '9725'"
        class="ma-0 pa-2 multiaxis-disclaimer"
        :class="{
          'mt-n12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <v-col cols="12" class="px-12">
          <v-alert type="info" text outlined dense border="left">
            {{
              $i18n.t(`fundDetailView.fundDescription.customDisclaimers.${$route.params.fundId}`)
            }}
          </v-alert>
        </v-col>
      </v-row>
    </div>

    <div v-else>
      <v-row>
        <v-col cols="12" md="6">
          <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
        </v-col>

        <v-col cols="12" md="6">
          <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FundDescription",
  computed: {
    ...mapGetters(["fund", "loadingFund", "errorOnFundLoad"]),

    fundData() {
      if (!this.loadingFund) return this.fund;
      return {};
    }
  }
};
</script>

<style lang="scss">
.fund-description {
  color: #828282;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;

  .left-text {
    width: 100%;

    @media (max-width: 960px) {
      margin: 0 auto;
      text-align: left;
      padding-left: 2em;
      padding-right: 2em;
    }
  }

  .right-text {
    max-width: 500px;

    @media (max-width: 960px) {
      margin: 0 auto;
    }
  }
  .usd-fund {
    text-align: left;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
  }

  .title {
    font-family: Montserrat-SemiBold;
    font-size: 20px;
    line-height: 170%;
    color: #4f4f4f;

    @media (max-width: 960px) {
      margin: 0 auto;
      text-align: center;
    }
  }

  hr {
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    margin: 0 48px;
  }

  .p-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .p-center-lg {
    flex: 0 0 680px;
  }

  .p-center-md {
    flex: 0 0 500px;
  }

  .p-center-sm {
    flex: 0 0 330px;
    text-align: center;
  }

  .multiaxis-disclaimer {
    .info--text {
      color: #90a4ae !important;
    }
  }
}
</style>
