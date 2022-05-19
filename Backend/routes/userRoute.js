const express = require("express");
const users = express.Router();
const usersController = require("../controllers/userController");

users.post('/api/login/:firstName/:lastName/:email/:accountAddress',usersController.registerUser);


module.exports=users;