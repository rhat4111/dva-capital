<template>
  <v-container
    fluid
    class="fund-fees"
    :class="{
      'pa-5': $vuetify.breakpoint.smAndDown,
      'pa-12': $vuetify.breakpoint.mdAndUp
    }"
  >
    <div class="max-width-wrapper">
      <v-row class="ma-0 pa-2">
        <div
          class="title"
          :class="{
            'mx-10': $vuetify.breakpoint.smAndDown,
            'mx-12': $vuetify.breakpoint.mdAndUp
          }"
        >
          {{ $i18n.t("fundDetailView.fundFees.title") }}
        </div>
      </v-row>
      <hr />
      <v-row class="ma-5 pa-5">
        <v-col cols="12" md="4">
          <v-btn
            depressed
            normal
            rounded
            height="60px"
            width="250px"
            class="depressed-button spaced-top"
            color="#6748ef"
            :href="links(fund.id, 'factsheet')"
            target="_blank"
          >
            {{ buttons.factsheet }}
          </v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn
            depressed
            normal
            rounded
            height="60px"
            width="250px"
            class="depressed-button spaced-top"
            color="#6748ef"
            :href="links(fund.id, 'internalRegulations')"
            target="_blank"
          >
            {{ buttons.internalRegulations }}
          </v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn
            depressed
            normal
            rounded
            height="60px"
            width="250px"
            class="depressed-button spaced-top"
            color="#6748ef"
            :href="links(fund.id, 'booklet')"
            target="_blank"
          >
            {{ buttons.informationBooklet }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <v-col cols="12">
          <v-simple-table class="remunerations-table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    {{ $i18n.t("fundDetailView.fundFees.table.series") }}
                  </th>
                  <th class="text-left">
                    {{ $i18n.t("fundDetailView.fundFees.table.fixedRemuneration") }}
                  </th>
                  <th class="text-left" v-if="!withoutVariableCharge">
                    {{ $i18n.t("fundDetailView.fundFees.table.variableRemuneration") }}
                  </th>
                  <th class="text-left">
                    {{ $i18n.t("fundDetailView.fundFees.table.incomeRequirement") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in segmentData" :key="item.name">
                  <td>{{ item.segmentName }}</td>
                  <td>
                    <span v-if="fund.id === 9994 && item.segmentFixedCharge > 0">
                      {{ $i18n.t("ourFundsView.fundFees.table.upTo") }}
                    </span>
                    <span>
                      {{ item.segmentFixedCharge }}
                    </span>
                    <v-tooltip v-if="fund.id === 9118 || fund.id === 9725" right max-width="350px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon small v-bind="attrs" v-on="on"> mdi-information</v-icon>
                      </template>

                      <span>{{
                        $i18n.t(`fundDetailView.fundFees.${compositeCommissionText}`, {
                          fixedCommission: originalFixedCharge(item.segmentFixedCharge),
                          seriesName: item.segmentName
                        })
                      }}</span>
                    </v-tooltip>
                  </td>
                  <td
                    v-if="!withoutVariableCharge"
                    class="py-3"
                    :class="{ 'centered-dash': item.segmentVariableCharge === '-' }"
                  >
                    {{ item.segmentVariableCharge }} {{ item.segmentVariableChargeText }}
                  </td>
                  <td>{{ item.segmentRequirements }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div
            class="disclaimer "
            :class="{
              'mt-8 mx-8': $vuetify.breakpoint.mdAndUp,
              'mx-2 mt-5': $vuetify.breakpoint.smAndDown
            }"
            v-if="disclaimerOn"
          >
            {{ $i18n.t("fundDetailView.fundFees.disclaimer") }}
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FundFees",

  data: () => ({}),

  computed: {
    ...mapGetters(["fund"]),
    buttons() {
      return this.$i18n.t("fundDetailView.fundFees.documents");
    },
    disclaimerOn() {
      const requeriments = this.segmentData.map(segment => segment.segmentRequirements);
      return requeriments.some(req => req.includes("*"));
    },
    withoutVariableCharge() {
      const funds = [9725, 9937, 9994, 10074];
      return funds.includes(this.fund.id) && this.$vuetify.breakpoint.smAndDown;
    },
    segmentData() {
      if (this.fund !== null) {
        const data = this.fund.series
          .map(serie => ({
            segmentName: serie.name,
            segmentRequirements: this.formatRequirements(serie.segmentRequirements),
            segmentFixedCharge: this.formatEmptyComission(
              this.compositeCommissions(serie.maximumCharge, serie.name)
            ),
            segmentVariableCharge: this.formatEmptyComission(serie.variableCharge),
            segmentVariableChargeText: serie.variableChargeText
          }))

          .sort((a, b) =>
            a.segmentName < b.segmentName ? -1 : Number(a.segmentName > b.segmentName)
          );

        if (this.fund.id === 9725) return data.filter(serie => serie.segmentName !== "A");
        return data;
      }
      return [];
    },

    compositeCommissionText() {
      if (this.fund.id === 9118) return "multiaxisCommission";
      return "siliconCommission";
    }
  },

  methods: {
    links(fundRun, option) {
      return this.$i18n.t(`fundDetailView.fundFees.links.${fundRun}.${option}`);
    },
    formatEmptyComission(charge) {
      if (charge === null || charge === 0) return "-";
      return this.dotsToComma(`${charge}%`);
    },
    formatRequirements(str) {
      if (str !== null) if (str.length > 0) return str.split(":").pop();
      return this.$i18n.t("fundDetailView.fundFees.noEntryRequirement");
    },
    originalFixedCharge(maximumCharge) {
      let commision = 0.9;
      if (this.fund.id === 9725) commision = 0.6;
      return this.formatEmptyComission(
        (
          Math.round(
            parseFloat(
              this.dotsToComma(maximumCharge)
                .split("%")
                .join("") - commision
            ) * 1000
          ) / 1000
        ).toString()
      );
    },
    compositeCommissions(maximumCharge) {
      if (this.fund.id === 9118) {
        return Math.round((maximumCharge + 0.9) * 1000) / 1000;
      }
      if (this.fund.id === 9725) {
        return Math.round((maximumCharge + 0.6) * 1000) / 1000;
      }
      return maximumCharge;
    },
    dotsToComma(str) {
      let parsedString = str.replace(/[,.]/g, m => (m === "," ? "." : ","));
      return parsedString;
    }
  }
};
</script>

<style lang="scss" scoped>
.disclaimer {
  font-size: 11px;
}

.centered-dash {
  text-align: center;
  font-weight: 600;
}
.remunerations-table {
  thead tr th {
    @media (min-width: 700px) {
      width: 150px;
    }
  }
}
.depressed-button {
  background-color: #ebf0ff !important;
  font-style: normal;
  font-weight: bold !important;
  font-size: 14px !important;
  line-height: 13px !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase;
  color: #6748ef !important;
}
.title {
  text-align: center;
}
</style>
