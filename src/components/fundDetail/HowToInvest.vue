<template>
  <v-container
    fluid
    class="fund-how-to-invest"
    :class="{
      'pa-5': $vuetify.breakpoint.smAndDown,
      'pa-12': $vuetify.breakpoint.mdAndUp
    }"
  >
    <div class="max-width-wrapper">
      <v-row class="ma-0 pa-2">
        <div class="title px-12">
          {{ $i18n.t("fundDetailView.howToInvest.title") }}
        </div>
      </v-row>
      <hr />
      <v-row
        class="ma-5"
        :class="{
          'pa-1': $vuetify.breakpoint.smAndDown,
          'pa-5': $vuetify.breakpoint.mdAndUp
        }"
      >
        <v-col
          cols="12"
          md="6"
          :class="{
            'p-center': $vuetify.breakpoint.smAndDown,
            'p-left-no-align': $vuetify.breakpoint.mdAndUp
          }"
        >
          <div
            :class="{
              'p-center-sm': $vuetify.breakpoint.smAndDown,
              'p-center-md': $vuetify.breakpoint.md,
              'p-center-lg': $vuetify.breakpoint.lgAndUp,
              'pa-4': $vuetify.breakpoint.smAndDown,
              'pa-12': $vuetify.breakpoint.mdAndUp
            }"
          >
            <div
              class="alternatives-text"
              v-html="$i18n.t('fundDetailView.howToInvest.alternativesText')"
            ></div>
            <div
              v-html="$i18n.t('fundDetailView.howToInvest.alternatives')"
              class="alternatives-list"
            />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="pa-3 table-title">{{ fund.fundName }}</div>
          <v-data-table dense :headers="tableHeaders" :items="series" hide-default-footer />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HowToInvest",
  computed: {
    ...mapGetters(["fund"]),
    tableHeaders() {
      if (this.fund.currency === "USD")
        return [
          {
            text: this.$i18n.t("fundDetailView.howToInvest.table.series"),
            align: "center",
            sortable: "false",
            value: "name"
          },
          {
            text: this.$i18n.t("fundDetailView.howToInvest.table.nemo"),
            align: "center",
            sortable: "false",
            value: "symbol"
          },
          {
            text: this.$i18n.t("fundDetailView.howToInvest.table.usdSymbol"),
            align: "center",
            sortable: "false",
            value: "usdSymbol"
          }
        ];

      return [
        {
          text: this.$i18n.t("fundDetailView.howToInvest.table.series"),
          align: "center",
          sortable: "false",
          value: "name"
        },
        {
          text: this.$i18n.t("fundDetailView.howToInvest.table.nemo"),
          align: "center",
          sortable: "false",
          value: "symbol"
        }
      ];
    },
    series() {
      let data = this.fund.series;
      let series = data.map(s => ({
        name: s.name,
        symbol: s.symbol,
        usdSymbol: s.usdSymbol,
        fundName: this.fund.fundName
      }));
      if (this.fund.id === 9725)
        return series
          .filter(serie => serie.name !== "A")
          .sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)));
      return series.sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)));
    }
  }
};
</script>

<style lang="scss">
.fund-how-to-invest {
  .alternatives-text {
    font-family: Montserrat-SemiBold;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.02em;
    color: #828282;
  }

  .alternatives-list {
    font-family: Montserrat-Regular;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.02em;
    color: #828282;
    a {
      color: #828282;
      font-weight: bold;
    }
  }

  li {
    margin: 20px 0 20px 0;
  }

  .p-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .p-left-no-align {
    display: flex;
    justify-content: flex-start;
  }

  .p-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .p-center-lg {
    flex: 0 0 580px;
  }

  .p-center-md {
    flex: 0 0 380px;
  }

  .p-center-sm {
    flex: 0 0 330px;
    text-align: center;
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

  .table-title {
    font-family: Montserrat-SemiBold;
    font-size: 14px;
    color: #828282;
  }

  .v-data-table {
    background: #f2f2f2 !important;
    border: thin solid rgba(0, 0, 0, 0.12);
    color: #828282 !important;
  }
}
</style>
