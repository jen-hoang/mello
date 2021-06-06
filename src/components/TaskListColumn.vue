<template>
  <div>
    <h3>{{ columnTitle }}</h3>
    <draggable
      class="dragArea list-group"
      :list="taskList"
      :group="{ name: 'card', pull: true }"
    >
      <task-dialog v-for="task in taskList" :key="task.id" :task="task" />
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
    taskList() {
      return this.$store.state.taskList[this.columnId];
    },
  },
  components: {
    "task-dialog": TaskDialog,
    draggable: draggable,
  },
};
</script>
