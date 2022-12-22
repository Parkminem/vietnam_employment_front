import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import ApplyField from "../views/ApplyField.vue";
import QnA from "../views/QnA.vue";
import ApplyComplete from "../views/ApplyComplete.vue";

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
    {
      path: "/applycomplete",
      component: ApplyComplete,
    },
    {
      path: "/:pathMatch(.*)*",
      component: Main,
    },
  ],
});

export default router;
