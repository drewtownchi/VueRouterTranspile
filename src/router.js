import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Second from "@/views/Second.vue";

const About = () =>
  import ("./views/About.vue");

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/second",
      name: "second",
      component: Second
    }
  ]
});