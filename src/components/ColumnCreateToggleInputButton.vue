<template>
  <v-card width="250" class="mt-5 mr-3" flat color="transparent">
    <div v-if="isShowForm">
      <v-text-field
        placeholder="What's column name?"
        autofocus
        @blur="createColumn"
        @keypress.enter="createColumn"
        @keydown.esc="closeForm"
        v-model="columnName"
        class="text-h5"
      ></v-text-field>
    </div>
    <v-btn v-else @click="displayForm" block class="primary--text" rounded text
      >+ Add a column</v-btn
    >
  </v-card>
</template>
<script>
export default {
  name: "column-create-toggle-input-button",
  data() {
    return {
      isShowForm: false,
      columnName: "",
    };
  },
  methods: {
    createColumn() {
      if (this.columnName.trim()) {
        this.$store.commit("addColumn", this.columnName);
      }
      this.closeForm();
    },
    closeForm() {
      console.log("close form")
      this.isShowForm = false;
      this.columnName = "";
    },
    displayForm() {
      this.isShowForm = true;
    },
  },
};
</script>
<style lang="scss">
.newColumnButtonContainer {
  width: 280;
}
</style>
