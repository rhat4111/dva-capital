<template>
  <v-container
    fluid
    class="portfolio-table"
    :class="{
      'pa-5': $vuetify.breakpoint.smAndDown,
      'pa-12': $vuetify.breakpoint.mdAndUp
    }"
  >
    <div class="max-width-wrapper">
      <v-row class="ma-0 pa-2">
        <div class="title px-12" v-html="$i18n.t('fundDetailView.portfolioTable.title')" />
      </v-row>
      <hr />
      <div
        class="data-table"
        :class="{
          'pa-5': $vuetify.breakpoint.smAndDown,
          'pa-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <v-data-table
          :headers="tableHeaders"
          :items="investments"
          :hide-default-footer="true"
          disable-pagination
          class="elevation-1"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PortfolioTable",

  data: () => ({
    tableHeaders: [
      { text: "Nombre", align: "start", value: "nombre" },
      { text: "Sector", align: "start", value: "sector" },
      { text: "Peso", align: "start", value: "weigth" }
    ]
  }),

  props: {},

  computed: {
    ...mapGetters(["fund"]),

    portfolioData() {
      if (typeof this.fund.portfolio !== "undefined") return this.fund.portfolio;
      return {};
    },
    investments() {
      // this returns an array of objects. The object is an investment with name, sector and proportion within the portfolio.
      let data = this.portfolioData.investments;
      let others = data.find(i => i.symbol === "OTHERS");
      others.name = "Otros";

      others.sector = "Empty";
      others.industry = "Empty";
      let sortedData = data.sort((a, b) => b.proportion - a.proportion);
      sortedData = sortedData.filter(i => i.symbol !== "OTHERS");
      sortedData.push(others);
      return sortedData.map(item => ({
        nombre: item.name,
        sector: this.sectorTranslations(item.industry),
        weigth: `${this.percentageFormatted(item.proportion)}%`.replaceAll(".", ",")
      }));
    }
  },

  methods: {
    // method that delivers a percentage formatted up to 100, with two decimal places
    percentageFormatted(number) {
      return (number * 100).toFixed(2);
    },
    // this method performs translations into Spanish of the sectors that are in English.
    sectorTranslations(englishSector) {
      let name = this.$i18n.t(`fundDetailView.portfolioTable.sectors.${englishSector}`);
      if (name.includes("fundDetailView.portfolioTable")) name = englishSector;
      return name;
    }
  }
};
</script>

<style lang="scss">
.portfolio-table {
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
  .data-table {
    tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}
hr {
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin: 0 48px;
}
</style>
