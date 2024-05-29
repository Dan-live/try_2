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
      <button @click="handleSignup" type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
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
  // methods: {
  //   signup() {
  //     const user = {
  //       firstName: this.firstName,
  //       lastName: this.lastName,
  //       email: this.email,
  //       password: this.password,
  //     };
  //     localStorage.setItem("user", JSON.stringify(user));
  //     localStorage.setItem("currentUser", JSON.stringify(user)); // Сохраняем текущего пользователя
  //     this.$router.push("/main-page");
  //   },
  // },
  methods: {
    async handleSignup() {
      const user = {
        name: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      console.log(user);
      try {
        const response = await axios.post(
          "http://localhost:5173/api/account",
          user
        );
        //console.log(response);
        if (response.status == 200) {
          // Сохраняем данные в localStorage
          localStorage.setItem("user", JSON.stringify(response.data));
          // Переходим на главную страницу
          this.$router.push("/main-page");
        } else {
          // Обрабатываем ошибки
          alert("Registration failed: " + response.data.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  },
};
</script>

<!-- <script setup>
import { ref } from "vue";
import axios from "axios";
//import { useRoute, useRouter } from "vue-router";

//const router = useRouter();
const _nickname = ref("");
const _lastName = ref("");
const _email = ref("");
// const _number = ref("");
const _pass = ref("");
// const _repPass = ref("");
var errormsg = ref("");

function Submit() {
  var acc = {
    name: _nickname.value,
    lastName: _lastName,
    email: _email.value,
    // number: _number.value,
    password: _pass.value,
  };

  // if (!validatePhoneNumber(acc.number)) {
  //   errormsg.value = "Некоректний формат номеру";
  //   return;
  // } else if (acc.name.length == 0) {
  //   errormsg.value = "Некоректний формат імені";
  //   return;
  // } else if (acc.password != _repPass.value) {
  //   errormsg.value = "Паролі не співпадають";
  //   return;
  // }

  axios
    .post("http://localhost:5174/api/account", acc)
    // .then(() => {
    //   router.push("/");
    // })
    .catch((error) => {
      console.error("Ошибка при отправке данных:", error);
    });
}

// function validatePhoneNumber(input) {
//   const pattern = /^\+\d+(\s\d+)*$/;
//   return pattern.test(input);
// }
</script>

<style scoped>
/* Добавьте стили */
</style> -->
