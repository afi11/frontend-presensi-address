import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import DivisiView from "../views/divisi/DivisiView.vue";
import Auth from "../config/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { requiresAuth: false }
    },
    {
      path: "/divisi",
      name: "divisi",
      component: DivisiView,
      meta: { requiresAuth: false }
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !Auth.checkUserLoggin()) {
    return {
      name: "login",
    };
  }else if(Auth.checkUserLoggin() && to.name == "login") {
    return {
      name: "home",
    };
  }
});

export default router;
