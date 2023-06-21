<template>
  <v-container fluid class="diversify">
    <div class="max-width-wrapper">
      <v-row class="pt-16" no-gutters>
        <v-col cols="12" class="text-container d-flex justify-center">
          <p class="diversify-title" v-html="$i18n.t('ourFundsView.diversify.title')" />
        </v-col>
      </v-row>
      <v-row class="pb-16">
        <v-col cols="12" class="text-container justify-center px-12">
          <p class="text" v-html="$i18n.t('ourFundsView.diversify.text')" />
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
  name: "Diversify",
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
        icon: "Renta variable.svg",
        iconWidth: "104px",
        iconHeight: "65px",
        title: this.$i18n.t("ourFundsView.diversify.variable.title"),
        text: this.$i18n.t("ourFundsView.diversify.variable.text")
      },
      {
        icon: "Renta fija.svg",
        iconWidth: "84px",
        iconHeight: "48px",
        title: this.$i18n.t("ourFundsView.diversify.fixed.title"),
        text: this.$i18n.t("ourFundsView.diversify.fixed.text")
      },
      {
        icon: "Activos alternativos.svg",
        iconWidth: "95px",
        iconHeight: "75px",
        title: this.$i18n.t("ourFundsView.diversify.alternative.title"),
        text: this.$i18n.t("ourFundsView.diversify.alternative.text")
      },
      {
        icon: "Fondos mixtos.svg",
        iconWidth: "80px",
        iconHeight: "80px",
        title: this.$i18n.t("ourFundsView.diversify.mixed.title"),
        text: this.$i18n.t("ourFundsView.diversify.mixed.text")
      }
    ];
  }
};
</script>

<style lang="scss" scoped>
.diversify {
  background: linear-gradient(222.87deg, #832fed 7.03%, #4e5ff1 74.2%);
  color: #ffffff;

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

  .diversify-title {
    font-weight: bold !important;
    font-size: 120px;
    line-height: 146px;
    color: #ffffff;

    @media (max-width: 800px) {
      font-size: 45px;
      line-height: 50px;
    }
  }

  .text {
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
  }
}
</style>
