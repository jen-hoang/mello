import Vue from "vue";
import Vuex from "vuex";
import uniqid from "uniqid";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "mello",
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      columns: [
        { id: "todo", name: "To do" },
        { id: "process", name: "Process" },
        { id: "done", name: "Done" },
      ],
      taskList: {
        todo: [
          {
            id: 1,
            title: "Write a document",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: 2,
            title: "Refactor code",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: 3,
            title: "Adjust the website styling",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ],
        process: [
          {
            id: 5,
            title: "Develop home page",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: 6,
            title: "Develop popup task card",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: 7,
            title: "Develop draggable board",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ],
        done: [
          {
            id: 7,
            title: "Create a development environment",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ],
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
    getColumnName: (state) => (index) => {
      return state.columns[index].name;
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
    addTask(state, { taskListId, title }) {
      console.log(state.taskList[taskListId]);
      state.taskList[taskListId].push({
        id: uniqid(),
        title: title,
        description: "",
      });
    },
    deleteTask(state, { taskListId, taskIndex }) {
      state.taskList[taskListId].splice(taskIndex, 1);
    },
    addColumn(state, columnName) {
      const columnId = uniqid();
      state.columns.push({
        id: columnId,
        name: columnName,
      });
      //state.taskList[columnId] = new Array();
      const newTaskList = { ...state.taskList };
      newTaskList[columnId] = [];
      state.taskList = newTaskList;
      console.log(state);
    },
    editColumnName(state, { index, name }) {
      state.columns[index].name = name;
    },
    deleteColumn(state, index) {
      const columnId = state.columns[index].id;
      state.columns.splice(index, 1);
      state.taskList[columnId] = null;
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin],
});
