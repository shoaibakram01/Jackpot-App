const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  userName: { type: String},
  password: { type: String},
  walletAddress : {type: String}
});

// adminSchema.set('timestamps', true);

module.exports = mongoose.model("Admin", adminSchema);