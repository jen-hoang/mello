<template>
  <div class="row">
    <div v-for="(column, index) in columnList" :key="column.id">
      <task-list-column :columnIndex="index" />
    </div>
    <div>
      <column-create-toggle-input-button />
    </div>
  </div>
</template>

<script>
import TaskListColumn from "./TaskListColumn.vue";
import ColumnCreateToggleInputButton from "./ColumnCreateToggleInputButton.vue";

export default {
  name: "board-display",
  components: {
    "task-list-column": TaskListColumn,
    "column-create-toggle-input-button": ColumnCreateToggleInputButton,
  },
  computed: {
    columnList() {
      return this.$store.state.columns;
    },
  },
};
</script>
<style scoped></style>
