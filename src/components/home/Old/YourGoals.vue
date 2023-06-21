<template>
  <div class="your-goals pb-16">
    <div class="p-center">
      <v-row class="max-width-wrapper">
        <v-col cols="12" class="how-to-invest-text">
          <p class="text-why-us">
            {{ $i18n.t("landing.yourGoals.heading") }}
          </p>
          <div class="p-center">
            <div
              class="title-why-us"
              :class="{
                'your-goals-title-sm': $vuetify.breakpoint.mdAndDown,
                'your-goals-title-md': $vuetify.breakpoint.lgAndUp
              }"
              v-html="$i18n.t('landing.yourGoals.title')"
            />
          </div>
          <div class="p-center mt-5">
            <p
              :class="{
                'your-goals-text p-center-sm margin-sm': $vuetify.breakpoint.mdAndDown,
                'your-goals-text p-center-md-sm': $vuetify.breakpoint.lgAndUp
              }"
              style="text-align: center"
            >
              {{ $i18n.t("landing.yourGoals.text") }}
            </p>
          </div>
        </v-col>

        <v-col cols="12">
          <div
            :class="{
              'buttons-sm': $vuetify.breakpoint.mdAndDown,
              'buttons-md': $vuetify.breakpoint.lgAndUp
            }"
          >
            <investment-tips />
            <!-- HABILITAR CUANDO SE CREE LA FUNCIONALIDAD RESPECTIVA

             <purple-button
            :class="{
              'right-button-sm': $vuetify.breakpoint.mdAndDown,
              'right-button-md': $vuetify.breakpoint.lgAndUp,
            }"
            :text="$i18n.t('landing.yourGoals.button.right.text')"
          /> -->
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- <v-row>
        <v-col cols="12" id="carousel" class="ma-0 pa-0">
          <carousel :items="carousel" />
        </v-col>
      </v-row> -->
  </div>
</template>

<script>
import InvestmentTips from "@/components/home/InvestmentTips.vue";

export default {
  name: "YourGoals",

  data: () => ({
    carousel: [
      {
        src: require("@/assets/carousel1.jpg"),
        text:
          "Invierto junto a DVA pensando en el largo plazo, sin embargo he necesitado parte de mi dinero durante el último tiempo y lo pude ocupar sin problema",
        persons: "José Miguel Benavides",
        whoAre: "Inversionista DVA desde 2019"
      },
      {
        src: require("@/assets/carousel2.jpg"),
        text:
          "Estoy invirtiendo para complementar mi cotización obligatoria en la AFP, para poder vivir tranquila una vez jubilada",
        persons: "Javiera",
        whoAre: "Inversionista DVA desde 2016"
      },
      {
        src: require("@/assets/carousel3.jpg"),
        text:
          "Estamos invirtiendo en la tranquilidad de la familia. Nuestros hijos son la principal motivación para mantener la disciplina del ahorro",
        persons: "Camilo Muñoz y Tamara Cordero",
        whoAre: "Invesionistas DVA desde 2020"
      }
    ]
  }),
  components: {
    InvestmentTips
  }
};
</script>

<style></style>
