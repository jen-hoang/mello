<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="taskName"
        placeholder="What is your task name?"
        autofocus
        @blur="createTask"
        @keypress.enter="createTask"
      />
    </v-card-title>
  </v-card>
</template>
<script>
/**
 * A card display text input to create the title of new task
 */
export default {
  name: "task-new-card",
  props: {
    taskListId: String,
    unDisplay: Function,
  },
  data() {
    return {
      taskName: "",
    };
  },
  methods: {
    createTask() {
      console.log(this.taskName);
      if (this.taskName) {
        this.$store.commit("addTask", {
          taskListId: this.taskListId,
          title: this.taskName,
        });
      }
      this.taskName = "";
      this.unDisplay();
    },
  },
};
</script>
