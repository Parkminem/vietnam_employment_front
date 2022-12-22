import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import ApplyField from "../views/ApplyField.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/applyfield",
      component: ApplyField,
    },
  ],
});

export default router;
