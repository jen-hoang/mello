<template>
  <v-card v-bind="attrs" v-on="on">
    <v-card-title>
      {{ task.title }}
    </v-card-title>
  </v-card>
</template>
<script>
/**
 * A card displays a task on the board
 */
export default {
  name: "task-card",
  props: {
    task: Object,
  },
};
</script>
