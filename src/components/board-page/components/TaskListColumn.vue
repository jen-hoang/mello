<template>
  <v-card width="270" class="mr-4 pa-2" flat color="transparent">
    <div class="d-flex justify-space-between align-center">
      <column-name-toggle-display-edit :columnIndex="columnIndex" />
      <column-delete-dialog :columnIndex="columnIndex" />
    </div>
    <div>
      <draggable
        class="dragArea list-group"
        :group="{ name: 'card', pull: true }"
        v-model="taskList"
      >
        <task-display-edit-dialog
          v-for="(task, index) in taskList"
          :key="task.id"
          :task="task"
          :columnId="columnId"
          :taskIndex="index"
        />
      </draggable>
      <task-create-card
        :taskListId="columnId"
        v-if="isDisplayTaskNewCard"
        :unDisplay="unDisplayTaskNewCard"
      />
    </div>
    <v-card-actions class="justify-end">
      <v-tooltip left class="rounded-xl">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            fab
            dark
            color="primary"
            x-small
            @click="displayTaskNewCard"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark small> mdi-plus </v-icon>
          </v-btn>
        </template>
        <span class="rounded-xl">Create a new task</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>
<script>
import draggable from "vuedraggable";
import TaskDisplayEditDialog from "./TaskDisplayEditDialog.vue";
import TaskCreateCard from "./TaskCreateCard.vue";
import ColumnNameToggleDisplayEdit from "./ColumnNameToggleDisplayEdit.vue";
import ColumnDeleteDialog from "./ColumnDeleteDialog.vue";

export default {
  name: "task-list-column",
  props: {
    columnIndex: Number,
  },
  data() {
    return {
      isDisplayTaskNewCard: false,
    };
  },
  computed: {
    columnName() {
      return this.$store.getters.columns[this.columnIndex].name;
    },
    columnId() {
      return this.$store.getters.columns[this.columnIndex].id;
    },
    taskList: {
      get() {
        return this.$store.getters.taskList[this.columnId];
      },
      set(value) {
        this.$store.dispatch("updateTaskList", {
          taskListId: this.columnId,
          list: value,
        });
      },
    },
  },
  components: {
    "task-display-edit-dialog": TaskDisplayEditDialog,
    draggable: draggable,
    "task-create-card": TaskCreateCard,
    "column-name-toggle-display-edit": ColumnNameToggleDisplayEdit,
    "column-delete-dialog": ColumnDeleteDialog,
  },
  methods: {
    displayTaskNewCard() {
      this.isDisplayTaskNewCard = true;
    },
    unDisplayTaskNewCard() {
      this.isDisplayTaskNewCard = false;
    },
  },
};
</script>
