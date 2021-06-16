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
      <v-container class="text-center mt-2">
        <v-spacer></v-spacer>
        <p class="text-h6 font-weight-bold">Want to create a board?</p>

        <v-btn
          rounded
          color="#FF3D00"
          class="ma-3"
          dark
          @click="loginWithGoogle"
        >
          <v-icon color="white" class="mr-2">mdi-google </v-icon>
          Login with Google</v-btn
        >
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
</template>

<script>
import firebase from "../firebase/firebase";
export default {
  name: "Home",
  methods: {
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          // get access token
          const token = credential.accessToken;
          // The signed-in user info.
          //var user = result.user;
          console.log(token);
        })
        .catch((error) => {
          // Handle Errors here.
          // will pop up error message later on
          console.log(error);
        });
    },
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
