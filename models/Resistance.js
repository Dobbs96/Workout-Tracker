const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({});

const User = mongoose.model("Resistance", ResistanceSchema);

module.exports = User;
