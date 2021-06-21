<template>
  <div class="grey lighten-4 mello-app-container">
    <nav-bar-with-logo />
    <v-main>
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
          <v-container class="text-center mt-2">
            <v-spacer></v-spacer>
            <p class="text-h6 font-weight-bold">Want to create a board?</p>

            <google-login-button />
            <v-spacer></v-spacer>
            to save your data
            <v-spacer class="mt-5"></v-spacer>
            <v-row align="center" class="divide-container font-weight-medium">
              <v-divider></v-divider>or<v-divider></v-divider
            ></v-row>
            <v-spacer></v-spacer>
            you can
            <v-spacer></v-spacer>
            <v-btn href="/board" rounded color="primary" class="ma-3"
              >Click here</v-btn
            >
          </v-container>
        </v-container>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import NavBarWithLogo from "../general/NavBarOnlyLogo.vue";
import GoogleLoginButton from "./GoogleLoginButton.vue";
export default {
  name: "Home",
  components: {
    "nav-bar-with-logo": NavBarWithLogo,
    "google-login-button": GoogleLoginButton,
  },
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
.divide-container {
  max-width: 280px;
  margin: auto;
}
</style>
