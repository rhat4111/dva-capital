<template>
  <div>
    <v-footer class="footer-dva">
      <v-spacer></v-spacer>
      <v-container fluid class="footer-inner">
        <v-row
          justify="space-between"
          :class="{
            'pt-10 mt-12': $vuetify.breakpoint.smAndDown,
            'mt-10': $vuetify.breakpoint.mdAndUp
          }"
        >
          <v-col align-self="center" class="mt-0 pt-0" cols="12" md="3">
            <v-row class="mb-2 mt-0 mx-auto" justify="center">
              <p class="image-header">Accesos directos</p>
            </v-row>
            <ul class="direct-access-list pl-0">
              <!--<li>
                <a class="access-element" href="https://www.dvacapital.com/terminos-y-condiciones-de-los-servicios-prestados/" target="_blank">{{
                  this.$i18n.t("footer.externalLinks.termsAndConditions")
                }}</a>
              </li>
              <li>
                <a class="access-element" href="https://www.dvacapital.com/politicas-de-privacidad/" target="_blank">{{
                  this.$i18n.t("footer.externalLinks.privacyPolicies")
                }}</a>
              </li>
              <li>
                <a class="access-element" href="https://www.dvacapital.com/politica-de-proteccion-de-datos-personales/" target="_blank">{{
                  this.$i18n.t("footer.externalLinks.information")
                }}</a>
              </li>-->
              <li>
                <a class="access-element" href="https://www.dvacapital.com/" target="_blank">{{
                  this.$i18n.t("footer.externalLinks.aboutDVA")
                }}</a>
              </li>
              <li>
                <a class="access-element" href="http://ameris.cl/" target="_blank">{{
                  this.$i18n.t("footer.externalLinks.aboutAmeris")
                }}</a>
              </li>
              <li>
                <a class="access-element" href="https://ayuda.dvacapital.com/es/" target="_blank">
                  {{ this.$i18n.t("footer.externalLinks.helpCenter") }}
                </a>
              </li>
            </ul>
          </v-col>
          <v-col class="my-auto mt-0 pt-0" cols="12" md="3">
            <v-row class="mb-2" justify="center" align="start">
              <v-col cols="12">
                <p class="image-header center-in-page">Con el respaldo</p>
              </v-col>
              <v-col cols="6">
                <v-img :src="require('@/assets/logo.svg')" max-height="80" contain></v-img>
              </v-col>
              <v-col cols="6">
                <v-img :src="require('@/assets/ameris_logo.svg')" max-height="80" contain></v-img>
              </v-col>
            </v-row>
            <v-row> </v-row>
          </v-col>
          <v-col class="mt-0 pt-0" cols="12" md="3">
            <v-row class="mb-2" justify="center">
              <v-col cols="12">
                <p class="image-header center-in-page">
                  {{ this.$i18n.t("footer.imageHeader.cmf") }}
                </p>
              </v-col>
              <v-col>
                <v-img :src="require('@/assets/cmf_logo.svg')" contain max-height="55" />
              </v-col>
            </v-row>
          </v-col>
          <v-col class="mt-0 pt-0" cols="12" md="3">
            <v-row class="mb-2" justify="center">
              <v-col cols="12">
                <p class="image-header center-in-page">{{ this.$i18n.t("footer.social") }}</p>
              </v-col>
              <v-col sm="8" md="8" lg="6">
                <v-row no-gutters class="mx-0">
                  <v-col>
                    <a href="https://www.facebook.com/dvacapital/" target="_blank">
                      <v-img
                        :src="require('@/assets/social/facebook.svg')"
                        contain
                        max-height="30"
                      />
                    </a>
                  </v-col>
                  <v-col>
                    <a href="https://www.instagram.com/dvacapital/" target="_blank">
                      <v-img
                        :src="require('@/assets/social/instagram.svg')"
                        contain
                        max-height="30"
                      />
                    </a>
                  </v-col>
                  <v-col>
                    <a href="https://www.linkedin.com/company/dva-capital-s-a-/" target="_blank">
                      <v-img
                        :src="require('@/assets/social/linkedin.svg')"
                        contain
                        max-height="30"
                      />
                    </a>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center predictions py-4">
          <p>
            {{ this.$i18n.t("footer.predictionsText") }}
            <a
              href="https://dvacapital-files.s3.amazonaws.com/2022+01+18+Protocolizaci%C3%B3n+t%C3%A9rminos+y+condiciones+concurso+Predicciones+DVA+Capital+2022.pdf"
              target="_blank"
              >{{ this.$i18n.t("footer.predictions") }}</a
            >
          </p>
        </v-row>
        <v-row class="white--text footer-regulatory-text">
          <p class="text-center">{{ this.$i18n.t("footer.disclaimer") }}</p>
        </v-row>
        <v-row class="white--text" justify="space-around" align="center">
          <div class="py-4">
            {{ `&copy; ${new Date().getFullYear()} ${this.$i18n.t("footer.legal")}` }}
          </div>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "MainFooter"
};
</script>

<style scoped lang="scss">
.direct-access-list {
  list-style: none;
  text-align: center;
}

.access-element {
  color: white;
  text-decoration: none;
}
.access-element:hover {
  text-decoration: underline;
}

.image-header {
  color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold !important;
}

.footer-dva {
  margin-top: 50px;
  background-color: #333333 !important;
}

.footer-regulatory-text {
  font-size: 10px;
}

.predictions {
  color: #ffffff;

  a {
    text-decoration: none;
  }
}
</style>
