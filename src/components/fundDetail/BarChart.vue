<template>
  <v-container fluid class="bar-chart">
    <div class="max-width-wrapper">
      <div
        :class="{
          'pa-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <v-row class="ma-0 pa-2">
          <div class="title px-12">
            <p v-html="$i18n.t('fundDetailView.barChart.title')" />
          </div>
        </v-row>
        <hr />
        <v-row class="pa-0 ma-0 mt-10" no-gutters>
          <v-col cols="12" class="">
            <apexchart
              type="bar"
              :height="chartHeight"
              :options="chartData.options"
              :series="chartData.series"
              width="100%"
            />
          </v-col>
        </v-row>

        <v-row v-if="negativeCash">
          <v-col cols="12" class="disclaimer px-16">
            <v-alert border="left" type="info" outlined dense text>
              {{ $i18n.t("fundDetailView.barChart.caja") }}
            </v-alert>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BarChart",
  data: () => ({
    colors: [
      "#832FED",
      "#FF0079",
      "#00AA9D",
      "#4E5FF1",
      "#49DD9F",
      "#FF92E0",
      "#CA9328",
      "#8D9D2C",
      "#40B5CE",
      "#9D9BFF"
    ]
  }),
  computed: {
    ...mapGetters(["fund"]),
    negativeCash() {
      let cashProportion = this.fund.portfolio.industryInvestments
        .filter(invesment => invesment.name == "Caja")
        .map(item => item.proportion);

      return cashProportion < 0;
    },
    chartData() {
      let data = this.fund.portfolio.industryInvestments;
      let sortedData = data.sort((a, b) => b.proportion - a.proportion);
      let series = [
        {
          name: this.$i18n.t("fundDetailView.barChart.distribution"),
          data: sortedData.map(a => (a.proportion * 100).toFixed(2))
        }
      ];
      let options = {
        chart: {
          type: "bar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            barHeight: "70%",
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: "bottom"
            }
          }
        },
        colors: this.colors,
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: sortedData.map(a => {
            if (typeof a.name === "undefined" || a.name === null) {
              a.name = "Others";
            }
            let name = this.$i18n.t(`fundDetailView.barChart.industryInvestments.${a.name}`);

            // en caso que no exista la traduccion
            if (name.includes(`fundDetailView.barChart`)) name = a.name;

            return name;
          }),
          labels: {
            formatter: value => `${value}%`
          }
        },
        yaxis: {
          labels: {
            show: true
          }
        },
        tooltip: {
          theme: "dark",
          x: {
            show: true
          },
          y: {
            formatter: value => `${value}%`.replaceAll(".", ","),
            text: undefined,
            title: {
              text: undefined
            }
          }
        },
        legend: {
          show: false
        }
      };

      return { series, options };
    },
    chartHeight() {
      let numberOfElements = this.fund.portfolio.industryInvestments.length;
      let height = numberOfElements * 50;
      if (height < 200) height = 200;
      if (height > 500) height = 500;
      return height;
    }
  }
};
</script>

<style lang="scss">
.bar-chart {
  background: #f2f2f2;
  .title {
    font-size: 20px;
    line-height: 170%;
    color: #4f4f4f;
    @media (max-width: 960px) {
      margin: 0 auto;
      text-align: center;
    }
  }

  .disclaimer {
    font-size: 11px;
    @media (max-width: 960px) {
      text-align: justify;
    }
    .info--text {
      color: #90a4ae !important;
    }
  }

  .apexcharts-text tspan {
    font-family: "Montserrat-Regular";
  }
}
</style>
