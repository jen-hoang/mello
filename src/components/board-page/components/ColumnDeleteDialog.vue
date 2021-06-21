<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="320">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="gray"
          class="d-block"
          v-bind="attrs"
          v-on="on"
          x-small
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>

      <v-card rounded="xl">
        <v-card-title class="text-h5 align-center red--text">
          Delete this column?
        </v-card-title>

        <v-card-text class="text-subtitle-1">
          All data in the column will be lost...
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteColumn" color="grey darken-1"> Yes </v-btn>
          <v-btn color="primary" text @click="closeDialog"> No </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "column-delete-dialog",
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    columnIndex: Number,
  },
  methods: {
    deleteColumn() {
      this.$store.dispatch("deleteColumn", this.columnIndex);
      this.closeDialog();
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>
