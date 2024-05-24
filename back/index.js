const express = require("express");
// const contactRouter = require("./routes/contact.routes");
// const accountRouter = require("./routes/account.routes");

const app = express();
const port = 3001;
// app.use(express.json());

// app.use("/", contactRouter);
// app.use("/", accountRouter);
app.get("/", (req, res) => {
  res.send("Hello, Wordasdld!");
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
