<template>
  <v-container fluid class="ma-0 pa-0">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-container>
</template>

<script>
export default {
  name: "AppView",

  metaInfo: {
    title: "DVA Capital",
    template: "%s | DVA Capital"
  }
};
</script>

<style lang="scss"></style>
