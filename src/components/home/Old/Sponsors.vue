<template>
  <div class="mt-5">
    <div
      class="p-center"
      :class="{
        'sponsors-sm': $vuetify.breakpoint.smAndDown,
        'sponsors-md-lg': $vuetify.breakpoint.mdAndUp
      }"
    >
      <v-row class="darken p-center max-width-wrapper" no-gutters>
        <v-col cols="12" md="4">
          <a :href="df.link" target="_blank">
            <img :src="df.src" alt="" />
          </a>
        </v-col>
        <v-col cols="12" md="4" class="my-4">
          <a :href="mercurio.link" target="_blank">
            <img :src="mercurio.src" alt="" />
          </a>
        </v-col>
        <v-col cols="12" md="4">
          <a :href="duna.link" target="_blank">
            <img :src="duna.src" alt="" />
          </a>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sponsors",

  data: () => ({
    df: {
      src: require("@/assets/df.svg"),
      link:
        "https://www.df.cl/noticias/mercados/bolsa-monedas/dva-capital-prepara-fondo-de-inversion-en-empresas-de-insumos-medicos/2020-10-16/185509.html"
    },
    duna: {
      src: require("@/assets/duna.svg"),
      link:
        "https://www.duna.cl/podcasts/la-saga-de-gamestop-en-wall-street-dolar-bajo-740-y-acciones/"
    },
    mercurio: {
      src: require("@/assets/mercurio.svg"),
      link:
        "https://www.elmercurio.com/Inversiones/Noticias/Columnas/2021/02/05/Chips-el-nuevo-taco-de-la-industria-de-automoviles.aspx"
    }
  })
};
</script>

<style></style>
