<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <task-list-column :taskList="list1" />
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>

      <task-list-column :taskList="list2" />
    </div>
  </div>
</template>

<script>
import TaskListColumn from "./TaskListColumn.vue";

let idGlobal = 8;
export default {
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    TaskListColumn,
  },
  data() {
    return {
      isDialogOpen: false,
      list1: [
        {
          id: 1,
          title: "First title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          title: "second",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          title: "third",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
      list2: [
        {
          id: 5,
          title: "fourth",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 6,
          title: "three",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 7,
          title: "two",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
      controlOnStart: true,
    };
  },
  methods: {
    clone(value) {
      return { id: idGlobal++, ...value };
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
  },
};
</script>
<style scoped></style>
