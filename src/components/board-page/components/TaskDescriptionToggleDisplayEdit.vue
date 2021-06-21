<template>
  <div>
    <div v-if="isShowForm" class="ml-3 mr-3 pa-1">
      <v-textarea
        solo
        autofocus
        @blur="toggleForm"
        @keypress.enter="toggleForm"
        v-model="description"
      ></v-textarea>
    </div>
    <div @click="toggleForm" v-else>
      <v-card-text class="text-subtitle-1">
        {{ description }}
      </v-card-text>
    </div>
  </div>
</template>
<script>
/**
 * This is the container to control the display and input components
 */
export default {
  name: "task-description-toggle-display-edit",
  props: {
    columnId: String,
    taskIndex: Number,
  },
  mounted() {
    if (!this.description) {
      this.isShowForm = true;
    }
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
    description: {
      get() {
        return this.$store.getters.getTaskDescription({
          taskListId: this.columnId,
          taskIndex: this.taskIndex,
        });
      },
      set(value) {
        this.$store.dispatch("updateTaskDescription", {
          taskListId: this.columnId,
          taskIndex: this.taskIndex,
          value,
        });
      },
    },
  },
};
</script>
