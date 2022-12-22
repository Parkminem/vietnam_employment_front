import { createRouter, createWebHistory } from "vue-router";
import ApplyField from "../views/ApplyField.vue";
import QnA from "../views/QnA.vue";
import ApplyComplete from "../views/ApplyComplete.vue";
import ApplyTrendLogin from "../views/ApplyTrendLogin.vue";
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
      path: "/qna",
      component: QnA,
    },
    {
      path: "/applycomplete",
      component: ApplyComplete,
    },
    {
      path: "/applytrendlogin",
      component: ApplyTrendLogin,
    },
    {
      path: "/:pathMatch(.*)*",
      component: Main,
    },
    {
      path: "/apply",
      component: Apply,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
