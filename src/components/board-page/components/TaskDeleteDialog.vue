<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="350">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="gray"
          class="d-block mr-2"
          v-bind="attrs"
          v-on="on"
          x-small
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>

      <v-card rounded="xl">
        <v-card-title class="text-h5 align-center red--text">
          Delete this task?
        </v-card-title>

        <v-card-text class="text-subtitle-1">
          All data in this task will be lost...
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteTask"> Yes </v-btn>
          <v-btn color="primary" text @click="closeDialog"> No </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "task-delete-dialog",
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    taskListId: String,
    taskIndex: Number,
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", {
        taskListId: this.taskListId,
        taskIndex: this.taskIndex,
      });
      this.closeDialog();
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>
