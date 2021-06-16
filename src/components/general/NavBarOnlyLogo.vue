<template>
  <v-app-bar app flat color="grey lighten-4" absolute>
    <app-logo />
  </v-app-bar>
</template>
<script>
import AppLogo from "./AppLogo.vue";
export default {
  name: "nav-bar-only-logo",
  components: {
    "app-logo": AppLogo,
  },
};
</script>
