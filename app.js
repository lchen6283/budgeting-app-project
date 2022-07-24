//Dependencies
const express = require("express");
const app = express();
const budgetApp = require("./controllers/budgetController.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Budget App!");
});

app.use("/budget", budgetApp);

app.use("*", (req, res) => {
  res.status(404).send("Opps! Nothing to see here.");
});

module.exports = app;
