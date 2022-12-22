import { createRouter, createWebHistory } from "vue-router";
import ApplyField from "../views/ApplyField.vue";
import Apply from "../views/Apply.vue";
import Main from "../views/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/applyfield",
      component: ApplyField,
    },
    {
      path: "/apply",
      component: Apply,
    },
  ],
});

export default router;
