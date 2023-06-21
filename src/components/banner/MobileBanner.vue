<template>
  <v-card class="mobile-banner" elevation="0">
    <div>
      <v-img :lazy-src="lazyImg" :src="img" id="banner" class="background p-center ">
        <v-row no-gutters>
          <v-col cols="12">
            <div class="video-container px-2">
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
                  <ClickToPlay useOnMobile />
                  <DblClickFullscreen useOnMobile />
                  <Spinner showWhenMediaLoading />
                  <Poster fit="contain" />
                  <DefaultControls hideOnMouseLeave :activeDuration="2000" hideWhenPaused />
                </Ui>
              </Player>
            </div>
          </v-col>

          <v-col cols="12" class="landscape-margin p-center-sm  mx-auto pa-5">
            <div class="center-in-page">
              <div class="margin-sm">
                <div class="center-in-page">
                  <div
                    :title="title"
                    class="banner-title-sm p-center-sm"
                    :class="{
                      'dark-fonts': dark,
                      'no-subtitle': !this.subtitle,
                      'white-fonts': !dark
                    }"
                  >
                    {{ title }}
                  </div>
                </div>

                <div class="center-in-page">
                  <purple-button
                    class="create-account-btn button-sm"
                    v-if="showButton"
                    :text="buttonText"
                    :link="$i18n.t('createAccountLink')"
                  />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <!-- <v-row
          class="center-in-page"
          :class="{
            'no-button': !this.showButton && this.subtitle
          }"
          no-gutters
        >
        </v-row> -->
      </v-img>
    </div>
  </v-card>
</template>

<script>
import PurpleButton from "@/components/PurpleButton";
import "@vime/core/themes/default.css";

import {
  Player,
  Video,
  Ui,
  Spinner,
  Poster,
  ClickToPlay,
  DefaultControls,
  DblClickFullscreen
} from "@vime/vue";
export default {
  name: "MobileBanner",
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
  },
  computed: {},
  components: {
    PurpleButton,
    Player,
    Ui,
    Spinner,
    Poster,
    ClickToPlay,
    Video,
    DefaultControls,
    DblClickFullscreen
  }
};
</script>

<style lang="scss">
.mobile-banner {
  .banner-title-sm {
    font-family: Montserrat-SemiBold;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 110%;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;

    @media (min-width: 760px) {
      margin-bottom: 25px;
      font-size: 30px;
    }
  }
  .subtitle {
    margin-top: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    /* Blanco */
  }

  .no-subtitle {
    margin-bottom: 70px;
    @media (min-height: 1024px) {
      margin-bottom: 180px;
    }
  }
  .no-button {
    margin-bottom: 30px;
    @media (min-height: 1024px) {
      margin-bottom: 100px;
    }
  }
  .margin-sm {
    margin: 5px;
  }
  .background {
    background: linear-gradient(0deg, #4f4f4f, #4f4f4f);
    background-blend-mode: normal;
    @media (max-width: 850px) {
      height: 800px;
    }

    @media (max-width: 450px) {
      height: 610px;
    }
  }
  .create-account-btn {
    display: flex;
    width: 250px;
  }
  .button-sm {
    margin: 0 auto;
    display: flex;
    margin-top: 15px;
    margin-bottom: 30px;
  }
  .center-in-page {
    display: flex;
    justify-content: center;
    align-items: center;
    .p-center-sm {
      flex: 0 0 330px;
      @media (min-width: 768px) {
        flex: 0 0 380px;
      }
      @media (max-width: 320px) {
        flex: 0 0 310px;
      }
    }
  }
  .flex-end {
    -webkit-align-content: flex-end;
    align-content: flex-end;
    justify-content: center;
    text-align: center;
    .banner-title-sm {
      font-family: Montserrat-SemiBold;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 110%;
      /* or 66px */
      align-items: center;
      text-align: center;
      letter-spacing: -0.02em;
      /* Blanco */
    }
    .subtitle {
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      line-height: 24px;
      align-items: center;
      text-align: center;
      letter-spacing: -0.02em;
      /* Blanco */
    }
    .p-center-lg {
      flex: 0 0 600px;
    }
    .p-center-md {
      flex: 0 0 400px;
    }
    .p-center-md-sm {
      flex: 0 0 490px;
    }
    .p-center-sm {
      flex: 0 0 330px;
      @media (min-width: 768px) {
        flex: 0 0 380px;
      }
    }
    .margin-sm {
      margin: 5px;
      max-width: 400px;
    }
  }
  .flex-container {
    padding: 0;
    margin: 0;
    list-style: none;
    float: right;
    margin-top: 10px;
    -ms-box-orient: horizontal;
    display: -moz-flex;
    display: flex;
    flex-flow: row wrap;
  }
  .sm-size-with-button {
    width: 100%;
    height: 650px;
  }
  .sm-size-no-button {
    width: 100%;
    height: 550px;
    @media (max-width: 768px) {
      margin-bottom: 50px;
    }
  }
  .sm-size-no-subtitle {
    width: 100%;
    height: 350px;
  }

  .white-fonts {
    color: #ffffff;
  }

  .video-container {
    max-width: 1200px;
    width: 100%;
  }

  .landscape-margin {
    @media screen and (orientation: landscape) {
      margin-top: 50px;
    }
  }
}
</style>
