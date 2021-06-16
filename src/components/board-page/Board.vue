<template>
  <div class="grey lighten-4 mello-app-container">
    <nav-bar-with-functional-button />
    <v-container
      fluid
      class="d-flex justify-space-between align-center board-page-container"
    >
      <div class="mx-2">
        <task-board />
      </div>
    </v-container>
  </div>
</template>

<script>
import BoardDisplay from "./components/BoardDisplay.vue";
import NavBarWithFunctionalButton from "../general/NavBarWithFunctionalButton.vue";

export default {
  components: {
    "task-board": BoardDisplay,
    "nav-bar-with-functional-button": NavBarWithFunctionalButton,
  },
};
</script>
<style scoped>
.board-page-container {
  margin-top: 60px;
}
</style>
