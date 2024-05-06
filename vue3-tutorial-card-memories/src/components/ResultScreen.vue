<template>
  <div>Game play in {{ totalTime }}s</div>
</template>

<script>
export default {
  props: {
    totalTime: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style></style>
