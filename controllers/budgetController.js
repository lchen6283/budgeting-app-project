const express = require("express");
const budget = express.Router();
const budgetArray = require("../models/budget.js");

budget.post("/", (req, res) => {
  budgetArray.push(req.body);
  res.send(budgetArray[budgetArray.length - 1]);
  console.log(req.body);
});

budget.get("/", (req, res) => {
  res.json(budgetArray);
});

budget.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= budgetArray.length) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(budgetArray[id]);
});

budget.put("/:id", (req, res) => {
  if (budgetArray[req.params.id]) {
    budgetArray[req.params.id] = req.body;
    res.status(200).json(budgetArray[req.params.id]);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

budget.delete("/:id", (req, res) => {
  if (budgetArray[req.params.id]) {
    const deletedBudget = budgetArray.splice(req.params.id, 1);
    res.status(200).json(deletedBudget);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

module.exports = budget;
