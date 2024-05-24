<template>
  <div>
    <h1>Todo List</h1>
    <nav>
      <router-link to="/about"><button>About</button></router-link>
      <router-link to="/profile"><button>Profile</button></router-link>
      <router-link to="/"><button>Logout</button></router-link>
      <!-- Возврат на базовую страницу -->
    </nav>
    <AddTodo @addTodo="addTodo" />
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo.vue";
import TodoItem from "../components/TodoItem.vue";

export default {
  components: {
    AddTodo,
    TodoItem,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style scoped>
/* Добавьте стили */
nav {
  margin-bottom: 20px;
}
button {
  margin-right: 10px;
}
</style>
