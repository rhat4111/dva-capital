<template>
  <div class="how-we-do-it-section pb-16">
    <div class="max-width-wrapper">
      <text-section
        :heading="$i18n.t('ourFundsView.howWeDoIt.preTitle')"
        :title="$i18n.t('ourFundsView.howWeDoIt.title')"
        :titleBold="$i18n.t('ourFundsView.howWeDoIt.titleBold')"
        :text="$i18n.t('ourFundsView.howWeDoIt.text')"
        :titleSize="$i18n.t('ourFundsView.howWeDoIt.titleSize')"
      />
    </div>
  </div>
</template>

<script>
import TextSection from "@/components/universal/TextSection";

export default {
  name: "HowWeDoIt",

  components: {
    TextSection
  },

  computed: {
    headingMtSM() {
      let marginTop = "margin-top:60px;";
      if (this.$vuetify.breakpoint.smAndDown) {
        marginTop = "margin-top:0px;";
        return marginTop;
      }
      return marginTop;
    }
  }
};
</script>

<style lang="scss" scoped></style>
