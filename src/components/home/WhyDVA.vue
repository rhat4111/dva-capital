<template>
  <div class="why-main">
    <p class="why-title">{{ $i18n.t("homepage.whyDVA.title") }}</p>
    <div class="why-items">
      <div class="why-item" v-for="(item, index) in items" :key="index">
        <div class="why-icon">
          <img
            :src="shadowImage"
            :style="{
              transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
            }"
            alt=":( Not Found"
          />
          <img :src="item.icon" alt=":( Not Found" />
        </div>
        <p class="why-item-title">{{ item.title }}</p>
        <p class="why-item-description">
          {{ item.description }}
        </p>
        <v-btn v-if="item.button" text class="why-text-btn">{{
          item.button
        }}</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      shadowImage: require("@/assets/shadow.svg"),
      items: [
        {
          title: "Entonces, ¿por qué DVA?",
          description:
            "Sin complicaciones ni trámites innecesarios: en 5 minutos tendrás tu cuenta de cliente, 100% online.",
          button: "Crea una cuenta",
          icon: require("@/assets/hand-pointer.svg"),
          rotate: -174.25,
        },
        {
          title: "Entonces, ¿por qué DVA?",
          description:
            "Sin complicaciones ni trámites innecesarios: en 5 minutos tendrás tu cuenta de cliente, 100% online.",
          button: "Crea una cuenta",
          icon: require("@/assets/flag-us.svg"),
          rotate: -80.03,
        },
        {
          title: "Manejado por expertos",
          description:
            "Los fondos son manejados por un equipo de investigadores expertos en las tendencias del mercado.",
          button: "Conoce al equipo",
          icon: require("@/assets/plus-magnifer.svg"),
          rotate: 30,
        },
        {
          title: "Retira gratis cuando quieras",
          description:
            "Haz el retiro de tus fondos cuando quieras, sin costo y directamente hacia una cuenta a tu nombre.",
          icon: require("@/assets/money-printer.svg"),
          rotate: -64.75,
        },
        {
          title: "Comisiones justas",
          description:
            "Comisiones acordes al nivel de riesgo que tiene cada fondo. Sin letra chica ni costos escondidos.",
          icon: require("@/assets/tag.svg"),
          rotate: -174.49,
        },
        {
          title: "Tu plata a tu nombre",
          description:
            "Tus inversiones quedan seguras en fondos de Ameris Administradora General de Fondos S.A.",
          icon: require("@/assets/user-card.svg"),
          rotate: -174.49,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.why-main {
  padding: 80px 20px 40px;

  .why-title {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    color: #333333;
    text-align: center;
    margin-bottom: 80px;
  }

  .why-items {
    display: flex;
    flex-wrap: wrap;
    padding: 0 270px;

    .why-item {
      width: 33.33%;
      padding: 0 30px;
      margin-bottom: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .why-icon {
        width: 125px;
        height: 125px;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;

          &:first-child {
            transform-origin: center;
          }

          &:last-child {
            transform: translate(-50%, -50%);
          }
        }
      }

      .why-item-title {
        font-weight: 600;
        font-size: 16px;
        line-height: 160%;
        text-align: center;
        letter-spacing: -0.02em;
        color: #333333;
        max-width: 280px;
        height: 35px;
        margin-bottom: 10px;
      }

      .why-item-description {
        font-weight: 500;
        font-size: 14px;
        line-height: 160%;
        text-align: center;
        letter-spacing: -0.02em;
        color: #646363;
        max-width: 240px;
        margin-bottom: 20px;
      }

      .why-text-btn {
        font-weight: 500;
        font-size: 14px;
        line-height: 160%;
        text-align: center;
        color: #9c20e9;
        text-transform: none;
      }
    }
  }
}

@media (max-width: 1600px) {
  .why-main {
    .why-items {
      padding: 0;
    }
  }
}

@media (max-width: 1024px) {
  .why-main {
    .why-title {
      font-size: 32px;
      margin-bottom: 30px;
    }

    .why-items {
      .why-item {
        width: 100%;
        margin-bottom: 20px;
        padding: 0;
      }
    }
  }
}
</style>
