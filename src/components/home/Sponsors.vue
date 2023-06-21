<template>
  <div class="sponser-main">
    <img :src="firstSponsorImage" alt="" />
    <img :src="secondSponsorImage" alt="" />
    <img :src="threeSponsorImage" alt="" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      firstSponsorImage: require("@/assets/sponsors/1.png"),
      secondSponsorImage: require("@/assets/sponsors/2.png"),
      threeSponsorImage: require("@/assets/sponsors/3.png"),
    };
  },
};
</script>

<style scoped lang="scss">
.sponser-main {
  width: 100%;
  height: 410px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;

  img {
    margin: 0 70px;
    mix-blend-mode: darken;
    opacity: 0.7;
  }
}

@media (max-width: 1280px) {
  .sponser-main {
    flex-direction: column;
    padding-bottom: 50px;

    & > img {
      margin: 20px 0;
    }
  }
}
</style>
