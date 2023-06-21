<template>
  <v-container
    fluid
    class="return-table pt-0"
    :class="{
      'pa-3': $vuetify.breakpoint.smAndDown,
      'pa-12': $vuetify.breakpoint.mdAndUp
    }"
  >
    <div class="max-width-wrapper" v-if="longTermReturns">
      <div>
        <v-row no-gutters>
          <v-col>
            <v-data-table
              class="ma-2 returns-table"
              :headers="headers"
              :items="longTermReturns"
              hide-default-footer
              :mobile-breakpoint="breakpoint"
            >
              <template #[`item.name`]="{ item, index }">
                <div class="chip-table" :style="{ background: colors[index % 10], width: '330px' }">
                  <div>{{ item.name }}</div>
                </div>
              </template>
              <template #[`item.YTD`]="{ item, index }">
                <table-chip :item="item" :index="index" :field="'YTD'" />
              </template>
              <template #[`item.M3`]="{ item, index }">
                <table-chip :item="item" :index="index" :field="'M3'" />
              </template>
              <template #[`item.M6`]="{ item, index }">
                <table-chip :item="item" :index="index" :field="'M6'" />
              </template>
              <template #[`item.Y1`]="{ item, index }">
                <table-chip :item="item" :index="index" :field="'Y1'" />
              </template>
              <template #[`item.Y2`]="{ item, index }">
                <table-chip :item="item" :index="index" :field="'Y2'" />
              </template>
              <template #[`item.Y5`]="{ item, index }">
                <table-chip :item="item" :index="index" :field="'Y5'" />
              </template>
              <template #[`item.maximum`]="{ item, index }">
                <table-chip :item="item" :index="index" :field="'maximum'" />
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TableChip from "@/components/fundDetail/TableChip";

export default {
  name: "ReturnsTable",
  components: {
    TableChip
  },
  data() {
    return {
      breakpoint: 1,
      colors: [
        "#832FED",
        "#FF0079",
        "#00AA9D",
        "#4E5FF1",
        "#49DD9F",
        "#FF92E0",
        "#CA9328",
        "#8D9D2C",
        "#40B5CE",
        "#9D9BFF"
      ]
    };
  },
  computed: {
    ...mapGetters(["longTermReturns"]),
    headers() {
      return [
        {
          text: this.$i18n.t("fundDetailView.returns.table.headers.fund"),
          value: "name",
          align: "left"
        },
        {
          text: this.$i18n.t("fundDetailView.returns.table.headers.YTD"),
          value: "YTD",
          align: "right"
        },
        {
          text: this.$i18n.t("fundDetailView.returns.table.headers.M3"),
          value: "M3",
          align: "right"
        },
        {
          text: this.$i18n.t("fundDetailView.returns.table.headers.M6"),
          value: "M6",
          align: "right"
        },
        {
          text: this.$i18n.t("fundDetailView.returns.table.headers.Y1"),
          value: "Y1",
          align: "right"
        },
        {
          text: this.$i18n.t("fundDetailView.returns.table.headers.Y2"),
          value: "Y2",
          align: "right"
        },
        {
          text: this.$i18n.t("fundDetailView.returns.table.headers.Y5"),
          value: "Y5",
          align: "right"
        },
        {
          text: this.$i18n.t("fundDetailView.returns.table.headers.maximum"),
          value: "maximum",
          align: "right"
        }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.return-table {
  .title {
    font-size: 20px;
    line-height: 170%;
    color: #4f4f4f;
    @media (max-width: 960px) {
      margin: 0 auto;
      text-align: center;
    }
  }
  .lists-container {
    hr {
      width: 100%;
      margin-left: 0;
    }
    @media (max-width: 960px) {
      li {
        width: 250px;
        padding-left: 30px;
      }
    }
  }
  .list-container {
    .list-title {
      font-size: 18px;
      line-height: 170%;
      color: #4f4f4f;
      @media (max-width: 960px) {
        margin: 0 auto;
        text-align: center;
      }
    }
    .list-subtitle {
      font-size: 10px;
      color: #4f4f4f;
      @media (max-width: 960px) {
        margin: 0 auto;
        text-align: center;
      }
    }
  }
  li {
    font-size: 15px;
    line-height: 170%;
    text-transform: capitalize;
  }
  .list-circle {
    width: 20px;
    height: 20px;
    border-radius: 80px;
    margin: 0 5px;
    display: inline-block;
  }
}
.chip-table {
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  color: white;
  text-align: center;
  border-radius: 80px;
  font-weight: bold;
}
</style>
