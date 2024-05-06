<template>
  <div class="screen">
    <h1>Card Memories</h1>
    <h3>Select mode</h3>
    <div class="action">
      <button @click="chosingMode('easy', 16)">
        <p>4x4</p>
        <p>Easy</p>
      </button>
      <button @click="chosingMode('medium', 36)">
        <p>6x6</p>
        <p>Medium</p>
      </button>
      <button @click="chosingMode('hard', 64)">
        <p>8x8</p>
        <p>Hard</p>
      </button>
      <button @click="chosingMode('expert', 100)">
        <p>10x10</p>
        <p>Expert</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    chosingMode(mode, totalCard) {
      this.$emit("choosingMode", { mode, totalCard });
    },
  },
};
</script>

<style></style>
