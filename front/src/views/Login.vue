<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input
        v-model="email"
        placeholder="Email Address"
        type="email"
        required
      />
      <input
        v-model="password"
        placeholder="Password"
        type="password"
        required
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (
        user &&
        user.email === this.email &&
        user.password === this.password
      ) {
        localStorage.setItem("currentUser", JSON.stringify(user)); // Сохраняем текущего пользователя
        this.$router.push("/main-page");
      } else {
        alert("Invalid email or password");
      }
    },
  },
};
</script>

<style scoped>
/* Добавьте стили */
</style>
