<template>
  <v-container fluid class="fund-fees max-width-wrapper">
    <div id="funds-fees">
      <v-row class="left-in-page" no-gutters>
        <v-col cols="12" md="6">
          <div class="fund-fees-title">{{ $i18n.t("ourFundsView.fundFees.title") }}</div>
          <div class="fund-fees-title-bold">{{ $i18n.t("ourFundsView.fundFees.titleBold") }}</div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="fund-fees-text">
            {{ $i18n.t("ourFundsView.fundFees.text") }}
          </div>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" class="pb-10">
          <fees-table />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import FeesTable from "./FundsFees/FeesTable.vue";
export default {
  name: "FundsFees",

  components: {
    FeesTable
  },

  computed: {
    ...mapGetters(["LOADING_FUNDS"])
  },

  methods: {
    async scrollTo() {
      const uriHash = this.$router.app._route.hash.replace("#", "");
      if (uriHash.length > 0) {
        const anchorTag = await document.getElementById(uriHash);
        anchorTag.scrollIntoView(true, {
          behavior: "smooth",
          block: "start"
        });
      }
    }
  },

  async mounted() {
    await this.scrollTo();
  }
};
</script>

<style lang="scss" scoped>
.fund-fees {
  font-family: Montserrat !important;
  .fund-fees-title,
  .fund-fees-title-bold {
    font-style: normal;
    font-weight: 500;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -0.02em;
    @media (max-width: 1024px) {
      font-size: 55px;
      line-height: 68px;
    }

    @media (max-width: 800px) {
      font-size: 45px;
      line-height: 50px;
    }
    @media (max-width: 375px) {
      font-size: 41px;
      line-height: 46px;
    }
  }
  .fund-fees-title {
    color: #832fed;
  }
  .fund-fees-title-bold {
    color: #832fed;
    font-weight: 700;
  }
  .bolder-font {
    font-weight: 700;
  }

  .fund-fees-text {
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    /* or 26px */

    @media (max-width: 600px) {
      margin-top: 25px;
      margin-bottom: 5px;
    }

    letter-spacing: -0.02em;

    color: #832fed;
  }

  .fees-table-text {
    font-weight: bold;
    font-size: 20px;
    line-height: 170%;
    color: #4f4f4f;
  }
}
</style>
