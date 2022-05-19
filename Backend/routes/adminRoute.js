const express = require("express");
const admin = express.Router();
const adminController = require("../controllers/adminController");

admin.post('/admin/login/:userName/:password/:walletAddress',adminController.adminLogin);


module.exports=admin;