<template>
  <div class="banner-main">
    <div class="banner-content">
      <p class="banner-title">
        {{ $i18n.t("homepage.banner.title") }}
      </p>
      <p class="banner-subtitle">
        {{ $i18n.t("homepage.banner.subtitle") }}
      </p>
      <v-btn class="start-btn" depressed rounded>
        {{ $i18n.t("homepage.banner.start") }}
      </v-btn>
      <div class="banner-image">
        <img :src="overviewImage" alt=":( Not Found" />
      </div>
      <div class="cmf">
        <p class="cmf-title">
          {{ $i18n.t("homepage.banner.cmf.title") }}
        </p>
        <p class="cmf-subtitle">
          {{ $i18n.t("homepage.banner.cmf.description") }}
        </p>
        <img :src="cmfLogo" alt=":( Not Found" />
      </div>
    </div>
    <img :src="bannerBg" class="banner-bg" alt=":( Not Found" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      overviewImage: require("@/assets/overview.png"),
      cmfLogo: require("@/assets/cmf-logo.png"),
      bannerBg: require("@/assets/banner-bg.png"),
    };
  },
};
</script>

<style scoped lang="scss">
.banner-main {
  position: relative;
  padding-top: 80px;

  .banner-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 92px 20px 124px;

    .banner-title {
      width: 100%;
      max-width: 570px;
      text-align: center;
      font-family: Work Sans;
      font-weight: bold;
      font-size: 50px;
      line-height: 120%;
      color: #000000;
      margin-bottom: 36px;
    }

    .banner-subtitle {
      width: 100%;
      max-width: 560px;
      font-family: Work Sans;
      font-weight: 500;
      font-size: 18px;
      line-height: 160%;
      text-align: center;
      color: #333333;
      margin-bottom: 24px;
    }

    .start-btn {
      height: 50px;
      background: #9c20e9;
      width: 150px;
      height: 50px;
      margin-bottom: 60px;
      font-family: Montserrat;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      text-transform: none;
    }

    .banner-image {
      width: 100%;
      display: flex;
      max-width: 724px;
      background: #ffffff;
      border: 2px solid #e2e0e0;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
      padding: 32px;
      margin-bottom: 90px;
      border-radius: 40px;

      img {
        width: 100%;
        border: 1px solid #e2e0e0;
        border-radius: 14px;
      }
    }

    .cmf {
      display: flex;
      flex-direction: column;
      align-items: center;

      .cmf-title {
        font-family: Work Sans;
        font-weight: 600;
        font-size: 30px;
        line-height: 120%;
        text-align: center;
        color: #333333;
        width: 100%;
        max-width: 660px;
        margin-bottom: 20px;
      }

      .cmf-subtitle {
        font-family: Work Sans;
        font-size: 18px;
        line-height: 160%;
        text-align: center;
        color: #646363;
        width: 100%;
        max-width: 560px;
        margin-bottom: 40px;
      }
    }
  }

  .banner-bg {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 0;
    max-height: 877px;
    object-fit: cover;
    object-position: center;
  }
}

@media (max-width: 1024px) {
  .banner-main {
    padding: 120px 20px 60px;

    .banner-content {
      padding: 0;
    }
  }
}

@media (max-width: 1024px) {
  .banner-main {
    .banner-content {
      .banner-title {
        font-size: 36px;
        margin-bottom: 20px;
      }

      .banner-image {
        border-radius: 20px;
        padding: 16px;
        margin-bottom: 50px;
      }

      .cmf {
        width: 100%;
      }
    }
  }
}
</style>
