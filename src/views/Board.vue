<template>
  <div class="row">
    <task-board />
  </div>
</template>

<script>
import TaskBoard from "../components/TaskBoard.vue";

export default {
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    "task-board": TaskBoard,
  },
  
};
</script>
<style scoped></style>
