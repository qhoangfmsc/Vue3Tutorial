<template>
  <div class="screen">
    <div
      class="screen-inner"
      :style="{
        gridTemplateColumns: `repeat(${
          this.cardArray.length / Math.sqrt(this.cardArray.length)
        }, 7rem)`,
      }"
    >
      <card-component
        v-for="(card, index) in cardArray"
        :key="index"
        :ref="`card-${index}`"
        :imageName="`${card}.png`"
        :cardName="card"
        :cardIndex="index"
        @onFlip="checkRules($event)"
      />
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  props: {
    cardArray: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    CardComponent,
  },
  data() {
    return {
      flippedArray: [],
    };
  },
  methods: {
    checkRules(card) {
      // IF CLICK 2 CARDS ALREADY RETURN FALSE
      if (this.flippedArray.length == 2) return false;

      // ELSE PUSH CARD INTO ARRAY
      this.flippedArray.push(card);

      // THEN CHECK IF 2 CARDS ARE MATCHED
      if (
        this.flippedArray.length == 2 &&
        this.flippedArray[0].cardName == this.flippedArray[1].cardName
      ) {
        console.log("Correct");
        this.flippedArray = [];
        this.checkWin();
      } else if (
        this.flippedArray.length == 2 &&
        this.flippedArray[0].cardName != this.flippedArray[1].cardName
      ) {
        console.log("Wrong");

        // DELAY FLIP BACK
        setTimeout(() => {
          // FLIP BACK
          this.$refs[`card-${this.flippedArray[0].cardIndex}`][0].onCloseCard();
          this.$refs[`card-${this.flippedArray[1].cardIndex}`][0].onCloseCard();
          // RESET ARRAY
          this.flippedArray = [];
        }, 700);
      } else {
        return false;
      }
    },
    checkWin() {
      let cards = document.querySelectorAll(".card .card__inner.is-disabled");
      // CHECK WIN
      if (cards.length >= this.cardArray.length - 2) {
        setTimeout(() => {
          this.$emit("onStop");
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
.screen {
  height: 100vh;
}
.screen-inner {
  display: grid;
  place-self: center;
  justify-content: center;
  height: 100%;
}
</style>
