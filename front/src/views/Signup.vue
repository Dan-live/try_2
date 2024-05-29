<template>
  <div class="base-container">
    <h1 class="text-center">Signup</h1>
    <div class="sign-up-card">
      <form @submit.prevent="handleSignup">
        <div class="form-group">
          <input
            v-model="firstName"
            placeholder="First Name"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            v-model="lastName"
            placeholder="Last Name"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            v-model="email"
            @input="validateEmail"
            placeholder="Email Address"
            type="email"
            required
            class="form-control"
          />
          <div v-if="emailError" class="error">{{ emailError }}</div>
        </div>
        <div class="form-group">
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            required
            class="form-control"
          />
        </div>
        <button type="submit" class="btn sign-up-btn">Signup</button>
      </form>
    </div>
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
    validateEmail() {
      const emailPattern = /.+@.+/;
      if (!emailPattern.test(this.email)) {
        this.emailError = "Invalid email format";
      } else {
        this.emailError = "";
      }
    },
    async handleSignup() {
      this.validateEmail();
      // if (this.emailError) {
      //   console.log("email error"); // Останавливаем отправку формы, если есть ошибка
      // }
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;700&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");

.base-container {
  background: url("../assets/background.jpg") no-repeat center center fixed;
  background-size: cover;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 4vw;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.2vw;
  margin-bottom: 2%;
  background-color: #20c997;
  border-radius: 10px;
  padding: 20px;
  width: 25%;
  min-width: 250px;
  text-align: center;
}

.sign-up-card {
  width: 25rem;
  border-radius: 20px !important;
  padding: 25px;
  background-color: #20c997 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 1rem;
  width: 100%;
}

.form-control {
  border-radius: 10px;
  padding: 10px;
  border: none;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.sign-up-btn {
  background: transparent !important;
  border: 2px solid white !important;
  outline: none !important;
  transition: 0.2s;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.sign-up-btn:hover {
  color: black !important;
  background: #20c997 !important;
}
</style>
