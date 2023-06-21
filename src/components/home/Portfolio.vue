<template>
  <div class="portfolio-main">
    <p class="portfolio-title">
      {{ $i18n.t("homepage.portfolio.title") }}
    </p>
    <p class="portfolio-description">
      {{ $i18n.t("homepage.portfolio.subtitle") }}
    </p>
    <v-btn depressed rounded class="recommand-btn">
      {{ $i18n.t("homepage.portfolio.recommand") }}
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.portfolio-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 164px 20px 170px;

  .portfolio-title {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #333333;
    max-width: 660px;
    margin-bottom: 16px;
  }

  .portfolio-description {
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    color: #646363;
    max-width: 500px;
    margin-bottom: 35px;
  }

  .recommand-btn {
    width: 230px;
    height: 50px;
    text-transform: none;
    background: #9c20e9;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
}

@media (max-width: 1024px) {
  .portfolio-main {
    padding: 80px 20px;

    .portfolio-title {
      font-size: 30px;
    }
  }
}
</style>
