<template>
  <div>
    <v-dialog :key="task.id" v-model="dialog" max-width="500" rounded="xl">
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          <task-display-card :task="task" />
        </div>
      </template>
      <task-edit-form
        :task="task"
        :closeForm="closeDialog"
        :columnId="columnId"
        :taskIndex="taskIndex"
      />
    </v-dialog>
  </div>
</template>
<script>
import TaskEditForm from "./TaskEditForm.vue";
import TaskDisplayCard from "./TaskDisplayCard.vue";
export default {
  name: "task-display-edit-dialog",
  props: {
    task: Object,
    columnId: String,
    taskIndex: Number,
  },
  components: {
    "task-edit-form": TaskEditForm,
    "task-display-card": TaskDisplayCard,
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
