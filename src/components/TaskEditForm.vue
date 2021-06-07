<template>
  <v-card rounded="xl">
    <task-title-display-input-switch
      :columnId="columnId"
      :taskIndex="taskIndex"
    />
    <div class="text-left">
      <v-card-text>
        <div class="text-h6 mb-1 blue-grey--text darken-4 font-weight-bold">
          <v-icon color="blue-grey darken-3"
            >mdi-book-information-variant</v-icon
          >
          Description
        </div>
        <div>
          <task-description-input-switch
            :columnId="columnId"
            :taskIndex="taskIndex"
          />
        </div>
      </v-card-text>
    </div>
    <v-card-actions class="justify-end">
      <v-btn text @click="closeForm">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import TaskDescriptionInputSwitch from "./TaskDescriptionInputSwitch.vue";
import TaskTitleDisplayInputSwitch from "./TaskTitleDisplayInputSwitch";
/**
 * A task form for user to edit the form
 */
export default {
  components: {
    "task-title-display-input-switch": TaskTitleDisplayInputSwitch,
    "task-description-input-switch": TaskDescriptionInputSwitch,
  },
  name: "task-form",
  props: {
    task: Object,
    closeForm: Function,
    columnId: String,
    taskIndex: Number,
  },
};
</script>
