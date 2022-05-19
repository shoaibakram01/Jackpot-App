const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lotterySchema = new Schema({
  lotteryId: { type: Number},
  remainingTime: { type: Date}
});

lotterySchema.set('timestamps', true);

module.exports = mongoose.model("Lottery", lotterySchema);