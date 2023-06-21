<template>
  <v-container
    fluid
    class="geomap"
    :class="{
      'geo-map-sm-down pa-3': $vuetify.breakpoint.smAndDown,
      'geo-map-md-up pa-12': $vuetify.breakpoint.mdAndUp
    }"
  >
    <v-row>
      <v-col cols="12" class="p-center">
        <geo-chart
          :data="countries"
          :colors="['#9D9BFF', '#4E5FF1', '832FED']"
          :label="label"
          :width="width"
          :height="height"
          :library="{
            backgroundColor,
            defaultColor,
            keepAspectRatio
          }"
        ></geo-chart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GeographicChart",
  props: {
    datalessColor: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    countries: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    label: "Proporción",
    suffix: "%",
    text: "pais",
    backgroundColor: "#ffffff",
    datalessRegionColor: "#eeeeee",
    defaultColor: "ffffff",
    keepAspectRatio: true
  }),
  methods: {}
};
</script>

<style lang="scss">
.geomap {
  .geo-map-md-up {
    width: 900px;
    height: 500px;
  }
  .geo-map-sm-down {
    width: 400px;
    height: 300px;
  }
}
</style>
