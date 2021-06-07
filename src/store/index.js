import Vue from "vue";
import Vuex from "vuex";
import uniqid from "uniqid";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      columns: [
        { id: "todo", name: "To do" },
        { id: "process", name: "Process" },
        { id: "done", name: "done" },
      ],
      taskList: {
        todo: [
          {
            id: 1,
            title: "get layout",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: 2,
            title: "Get board",
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
        process: [
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
        done: [],
      },
    };
  },
  getters: {
    getTaskTitle:
      (state) =>
      ({ taskListId, taskIndex }) => {
        return state.taskList[taskListId][taskIndex].title;
      },
    getTaskDescription:
      (state) =>
      ({ taskListId, taskIndex }) => {
        return state.taskList[taskListId][taskIndex].description;
      },
  },
  mutations: {
    updateTaskList(state, { taskListId, list }) {
      state.taskList[taskListId] = list;
    },
    updateTaskTitle(state, { taskListId, taskIndex, value }) {
      state.taskList[taskListId][taskIndex].title = value;
    },
    updateTaskDescription(state, { taskListId, taskIndex, value }) {
      state.taskList[taskListId][taskIndex].description = value;
    },
    addTask(state, { taskListId }) {
      state.taskList[taskListId].push({
        id: uniqid(),
        title: "",
        description: "",
      });
    },
    deleteTask(state, { taskListId, taskIndex }) {
      state.taskList[taskListId].splice(taskIndex, 1);
    },
    addColumn(state, columnName) {
      const columnId = uniqid();
      state.columns.push({
        id: uniqid(),
        name: columnName,
      });
      state.taskList[columnId] = [];
    },
    editColumnName(state, { index, name }) {
      state.columns[index].name = name;
    },
    deleteColumn(state, index) {
      state.columns.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
