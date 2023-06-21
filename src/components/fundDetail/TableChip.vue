<template>
  <div>
    <div v-if="item[field]">
      <v-tooltip bottom v-if="tooltip">
        <template #activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            v-on="on"
            :color="index % 2 === 0 ? '#F2F2F2' : '#FFFFFF'"
            :class="{
              'bold-text': !equity,
              greenFont: item[field] > 0 && !equity,
              redFont: item[field] < 0 && !equity
            }"
          >
            <div v-if="!equity">{{ formatPercentages(item[field]) }}</div>
            <div v-else>{{ formatEquity(item[field]) }}</div>
          </v-chip>
        </template>
        <span>{{ item[`${field}series`] }}</span>
      </v-tooltip>
      <v-chip
        v-else
        :color="index % 2 === 0 ? '#F2F2F2' : '#FFFFFF'"
        :class="{
          'bold-text': !equity,
          greenFont: item[field] > 0 && !equity,
          redFont: item[field] < 0 && !equity
        }"
      >
        <div v-if="!equity">{{ formatPercentages(item[field]) }}</div>
        <div v-else>{{ formatEquity(item[field]) }}</div>
      </v-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableChip",
  data() {
    return {};
  },
  props: {
    item: Object,
    field: String,
    index: Number,
    equity: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatPercentages(value) {
      if (value) {
        return `${value.toLocaleString("es-CL", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}%`;
      }
      return null;
    },
    formatEquity(value) {
      if (value) {
        return `${(value / 1000000).toLocaleString("es-CL", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        })}`;
      }
      return null;
    }
  }
};
</script>

<style scoped>
.greenFont {
  color: #008000;
}
.redFont {
  color: #ff0000;
}
.bold-text {
  font-weight: bold;
}
</style>
