<template>
  <div class="contact p-center">
    <v-row class="max-width-wrapper" no-gutters>
      <v-col cols="12">
        <div class="contact-title-bold">
          <strong>{{ $i18n.t("landing.contact.titleBold") }} </strong>
        </div>
        <div class="contact-title ma-5">
          {{ $i18n.t("landing.contact.title") }}
        </div>
        <div class="p-center">
          <purple-button
            :text="$i18n.t('landing.contact.button')"
            class="my-8"
            @on-click="$intercom.showNewMessage($i18n.t('intercom.chatWithExpert'))"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PurpleButton from "@/components/PurpleButton";
export default {
  name: "Contact",

  components: {
    PurpleButton
  }
};
</script>

<style lang="scss" scoped>
.contact {
  background: #ebf0ff;
  padding-bottom: 130px;
  margin-bottom: -100px;
  padding-top: 50px;

  .contact-title-bold,
  .contact-title {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
    display: block;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;

    /* Gris 01 */

    color: #333333;
  }

  .contact-title-bold {
    font-weight: 700;
  }
}
</style>
