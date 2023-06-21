<template>
  <div class="us-view">
    <p class="us-title">{{ $i18n.t("usView.title") }}</p>
    <p class="us-description">{{ $i18n.t("usView.description") }}</p>
    <div class="us-members">
      <div v-for="(member, index) in members" :key="index">
        <team-member
          :name="member.name"
          :role="member.role"
          :avatar="member.avatar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TeamMember from "../components/us/TeamMember.vue";
export default {
  components: { TeamMember },
  data: function () {
    return {
      members: [
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/1.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/2.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/3.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/4.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/5.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/6.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/1.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/2.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/3.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/4.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/5.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/6.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/1.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/2.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/3.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/4.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/5.png"),
        },
        {
          name: "Pablo Riedemann",
          role: "Head de Growth y Distribución de Producto",
          avatar: require("@/assets/us/6.png"),
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.us-view {
  padding: 180px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .us-title {
    font-weight: 600;
    font-size: 40px;
    line-height: 140%;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;
  }

  .us-description {
    max-width: 640px;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #646363;
    margin-bottom: 80px;
  }

  .us-members {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: -20px;

    & > div {
      width: 25%;
      padding: 20px;
    }
  }
}

@media (max-width: 1024px) {
  .us-view {
    padding: 120px 20px;

    .us-description {
      margin-bottom: 40px !important;
    }

    .us-members {
      & > div {
        width: 33.33%;
      }
    }
  }
}

@media (max-width: 768px) {
  .us-view {
    .us-members {
      & > div {
        width: 50%;
      }
    }
  }
}

@media (max-width: 640px) {
  .us-view {
    .us-members {
      & > div {
        width: 100%;
      }
    }
  }
}
</style>