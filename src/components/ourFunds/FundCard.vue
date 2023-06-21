<template>
  <div
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    class="fund-card"
    :class="`card-${this.fundName}`"
  >
    <a :href="href">
      <div class="pa-2 investment-type" :style="colorStyle">
        {{ $i18n.t(`ourFundsView.fundCard.${investmentType}`) }}
      </div>
      <div class="center-in-page pa-5"><img :src="portfolioManager" /></div>
      <div class="px-8 mt-n1 mb-4 investment-sector" v-html="investmentSector"></div>
      <div class="mb-6 fund-name" :style="colorStyle">
        {{ fundName }}
      </div>
      <div class="d-flex justify-center mb-6">
        <v-icon size="21px" class="mr-1" :color="fundColor"> mdi-plus-box</v-icon>
        <span>{{ $i18n.t("ourFundsView.fundCard.knowMore") }}</span>
      </div>
      <div v-if="!showDetails" class="px-8 pb-2 mb-4 fund-description">
        {{ descriptionShort }}
      </div>
      <div v-else class="px-8 py-2 mb-4 fund-description">
        <b>{{ $i18n.t("ourFundsView.fundCard.commission") }} </b>

        <span v-if="fundId === 9994">
          {{ $i18n.t("ourFundsView.fundFees.table.upTo") }}
        </span>

        {{ dotsToComma(`${commission}`) }}%
        <v-tooltip v-if="fundId === 9118" right max-width="350px">
          <template v-slot:activator="{ on, attrs }">
            <v-icon small v-bind="attrs" v-on="on"> mdi-information</v-icon>
          </template>
          <span>{{ $i18n.t("ourFundsView.fundCard.multiaxisCommissionDisclaimer") }}</span>
        </v-tooltip>
        <v-tooltip v-if="fundId === 9725" right max-width="350px">
          <template v-slot:activator="{ on, attrs }">
            <v-icon small v-bind="attrs" v-on="on"> mdi-information</v-icon>
          </template>
          <span>{{ $i18n.t("ourFundsView.fundCard.siliconCommissionDisclaimer") }}</span>
        </v-tooltip>
        <br />
        <b>{{ $i18n.t("ourFundsView.fundCard.currency") }}</b>
        {{ $i18n.t(`ourFundsView.fundCard.${currency}`) }}
        <br />
        <b>{{ $i18n.t("ourFundsView.fundCard.idealTerm") }}</b>
        {{ $i18n.t(`ourFundsView.fundCard.${idealTerm}`) }}
        <br />
        <b>{{ $i18n.t("ourFundsView.fundCard.type") }}</b> {{ type }} <br />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "FundCard",
  props: {
    investmentType: {
      type: String,
      required: true
    },
    investmentSector: {
      type: String,
      required: true
    },
    fundName: {
      type: String,
      required: true
    },
    descriptionShort: {
      type: String,
      required: true
    },
    commissionValue: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    idealTerm: {
      type: String,
      required: true
    },
    taxBenefit: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    fundColor: {
      type: String,
      default: "#4E5FF1"
    },
    fundId: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    showDetails: false,
    href: null,
    dvaIcon: require("@/assets/fund-card-dva-icon.svg"),
    amerisIcon: require("@/assets/fund-card-ameris-icon.svg")
  }),
  computed: {
    commission() {
      let c = this.commissionValue;
      if (this.fundId === 9118) c = 1.2;
      if (this.fundId === 9725) c = 0.95;
      return c;
    },
    colorStyle() {
      return `background: ${this.fundColor};`;
    },
    attributes() {
      return this.$props;
    },
    portfolioManager() {
      if (this.fundId === 9994) return this.amerisIcon;
      return this.dvaIcon;
    }
  },
  methods: {
    dotsToComma(str) {
      let parsedString = str.replace(/[,.]/g, m => (m === "," ? "." : ","));
      return parsedString;
    },
    onMouseEnter() {
      this.showDetails = true;
      let card = document.getElementsByClassName(`card-${this.fundName}`);
      card[0].style.border = `2px solid ${this.fundColor}`;
    },
    onMouseLeave() {
      this.showDetails = false;
      let card = document.getElementsByClassName(`card-${this.fundName}`);
      card[0].style.border = `2px solid transparent`;
    }
  },
  created() {
    this.href = this.$router.resolve({ name: "Fund", params: { fundId: this.fundId } }).href;
  }
};
</script>

<style lang="scss">
.fund-card:hover {
  cursor: pointer;
}

.fund-card {
  width: 330px;
  min-height: 445px;
  border-radius: 20px;
  box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: 2px solid transparent;

  .investment-type {
    color: #ffffff;
    margin: 0 auto;
    margin-top: -2px;
    width: 50%;
    border-radius: 0;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 13px;
    font-weight: bold;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .investment-sector {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    /* or 25px */

    text-align: center;
    letter-spacing: -0.02em;

    /* Gris 01 */

    color: #333333;

    strong {
      font-weight: 700;
    }
  }

  .fund-name {
    background-color: blue;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 70%;
    border-radius: 80px;
    margin: 0 auto;
    min-height: 60px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.05em;
    line-height: 15px;
    font-weight: bold;
  }

  .fund-description {
    font-size: 14px;
    line-height: 160%;
    text-align: center;
    letter-spacing: -0.02em;
    color: #828282;
    font-weight: 500;
  }

  a:link {
    background-color: transparent;
    text-decoration: none;
  }
}
</style>
