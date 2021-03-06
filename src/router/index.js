import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostNew.vue";
import PostsShow from "../views/PostShow.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/post", name: "posts-index", component: PostsIndex },
  { path: "/posts/new", name: "posts-new", component: PostsNew },
  { path: "/posts/:id", name: "posts-show", component: PostsShow },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
