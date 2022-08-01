import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FavoritePage from "../pages/FavoritePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: FavoritePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
