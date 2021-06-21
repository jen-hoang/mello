<template>
  <v-app-bar app flat color="grey lighten-4">
    <app-logo />
    <v-spacer />
    <google-login-toggle-button />
  </v-app-bar>
</template>
<script>
import AppLogo from "./AppLogo.vue";
import GoogleLoginToggleButton from "./GoogleLogInToggleButton.vue";
export default {
  name: "nav-bar-with-functional-button",
  components: {
    "app-logo": AppLogo,
    "google-login-toggle-button": GoogleLoginToggleButton,
  },
};
</script>
