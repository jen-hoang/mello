import Vue from "vue";
import Vuex from "vuex";
import uniqid from "uniqid";
//import VuexPersist from "vuex-persist";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import firebase, { db } from "../firebase/firebase";

// const vuexPersist = new VuexPersist({
//   key: "mello",
//   storage: window.localStorage,
// });

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    // this is the sample data of the board
    return {
      // this is the sample board data
      userName: "",
      boardData: {
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
      },
    };
  },
  getters: {
    getTaskTitle:
      (state) =>
      ({ taskListId, taskIndex }) => {
        return state.boardData.taskList[taskListId][taskIndex].title;
      },
    getTaskDescription:
      (state) =>
      ({ taskListId, taskIndex }) => {
        return state.boardData.taskList[taskListId][taskIndex].description;
      },
    getColumnName: (state) => (index) => {
      return state.boardData.columns[index].name;
    },
    columns(state) {
      return state.boardData.columns;
    },
    taskList(state) {
      return state.boardData.taskList;
    },
  },
  mutations: {
    updateTaskList(state, { taskListId, list }) {
      state.boardData.taskList[taskListId] = list;
    },
    updateTaskTitle(state, { taskListId, taskIndex, value }) {
      // check the value must not an empty string
      if (typeof value === "string" && value.trim()) {
        state.boardData.taskList[taskListId][taskIndex].title = value;
      }
    },
    updateTaskDescription(state, { taskListId, taskIndex, value }) {
      state.boardData.taskList[taskListId][taskIndex].description = value;
    },
    addTask(state, { taskListId, title }) {
      if (!state.boardData.taskList) {
        state.boardData.taskList = {};
      }
      if (typeof title === "string" && title.trim()) {
        console.log(taskListId);
        console.log(state.boardData.taskList);
        state.boardData.taskList[taskListId].push({
          id: uniqid(),
          title: title,
          description: "",
        });
      }
    },
    deleteTask(state, { taskListId, taskIndex }) {
      state.boardData.taskList[taskListId].splice(taskIndex, 1);
    },
    addColumn(state, columnName) {
      if (typeof columnName === "string" && columnName.trim()) {
        const columnId = uniqid();
        if (!state.boardData.columns) {
          state.boardData.columns = [];
        }
        state.boardData.columns.push({
          id: columnId,
          name: columnName,
        });
        const newTaskList = { ...state.boardData.taskList };
        newTaskList[columnId] = [];
        state.boardData.taskList = newTaskList;
      }
    },
    editColumnName(state, { index, name }) {
      state.boardData.columns[index].name = name;
    },
    deleteColumn(state, index) {
      const columnId = state.boardData.columns[index].id;
      state.boardData.columns.splice(index, 1);
      state.boardData.taskList[columnId] = null;
    },
    ...vuexfireMutations,
  },
  actions: {
    // register real-time binding from firestore
    bindBoard: firestoreAction(async ({ state, bindFirestoreRef }) => {
      const user = firebase.auth().currentUser;
      // check if user is authenticated
      if (user !== null) {
        const uid = user.uid;
        // if current user board did not exist in the database, init the board value based on current state
        try {
          const board = await db.collection("boards").doc(uid).get();
          if (!board.exists) {
            console.log("board does not exist");
            await db.collection("boards").doc(uid).set(state.boardData);
          }
        } catch (err) {
          console.log(err);
        }
        return bindFirestoreRef("boardData", db.collection("boards").doc(uid));
      }
    }),
    unbindBoard: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef("boards");
    }),
    updateBoardToFirestore: async ({ state }) => {
      const user = firebase.auth().currentUser;
      if (user) {
        console.log("up load to firestore");
        await db.collection("boards").doc(user.uid).set(state.boardData);
      }
    },
    setAuthUserInfo({ commit }, { uid, name }) {
      commit("setAuthUserInfo", { uid, name });
    },
    logoutUser({ commit, dispatch }) {
      commit("deleteUserInfo");
      dispatch("unbindBoard");
    },
    async updateTaskList({ commit, dispatch }, { taskListId, list }) {
      commit("updateTaskList", { taskListId, list });
      await dispatch("updateBoardToFirestore");
    },
    async updateTaskTitle(
      { commit, dispatch },
      { taskListId, taskIndex, value }
    ) {
      commit("updateTaskTitle", { taskListId, taskIndex, value });
      await dispatch("updateBoardToFirestore");
    },
    async updateTaskDescription(
      { commit, dispatch },
      { taskListId, taskIndex, value }
    ) {
      commit("updateTaskDescription", { taskListId, taskIndex, value });
      await dispatch("updateBoardToFirestore");
    },
    async addTask({ commit, dispatch }, { taskListId, title }) {
      commit("addTask", { taskListId, title });
      await dispatch("updateBoardToFirestore");
    },
    async deleteTask({ commit, dispatch }, { taskListId, taskIndex }) {
      commit("deleteTask", { taskListId, taskIndex });
      await dispatch("updateBoardToFirestore");
    },
    async addColumn({ commit, dispatch }, columnName) {
      commit("addColumn", columnName);
      await dispatch("updateBoardToFirestore");
    },
    async editColumnName({ commit, dispatch }, { index, name }) {
      commit("editColumnName", { index, name });
      await dispatch("updateBoardToFirestore");
    },
    async deleteColumn({ commit, dispatch }, index) {
      commit("deleteColumn", index);
      await dispatch("updateBoardToFirestore");
    },
    updateUserName({ state }, userName) {
      state.userName = userName;
    },
  },
  modules: {},
  plugins: [],
});
