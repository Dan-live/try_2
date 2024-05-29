<template>
  <div>
    <input v-model="newTodoText" placeholder="New todo" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoText: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim()) {
        const users = JSON.parse(localStorage.getItem("user"));
        const userId = users ? users.id : null;
        const newText = JSON.parse(localStorage.getItem("todoText"));
        console.log("новый текст", newText.text);
        this.newTodoText = newText.text;
        this.$emit("addTodo", { id: userId, text: this.newTodoText });
        this.newTodoText = "";
        // console.log(this.newTodoText);
      }
    },
  },
};
</script>

<style scoped>
/* Добавьте стили */
</style>
