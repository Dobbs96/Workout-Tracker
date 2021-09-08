const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
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
      weight: {
        type: Number,
        require: "Please enter you weights in pounds.",
      },
      sets: {
        type: Number,
        require: "Please enter how many sets.",
      },
      reps: {
        type: Number,
        require: "Please enter how many reps.",
      },
      duration: {
        type: Number,
        require: "Please enter you duration in minutes.",
      },
    },
  ],
});

const User = mongoose.model("Resistance", ResistanceSchema);

module.exports = User;
