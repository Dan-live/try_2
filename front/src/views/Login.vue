<template>
  <div class="base-container">
    <h1 class="text-center">Log in</h1>
    <div class="log-in-card">
      <form @submit.prevent="login">
        <div class="form-group">
          <input
            v-model="email"
            placeholder="Email Address"
            type="email"
            required
            class="form-control"
          />
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
        <button @click="login" type="submit" class="btn log-in-btn">
          Login
        </button>
      </form>
    </div>
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

      try {
        const response = await axios.get("http://localhost:5173/api/account", {
          params: user,
        });
        //console.log(response);
        if (
          response.status == 200 &&
          response.data &&
          response.data.email === this.email
        ) {
          // Зберігаємо дані в localStorage
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          //console.log(response);
          // Переходимо на головну сторінку
          this.$router.push("/main-page");
        } else {
          // Обробляємо помилки
          alert("Invalid email or password: " + response.data.message);
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

.log-in-card {
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

.log-in-btn {
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

.log-in-btn:hover {
  color: black !important;
  background: #20c997 !important;
}
</style>
