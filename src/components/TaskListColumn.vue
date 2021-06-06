<template>
  <div>
    <task-dialog v-for="task in taskList" :key="task.id" :task="task" />
  </div>
</template>
<script>
import TaskDialog from "./TaskDialog.vue";
export default {
  name: "task list column",
  props: {
    taskList: Array,
  },
  components: {
    "task-dialog": TaskDialog,
  },
};
</script>
