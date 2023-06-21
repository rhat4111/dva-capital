<template>
  <v-app class="app-width" id="main">
    <v-main class="fill-height">
      <app-header />
      <app-mobile-header />
      <!-- <v-expand-transition mode="in-out">
        <announce-bar v-if="showAnnounceBar" @closeAnnounceBar="showAnnounceBar = false" />
      </v-expand-transition> -->
      <app-content />
      <app-footer />
      <custom-notification />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/layout/Header";
import AppMobileHeader from "@/components/layout/MobileHeader";
import AppContent from "@/components/layout/Main";
import AppFooter from "@/components/layout/Footer";
import CustomNotification from "@/components/CustomNotification";
// import AnnounceBar from "./components/universal/AnnounceBar.vue";

export default {
  name: "App",
  data: () => ({
    showAnnounceBar: false
  }),
  components: {
    AppHeader,
    AppMobileHeader,
    AppContent,
    AppFooter,
    CustomNotification
    // AnnounceBar
  },
  async mounted() {
    if (!this.$intercom.ready) {
      this.$intercom.boot();
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.showAnnounceBar = true;
  }
};
</script>

<style lang="scss">
.app-width {
  max-width: 2560px;
  margin: 0 auto;
}

#main {
  // font-family: "Montserrat", Helvetica, Arial, sans-serif; /* this was it */
  font-family: "Work Sans", sans-serif;
}

.max-width-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.stronger-font {
  strong {
    font-family: Montserrat-SemiBold;
  }
}

.center-in-page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-in-page {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.right-in-page {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.flex-column {
  flex-direction: column;
}
</style>
