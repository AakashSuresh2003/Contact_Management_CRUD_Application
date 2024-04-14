const express = require("express");
const routes = express.Router();

routes.post("/register", (req, res) => {
  res.json({ message: "Register the user" });
});

routes.post("/login", (req, res) => {
  res.json({ message: "login the user" });
});

routes.get("/current", (req, res) => {
  res.json({ message: "Current user" });
});

module.exports = routes;
