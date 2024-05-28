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
    removeTodo() {
      axios
        .delete(`http://localhost:5173/api/todo/${this.todo.id}`)
        .then(() => {
          this.$emit("remove", this.todo.id);
        })
        .catch((error) => {
          console.error("Error deleting todo:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Добавьте стили */
</style>
