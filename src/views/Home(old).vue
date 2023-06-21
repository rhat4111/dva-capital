<template>
  <div class="home">
    <banner
      :title="bannerTitle"
      :subtitle="$i18n.t('landing.subtitle')"
      :img="bannerImage.img"
      :showButton="true"
      :align="bannerTextAlign"
      :lazyImg="bannerImage.lazyImg"
      :dark="false"
    />

    <philosophy />

    <purple-tape
      :title="$i18n.t('landing.blueBanner.title1')"
      :text="$i18n.t('landing.blueBanner.text1')"
      :callToAction="{ route: 'Funds', text: 'ourFunds', hash: '' }"
    />

    <why-us />

    <purple-tape
      :title="$i18n.t('landing.blueBanner.title2')"
      :text="$i18n.t('landing.blueBanner.text2')"
      :callToAction="{ route: 'Funds', text: 'ourFees', hash: '#funds-fees' }"
      :purple="true"
    />

    <benefits />

    <contact />
  </div>
</template>

<script>
import Banner from "@/components/home/Banner";
import WhyUs from "../components/home/Old/WhyUs.vue";
import PurpleTape from "../components/home/Old/PurpleTape.vue";
import Benefits from "../components/home/Old/Benefits.vue";

import Contact from "../components/home/Old/Contact.vue";
import Philosophy from "../components/home/Old/Philosophy.vue";

export default {
  name: "Home",
  components: {
    Banner,
    WhyUs,
    PurpleTape,
    Benefits,
    Contact,
    Philosophy
  },

  data() {
    return {
      banner: require("@/assets/our-funds-banner.jpg"),
      bannerMobile: require("@/assets/our-funds-banner.jpg"),
      lazyBanner: require("@/assets/lazy-banner.jpg"),
      lazyBannerMobile: require("@/assets/lazy-our-funds-banner.jpg")
    };
  },

  computed: {
    bannerTitle() {
      return this.$i18n.t("landing.title");
    },
    bannerImage() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return { img: this.bannerMobile, lazyImg: this.lazyBannerMobile };
      }
      return { img: this.banner, lazyImg: this.lazyBanner };
    },
    bannerTextAlign() {
      let align = "left";
      if (this.$vuetify.breakpoint.smAndDown) {
        align = "bottom";
      }
      return align;
    }
    // bannerHeight() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case "xs":
    //       return "600px";
    //     case "sm":
    //       return "1024px";
    //   }
    //   return "600px";
    // }
  }
};
</script>

<style lang="scss">
.home {
  position: relative;
  width: 100%;
  background: #ffffff;

  .your-goals-title-sm {
    text-align: center;
    flex: 0 0 350px;
    font-size: 38px;
  }
  .your-goals-heading-sm {
    text-align: left;
    flex: 0 0 150px;
  }
  .your-goals-heading-md {
    text-align: left;
    flex: 0 0 500px;
  }
  .your-goals-title-md {
    text-align: center;
    flex: 0 0 600px;
  }
  .your-goals-title-lg {
    text-align: left;
    flex: 0 0 600px;
  }
  .your-goals-text {
    text-align: center;
  }
  .your-goals-margin-lg {
    margin-left: 100px;
  }
  .why-us-margin-left-lg {
    margin-left: 120px;
  }
  .why-us-margin-right-lg {
    margin-right: 120px;
  }
  .margin-sm {
    margin: 10px;
  }

  .green-banner {
    background: linear-gradient(222.87deg, #52dd9f 7.03%, #43d6d7 74.2%);
    padding-bottom: 100px;
    padding-top: 100px;
    text-align: left;
  }
}

#why-us {
  margin-top: 40px;
  margin-bottom: 60px;
}

.text-why-us {
  /* Seccion */

  font-family: Montserrat-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 40px;

  /* Gris 03 */

  color: #828282;
}

.title-why-us {
  font-family: Montserrat-SemiBold;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  display: block;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  /* Gris 01 */

  color: #333333;
}

.anchor {
  width: 50%;
}
.sponsors-sm {
  background: #f2f2f2;
  margin-top: 30px;
  height: 260px;
  text-align: center;
}

.sponsors-md-lg {
  background: #f2f2f2;
  margin-top: 30px;
  height: 200px;
  text-align: center;
}

.darken {
  mix-blend-mode: darken;
  opacity: 0.7;
  margin-left: 20px;
  margin-right: 20px;
}

.center {
  text-align: center;
}
#how-to-invest {
  text-align: center;
  background: #ebf0ff;
}
.benefits {
  text-align: center;
}

.how-to-invest-text {
  margin-top: 40px;
}
.p-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.p-center-lg {
  flex: 0 0 700px;
}

.p-center-md {
  flex: 0 0 600px;
}

.p-center-md-sm {
  flex: 0 0 490px;
}
.p-center-sm {
  flex: 0 0 330px;
  text-align: center;
}

.benefits-title {
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 20px;
}

.buttons-sm {
  flex: 0 0 150px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
}

.buttons-md {
  flex: 0 0 300px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.right-button-md {
  margin-left: 15px;
}

.right-button-sm {
  margin-top: 20px;
  margin-left: 10px;
}

#carousel {
  margin-top: 70px;
}
.frequent-questions {
  background: #e5e5e5;
  padding-bottom: 60px;

  a {
    color: #333333 !important;
    font-weight: bold;
  }

  .fq-title {
    font-family: Montserrat-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    display: block;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;

    /* Gris 01 */

    color: #333333;
  }
  .fq-title-sm {
    font-family: Montserrat-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 36px;
    display: block;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;

    /* Gris 01 */

    color: #333333;
  }
}

strong {
  font-family: Montserrat-SemiBold;
}
</style>
