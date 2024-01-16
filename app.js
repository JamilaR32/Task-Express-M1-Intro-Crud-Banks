// let accounts = require("./accounts");
const express = require("express");

const accountsRouter = require("./api/routes");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/accounts", accountsRouter);

// app.use("/accounts", accountsRouter.router);
app.listen(PORT, () => {
  console.log(`hi ${PORT}`);
});
