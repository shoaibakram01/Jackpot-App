const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String},
  lastName: { type: String},
  email : {type: String, required: true},
  walletAddress : {type: String, required: true}
});

userSchema.set('timestamps', true);

module.exports = mongoose.model("User", userSchema);