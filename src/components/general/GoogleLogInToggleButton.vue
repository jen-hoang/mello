<template>
  <div :key="key">
    <v-btn
      v-if="isLogin"
      rounded
      color="blue-grey lighten-1"
      class="ma-3"
      dark
      @click="logout"
      :key="key"
    >
      <v-icon color="white" class="mr-2">mdi-logout </v-icon>
      Logout</v-btn
    >
    <v-btn v-else rounded color="#FF3D00" class="ma-3" dark @click="login">
      <v-icon color="white" class="mr-2">mdi-google </v-icon>
      Login</v-btn
    >
  </div>
</template>
<script>
import firebase from "../../firebase/firebase";
import uniqid from "uniqid";
export default {
  name: "login-toggle-button",
  data() {
    return {
      key: uniqid(),
      isLogin: firebase.auth().currentUser != null
    };
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          // register to bind the board
          this.$store.dispatch("bindBoard");
          this.isLogin = true;
        })
        .catch((error) => {
          // will pop up error message later on
          console.log(error);
        });
      this.changeKey();
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.changeKey();
          this.isLogin = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // change the key to force update
    changeKey() {
      console.log("change the key");
      this.key = uniqid();
    },
  },
};
</script>
