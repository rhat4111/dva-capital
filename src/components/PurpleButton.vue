<template>
  <v-btn
    id="purple-button"
    @click="$emit('on-click')"
    :style="btnStyle"
    :disabled="disabled"
    v-on="on"
    v-bind="bind"
    :href="link"
    :target="link ? '_blank' : '_self'"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "PurpleButton",
  props: {
    text: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: "60px"
    },
    fontSize: {
      type: String,
      default: "12px"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bind: {
      type: Object
    },
    on: {
      type: Object
    },
    link: {
      type: String
    }
  },
  computed: {
    btnStyle() {
      return `height: ${this.height};
              font-size: ${this.fontSize};`;
    }
  }
};
</script>

<style>
#purple-button {
  font-size: 16px;
  color: #eeeeee;
  font-family: Montserrat-SemiBold;
  font-weight: 700;
  height: 80px;
  min-width: 250px;
  background: linear-gradient(222.87deg, #832fed 7.03%, #4e5ff1 74.2%);
  border-radius: 80px;
}
#purple-button:hover {
  background: #4e5ff1;
}
</style>
