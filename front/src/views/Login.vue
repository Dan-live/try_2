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
      <button @click="login" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      //const user = JSON.parse(localStorage.getItem("user"));
      try {
        const response = await axios.get("http://localhost:5173/api/account", {
          params: user,
        });
        //console.log(response);
        if (response.status == 200) {
          // Сохраняем данные в localStorage

          localStorage.setItem("user", JSON.stringify(response.data));
          //console.log(response);
          // Переходим на главную страницу
          this.$router.push("/main-page");
        } else {
          // Обрабатываем ошибки
          alert("Invalid email or password: " + response.data.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    // if (
    //   user &&
    //   user.email === this.email &&
    //   user.password === this.password
    // ) {
    //   localStorage.setItem("currentUser", JSON.stringify(user)); // Сохраняем текущего пользователя
    //   this.$router.push("/main-page");
    // } else {
    //   alert("Invalid email or password");
    // }
    //},
  },
};
</script>

<style scoped>
/* Добавьте стили */
</style>
