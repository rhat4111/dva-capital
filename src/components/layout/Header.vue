<template>
  <v-header class="header-main">
    <div>
      <v-img :src="logo" alt=":( Not Found"></v-img>
      <ul>
        <li><a href="/us">Nosotros</a></li>
        <li><a href="#">Fondos</a></li>
        <li><a href="#">Blog</a></li>
        <li>
          <a href="#">
            Herramientas
            <v-img :src="arrowDownIcon" alt=":( Not Found"></v-img>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <v-btn class="enter-btn" depressed rounded>Ingresa</v-btn>
      <v-btn class="start-btn" depressed rounded>Empezar</v-btn>
    </div>
  </v-header>
</template>

<script>
export default {
  data: function() {
    return {
      logo: require("@/assets/header-logo.svg"),
      arrowDownIcon: require("@/assets/keyboard_arrow_down.svg")
    };
  }
};
</script>
<style lang="scss" scoped>
.header-main {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px 0 40px;

  & > div {
    &:first-child {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        margin: 0;
        padding: 0;
        margin: 0 20px;

        li {
          list-style: none;
          margin: 0 20px;

          a {
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #333333;
            text-decoration: none;
            display: flex;
            align-items: center;
          }
        }
      }
    }

    &:last-child {
      display: flex;
      align-items: center;

      .enter-btn {
        width: 150px;
        height: 50px;
        border: 1px solid #9c20e9;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #9c20e9;
        margin-right: 10px;
        text-transform: none;
      }

      .start-btn {
        width: 150px;
        height: 50px;
        border: 1px solid #9c20e9;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        background: #9c20e9;
        text-transform: none;
      }
    }
  }
}

@media (max-width: 1024px) {
  .header-main {
    display: none;
  }
}
</style>
