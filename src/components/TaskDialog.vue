<template>
  <v-dialog :key="task.id" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-card v-bind="attrs" v-on="on">
        <v-card-title>
          {{ task.title }}
        </v-card-title>
      </v-card>
    </template>
    <task-form :task="task" :onSubmit="closeDialog" />
  </v-dialog>
</template>
<script>
import TaskForm from "../components/TaskForm.vue";
export default {
  name: "task-dialog",
  props: {
    task: Object,
  },
  components: {
    "task-form": TaskForm,
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
