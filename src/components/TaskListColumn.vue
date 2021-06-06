<template>
  <draggable
    class="dragArea list-group"
    :list="taskList"
    :group="{ name: 'card', pull: true }"
  >
    <task-dialog v-for="task in taskList" :key="task.id" :task="task" />
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import TaskDialog from "./TaskDialog.vue";
//let idGlobal = 8;
export default {
  name: "task-list-column",
  props: {
    taskList: Array,
  },
  components: {
    "task-dialog": TaskDialog,
    draggable: draggable,
  },
};
</script>
