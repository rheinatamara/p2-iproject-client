import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import MainProfile from "../views/MainProfile.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login-register",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/",
    name: "MainProfile",
    component: MainProfile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.name === "LandingPage" && localStorage.getItem("access_token")) {
    next({ name: "MainProfile" });
  } else if (
    to.name !== "LandingPage" &&
    !localStorage.getItem("access_token")
  ) {
    next({ name: "LandingPage" });
  } else {
    next();
  }
});

export default router;
