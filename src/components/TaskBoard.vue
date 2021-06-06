<template>
  <div class="row">
    <div v-for="(column, index) in columnList" :key="column.id">
      <task-list-column :columnIndex="index" />
    </div>
  </div>
</template>

<script>
import TaskListColumn from "./TaskListColumn.vue";

let idGlobal = 8;
export default {
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    TaskListColumn,
  },
  computed: {
    columnList() {
      return this.$store.state.columns;
    },
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
<style scoped></style>
