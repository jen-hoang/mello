<template>
  <draggable
    class="dragArea list-group"
    :list="taskList"
    :clone="clone"
    :group="{ name: 'card', pull: true }"
    @start="start"
  >
    <task-dialog v-for="task in taskList" :key="task.id" :task="task" />
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import TaskDialog from "./TaskDialog.vue";
let idGlobal = 8;
export default {
  name: "task-list-column",
  props: {
    taskList: Array,
  },
  components: {
    "task-dialog": TaskDialog,
    draggable: draggable,
  },
  methods: {
    clone(value) {
      return { id: idGlobal++, ...value };
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
  },
};
</script>
