<template>
  <div class="base-container">
    <h1 class="text-center">Profile</h1>
    <div class="profile-card">
      <p>First Name: {{ user.name }}</p>
      <p>Last Name: {{ user.lastName }}</p>
      <p>Email Address: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      user: {},
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(localStorage.getItem("user"));
    if (user) {
      this.user = user;
    } else {
      // Если пользователь не найден, перенаправляем на страницу входа
      //this.$router.push("/login");
      console.log(localStorage.getItem("user"));
    }
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

.profile-card {
  width: 25rem;
  border-radius: 20px !important;
  padding: 25px;
  background-color: #20c997 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.profile-card p {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}
</style>
