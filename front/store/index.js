import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: null,
    todos: [],
  },
  getters: {
    currentUser: (state) => state.user,
    allTodos: (state) => state.todos,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
  actions: {
    fetchUser({ commit }) {
      axios
        .get("/api/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          commit("setUser", response.data);
        });
    },
    fetchTodos({ commit }) {
      axios
        .get("/api/tasks", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          commit("setTodos", response.data);
        });
    },
    createTodo({ commit }, todo) {
      axios
        .post("/api/tasks", todo, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          commit("addTodo", response.data);
        });
    },
    deleteTodo({ commit }, id) {
      axios
        .delete(`/api/tasks/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          commit("removeTodo", id);
        });
    },
  },
});
