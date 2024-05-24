<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="signup">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
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
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("currentUser", JSON.stringify(user)); // Сохраняем текущего пользователя
      this.$router.push("/main-page");
    },
  },
};
</script>

<style scoped>
/* Добавьте стили */
</style>
