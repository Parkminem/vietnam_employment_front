import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import ApplyField from "../views/ApplyField.vue";
import QnA from "../views/QnA.vue";
import ApplyComplete from "../views/ApplyComplete.vue";
import ApplyTrendLogin from "../views/ApplyTrendLogin.vue";
import ApplyTrend from "../views/ApplyTrend.vue";
import Apply from "../views/Apply.vue";
import Main from "../views/Main.vue";

// const { full_name, email } = store.state.applyForm;
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
      path: "/apply",
      component: Apply,
    },
    {
      path: "/applytrend",
      component:
        !store.state.applyForm.full_name || !store.state.applyForm.email
          ? ApplyTrendLogin
          : ApplyTrend,
    },
    {
      path: "/:pathMatch(.*)*",
      component: Main,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
