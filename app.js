// let accounts = require("./accounts");
const express = require("express");
const morgan = require("morgan");
const accountsRouter = require("./api/routes");
const connectDB = require("./database");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(morgan("short"));

app.use("/accounts", accountsRouter);

//not found handler
app.use((req, res, next) => {
  return res.status(404).json("Path Not Found");
});

//error handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Server Error");
});
connectDB();
// app.use("/accounts", accountsRouter.router);
app.listen(PORT, () => {
  console.log(`hi ${PORT}`);
});
