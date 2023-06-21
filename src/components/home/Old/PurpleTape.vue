<template>
  <div class="blue-banner p-center" :style="backgroundColor">
    <div class="max-width-wrapper mx-12">
      <v-row no-gutters>
        <v-col cols="12" md="6" lg="6" class="blue-banner-title">
          <v-row class="p-center">
            <v-col
              cols="12"
              :class="{
                'blue-banner-title-sm': $vuetify.breakpoint.smAndDown,
                'blue-banner-title-md': $vuetify.breakpoint.md,
                'p-center-lg': $vuetify.breakpoint.lgAndUp
              }"
              v-html="title"
            >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" lg="6" class="my-3 text-alignment">
          <p
            :class="{
              'p-center-sm ma-5 blue-banner-text-sm': $vuetify.breakpoint.smAndDown,
              'p-center-sm ma-5 blue-banner-text': $vuetify.breakpoint.md,
              'p-center-md blue-banner-text': $vuetify.breakpoint.lgAndUp
            }"
          >
            {{ text }}
          </p>
        </v-col>
        <v-col cols="6" />
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center px-6"
          :class="{
            'justify-end': $vuetify.breakpoint.lgAndUp,
            'justify-center': $vuetify.breakpoint.mdAndDown
          }"
        >
          <v-btn id="call-to-action" v-if="Object.keys(callToAction).length > 0" @click="toRoute()">
            {{ $i18n.t(`${callToAction.text}`) }}
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurpleTape",

  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    callToAction: {
      type: Object,
      default: () => ({})
    },
    purple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    backgroundColor() {
      if (!this.purple)
        return "background: linear-gradient(222.87deg, #11d6d6 7.03%, #49DD9F 74.2%);";

      return "background: linear-gradient(222.87deg, #832fed 7.03%, #4e5ff1 74.2%);";
    }
  },

  methods: {
    toRoute() {
      this.$router.push({ name: this.callToAction.route, hash: this.callToAction.hash });
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.blue-banner {
  padding-bottom: 100px;
  padding-top: 100px;
  text-align: left;
  #call-to-action {
    font-size: 16px;
    color: #eeeeee;
    background: transparent;
    border-radius: 80px;
    border: 3px solid #eeeeee;
    font-weight: 800;
    height: 60px;
    min-width: 250px;
  }

  .margin-md {
    margin-left: 30px;
    margin-right: 15px;
  }
  .margin-lg {
    margin-left: 10px;
  }

  .blue-banner-title {
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 80px;
    /* or 100% */
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    font-weight: 600;

    /* Blanco */
    color: #ffffff;
  }

  .blue-banner-title-sm {
    flex: 0 0 400px;
    font-size: 46px;
    line-height: 46px;
    text-align: center;
    font-weight: 600;
  }
  .blue-banner-title-md {
    flex: 0 0 450px;
    font-size: 52px;
    line-height: 60px;
    font-weight: 600;
  }

  .blue-banner-text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    text-align: left;
    /* or 26px */

    letter-spacing: -0.02em;

    /* Blanco */

    font-weight: 600;

    color: #ffffff;
  }
  .blue-banner-text-sm {
    flex: 0 0 300px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    /* or 26px */

    letter-spacing: -0.02em;
    font-weight: 600;

    /* Blanco */

    color: #ffffff;
  }

  .p-center-md {
    flex: 0 0 500px;
  }

  .text-alignment {
    @media (min-width: 1270px) {
      justify-content: flex-end;
    }
    display: flex;
    justify-content: center;
  }
}
</style>
