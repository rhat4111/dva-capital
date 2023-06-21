<template>
  <div class="my-8">
    <div class="center-in-page flex-column">
      <img :src="icon" class="icon" />

      <span class="why-us-title mx-8 my-3" :style="fontColor.title">
        {{ title }}
      </span>

      <div class="text-container mx-8" :style="`max-width: ${maxTextWidth}; ${fontColor.text}`">
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyUsText",
  props: {
    text: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    maxTextWidth: {
      type: String
    },
    darkFonts: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    fontColor() {
      if (this.darkFonts) return { title: `color: #000000`, text: `color: #ffffff` };

      return { title: `color: #4f4f4f`, text: `color: #000000` };
    }
  }
};
</script>

<style lang="scss" scoped>
.text-container {
  width: 100%;
  max-width: 450px;
  text-align: center;
}

.why-us-title {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

  text-align: center;
}

.icon {
  height: 75px;
  max-width: 200px;
}
</style>
