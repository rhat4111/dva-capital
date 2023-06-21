<template>
  <div class="how-main">
    <div>
      <p class="how-title">{{ $i18n.t("homepage.howDoesItWork.title") }}</p>
      <div class="how-items">
        <div v-for="(step, index) in steps" :key="index" class="how-item">
          <div class="how-icon">
            <img :src="step.icon" alt=":( Not Found" />
          </div>
          <p class="how-item-title">{{ step.title }}</p>
          <p class="how-item-description">{{ step.description }}</p>
        </div>
      </div>
      <v-btn depressed rounded class="more-btn">
        {{ $i18n.t("homepage.howDoesItWork.seeMore") }}
      </v-btn>
    </div>
    <img :src="bgImage" alt="" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      userImage: require("@/assets/how_to_reg.svg"),
      paymentImage: require("@/assets/payments.svg"),
      arrowImage: require("@/assets/arrow_upward.svg"),
      bgImage: require("@/assets/how-bg.png"),
      steps: null,
    };
  },
  mounted: function () {
    this.steps = [
      {
        title: "Regístrate",
        description:
          "Crea una cuenta en minutos y 100% digital. Sin papeleos, notarías ni filas.",
        icon: this.userImage,
      },
      {
        title: "Transfiere",
        description:
          "Transfiere a los fondos que elijas o te recomendemos luego de definir tu perfil.",
        icon: this.paymentImage,
      },
      {
        title: "Crece",
        description:
          "Mira como tu dinero crece. Un inversionista de verdad conoce el poder del tiempo.",
        icon: this.arrowImage,
      },
    ];
  },
};
</script>

<style scoped lang="scss">
.how-main {
  position: relative;

  & > div {
    padding: 118px 20px 133px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;

    .how-title {
      font-weight: 600;
      font-size: 30px;
      line-height: 120%;
      text-align: center;
      color: #333333;
      margin-bottom: 60px;
    }

    .how-items {
      display: flex;
      justify-content: space-between;
      margin-bottom: 56px;

      .how-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 310px;
        margin: 0 15px;

        .how-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #d490fd;
          margin-bottom: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .how-item-title {
          font-weight: 600;
          font-size: 24px;
          line-height: 28px;
          text-align: center;
          color: #333333;
          margin-bottom: 18px;
        }

        .how-item-description {
          font-weight: 500;
          font-size: 14px;
          line-height: 160%;
          text-align: center;
          color: #646363;
        }
      }
    }

    .more-btn {
      width: 150px;
      height: 50px;
      background: #9c20e9;
      border-radius: 100px;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      text-transform: none;
    }
  }

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
  }
}

@media (max-width: 1024px) {
  .how-main {
    background: #f2f2f2;

    & > div {
      padding: 60px 20px;

      .how-title {
        margin-bottom: 30px !important;
      }

      .how-items {
        flex-direction: column;
        align-items: center;

        .how-item {
          margin: 0 0 20px 0 !important;
        }
      }
    }
    & > img {
      display: none;
    }
  }
}
</style>
