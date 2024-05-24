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
        this.$emit("addTodo", { id: Date.now(), text: this.newTodoText });
        this.newTodoText = "";
      }
    },
  },
};
</script>

<style scoped>
/* Добавьте стили */
</style>
