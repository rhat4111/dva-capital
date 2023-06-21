<template>
  <div class="bar-container">
    <div class="center-in-page">
      <div class="new-announce-box center-in-page">
        {{ $i18n.t("announceBar.giftCard.new") }}
      </div>
      <div class="announce-text">
        <v-icon dark class="mr-2" size="20">
          mdi-gift-outline
        </v-icon>
        <span>
          {{ $i18n.t("announceBar.giftCard.text") }}
        </span>
      </div>
    </div>

    <a
      class="announce-text to-route"
      href="https://giftcard.dvacapital.com/"
      target="_blank"
      @click="$emit('closeAnnounceBar')"
    >
      <span class="to-route-text">
        {{ $i18n.t("announceBar.giftCard.moreAbout") }}
      </span>
      <v-icon dark class="ml-2">
        mdi-arrow-right
      </v-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: "AnnounceBar"
};
</script>

<style lang="scss" scoped>
.bar-container {
  width: 100%;
  height: 62px;
  background: #9c20e9;
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    height: 50px;
  }
}

.new-announce-box {
  border-right: 1.23403px solid #ffffff;
  width: 130px;
  height: 100%;

  font-weight: bold;
  font-size: 14.8083px;
  line-height: 18px;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #ffffff;

  @media (max-width: 960px) {
    width: 100px;
    font-size: 10px;
    line-height: 12px;
  }
}

.announce-text {
  font-weight: bold;
  font-size: 17.2764px;
  line-height: 21px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media (max-width: 960px) {
    margin-left: 10px;
    font-size: 10px;
    line-height: 14px;
  }
  color: #ffffff;
}

.to-route {
  margin-right: 20px;
  @media (max-width: 960px) {
    margin-right: 10px;
  }
}

.to-route-text {
  @media (max-width: 600px) {
    display: none;
  }
}

.to-route:hover {
  cursor: pointer;
}
a.to-route {
  text-decoration: none;
}
</style>
