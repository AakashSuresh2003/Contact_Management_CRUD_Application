const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/user.Controller");
const routes = express.Router();

routes.post("/register", registerUser);

routes.post("/login", loginUser);

routes.get("/current", currentUser);

module.exports = routes;
