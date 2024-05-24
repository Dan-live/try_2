// import { createRouter, createWebHistory } from "vue-router";
// import TodoListView from "../views/TodoListView.vue";

// const routes = [
//   {
//     path: "/",
//     name: "TodoList",
//     component: TodoListView,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
import { createRouter, createWebHistory } from "vue-router";
import Base from "../views/Base.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Profile from "../views/Profile.vue";
import About from "../views/About.vue";
import MainPage from "../views/MainPage.vue";

const routes = [
  { path: "/", name: "Base", component: Base },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/about", name: "About", component: About },
  { path: "/main-page", name: "MainPage", component: MainPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
