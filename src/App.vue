<template>
  <v-app>
    <div class="grey lighten-4 mello-app-container">
      <v-app-bar app flat color="transparent">
        <v-icon x-large>mdi-check-all</v-icon>
        <v-toolbar-title class="text-h4 ml-1"> Mello</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn href="/" icon> <v-icon>mdi-home</v-icon></v-btn>
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
.mello-app-container {
  min-height: 100vh;
}
</style>
