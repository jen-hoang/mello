import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home-page/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/board",
    name: "/Board",
    component: () => import("./components/board-page/Board.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
