<template>
  <div>
    <div v-if="isShowForm" class="ml-3 mr-3">
      <v-text-field
        placeholder="What's column name?"
        autofocus
        @blur="createColumn"
        @keypress.enter="createColumn"
        v-model="columnName"
      ></v-text-field>
    </div>
    <v-btn v-else @click="displayForm">+ Add a column</v-btn>
  </div>
</template>
<script>
export default {
  name: "column-new-form",
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
      this.isShowForm = false;
      this.columnName = "";
    },
    displayForm() {
      this.isShowForm = true;
    },
  },
};
</script>
