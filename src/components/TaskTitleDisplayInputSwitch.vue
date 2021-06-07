<template>
  <div>
    <div v-if="isShowForm" class="ml-3 mr-3 pt-1">
      <v-text-field
        placeholder="Placeholder"
        class="text-h4"
        autofocus
        @blur="toggleForm"
        v-model="title"
      ></v-text-field>
    </div>
    <div v-else class="d-flex justify-space-between align-center pa-2">
      <v-card-title
        class="text-h4 d-block flex-grow-1 text-left"
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
  name: "task-field-input-container",
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
        this.$store.commit("updateTaskTitle", {
          taskListId: this.columnId,
          taskIndex: this.taskIndex,
          value,
        });
      },
    },
  },
};
</script>
