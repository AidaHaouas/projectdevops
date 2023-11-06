const express = require("express");
const getUsers = require("../Controllers/GetUsers.js");
const createUsers = require ("../Controllers/CreateUser.js");
const deleteUser = require ("../Controllers/DeleteUser.js");
const authRouter = express.Router();

authRouter.get("/users", getUsers);
authRouter.post("/users", createUsers);
authRouter.delete("/users/:id", deleteUser);
module.exports = authRouter