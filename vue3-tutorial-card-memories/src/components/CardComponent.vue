<template>
  <div class="card">
    <div
      class="card__inner"
      @click="onOpenCard"
      :class="{ 'is-flipped': isFlipped, 'is-disabled': isDisabled }"
    >
      <div class="card__face card__face--front">
        <div class="card__content"></div>
      </div>
      <div class="card__face card__face--back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url(${require('@/assets/images/' + imageName)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardIndex: {
      type: Number,
      required: true,
    },
    cardName: {
      type: Number,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
    };
  },
  methods: {
    onOpenCard() {
      // DISABLE CARD
      if (this.isDisabled) return false;
      // PROCESS FLIP
      this.isFlipped = true;
      this.onDisableCard();
      if (this.isFlipped) {
        this.$emit("onFlip", {
          cardName: this.cardName,
          cardIndex: this.cardIndex,
        });
      }
    },
    onCloseCard() {
      this.isFlipped = false;
      this.onEnableCard();
    },
    onEnableCard() {
      this.isDisabled = false;
    },
    onDisableCard() {
      this.isDisabled = true;
    },
  },
};
</script>

<style scoped>
.card {
  display: inline-block;
  place-self: center;

  height: 80%;
  width: 80%;

  margin: 1rem;
}

.card__inner {
  position: relative;
  cursor: pointer;

  width: 100%;
  height: 100%;

  transition: transform 1s;
  transform-style: preserve-3d;
}

.card__inner.is-disabled {
  cursor: default;
}

.card__inner.is-flipped {
  transform: rotateY(-180deg);
}

.card__face {
  position: absolute;

  width: 100%;
  height: 100%;

  padding: 0.5rem;

  backface-visibility: hidden;
  overflow: hidden;

  border-radius: 10px;
  box-shadow: 2px 5px 3px 3px rgba(0, 0, 0, 0.4);
}

.card__face--back {
  background-color: var(--light);
  transform: rotateY(-180deg);
}

.card__content {
  height: 100%;
  width: 100%;
}

.card__face.card__face--front .card__content {
  background-image: url("../assets/images/icon_back.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.card__face.card__face--back .card__content {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
