<template>
  <v-row class="one-step-to-invest pa-12 pb-16 d-flex align-center justify-center" no-gutters>
    <p
      class="stronger-font invitation mx-8"
      v-html="$i18n.t('ourFundsView.fundsList.invitation')"
    />
    <purple-button
      :text="$i18n.t('ourFundsView.fundsList.inviteButton')"
      :link="$i18n.t('ourFundsView.fundsList.buttonHref')"
    />
  </v-row>
</template>

<script>
import PurpleButton from "../PurpleButton.vue";
export default {
  name: "OneStep",

  components: {
    PurpleButton
  }
};
</script>

<style lang="scss" scoped>
.one-step-to-invest {
  background: #ebf0ff;

  min-height: 300px;

  .invitation {
    font-size: 25px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #333333;
    margin: 1em !important;
    text-align: center;
  }
}
</style>
