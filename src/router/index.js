import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Us from "@/views/Us";
import FundDetail from "@/views/FundDetail";
import OurFunds from "@/views/OurFunds";
import Profiling from "@/views/Profiling";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/us",
    name: "Us",
    component: Us
  },
  {
    path: "/funds",
    name: "Funds",
    component: OurFunds
  },
  {
    path: "/funds/:fundId",
    name: "Fund",
    component: FundDetail
  },
  {
    path: "/profiling",
    name: "Profiling",
    component: Profiling
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/blog",
    redirect() {
      window.location.href = "https://blog.dvacapital.com";
      return "/";
    }
  },
  // this route should always be the last one
  {
    path: "*",
    redirect: "/not-found"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
