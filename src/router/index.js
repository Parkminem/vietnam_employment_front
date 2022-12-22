import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import ApplyField from "../views/ApplyField.vue";
import QnA from "../views/QnA.vue";

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
    {
      path: "/qna",
      component: QnA,
    },
  ],
});

export default router;
