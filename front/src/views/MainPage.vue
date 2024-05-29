<template>
  <div>
    <h1>Todo List</h1>
    <nav>
      <router-link to="/about"><button>About</button></router-link>
      <router-link to="/profile"><button>Profile</button></router-link>
      <router-link to="/"><button>Logout</button></router-link>
      <!-- Возврат на базовую страницу -->
    </nav>
    <!-- <AddTodo ref="addTodoComponent" @addTodo="addTodo" />
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul> -->
    <div>
      <input v-model="newTodoText" placeholder="New todo" />
      <button @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span>{{ todo.task }}</span>
        <button @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
  <!-- <div>
    <input v-model="newTodoText" placeholder="New todo" />
    <button @click="addTodo">Add</button>
  </div> -->
</template>

<script>
//import AddTodo from "../components/AddTodo.vue";
//import TodoItem from "../components/TodoItem.vue";

import axios from "axios";
export default {
  components: {
    //AddTodo,
    //TodoItem,
  },
  // props: {
  //   todo: Object,
  // },
  data() {
    return {
      todos: [],
      users: [],
      newTodoText: "",
    };
  },
  // computed: {
  //   userId() {
  //     //return store.getters.currentUser?.id;
  //     localStorage.getItem("userId");
  //   },
  // },

  methods: {
    // loadTodos() {
    //   // axios
    //   //   .get(`http://localhost:5173/api/todo/${this.userId}`)
    //   //   .then((response) => {
    //   //     this.todos = response.data;
    //   //   })
    //   //   .catch((error) => {
    //   //     console.error("Error loading todos:", error);
    //   //   });
    //   console.log("PPP");
    // },

    // addTodo() {
    //   // const newTodoText = this.$refs.addTodoComponent.newTodoText;
    //   // if (newTodoText.trim()) {
    //   //   const newTodo = { id: this.userId, text: this.newTodoText };
    //   //   this.$emit("addTodo", { id: Date.now(), text: this.newTodoText });
    //   //   this.newTodoText = "";
    //   //   axios
    //   //     .post(`http://localhost:5173/api/todo/${this.todo.id}`)
    //   //     .then((response) => {
    //   //       this.todos.push(response.data);
    //   //     })
    //   //     .catch((error) => {
    //   //       console.error("Error adding todo:", error);
    //   //     });
    //   // }
    //   // this.todos.push(todo);

    //   //if (newTodoText.trim()) {
    //   //const newTodo = { id: this.userId, text: this.newTodoText };
    //   //this.$emit("addTodo", { id: Date.now(), text: this.newTodoText });
    //   //this.newTodoText = "";

    //   // try {
    //   // const response = await axios.post(
    //   //   "http://localhost:5173/api/account",
    //   //   user
    //   // );}
    //   //   catch(error)  {
    //   //     console.error("Error adding todo:", error);
    //   //   };

    //   //}
    //   //this.todos.push(todo);

    //   const users = JSON.parse(localStorage.getItem("user"));
    //   console.log(users.id);
    //   console.log(localStorage.getItem("user"));
    //   //console.log("as");
    // },
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
        // //console.log(response);
        // if (response.status == 200) {
        //   // Сохраняем данные в localStorage
        //   //localStorage.setItem("todo", JSON.stringify(response.data));
        //   // Переходим на главную страницу
        //   //this.$router.push("/main-page");
        // } else {
        //   // Обрабатываем ошибки
        //   alert("Registration failed: " + response.data.message);
        // }
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
    // mounted() {
    //   this.loadTodos();
    // },
  },
};
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}
button {
  margin-right: 10px;
}
</style>
