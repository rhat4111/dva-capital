<template>
  <div class="funds-fees-table">
    <div class="mt-3">
      <span class="fees-table-text">
        {{ $i18n.t("ourFundsView.fundFees.feesText") }}
      </span>
    </div>

    <div class="table-container" v-if="!loadingFunds">
      <table class="borderless mt-8">
        <thead class="table-header-text">
          <th scope="col" v-for="(header, index) in headers" :key="index" class="text-no-wrap px-5">
            {{ header }}
          </th>
        </thead>
        <tbody>
          <tr v-for="(fund, index) in fundsData" :key="index" class="table-body-text">
            <td class="px-5">
              <span class="text-no-wrap">
                {{ fund.category }}
              </span>
            </td>
            <td class="px-5">
              <div class="fund-name-pill" :style="fundColor(fund)">
                <span class="pill-text"> {{ fund.name }}</span>
              </div>
            </td>
            <td class="px-5">
              <span v-if="fund.fundRun === 9994">
                {{ $i18n.t("ourFundsView.fundFees.table.upTo") }}
              </span>
              <span> {{ fund.fixedFee }}%</span>
              <span v-if="fund.fundRun === 9118">*</span>
              <span v-if="fund.fundRun === 9725">**</span>
            </td>
            <td class="px-5">{{ fund.variableCharge }}</td>
            <td class="px-5">
              <div class="variable-charge-text-container my-2">
                {{ fund.variableChargeText }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="pa-12">
      <v-skeleton-loader type="table"></v-skeleton-loader>
    </div>

    <v-row class="mt-8" :class="{ 'mx-5 ': $vuetify.breakpoint.smAndUp }">
      <v-col cols="12" md="6">
        <div class="fund-disclaimer">
          *{{ $i18n.t("ourFundsView.fundCard.multiaxisCommissionDisclaimer") }}
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="fund-disclaimer">
          **{{ $i18n.t("ourFundsView.fundCard.siliconCommissionDisclaimer") }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// eslint-disable-next-line object-curly-newline

export default {
  name: "FundCardDetail",

  props: {
    tableData: {
      type: Array
    }
  },

  computed: {
    ...mapGetters(["funds", "loadingFunds"]),
    headers() {
      return this.$i18n.t("ourFundsView.fundFees.table.headers");
    },

    fundsData() {
      const tableBody = [];

      this.funds.forEach(fund => {
        const category = this.$i18n.t(`ourFundsView.fundCard.${fund.investmentType}`);
        const fixedFee = this.dotsToComma(this.checkMultiaxis(fund.commissionValue, fund.id));
        const variableCharge = this.parseVariableFee(fund.variableCharge);

        let variableChargeText = "";
        if (fund.variableCharge !== null)
          variableChargeText = `${this.dotsToComma(fund.variableCharge)}% ${
            fund.variableChargeText
          }`;
        tableBody.push({
          name: fund.fundName,
          fundRun: fund.id,
          category,
          fixedFee,
          variableCharge,
          variableChargeText,
          color: fund.color
        });
      });

      return tableBody;
    }
  },

  methods: {
    ...mapActions(["fetchFunds"]),
    dotsToComma(str) {
      if (str !== null && typeof str !== "undefined")
        return str.toString().replace(/[,.]/g, m => (m === "," ? "." : ","));
      return str;
    },
    parseVariableFee(fee) {
      if (fee === null) return "No";
      return this.$i18n.t("ourFundsView.fundFees.table.yes");
    },
    fundColor(fund) {
      return `background-color: ${fund.color}`;
    },
    checkMultiaxis(maximumCharge, fundRun) {
      if (fundRun === 9118) {
        return maximumCharge + 0.9;
      }
      if (fundRun === 9725) {
        return maximumCharge + 0.6;
      }
      return maximumCharge;
    }
  },

  created() {
    if (this.funds.length === 0) this.fetchFunds();
  }
};
</script>

<style scoped lang="scss">
.funds-fees-table {
  .text-no-wrap {
    white-space: nowrap;
  }
  .table-container {
    display: block;
    overflow-x: auto;
  }
  .variable-charge-text-container {
    max-width: 429px;
    line-height: 17px;
  }
  .fees-table-text {
    font-weight: bold;
    font-size: 20px;
    line-height: 170%;
    color: #4f4f4f;
    @media (max-width: 800px) {
      font-size: 14px;
      line-height: 170%;
    }
  }
  table.borderless {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    @media (min-width: 1024px) {
      min-height: 300px;
    }
  }
  table.borderless tbody td,
  table.borderless thead th {
    line-height: 60px;
  }

  .table-body-text,
  .table-header-text {
    font-size: 12px;
    line-height: 140%;
    color: #4f4f4f;
  }

  .table-body-text {
    font-weight: 500;
  }

  .table-header-text {
    font-weight: bold;
  }

  th {
    background-color: #f2f2f2;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:nth-child(odd) {
    background-color: #ffffff;
  }

  .fund-name-pill {
    width: 200px;
    height: 40px;
    border-radius: 52.4887px;
    display: flex;
    justify-content: center;
    align-items: center;
    .pill-text {
      font-weight: bold;
      font-size: 7.8733px;
      line-height: 10px;
      letter-spacing: 0.05em;
      text-transform: uppercase;

      color: #ffffff;
    }
  }

  .fund-disclaimer {
    font-size: 12px;
    line-height: 140% !important;
    color: #828282;
  }
}
</style>
