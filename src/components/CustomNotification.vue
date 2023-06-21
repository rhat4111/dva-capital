<template>
  <notifications position="bottom center" width="500">
    <template slot="body" slot-scope="props">
      <v-alert dismissible :type="setType(props.item.type)">
        {{ props.item.text }}
      </v-alert>
    </template>
  </notifications>
</template>

<script>
export default {
  name: "CustomNotification",
  methods: {
    setType(type) {
      let vType = type;
      if (type === "warn") vType = "warning";
      if (!type) vType = "info";
      return vType;
    }
  }
};
</script>

<style lang="scss"></style>
