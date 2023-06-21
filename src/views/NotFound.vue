<template>
  <v-container>
    <v-row class="not-found d-flex align-center text-center">
      <v-col>
        <h1>{{ $i18n.t("notFound.title") }}</h1>
        <p>
          {{ $i18n.t("notFound.text") }}
        </p>
        <v-btn @click="$router.push({ name: 'Home' })">{{ $i18n.t("notFound.redirect") }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "notFound",
  metaInfo: {
    title: "No se encuentra",
    meta: [{ name: "robots", content: "noindex" }]
  }
};
</script>

<style lang="scss">
.not-found {
  height: 70vh;
}
</style>
