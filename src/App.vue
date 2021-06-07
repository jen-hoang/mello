<template>
  <v-app>
    <div class="grey lighten-4 mello-app-container">
      <v-app-bar app flat color="transparent">
        <v-icon x-large color="primary">mdi-check-all</v-icon>
        <v-toolbar-title class="ml-1 app-title"> Mello</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn href="/" icon x-large color="blue-grey"> <v-icon>mdi-home</v-icon></v-btn>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
.mello-app-container {
  min-height: 100vh;
}
.app-title {
  font-family: 'Yusei Magic', sans-serif;
  font-size: 36px;
}
</style>
