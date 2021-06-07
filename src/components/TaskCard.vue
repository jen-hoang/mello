<template>
  <v-card class="my-2" dense rounded="xl">
    <v-card-title class="text-subtitle-1">
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
