<template>
  <div class="tip-card">
    <div class="pa-2 tip-icon" :style="iconStyle">
      <img v-if="fromUrl === false" :src="require(`@/assets/${icon}`)" class="iconMaxHeight" />
      <img v-else :src="icon" class="iconMaxHeight" />
    </div>
    <div class="pa-2 tip-title">{{ title }}</div>
    <div class="pa-2 tip-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "TipCard",
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconWidth: {
      type: String,
      required: true
    },
    iconHeight: {
      type: String,
      required: true
    },
    fromUrl: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconStyle() {
      return `height: ${this.iconHeight};
              width: 100%;
      `;
    }
  }
};
</script>

<style lang="scss">
.tip-card {
  background: transparent;
  width: 300px;
  min-height: 300px;
  text-align: center;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;

  .tip-icon {
    margin: 1em auto;
  }

  .tip-title {
    font-weight: bold;
  }

  .tip-text {
    max-width: 240px;
    margin: 0 auto;
  }
  .iconMaxHeight {
    height: 90px;
  }
}
</style>
