<template>
  <div>
    <v-dialog :key="task.id" v-model="dialog" max-width="500">
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          <task-card :task="task" />
        </div>
      </template>
      <task-form
        :task="task"
        :closeForm="closeDialog"
        :columnId="columnId"
        :taskIndex="taskIndex"
      />
    </v-dialog>
  </div>
</template>
<script>
import TaskForm from "./TaskForm.vue";
import TaskCard from "./TaskCard.vue";
export default {
  name: "task-dialog",
  props: {
    task: Object,
    columnId: String,
    taskIndex: Number,
  },
  components: {
    "task-form": TaskForm,
    "task-card": TaskCard,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>
