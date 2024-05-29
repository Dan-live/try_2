<template>
  <div>
    <h1>Profile</h1>
    <p>First Name: {{ user.name }}</p>
    <p>Last Name: {{ user.lastName }}</p>
    <p>Email Address: {{ user.email }}</p>
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
/* Добавьте стили */
</style>
