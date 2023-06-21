<template>
  <v-carousel hide-delimiters height="auto" class="pt-16">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :class="{
        rightAlignSm: $vuetify.breakpoint.smAndDown
      }"
    >
      <v-img :lazy-src="item.src" :src="item.src" class="carousel-image">
        <v-responsive>
          <v-container fluid class="pb-16">
            <v-row no-gutters>
              <v-col
                cols="12"
                align-self="end"
                :class="{
                  'p-center': $vuetify.breakpoint.smAndDown
                }"
              >
                <div
                  :class="{
                    'flex-container sm-size flex-end': $vuetify.breakpoint.smAndDown,
                    'flex-container md-size flex-end': $vuetify.breakpoint.md,
                    'flex-container lg-size flex-end ma-16': $vuetify.breakpoint.lgAndUp
                  }"
                >
                  <div>
                    <span>"{{ item.text }}"</span>
                  </div>
                  <div
                    :class="{
                      'person-name': $vuetify.breakpoint.smAndDown
                    }"
                  >
                    <h3>~ {{ item.persons }}</h3>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-responsive>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data: () => ({}),

  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.carousel-image {
  .p-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rightAlign {
    flex: 0 0 420px;
    text-align: right;
    font-size: 20px;
    line-height: 160%;
  }

  .rightAlignSm {
    flex: 0 0 300px;
    text-align: right;
  }

  .person-name {
    font-size: 14px;
    margin: 0;
  }

  .flex-container {
    padding: 0;
    margin: 0;
    list-style: none;
    float: right;

    margin-top: 10px;

    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;

    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
  }
  .lg-size {
    width: 450px;
    height: 300px;
    padding: 10px;
  }
  .md-size {
    width: 400px;
    height: 200px;
    padding: 10px;
  }
  .sm-size {
    width: 350px;
    height: 140px;
  }

  .flex-start {
    -webkit-align-content: flex-start;
    align-content: flex-start;
  }

  .flex-end {
    -webkit-align-content: flex-end;
    align-content: flex-end;
    justify-content: center;
    text-align: center;
  }
  .flex-end li {
    background: gold;
  }

  .center {
    -webkit-align-content: center;
    align-content: center;
  }
  .center li {
    background: deepskyblue;
  }

  .space-between {
    -webkit-align-content: space-between;
    align-content: space-between;
  }
  .space-between li {
    background: lightgreen;
  }

  .space-around {
    -webkit-align-content: space-around;
    align-content: space-around;
  }
  .space-around li {
    background: hotpink;
  }

  .stretch {
    -webkit-align-content: stretch;
    align-content: stretch;
  }
  .stretch li {
    background: chocolate;
  }

  .flex-item {
    background: tomato;
    padding: 5px;
    width: 50px;
    height: 50px;

    line-height: 50px;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }
}
</style>
