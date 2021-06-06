<template>
  <div>
    <slot name="form" v-if="isShowForm"></slot>
    <div @click="toggleForm" v-else>
      <slot name="display"></slot>
    </div>
  </div>
</template>
<script>
/**
 * This is the container to control the display and input components
 */
export default {
  name: "task-field-input-container",
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
};
</script>
