<template>
  <div>
    <mobile-banner
      v-if="$vuetify.breakpoint.smAndDown"
      :title="title"
      :subtitle="subtitle"
      :showButton="showButton"
      :img="img"
      :lazyImg="lazyImg"
      :height="height"
      :dark="dark"
      :buttonText="button"
    />
    <desktop-banner
      v-else
      :title="title"
      :subtitle="subtitle"
      :showButton="showButton"
      :img="img"
      :lazyImg="lazyImg"
      :height="height"
      :dark="dark"
      :buttonText="button"
    />
  </div>
</template>

<script>
import MobileBanner from "../../banner/MobileBanner.vue";
import DesktopBanner from "../../banner/DesktopBanner.vue";
export default {
  name: "Banner",
  data: () => {
    return {
      button: ""
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    img: {
      type: String,
      required: true
    },
    showButton: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "center"
    },
    dark: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: "560px"
    },
    lazyImg: {
      type: String
    }
  },
  components: {
    MobileBanner,
    DesktopBanner
  },
  created() {
    this.button = this.$i18n.t("createAccount");
  }
};
</script>

<style lang="scss"></style>
