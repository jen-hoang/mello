<template>
  <div>
    <h3>{{ columnTitle }}</h3>
    <draggable
      class="dragArea list-group"
      :group="{ name: 'card', pull: true }"
      v-model="taskList"
    >
      <task-dialog
        v-for="(task, index) in taskList"
        :key="task.id"
        :task="task"
        :columnId="columnId"
        :taskIndex="index"
      />
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import TaskDialog from "./TaskDialog.vue";
//let idGlobal = 8;
export default {
  name: "task-list-column",
  props: {
    columnIndex: Number,
  },
  computed: {
    columnTitle() {
      return this.$store.state.columns[this.columnIndex].name;
    },
    columnId() {
      return this.$store.state.columns[this.columnIndex].id;
    },
    taskList: {
      get() {
        return this.$store.state.taskList[this.columnId];
      },
      set(value) {
        this.$store.commit("updateTaskList", {
          taskListId: this.columnId,
          list: value,
        });
      },
    },
  },
  components: {
    "task-dialog": TaskDialog,
    draggable: draggable,
  },
};
</script>
