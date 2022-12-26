import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import ApplyField from "../views/ApplyField.vue";
import QnA from "../views/QnA.vue";
import ApplyComplete from "../views/ApplyComplete.vue";
import ApplyTrendLogin from "../views/ApplyTrendLogin.vue";
import Apply from "../views/Apply.vue";
import Main from "../views/Main.vue";
function isAuthenticate(to) {
  if (!full_name) {
    return { path: to.path, component: ApplyTrendLogin };
  } else {
    return { path: "/", component: Main };
  }
}
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
      path: "/apply",
      component: Apply,
    },
    {
      path: "applytrend",
      component: ApplyTrend,
    },
    {
      path: "/applytrendLogin",
      component: ApplyTrendLogin,
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
