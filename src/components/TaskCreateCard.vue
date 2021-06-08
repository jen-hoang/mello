<template>
  <v-card rounded="xl">
    <v-card-title>
      <v-text-field
        placeholder="What is your task name?"
        autofocus
        @blur="createTask"
        @keypress.enter="createTask"
        @keydown.esc="unDisplay"
        v-model="taskName"
      />
    </v-card-title>
  </v-card>
</template>
<script>
/**
 * A card display text input to create the title of new task
 */
export default {
  name: "task-create-card",
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
      if (this.taskName.trim()) {
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
