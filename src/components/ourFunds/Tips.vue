<template>
  <v-container fluid class="dva-tips">
    <div class="max-width-wrapper">
      <v-row class="pa-12">
        <v-col cols="12" class="text-container">
          <p class="pre-title">
            {{ $i18n.t("ourFundsView.tips.preTitle") }}
          </p>
          <p class="title" v-html="$i18n.t('ourFundsView.tips.title')" />
        </v-col>
      </v-row>
      <div class="pb-12 flex-container">
        <div v-for="(tip, index) in tipsArray" :key="`tip-${index}`" class="ma-3">
          <tip-card
            :icon="tip.icon"
            :title="tip.title"
            :text="tip.text"
            :iconWidth="tip.iconWidth"
            :iconHeight="iconContainerHeight"
          />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import TipCard from "@/components/ourFunds/TipCard";

export default {
  name: "DvaTips",
  components: {
    TipCard
  },
  data: () => ({
    tipsArray: null,
    iconContainerHeight: "95px"
  }),
  created() {
    this.tipsArray = [
      {
        icon: "tip1.svg",
        iconWidth: "113px",
        iconHeight: "97px",
        title: this.$i18n.t("ourFundsView.tips.tip1.title"),
        text: this.$i18n.t("ourFundsView.tips.tip1.text")
      },
      {
        icon: "tip2.svg",
        iconWidth: "93px",
        iconHeight: "86px",
        title: this.$i18n.t("ourFundsView.tips.tip2.title"),
        text: this.$i18n.t("ourFundsView.tips.tip2.text")
      },
      {
        icon: "tip3.svg",
        iconWidth: "97px",
        iconHeight: "97px",
        title: this.$i18n.t("ourFundsView.tips.tip3.title"),
        text: this.$i18n.t("ourFundsView.tips.tip3.text")
      },
      {
        icon: "tip4.svg",
        iconWidth: "96px",
        iconHeight: "91px",
        title: this.$i18n.t("ourFundsView.tips.tip4.title"),
        text: this.$i18n.t("ourFundsView.tips.tip4.text")
      }
    ];
  }
};
</script>

<style lang="scss">
.dva-tips {
  background: linear-gradient(222.87deg, #832fed 7.03%, #4e5ff1 74.2%);
  color: #ffffff;
  padding-bottom: 120px;
  margin-bottom: -100px;

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
    color: #ffffff;
  }
}
</style>
