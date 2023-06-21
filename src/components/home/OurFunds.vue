<template>
  <div class="main">
    <p class="our-funds-title">Nuestros Fondos</p>
    <div class="tabs">
      <v-btn depressed rounded class="tab active">Todos</v-btn>
      <v-btn depressed rounded class="tab">En CLP</v-btn>
      <v-btn depressed rounded class="tab">En USD</v-btn>
    </div>
    <div class="slider">
      <carousel
        :perPage="1"
        :perPageCustom="[
          [480, 2],
          [768, 3],
          [1280, 5]
        ]"
      >
        <slide v-for="(fund, index) in funds" :key="index">
          <div class="slide-item">
            <fund-card v-bind="fund" />
          </div>
        </slide>
      </carousel>
    </div>
    <v-btn depressed rounded class="compare-btn">Comparar fondos</v-btn>
    <div class="manager">
      <p class="manager-title">
        Nuestros fondos son administrados por nuestros partners Ameris Capital
      </p>
      <p class="manager-description">
        Quien maneja 50 vehículos de inversión en distintas clases de activos y tiene más de
        US$1.000 millones en administración.
      </p>
      <v-img :src="managerLogo" />
    </div>
  </div>
</template>

<script>
import FundCard from "./FundCard.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    FundCard,
    Slide
  },
  data: function() {
    return {
      funds: [
        {
          title: "Ameris DVA Multiaxis",
          description: "Inversiones locales y diversificadas",
          color: "#4E5FF1"
        },
        {
          title: "Ameris DVA All Cap Chile",
          description: "Inversiones globales y diversificadas",
          color: "#00AA9D"
        },
        {
          title: "Ameris DVA Silicon Fund",
          description: "Inversiones en Tecnologías de la Información",
          color: "#FF0079"
        },
        {
          title: "Ameris DVA Multiaxis",
          description: "Inversiones locales y diversificadas",
          color: "#4E5FF1"
        },
        {
          title: "Ameris DVA Multiaxis",
          description: "Inversiones locales y diversificadas",
          color: "#4E5FF1"
        }
      ],
      managerLogo: require("@/assets/manager-logo.svg")
    };
  }
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 20px;

  .our-funds-title {
    font-weight: 600;
    font-size: 30px;
    line-height: 120%;
    color: #333333;
    margin-bottom: 68px;
  }

  .tabs {
    margin-bottom: 57px;

    .tab {
      height: 40px;
      padding: 0 15px;
      margin: 0 5px;
      background: #fff;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      color: #333333;
      text-transform: none;

      &.active {
        color: #fff;
        background: #333333;
      }
    }
  }

  .slider {
    width: 100%;
    margin-bottom: 70px;

    .slide-item {
      margin: 0 10px;
      padding-bottom: 10px;
    }
  }

  .compare-btn {
    width: 210px;
    height: 50px;
    background: #9c20e9;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    margin-bottom: 115px;
    text-transform: none;
  }

  .manager {
    display: flex;
    flex-direction: column;
    align-items: center;

    .manager-title {
      font-weight: 600;
      font-size: 25px;
      line-height: 140%;
      color: #333333;
      text-align: center;
      width: 100%;
      max-width: 560px;
      margin-bottom: 20px;
    }

    .manager-description {
      font-weight: 500;
      font-size: 18px;
      line-height: 160%;
      text-align: center;
      color: #646363;
      margin-bottom: 60px;
      max-width: 560px;
    }
  }
}

@media (max-width: 1024px) {
  .main {
    padding: 40px 20px;
  }
}
</style>
