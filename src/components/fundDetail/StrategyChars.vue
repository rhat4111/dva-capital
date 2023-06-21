<template>
  <v-container fluid class="strategy-chars pb-16">
    <div class="max-width-wrapper">
      <v-row
        :class="{
          'pa-5': $vuetify.breakpoint.smAndDown,
          'pa-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <v-col cols="12" class="text-container">
          <p class="title" v-html="$i18n.t('fundDetailView.strategyChars.title')" />
        </v-col>
      </v-row>
      <div class="pb-12 flex-container">
        <div v-for="(tip, index) in strategies" :key="`tip-${index}`" class="ma-3">
          <tip-card
            :icon="tip.imageUrl"
            :title="tip.name"
            :text="tip.description"
            :iconWidth="iconWidth"
            :iconHeight="maxIconHeight"
            :fromUrl="tip.fromUrl"
          />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TipCard from "@/components/ourFunds/TipCard";
import Strategies from "@/utils/strategies";

export default {
  name: "StrategyChars",
  components: {
    TipCard
  },
  data: () => ({
    charsArray: null,
    maxIconHeight: "90px",
    iconWidth: "90px",
    icon: "sChars1.svg"
  }),
  computed: {
    ...mapGetters(["fund"]),

    strategies() {
      let processedStrategies = Strategies[this.$route?.params?.fundId].map(s => {
        return {
          ...s,
          fromUrl: true
        };
      });
      return processedStrategies;
    }
  },
  created() {}
};
</script>

<style lang="scss">
.strategy-chars {
  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .text-container {
    max-width: 580px;
    text-align: center;
    margin: 0 auto;
  }

  .pre-title {
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-weight: bold;
  }

  .title {
    font-size: 40px !important;
    line-height: 49px !important;
    letter-spacing: -0.02em !important;
    color: #4f4f4f;
  }
}
</style>
