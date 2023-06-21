<template>
  <!-- Use 'transparent' color when implementation of first image component per view is ready -->

  <div>
    <v-app-bar
      app
      clipped-left
      id="app-bar"
      :dense="tinyToolbar"
      class="app-width"
      color="#333333"
      :class="{
        'px-16': $vuetify.breakpoint.mdAndUp,
        'px-2': $vuetify.breakpoint.smAndDown
      }"
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="$vuetify.breakpoint.mdAndDown"
        class="nav-icon"
      />
      <v-spacer v-if="$vuetify.breakpoint.mdAndDown" />

      <v-toolbar-items :class="{ 'on-home': $route.name === 'Home' }">
        <v-btn
          to="/"
          class="nav-btn transparent-btn"
          dark
          depressed
          :disabled="$route.name === 'Home'"
        >
          <img :src="dvaCapitalLogo" class="dva-logo" />
        </v-btn>
      </v-toolbar-items>

      <v-spacer />
      <v-toolbar-items v-if="$vuetify.breakpoint.lgAndUp">
        <v-btn
          to="/us"
          :disabled="$route.name === 'Us'"
          dark
          depressed
          class="transparent-btn nav-btn"
        >
          {{ $i18n.t("us") }}
        </v-btn>
        <v-btn
          to="/funds"
          :disabled="$route.name === 'Funds'"
          :outlined="$route.name === 'Fund'"
          dark
          depressed
          class="transparent-btn nav-btn"
        >
          {{ $i18n.t("ourFunds") }}
        </v-btn>
        <v-btn dark depressed class="transparent-btn" :href="$i18n.t('blogHref')" target="_blank">
          {{ $i18n.t("blogDva") }}
        </v-btn>
        <v-btn
          dark
          depressed
          class="transparent-btn"
          :href="$i18n.t('compareHref')"
          target="_blank"
        >
          {{ $i18n.t("compareDva") }}
        </v-btn>
        <v-btn
          dark
          depressed
          class="transparent-btn mi-dva"
          :href="$i18n.t('miDvaHref')"
          target="_blank"
        >
          {{ $i18n.t("miDva") }}
        </v-btn>
        <div class="btn-container">
          <v-btn class="register-btn" :href="$i18n.t('registerHref')" target="_blank">
            {{ $i18n.t("register") }}
          </v-btn>
        </div>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped disable-resize-watcher color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template>
          <div v-for="(item, index) in items" :key="index">
            <header-item
              :icon="item.icon"
              :name="item.text"
              :route="item.route"
              :href="item.href"
            />
            <v-divider dark class="my-1" />
          </div>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {
  mdiHomeOutline,
  mdiAccountGroupOutline,
  mdiPiggyBankOutline,
  mdiLoginVariant,
  mdiAccountPlus,
  mdiCommentBookmarkOutline,
  mdiChartAreaspline
} from "@mdi/js";
import HeaderItem from "./HeaderItem.vue";

export default {
  name: "Header",
  components: {
    HeaderItem
  },
  data: () => ({
    drawer: false,
    items: null,
    dvaCapitalLogo: require("@/assets/DVA_solo_Blanco.png")
  }),

  computed: {
    tinyToolbar() {
      if (this.$vuetify.breakpoint.lgAndDown) return true;
      return false;
    }
  },
  updated() {
    if (this.$vuetify.breakpoint.lgAndUp) {
      this.drawer = false;
    }
  },

  created() {
    this.items = [
      { icon: mdiHomeOutline, text: this.$i18n.t("home"), route: "Home" },
      { icon: mdiAccountGroupOutline, text: this.$i18n.t("us"), route: "Us" },
      { icon: mdiPiggyBankOutline, text: this.$i18n.t("ourFunds"), route: "Funds" },
      { icon: mdiLoginVariant, text: this.$i18n.t("miDva"), href: this.$i18n.t("miDvaHref") },
      {
        icon: mdiAccountPlus,
        text: this.$i18n.t("register"),
        href: this.$i18n.t("registerHref")
      },
      {
        icon: mdiCommentBookmarkOutline,
        text: this.$i18n.t("blogDva"),
        href: this.$i18n.t("blogHref")
      },
      {
        icon: mdiChartAreaspline,
        text: this.$i18n.t("compareDva"),
        href: this.$i18n.t("compareHref")
      }
    ];
  }
};
</script>

<style lang="scss">
.dva-logo {
  width: 80px;
}

.on-home {
  .theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: #333333 !important;
  }
  .theme--dark.v-btn.v-btn--disabled {
    color: #333333 !important;
  }
}

.nav-icon {
  .v-icon__svg {
    fill: white;
  }
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-btn {
  color: #ffffff !important;
  border: 2px solid #ffffff !important;
  border-radius: 80px !important;
  background-color: transparent !important;
  height: 40px;
  margin: 0 5px;
  padding: 5px 20px;
  text-transform: capitalize !important;
  font-family: Montserrat-SemiBold;
}

.register-btn:hover {
  background: #4c4c4c;
}

.transparent-btn {
  background: transparent !important;
  height: 50px;
  margin: 0 3px;
  text-transform: capitalize !important;
}

.mi-dva {
  font-family: Montserrat-SemiBold;
  text-transform: uppercase !important;
}
</style>
