<template>
  <div class="base-container">
    <h1 class="text-center">TODO LIST</h1>
    <div class="btn-block">
      <router-link to="/login" class="btn">Log In</router-link>
      <router-link to="/signup" class="btn">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Base",
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

.btn-block {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn {
  display: inline-block;
  padding: 1vw 4vw;
  margin-bottom: 2%;
  text-decoration: none;
  color: #fff;
  background-color: #20c997;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 200px;
  text-align: center;
}

.btn:hover {
  background-color: #127c5c;
}
</style>
