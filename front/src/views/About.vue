<template>
  <div class="base-container">
    <h1 class="text-center">About This App</h1>
    <div class="about-card">
      <p>
        Todo List is an organizational tool designed to manage tasks and
        activities, whether they're work-related or personal. It assists users
        in staying on top of their workload and maintaining productivity.
      </p>
      <p>
        If you often feel overwhelmed by your tasks, forget important things, or
        struggle to meet deadlines, you're not alone. Many individuals face
        similar challenges in both their professional and personal lives.
        However, by utilizing a todo list, you can streamline your workflow and
        improve your organization.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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
  width: 35%;
  min-width: 250px;
  text-align: center;
}

.about-card {
  width: 50%;
  max-width: 800px;
  border-radius: 20px !important;
  padding: 25px;
  background-color: rgba(32, 201, 151, 0.9) !important;
  color: white;
  margin-top: 20px;
  text-align: center;
}

.about-card p {
  margin: 1rem 0;
  font-size: 1.2rem;
}
</style>
