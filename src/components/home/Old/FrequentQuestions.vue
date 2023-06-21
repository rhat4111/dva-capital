<template>
  <div class="text">
    <p :number="number" id="number">{{ number }}</p>
    <div class="p-center">
      <h4 :question="question" class="p-center-child-xsm">{{ question }}</h4>
    </div>

    <div class="answer p-center">
      <p
        v-html="answer"
        :class="{
          pCenterChildSm: $vuetify.breakpoint.mdAndDown,
          pCenterChildMd: $vuetify.breakpoint.lgAndUp
        }"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrequentQuestions",

  props: {
    number: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
#number {
  font-weight: bold;
  font-size: 36px;
  line-height: 160%;
  /* identical to box height, or 58px */

  text-align: center;
  letter-spacing: -0.02em;

  /* Morado */

  color: #832fed;
}

.answer {
  margin-top: 20px;
}

.text {
  text-align: center;
}

.p-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pCenterChildMd {
  flex: 0 0 350px;
}

.pCenterChildSm {
  flex: 0 0 330px;
}
.p-center-child-xsm {
  flex: 0 0 300px;
}
</style>
