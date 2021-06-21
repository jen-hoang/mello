<template>
  <v-app-bar app flat color="grey lighten-4">
    <app-logo />

    <v-divider vertical v-if="userName" class="ml-7"></v-divider>
    <div v-if="userName" class="ml-3 brown--text darken-4 userName">
      <h3 v-if="userName">Hi {{ userName }}!</h3>
    </div>

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
  computed: {
    userName() {
      console.log(this.$store);
      return this.$store.state.userName;
    },
  },
};
</script>
<style lang="scss" scoped>
.userName {
  font-family: $special-font-family;
}
</style>
