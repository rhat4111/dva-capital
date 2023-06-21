<template>
  <v-card class="desktop-banner" elevation="0">
    <v-img
      :lazy-src="lazyImg"
      :src="img"
      id="banner"
      class="background p-center pa-5"
      :style="`height: ${height}`"
    >
      <v-row>
        <v-col cols="12" class="center-in-page">
          <div class="center-in-page">
            <div
              :title="title"
              class="banner-title"
              :class="{
                'dark-fonts': dark,
                'white-fonts': !dark
              }"
            >
              {{ title }}
            </div>
          </div>

          <div class="center-in-page">
            <div
              :class="{
                'subtitle p-center-md': $vuetify.breakpoint.md,
                'subtitle p-center-lg': $vuetify.breakpoint.lgAndUp,
                'dark-fonts': dark,
                'white-fonts': !dark
              }"
            >
              <div :subtitle="subtitle">
                {{ subtitle }}
              </div>

              <div>
                <purple-button
                  class="create-account-btn"
                  v-if="showButton"
                  :text="buttonText"
                  :class="{
                    button: $vuetify.breakpoint.mdAndUp
                  }"
                  :link="$i18n.t('createAccountLink')"
                />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
import PurpleButton from "@/components/PurpleButton";
export default {
  name: "FundBanner",

  components: {
    PurpleButton
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
    buttonText: {
      type: String
    },
    lazyImg: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.desktop-banner {
  .background {
    background: linear-gradient(0deg, #4f4f4f, #4f4f4f);
    background-blend-mode: normal;
  }
  .button {
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 30px;
    float: left;
  }

  .center-in-page {
    display: flex;
    justify-content: center;
    align-items: center;

    .p-center-lg {
      flex: 0 0 600px;
    }
    .p-center-lg-no-sub {
      @media (max-width: 1600px) {
        flex: 0 0 500px;
      }
      flex: 0 0 700px;
    }

    .p-center-md {
      flex: 0 0 400px;
    }
  }
  .banner-title {
    font-family: Montserrat-SemiBold;
    font-style: normal;
    font-weight: bold;

    line-height: 110%;
    max-width: 900px;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 38px;
      max-width: 80%;
    }
    @media (max-width: 700px) {
      font-size: 36px;
      max-width: 80%;
      text-align: left;
    }

    @media (max-width: 365px) {
      font-size: 30px;
      max-width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      text-align: left;
    }

    font-size: 60px;

    align-items: center;

    letter-spacing: -0.02em;
  }

  .subtitle {
    margin-top: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 24px;
    align-items: center;
    text-align: left;
    letter-spacing: -0.02em;
    margin-top: 40px;
    /* Blanco */
  }

  .white-fonts {
    color: #ffffff;
  }

  .dark-fonts {
    color: black;
  }

  .create-account-btn {
    display: flex;
    width: 250px;
  }
}
</style>
