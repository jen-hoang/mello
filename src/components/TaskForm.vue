<template>
  <v-card>
    <task-field-input-container>
      <template #display>
        <v-card-title class="text-h4 mb-1">
          {{ task.title }}
        </v-card-title>
      </template>
      <template #form>
        <v-card-title class="text-h4 mb-1"> this is the form </v-card-title>
      </template>
    </task-field-input-container>
    <div class="text-left">
      <v-card-text>
        <div class="text-h6 mb-1">
          <v-icon>mdi-book-information-variant</v-icon> Description
        </div>
        <div>
          {{ task.description }}
        </div>
      </v-card-text>
    </div>
    <v-card-actions class="justify-end">
      <v-btn text @click="onSubmit">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import TaskFieldInputContainer from "./TaskFieldInputContainer.vue";
/**
 * A task form for user to edit the form
 */
export default {
  components: { TaskFieldInputContainer },
  name: "task-form",
  props: {
    task: Object,
    onSubmit: Function,
  },
};
</script>
