<template>
  <div>
    <div v-if="isShowForm" class="ml-3 mr-3">
      <v-text-field
        placeholder="Placeholder"
        class="text-h6"
        autofocus
        @blur="toggleForm"
        @keypress.enter="toggleForm"
        @keydown.esc="toggleForm"
        v-model="name"
      ></v-text-field>
    </div>
    <v-card-title
      v-else
      :class="`${textColor} text-h5 text-left`"
      @click="toggleForm"
    >
      {{ name }}
    </v-card-title>
  </div>
</template>
<script>
/**
 * This is the container to control the display and input components
 */
export default {
  name: "column-name-toggle-display-edit",
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
        // make sure value is not empty
        if (value.trim()) {
          this.$store.commit("editColumnName", {
            index: this.columnIndex,
            name: value,
          });
        }
      },
    },
    textColor() {
      const colorList = [
        "teal--text darken-2",
        "cyan--text darken-4",
        "light-blue--text darken-4",
        "pink--text darken-4",
        "deep-orange--text darken-4",
      ];
      return colorList[Math.floor(Math.random() * colorList.length)];
    },
  },
};
</script>
