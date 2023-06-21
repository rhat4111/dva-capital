<template>
  <div
    class="purple-banner center-in-page pa-16 mb-n14"
    :class="{ 'px-16 mb-n16': $vuetify.breakpoint.lgAndUp }"
  >
    <v-row class=" pb-8">
      <v-col
        cols="12"
        md="6"
        :class="{
          'center-in-page': $vuetify.breakpoint.smAndDown,
          'right-in-page': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div v-html="$i18n.t('fundDetailView.purpleBanner.title')" class="banner-title" />
      </v-col>
      <v-col cols="12" md="6" :class="{ 'center-in-page': $vuetify.breakpoint.smAndDown }">
        <v-btn class="transparent-button mx-4" :href="$i18n.t('createAccountLink')" target="_blank">
          {{ $i18n.t("fundDetailView.purpleBanner.buttonText") }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PurpleBanner"
};
</script>

<style lang="scss">
.purple-banner {
  background: linear-gradient(222.87deg, #832fed 7.03%, #4e5ff1 74.2%);
  min-height: 250px;

  .transparent-button {
    background: transparent !important;
    border: 2px solid #ffffff;
    height: 59px !important;
    border-radius: 80px;
    text-transform: uppercase;
    color: #ffffff;
    font-size: 12px !important;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: 0.05em;
  }

  .banner-title {
    font-size: 25px;
    line-height: 140%;
    justify-content: flex-end;
    letter-spacing: -0.02em;
    color: #ffffff;

    @media (max-width: 800px) {
      text-align: center;
    }
  }
}
</style>
