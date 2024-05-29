<template>
  <li>
    <span>{{ todo.text }}</span>
    <button @click="removeTodo">Remove</button>
  </li>
</template>

<script>
import axios from "axios";
export default {
  props: {
    todo: Object,
  },
  methods: {
    removeTodo(id) {
      axios
        .delete(`http://localhost:5173/api/todo/${this.todo.id}`)
        .then(() => {
          this.$emit("remove", this.todo.id);
        })
        .catch((error) => {
          console.error("Error deleting todo:", error);
        });
    },
    // addTodo() {
    //   console.log("DDDD");
    //   const newTodo = {
    //     text: this.todo.text,
    //     userId: this.todo.id, // Предполагается, что userId передается в todo объекте
    //   };
    //   axios
    //     .post("http://localhost:5173/api/todo", newTodo)
    //     .then((response) => {
    //       this.$emit("add", response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error adding todo:", error);
    //     });
    // },
  },
};
</script>

<style scoped>
/* Добавьте стили */
</style>
