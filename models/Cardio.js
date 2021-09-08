const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercise: [
    {
      type: String,
      name: {
        type: String,
        require: "Please enter a cardio exercise.",
      },
      distance: {
        type: Number,
        require: "Please enter you distance.",
      },
      duration: {
        type: Number,
        require: "Please enter you duration in minutes.",
      },
    },
  ],
});

const User = mongoose.model("Cardio", CardioSchema);

module.exports = User;
