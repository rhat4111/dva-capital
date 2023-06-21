<template>
  <v-list-item @click="toRoute">
    <v-list-item-action>
      <v-icon> {{ icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title class="grey--text"> {{ name }} </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "HeaderItem",
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    route: {
      type: String,
      default: undefined
    },
    href: {
      type: String,
      default: undefined
    }
  },

  methods: {
    toRoute() {
      if (this.href) {
        window.open(this.href, "_blank");
      } else {
        const name = this.route;
        if (this.$route.name !== name) {
          this.$router.push({ name });
        }
      }
    }
  }
};
</script>

<style></style>
