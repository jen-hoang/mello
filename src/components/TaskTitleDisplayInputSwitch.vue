<template>
  <div>
    <div v-if="isShowForm" class="ml-3 mr-3 pt-1">
      <v-text-field
        placeholder="Placeholder"
        class="text-h4"
        autofocus
        @blur="toggleForm"
        v-model="title"
      ></v-text-field>
    </div>
    <div @click="toggleForm" v-else>
      <v-card-title class="text-h4 mb-1">
        {{ title }}
      </v-card-title>
    </div>
  </div>
</template>
<script>
/**
 * This is the container to control the display and input components
 */
export default {
  name: "task-field-input-container",
  props: {
    columnId: String,
    taskIndex: Number,
  },
  mounted() {
    console.log(this.columnId + this.taskIndex);
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
    title: {
      get() {
        return this.$store.getters.getTaskTitle({
          taskListId: this.columnId,
          taskIndex: this.taskIndex,
        });
      },
      set(value) {
        this.$store.commit("updateTaskTitle", {
          taskListId: this.columnId,
          taskIndex: this.taskIndex,
          value,
        });
      },
    },
  },
};
</script>
