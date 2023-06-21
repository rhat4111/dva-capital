<template>
  <div class="clients-main">
    <p class="clients-title">{{$i18n.t("homepage.client.title")}}</p>
    <div class="client-items">
      <div class="client-item" v-for="(client, index) in clients" :key="index">
        <div class="client-body">
          <v-img :src="client.avatar" class="avatar-image" alt=":( Not Found" />
          <div>
            <p>
              “{{ client.name }} <b>{{ client.subtitle }}</b
              >”
            </p>
            <div>
              <p>{{ client.name }}</p>
              <p>{{ client.history }}</p>
            </div>
          </div>
        </div>
        <v-img :src="boxImage" class="chatbox-image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      boxImage: require("@/assets/chatbox.png"),
      clients: [
        {
          title: "Me gusta mucho autogestionar mis inversiones.",
          subtitle: "DVA me da la confianza para hacerlo y sentirme segura.",
          name: "Javiera Campos",
          history: "Inversionista DVA desde 2018",
          avatar: require("@/assets/clients/1.png"),
        },
        {
          title:
            "Siempre he invertido mi plata en distintas Fintech, pero desde que llegué a DVA, mis ahorros",
          subtitle: "no han parado de crecer.",
          name: "Andrea Cerros",
          history: "Inversionista DVA desde 2018",
          avatar: require("@/assets/clients/2.png"),
        },
        {
          title:
            "Llevamos 3 años invirtiendo en DVA. Con ellos estamos seguros de que",
          subtitle: "nuestra plata está en manos de los mejores.",
          name: "Karl Roth",
          history: "Inversionista DVA desde 2018",
          avatar: require("@/assets/clients/3.png"),
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.clients-main {
  display: flex;
  flex-direction: column;
  align-items: center;

  .clients-title {
    font-weight: 600;
    font-size: 30px;
    line-height: 120%;
    text-align: center;
    color: #333333;
    margin-bottom: 60px;
  }

  .client-items {
    width: 100%;
    padding: 0 110px;
    display: flex;
    flex-direction: column;

    .client-item {
      width: 100%;
      max-width: 910px;
      position: relative;
      margin-bottom: 40px;

      &:nth-child(odd) {
        padding-left: 40px;
        align-self: flex-start;

        .client-body {
          .avatar-image {
            margin-right: 40px;
          }
        }
      }

      &:nth-child(even) {
        padding-right: 40px;
        align-self: flex-end;

        .client-body {
          flex-direction: row-reverse;

          .avatar-image {
            margin-left: 40px;
          }

          & > div {
            p {
              text-align: right;
            }
          }
        }

        .chatbox-image {
          transform: rotateY(180deg);
        }
      }

      .client-body {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 2;
        padding: 35px 85px;

        & > img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        & > div {
          & > p {
            font-weight: 500;
            font-size: 20px;
            line-height: 140%;
            color: #333333;
            margin-bottom: 20px;

            b {
              font-weight: 600;
            }
          }

          & > div {
            font-weight: 600;
            font-size: 14px;
            line-height: 140%;
            color: #646363;

            & > p {
              margin-bottom: 0;

              &:last-child {
                font-weight: 500;
              }
            }
          }
        }
      }

      .chatbox-image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}

@media (max-width: 1280px) {
  .clients-main {
    padding: 0 20px;

    .clients-title {
      margin-bottom: 40px;
    }

    .client-items {
      padding: 0;
    }
  }
}

@media (max-width: 1024px) {
  .clients-main {
    .client-items {
      .client-item {
        &:nth-child(odd),
        &:nth-child(even) {
          padding: 0;

          .client-body {
            &:nth-child(odd),
            &:nth-child(even) {
              flex-direction: column;
              padding: 0;

              .avatar-image {
                margin: 0;
                margin-bottom: 20px;
              }

              & > div {
                p {
                  text-align: center !important;
                }
              }
            }
          }
          .chatbox-image {
            display: none;
          }
        }
      }
    }
  }
}
</style>
