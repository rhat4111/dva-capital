<template>
  <v-header class="mobile-header-main">
    <div>
      <img :src="logo" class="logo" alt=":( Not Found" />
      <v-app-bar-nav-icon @click="handleToggle" class="nav-icon" />
    </div>
    <div class="mobile-menu" v-show="isOpen">
      <ul>
        <li><a href="/us">Nosotros</a></li>
        <li><a href="#">Fondos</a></li>
        <li><a href="#">Blog</a></li>
        <li>
          <a href="#">
            Herramientas
            <img :src="arrowDownIcon" alt=":( Not Found" />
          </a>
        </li>
      </ul>
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
      arrowDownIcon: require("@/assets/keyboard_arrow_down.svg"),
      isOpen: false
    };
  },
  methods: {
    handleToggle: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style lang="scss" scoped>
.mobile-header-main {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: #fff;
  display: none;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;

  & > div {
    &:first-child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .nav-icon {
        position: absolute;
        left: 0;
      }
    }

    &:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      left: 0;
      top: 80px;
      width: 100%;
      background: #fff;
      padding: 20px 0;

      ul {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        margin: 0;
        width: 100%;

        li {
          width: 100%;
          list-style: none;
          margin: 0;

          a {
            width: 100%;
            padding: 10px 0;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #333333;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      .enter-btn {
        width: 150px;
        height: 50px;
        margin-bottom: 12px;
        border: 1px solid #9c20e9;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #9c20e9;
        text-transform: none;
      }

      .start-btn {
        width: 150px;
        height: 50px;
        border: 1px solid #9c20e9;
        font-weight: 500;
        margin-bottom: 12px;
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
  .mobile-header-main {
    display: flex;
  }
}
</style>
