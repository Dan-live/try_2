<template>
  <li>
    <span>{{ todo.text }}</span>
    <button @click="removeTodo">Remove</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    removeTodo() {
      this.$emit("remove", this.todo.id);
    },
  },
};
</script>

<style scoped>
/* Добавьте стили */
</style>
