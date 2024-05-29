const express = require("express");
const ToDoRouter = require("./routers/todo.routes");
const accountRouter = require("./routers/account.routes");

const app = express();
const port = 3000;
app.use(express.json());

app.use("/", ToDoRouter);
app.use("/", accountRouter);

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
