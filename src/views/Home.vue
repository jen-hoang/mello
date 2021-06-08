<template>
  <v-container
    fluid
    class="d-flex justify-space-between align-center page-container"
  >
    <v-container>
      <v-container class="text-center page-title">
        <v-icon x-large color="primary">mdi-check-all</v-icon>
        <v-spacer></v-spacer>
        Welcome to <span class="app-name primary--text">Mello</span>
      </v-container>
      <v-container class="text-center text-h6 mt-2">
        <v-spacer></v-spacer>
        Want to create a board?
        <v-spacer></v-spacer>
        <v-btn href="/board" rounded color="primary" class="ma-3"
          >Click here</v-btn
        >
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.app-name {
  font-family: $special-font-family;
}
.page-title {
  font-size: 50px;
}
@media (max-width: 500px) {
  .page-title {
    font-size: 30px;
  }
}
.page-container {
  min-height: 70vh;
}
</style>
