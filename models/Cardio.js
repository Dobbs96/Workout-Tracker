const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({});

const User = mongoose.model("Cardio", CardioSchema);

module.exports = User;
