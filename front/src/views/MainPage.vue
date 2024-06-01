<template>
  <div class="base-container">
    <h1 class="text-center">Todo List</h1>
    <nav class="nav-bar">
      <router-link to="/about" class="btn nav-btn">About</router-link>
      <router-link to="/profile" class="btn nav-btn">Profile</router-link>
      <router-link to="/" class="btn nav-btn">Logout</router-link>
    </nav>
    <div class="todo-input">
      <input
        v-model="newTodoText"
        placeholder="New todo"
        class="form-control"
      />
      <button @click="addTodo" class="btn add-btn">Add</button>
    </div>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <span>{{ todo.task }}</span>
        <button @click="removeTodo(todo.id)" class="btn remove-btn">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { compile } from "vue";
export default {
  data() {
    return {
      todos: [],
      users: [],
      newTodoText: "",
    };
  },

  created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      const users = JSON.parse(localStorage.getItem("user"));
      const userId = users ? users.id : null;
      try {
        const response = await axios.get("http://localhost:5173/api/todo", {
          params: { accId: userId },
        });
        this.todos = response.data;
      } catch (error) {
        console.error("An error occurred:", error);
      }
      //this.todos.push(response.data);
      console.log(response.data);
    },

    async addTodo(id) {
      const users = JSON.parse(localStorage.getItem("user"));
      const userId = users ? users.id : null;
      //usersID = users.id;
      const newText = {
        text: this.newTodoText,
      };
      localStorage.setItem("todoText", JSON.stringify(newText));
      console.log("новый текс", newText.text);
      const user = {
        accId: userId,
        task: this.newTodoText,
      };

      console.log(user);
      console.log(userId);

      try {
        const response = await axios.post(
          "http://localhost:5173/api/todo",
          user
        );
        //todo = response.data;
        this.todos.push(response.data);
        console.log(response.data);
        console.log(user);
        this.newTodoText = "";
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);

      axios
        .delete(`http://localhost:5173/api/todo/${id}`)
        .then(() => {
          this.$emit("remove", id);
        })
        .catch((error) => {
          console.error("Error deleting todo:", error);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;700&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");

body {
  background-size: cover;
  margin: 0;
  padding: 0;
}

.base-container {
  background: url("../assets/background.jpg") no-repeat center center fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 50px;
}

h1 {
  font-size: 4vw;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.2vw;
  margin-bottom: 2%;
  background-color: #20c997;
  border-radius: 10px;
  padding: 20px;
  width: 25%;
  min-width: 250px;
  text-align: center;
}

.nav-bar {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.nav-btn {
  background-color: #20c997;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.nav-btn:hover {
  background-color: #127c5c;
}

.todo-input {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.add-btn {
  background-color: #20c997;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-btn:hover {
  background-color: #127c5c;
}

.todo-list {
  list-style: none;
  padding: 0;
  width: 50%;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 10px;
  color: white;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

.remove-btn {
  background-color: transparent;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-btn:hover {
  background-color: #127c5c;
}
</style>
