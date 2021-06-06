<template>
  <v-card>
    <v-toolbar color="primary" dark>Opening from the bottom</v-toolbar>
    <v-card-text>
      <div class="text-h2 pa-12">{{ task.title }}</div>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn text @click="onSubmit">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
/**
 * A task form for user to edit the form
 */
export default {
  name: "task-form",
  props: {
    task: Object,
    onSubmit: Function,
  },
};
</script>
