<template>
  <v-footer class="footer-main">
    <div class="footer-content">
      <div>
        <v-img :src="logo" alt=":( Not Found" />
        <div class="contact-info">
          <div>
            Av. El Golf 82, Piso 4<br />
            Las Condes<br />
            Santiago, Chile 7550107
          </div>
          <div>
            clientes@dvacapital.com<br />
            +56 (2) 2499 7600
          </div>
        </div>
      </div>
      <div class="contact-form">
        <p>Suscríbete a nuestro Newletter</p>
        <div>
          <input type="text" placeholder="Ingresa tu correo" class="contact-email" />
          <v-btn depressed rounded class="subscribe-btn">Suscribirme</v-btn>
        </div>
      </div>
    </div>
    <img :src="footerBg" class="footer-bg" />
  </v-footer>
</template>

<script>
export default {
  data: function() {
    return {
      logo: require("@/assets/footer-logo.svg"),
      footerBg: require("@/assets/footer-bg.png")
    };
  }
};
</script>

<style scoped lang="scss">
.footer-main {
  width: 100%;
  padding: 0;
  background: none;

  .footer-content {
    width: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 140px 100px 155px 110px;

    & > div {
      display: flex;
      align-items: center;

      .contact-info {
        display: flex;
        margin-left: 68px;

        & > div {
          margin-right: 20px;
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          color: #ffffff;
        }
      }

      &.contact-form {
        flex-direction: column;
        align-items: flex-start;

        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 140%;
          color: #ffffff;
          margin-bottom: 14px;
          padding-left: 20px;
        }

        & > div {
          display: flex;
          align-items: center;

          .contact-email {
            width: 320px;
            height: 60px;
            margin-right: 10px;
            background: #ffffff;
            border-radius: 70px;
            padding: 0 30px;
            font-size: 16px;
            line-height: 140%;
            letter-spacing: -0.02em;
          }
          .subscribe-btn {
            width: 145px;
            height: 66px;
            background: #9c20e9;
            font-weight: 500;
            font-size: 14px;
            border-radius: 50px;
            line-height: 160%;
            color: #ffffff;
            text-transform: none;
            flex-shrink: 0;
          }
        }
      }
    }
  }

  .footer-bg {
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: calc(100% + 50px);
    object-fit: cover;
    object-position: top center;
  }
}

@media (max-width: 1440px) {
  .footer-main {
    .footer-content {
      flex-direction: column;
      padding: 60px 20px;

      & > div {
        &:first-child {
          margin-bottom: 40px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .footer-main {
    .footer-bg {
      display: none;
    }
    
    .footer-content {
      align-items: center;
      background: #333;


      & > div {
        &:first-child {
          flex-direction: column;
          align-items: flex-start;

          .contact-info {
            margin: 20px 0 0 0;
            flex-direction: column;

            & > div {
              margin-right: 0 !important;
              text-align: center;
            }
          }
        }
      }

      .contact-form {
        & > div {
          flex-direction: column;
          align-items: center !important;

          input {
            margin-bottom: 12px;
            height: 50px !important;
          }

          button {
            height: 50px !important;
          }
        }
      }
    }
  }
}
</style>
