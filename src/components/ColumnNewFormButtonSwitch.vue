<template>
  <v-card width="250" class="mt-5 mr-3" flat color="transparent">
    <div v-if="isShowForm">
      <v-text-field
        placeholder="What's column name?"
        autofocus
        @blur="createColumn"
        @keypress.enter="createColumn"
        v-model="columnName"
        class="text-h5"
      ></v-text-field>
    </div>
    <v-btn
      v-else
      @click="displayForm"
      rounded="xl"
      block
      class="primary--text"
      text
      >+ Add a column</v-btn
    >
  </v-card>
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
<style lang="scss">
.newColumnButtonContainer {
  width: 280;
}
</style>
