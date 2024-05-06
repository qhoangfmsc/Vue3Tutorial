<template>
  <main-app v-if="state === 'main'" @choosingMode="onStart($event)" />
  <interact-app
    v-if="state === 'interact'"
    :cardArray="settings.cardArray"
    @onStop="onStopGame()"
  />
  <result-app v-if="state === 'result'" :totalTime="settings.totalTime" />
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import ResultScreen from "./components/ResultScreen.vue";
import { arrayProcess } from "./utils/array.js";

export default {
  name: "App",
  data() {
    return {
      settings: {
        totalBlocks: 0,
        cardArray: [],
        startTime: null,
        endTime: null,
        totalTime: null,
      },
      state: "main",
    };
  },
  methods: {
    onStart(mode) {
      // COLLECTING CARDS PROCESSING
      console.log(mode);
      this.settings.totalBlocks = mode.totalCard;

      // cardCollection is all of the img will be shown
      // length: 16 blocks = 8 cards * 2
      let cardCollection = Array.from(
        { length: this.settings.totalBlocks / 2 },
        (_, i) => i + 1
      );

      // matchedCollection is all of the img for matching with cardCollection
      let matchedCollection = [...cardCollection];

      // cardCollection + matchedCollection
      let fullCollection = [...cardCollection, ...matchedCollection];

      // SHUFFLE 2 TIMES
      this.settings.cardArray = arrayProcess.shuffle(fullCollection);
      console.log(this.settings.cardArray);

      // COUNTING TIME
      this.settings.startTime = new Date().getTime();

      // CHANGE STATE
      this.state = "interact";
    },
    onStopGame() {
      this.settings.endTime = new Date().getTime();
      this.settings.totalTime =
        (this.settings.endTime - this.settings.startTime) / 1000;
      this.state = "result";
    },
  },
  components: {
    MainApp: MainScreen,
    InteractApp: InteractScreen,
    ResultApp: ResultScreen,
  },
};
</script>

<style></style>
