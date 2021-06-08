<template>
  <div class="mx-2">
    <task-board />
  </div>
</template>

<script>
import BoardDisplay from "../components/BoardDisplay.vue";

export default {
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    "task-board": BoardDisplay,
  },
};
</script>
<style scoped></style>
