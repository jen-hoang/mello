<template>
  <div>
    <div v-if="isShowForm" class="ml-5 mr-5 mt-4 pt-2 pb-1">
      <v-text-field
        placeholder="Enter your task"
        class="text-h5"
        autofocus
        @blur="toggleForm"
        @keypress.enter="toggleForm"
        v-model="title"
      ></v-text-field>
    </div>
    <div v-else class="d-flex justify-space-between align-center pa-2">
      <v-card-title
        class="text-h5 d-block flex-grow-1 text-left primary--text"
        @click="toggleForm"
      >
        {{ title }}
      </v-card-title>
      <task-delete-dialog :taskIndex="taskIndex" :taskListId="columnId" />
    </div>
  </div>
</template>
<script>
import TaskDeleteDialog from "./TaskDeleteDialog.vue";
/**
 * This is the container to control the display and input components
 */
export default {
  name: "task-title-toggle-display-edit",
  components: {
    "task-delete-dialog": TaskDeleteDialog,
  },
  props: {
    columnId: String,
    taskIndex: Number,
  },
  mounted() {
    console.log(this.columnId + this.taskIndex);
  },
  data() {
    return {
      isShowForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.isShowForm = !this.isShowForm;
    },
  },
  computed: {
    title: {
      get() {
        return this.$store.getters.getTaskTitle({
          taskListId: this.columnId,
          taskIndex: this.taskIndex,
        });
      },
      set(value) {
        if (value.trim()) {
          this.$store.commit("updateTaskTitle", {
            taskListId: this.columnId,
            taskIndex: this.taskIndex,
            value,
          });
        }
      },
    },
  },
};
</script>
