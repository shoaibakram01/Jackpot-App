const express = require("express");
const lottery = express.Router();
const lotteryController = require("../controllers/lotteryController");

lottery.post('/api/create-lottery/:lotteryId/:remainingTime',lotteryController.createLottery);
lottery.get('/api/read-lottery',lotteryController.readLottery);

module.exports=lottery;