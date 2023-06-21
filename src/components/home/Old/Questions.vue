<template>
  <div class="frequent-questions" style="margin-top: -12px">
    <div class="p-center">
      <v-row class="mt-3 max-width-wrapper" no-gutters>
        <v-col cols="12" class="how-to-invest-text p-center mb-16">
          <div>
            <p class="heading">
              {{ $i18n.t("landing.frequentQuestions.heading") }}
            </p>

            <div
              v-html="$i18n.t('landing.frequentQuestions.title')"
              :class="{
                'fq-title-sm p-center-sm': $vuetify.breakpoint.smAndDown,
                'fq-title p-center-md': $vuetify.breakpoint.mdAndUp
              }"
            />
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <frequentQuestions
            :number="$i18n.t('landing.frequentQuestions.1.number')"
            :question="$i18n.t('landing.frequentQuestions.1.question')"
            :answer="$i18n.t('landing.frequentQuestions.1.answer')"
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <frequentQuestions
            :number="$i18n.t('landing.frequentQuestions.2.number')"
            :question="$i18n.t('landing.frequentQuestions.2.question')"
            :answer="$i18n.t('landing.frequentQuestions.2.answer')"
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <frequentQuestions
            :number="$i18n.t('landing.frequentQuestions.3.number')"
            :question="$i18n.t('landing.frequentQuestions.3.question')"
            :answer="$i18n.t('landing.frequentQuestions.3.answer')"
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <frequentQuestions
            :number="$i18n.t('landing.frequentQuestions.4.number')"
            :question="$i18n.t('landing.frequentQuestions.4.question')"
            :answer="$i18n.t('landing.frequentQuestions.4.answer')"
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <frequentQuestions
            :number="$i18n.t('landing.frequentQuestions.5.number')"
            :question="$i18n.t('landing.frequentQuestions.5.question')"
            :answer="$i18n.t('landing.frequentQuestions.5.answer')"
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <frequentQuestions
            :number="$i18n.t('landing.frequentQuestions.6.number')"
            :question="$i18n.t('landing.frequentQuestions.6.question')"
            :answer="$i18n.t('landing.frequentQuestions.6.answer')"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import FrequentQuestions from "@/components/home/FrequentQuestions";
export default {
  name: "Questions",

  data: () => ({}),

  components: {
    FrequentQuestions
  }
};
</script>

<style lang="scss" scoped>
.heading {
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #828282;
}
</style>
