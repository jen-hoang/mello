<template>
  <v-app-bar app flat color="grey lighten-4">
    <app-logo />
  </v-app-bar>
</template>
<script>
import AppLogo from "./AppLogo.vue";
export default {
  name: "nav-bar-with-functional-button",
  components: {
    "app-logo": AppLogo,
  },
};
</script>
