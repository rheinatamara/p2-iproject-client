import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import MainProfile from "../views/MainProfile.vue";
import Explore from "../views/Explore.vue";
import EditProfile from "../components/EditProfile.vue";
import Search from "../views/Search.vue";
import Detail from "../components/Detail.vue";
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
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/edit",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
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
