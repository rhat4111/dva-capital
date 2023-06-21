<template>
  <div class="member-card">
    <div class="member-avatar">
      <img :src="avatar" alt="" />
    </div>
    <div class="member-info">
      <p class="member-name">{{ name }}</p>
      <p class="member-role">{{ role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "role", "avatar"],
};
</script>

<style lang="scss" scoped>
.member-card {
  .member-avatar {
    background: #c4c4c4;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .member-info {
    padding: 10px 5px 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    color: #333333;

    p {
      margin: 0;
    }

    .member-role {
      color: #646363;
    }
  }
}
</style>
