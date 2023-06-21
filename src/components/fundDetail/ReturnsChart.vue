<template>
  <v-container
    fluid
    class="returns-chart mt-5"
    :class="{
      'pa-3': $vuetify.breakpoint.smAndDown,
      'pa-12': $vuetify.breakpoint.mdAndUp
    }"
  >
    <div class="max-width-wrapper" v-if="returns">
      <div>
        <v-row class="ma-0 pa-2">
          <div class="title px-12">
            <p v-html="$i18n.t('fundDetailView.returns.chart.title')" />
          </div>
        </v-row>
        <hr />
        <v-row no-gutters>
          <v-col>
            <apexchart type="line" :options="returnOptions" :series="returns" height="500" />
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import es from "@/lang/chart_es";
import en from "@/lang/chart_en";
import { mapGetters } from "vuex";

export default {
  name: "ReturnsChart",
  data() {
    return {
      returnOptions: {
        chart: {
          animations: {
            enabled: false
          },
          toolbar: {
            show: false
          },
          fontFamily: "Montserrat-SemiBold",
          locales: [es, en],
          defaultLocale: "es",
          zoom: {
            enabled: false
          }
        },
        xaxis: {
          type: "datetime",
          labels: {
            style: {
              fontSize: "0.9em"
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "0.9em"
            },
            formatter: value => `${this.format_plot(value, 0)}%`
          }
        },
        annotations: {
          yaxis: [
            {
              y: 0,
              strokeDashArray: 0,
              borderColor: "#775DD0"
            }
          ]
        },
        stroke: {
          curve: "smooth",
          width: 2
        },
        legend: {
          show: false
        },
        tooltip: {
          y: {
            formatter: value => `${this.format_plot(value)}%`
          }
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              chart: {
                height: 300
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
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
      }
    };
  },
  computed: {
    ...mapGetters(["returns", "fund"])
  },
  methods: {
    format_plot(value, digits = 2) {
      if (this.fund.investmentType === "FIXED" || this.fund.id === 9994) digits = 2;
      return value.toLocaleString("es-CL", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
      });
    },
    format_date(value) {
      if (value) {
        const toFormat = new Date(`${value} 12:00:00`);
        const formatter = new Intl.DateTimeFormat("es-CL", { month: "short" });
        const month = formatter.format(toFormat);
        return `${toFormat.getUTCDate()} ${month} ${toFormat.getUTCFullYear()}`;
      }
      return null;
    }
  }
};
</script>

<style scoped lang="scss">
.returns-chart {
  .title {
    font-size: 20px;
    line-height: 170%;
    color: #4f4f4f;
    @media (max-width: 960px) {
      margin: 0 auto;
      text-align: center;
    }
  }
  .lists-container {
    hr {
      width: 100%;
      margin-left: 0;
    }
    @media (max-width: 960px) {
      li {
        width: 250px;
        padding-left: 30px;
      }
    }
  }
  .list-container {
    .list-title {
      font-size: 18px;
      line-height: 170%;
      color: #4f4f4f;
      @media (max-width: 960px) {
        margin: 0 auto;
        text-align: center;
      }
    }
    .list-subtitle {
      font-size: 10px;
      color: #4f4f4f;
      @media (max-width: 960px) {
        margin: 0 auto;
        text-align: center;
      }
    }
  }
  li {
    font-size: 15px;
    line-height: 170%;
    text-transform: capitalize;
  }
  .list-circle {
    width: 20px;
    height: 20px;
    border-radius: 80px;
    margin: 0 5px;
    display: inline-block;
  }
}
</style>
