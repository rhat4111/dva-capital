<template>
  <v-card class="desktop-banner" elevation="0">
    <v-img
      :lazy-src="lazyImg"
      :src="img"
      id="banner"
      class="background p-center pa-5"
      :style="`height: ${videoHeight}`"
    >
      <v-row class="center-vertically">
        <v-col cols="3">
          <div class="right-in-page">
            <div class="title-container">
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
          </div>

          <div class="button-right">
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
        </v-col>
        <v-col cols="9" class="center-in-page">
          <div class="video-container mr-10">
            <Player volume="20" ref="player">
              <Video
                crossorigin=""
                poster="https://dvacapital-files.s3.amazonaws.com/VIDEO-DVA+03.gif"
                mediaTitle="DVA | Crear - Creer - Crecer"
              >
                <source
                  data-src="https://dvacapital-files.s3.amazonaws.com/DVA-Campaign.mp4"
                  type="video/mp4"
                />
              </Video>

              <Ui>
                <ClickToPlay />
                <DblClickFullscreen />
                <Spinner showWhenMediaLoading />
                <Poster fit="contain" />
                <DefaultControls hideOnMouseLeave :activeDuration="2000" hideWhenPaused />
              </Ui>
            </Player>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import PurpleButton from "@/components/PurpleButton";
import {
  Player,
  Video,
  Ui,
  Spinner,
  Poster,
  ClickToPlay,
  DblClickFullscreen,
  DefaultControls
} from "@vime/vue";

// Default theme.
import "@vime/core/themes/default.css";

export default {
  name: "DesktopBanner",

  data: () => ({
    videoOptions: {
      rel: 0,
      loop: 0,
      playlist: "_VwrstMiHDQ",
      modestbranding: 1,
      autoplay: 1,
      fs: 0
    },
    currentTime: 0,
    poster: require("@/assets/quicksilver.gif")
  }),

  components: {
    PurpleButton,
    Player,
    Ui,
    Spinner,
    Poster,
    ClickToPlay,
    DblClickFullscreen,
    Video,
    DefaultControls
  },

  computed: {
    videoHeight() {
      if (this.$vuetify.breakpoint.md) return 300;
      if (this.$vuetify.breakpoint.lg) return 600;
      if (this.$vuetify.breakpoint.xl) return 650;
      return 600;
    },
    player() {
      return this.$refs.player;
    }
  },

  methods: {
    stopVideo() {
      console.log("pausing video");
    },

    seekForward() {
      this.currentTime = this.currentTime + 5;
    },

    // Example function to showcase calling player method.
    enterFullscreen() {
      this.player.enterFulllscreen();
    },

    onTimeUpdate(time) {
      this.currentTime = time;
    },

    onFullscreenChange(active) {
      const isFullscreen = active;
      console.log(isFullscreen);
      // ...
    }
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
  background-color: #333333;
  height: 1050px;
  display: flex;

  @media (max-width: 2560px) {
    height: 900px;
  }

  @media (max-width: 1920px) {
    height: 800px;
  }

  @media (max-width: 1440px) {
    height: 750px;
  }
  @media (max-width: 1024px) {
    height: 600px;
  }

  .center-vertically {
    display: flex;
    align-items: center;
  }

  // #333333

  .background {
    background: linear-gradient(0deg, #4f4f4f, #4f4f4f);
    background-blend-mode: normal;
    height: 1050px;

    @media (max-width: 2560px) {
      height: 900px;
    }

    @media (max-width: 1920px) {
      height: 800px;
    }

    @media (max-width: 1440px) {
      height: 750px;
    }
    @media (max-width: 1024px) {
      height: 600px;
    }
  }
  .button {
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 30px;
    float: left;
  }

  .button-right {
    float: right;
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

    @media (max-width: 1920px) {
      font-size: 50px;
    }
    @media (max-width: 1400px) {
      font-size: 40px;
    }

    @media (max-width: 1024px) {
      font-size: 38px;
    }
    font-size: 62px;
    text-align: right;
    letter-spacing: -0.02em;
  }

  .title-container {
    max-width: 540px;
    @media (max-width: 1920px) {
      max-width: 370px;
    }

    @media (max-width: 1400px) {
      max-width: 300px;
    }
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
    width: 250px;
  }

  .video-container {
    width: 1200px;
    height: 600px;

    @media (max-width: 1366px) {
      width: 800px;
      height: 400px;
    }

    @media (max-width: 1024px) {
      width: 600px;
      height: 300px;
    }
  }
}
</style>
