<template>
  <v-btn rounded color="#FF3D00" class="ma-3" dark @click="loginWithGoogle">
    <v-icon color="white" class="mr-2">mdi-google </v-icon>
    Login with Google</v-btn
  >
</template>
<script>
import firebase from "../../firebase/firebase";
export default {
  name: "login-with-google-button",
  methods: {
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          // go to the board page
          this.$router.push("board");
        })
        .catch((error) => {
          // will pop up error message later on
          console.log(error);
        });
    },
  },
};
</script>
