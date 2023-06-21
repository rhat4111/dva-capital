<template>
  <div class="center-in-page flex-column">
    <p class="heading">{{ heading }}</p>
    <div v-if="!invertedTitles">
      <div class="section-regular-title stronger-font mx-3" :style="titleWeight">
        {{ title }}
      </div>

      <div class="section-regular-title-bold stronger-font mx-3" :style="titleWeight">
        <strong> {{ titleBold }} </strong>
      </div>
    </div>

    <div v-else>
      <div class="section-regular-title-bold stronger-font" :style="titleWeight">
        <strong> {{ titleBold }} </strong>
      </div>
      <div class="section-regular-title stronger-font" :style="titleWeight">
        {{ title }}
      </div>
    </div>

    <div class="text-container my-5">
      <div class="section-text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionText",
  props: {
    text: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    titleBold: {
      type: String,
      required: true
    },
    heading: {
      type: String
    },

    titleSize: {
      type: String,
      default: "40px"
    },
    invertedTitles: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    titleWeight() {
      return `font-size: ${this.titleSize}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.text-container {
  width: 100%;
  max-width: 700px;
}
.section-text {
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  /* or 26px */

  text-align: center;
  letter-spacing: -0.02em;

  /* Gris 03 */

  color: #828282;
}

.section-regular-title,
section-regular-title-bold {
  font-size: 40px;
  line-height: 110% !important;
  text-align: center;
  letter-spacing: -0.02em;

  /* Gris 01 */

  color: #333333;
}

.section-regular-title-bold {
  font-style: normal;
  font-weight: 700;
  text-align: center;
  line-height: 110% !important;
  @media (min-width: 1440px) {
    margin-top: 5px;
  }
}

.heading {
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #828282;
}
</style>
