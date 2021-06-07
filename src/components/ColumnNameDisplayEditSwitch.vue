<template>
  <div>
    <div v-if="isShowForm" class="ml-3 mr-3 pt-1">
      <v-text-field
        placeholder="Placeholder"
        class="text-h6"
        autofocus
        @blur="toggleForm"
        @keypress.enter="toggleForm"
        v-model="name"
      ></v-text-field>
    </div>
    <div v-else class="d-flex justify-space-between align-center">
      <v-card-title class="text-h5 text-left" @click="toggleForm">
        {{ name }}
      </v-card-title>
    </div>
  </div>
</template>
<script>
/**
 * This is the container to control the display and input components
 */
export default {
  name: "column-name-display-edit-switch",
  props: {
    columnIndex: Number,
  },
  data() {
    return {
      isShowForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.isShowForm = !this.isShowForm;
    },
  },
  computed: {
    name: {
      get() {
        return this.$store.getters.getColumnName(this.columnIndex);
      },
      set(value) {
        console.log(value);
        if (value.trim()) {
          this.$store.commit("editColumnName", {
            index: this.columnIndex,
            name: value,
          });
        }
      },
    },
  },
};
</script>
