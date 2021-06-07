<template>
  <v-card width="250" class="mr-4">
    <v-card-title class="text-h5">{{ columnTitle }}</v-card-title>
    <div>
      <draggable
        class="dragArea list-group"
        :group="{ name: 'card', pull: true }"
        v-model="taskList"
      >
        <task-edit-dialog
          v-for="(task, index) in taskList"
          :key="task.id"
          :task="task"
          :columnId="columnId"
          :taskIndex="index"
        />
      </draggable>
      <task-new-card
        :taskListId="columnId"
        v-if="isDisplayTaskNewCard"
        :unDisplay="unDisplayTaskNewCard"
      />
    </div>
    <v-card-actions class="justify-end">
      <v-btn fab dark color="indigo" small @click="displayTaskNewCard">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import draggable from "vuedraggable";
import TaskEditDialog from "./TaskEditDialog.vue";
import TaskNewCard from "./TaskNewCard.vue";
//let idGlobal = 8;
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
    "task-edit-dialog": TaskEditDialog,
    draggable: draggable,
    "task-new-card": TaskNewCard,
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
