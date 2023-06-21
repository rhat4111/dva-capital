<template>
  <v-container
    fluid
    class="geo-distribution pt-0"
    :class="{
      'pa-3': $vuetify.breakpoint.smAndDown,
      'pa-12': $vuetify.breakpoint.mdAndUp
    }"
  >
    <div class="max-width-wrapper">
      <div>
        <v-row class="ma-0 pa-2">
          <div class="title px-12">
            <p v-html="$i18n.t('fundDetailView.barChart.temporaryTitle')" />
          </div>
        </v-row>
        <hr />
        <v-row class="pa-0 ma-0 map-wrapper">
          <v-col cols="12" md="8" class="d-flex p-center">
            <div>
              <geographic-chart
                :width="geoWidth"
                :height="geoHeight"
                :countries="countriesChartData"
              />
            </div>
          </v-col>
          <v-col cols="12" md="4" class="d-flex p-center">
            <div class="list-container">
              <ul
                v-for="(country, index) in countries"
                :key="`country-${index}`"
                style="list-style-type: none"
              >
                <li class="my-2">
                  <div class="list-circle" :style="setListStyle(index, countries)" />
                  <b>{{ country.name }}</b
                  ><br />
                  {{
                    $i18n.t("fundDetailView.barChart.proportion", {
                      proportion: country.proportion.replaceAll(".", ",")
                    })
                  }}
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import GeographicChart from "@/components/fundDetail/GeographicChart.vue";
import { mapGetters } from "vuex";
export default {
  name: "GeoDistribution",
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
    ],
    countriesChartData: []
  }),
  components: {
    GeographicChart
  },
  methods: {
    setListStyle(index, array) {
      return `
        background: ${this.colors[index % array.length]}
      `;
    },

    setGeoData(allCountries) {
      allCountries.forEach(element => {
        this.countriesChartData.push(Object.values(element));
      });
    },

    percentageFormatted(number) {
      return (number * 100).toFixed(2);
    }
  },
  computed: {
    ...mapGetters(["fund"]),
    geoWidth() {
      let width = "900px";
      if (this.$vuetify.breakpoint.smAndDown) width = "350px";
      if (this.$vuetify.breakpoint.md) width = "600px";
      return width;
    },
    geoHeight() {
      let height = "500px";
      if (this.$vuetify.breakpoint.smAndDown) height = "300px";
      if (this.$vuetify.breakpoint.md) height = "409px";
      return height;
    },
    countries() {
      let data = this.fund.portfolio.countryInvestments;
      let sortedData = data.sort((a, b) => b.proportion - a.proportion);
      let countries = sortedData.map(country => {
        return {
          name: country.name,
          proportion: (country.proportion * 100).toFixed(2)
        };
      });
      if (countries.length > 7) {
        let index = 0;
        let sum = 0;
        let newCountryArray = [];
        while (index < 7) {
          sum += parseFloat(countries[index].proportion);
          newCountryArray.push(countries[index]);
          index += 1;
        }
        let diff = 100 - sum;
        newCountryArray.push({ name: "Otros", proportion: diff.toFixed(2) });
        return newCountryArray;
      }
      return countries.splice(0, 8);
    },

    allCountries() {
      // this returns an array of objects. The object is an investment with name, sector and proportion within the portfolio.

      if (typeof this.fund.portfolio !== "undefined") {
        let data = this.fund.portfolio.countryInvestments;

        let sortedData = data.sort((a, b) => b.proportion - a.proportion);
        return sortedData.map(item => ({
          code: item.code,
          proportion: `${this.percentageFormatted(item.proportion)}%`
        }));
      }
      return [];
    }
  },

  mounted() {
    if (this.fund) {
      this.setGeoData(this.allCountries);
    }
  }
};
</script>

<style lang="scss">
.geo-distribution {
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
