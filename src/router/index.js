import { createRouter, createWebHistory } from "vue-router";
import Searchpage from "../mainpages/Searchpage.vue";

const routes = [
  {
    path: "/",
    name: "Search",
    component: Searchpage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
