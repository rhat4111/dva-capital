<template>
  <div class="fund-card-main">
    <div>
      <span :style="{ background: this.color }">Renta Variable</span>
      <p class="fund-card-title">{{ this.title }}</p>
      <p class="fund-card-description">{{ this.description }}</p>
    </div>
    <v-btn class="detail-btn" :style="{ background: this.color }" rounded depressed>
      Ver detalles
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    color: String
  }
};
</script>

<style scoped lang="scss">
.fund-card-main {
  background: #ffffff;
  box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 0 20px 30px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      width: 160px;
      height: 40px;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
    }

    .fund-card-title {
      font-weight: 600;
      font-size: 17px;
      line-height: 140%;
      text-align: center;
      color: #333333;
      margin-bottom: 10px;
      text-align: center;
    }

    .fund-card-description {
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      color: #646363;
      text-align: center;
    }
  }

  .detail-btn {
    width: 140px;
    height: 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    text-transform: none;
  }
}
</style>
