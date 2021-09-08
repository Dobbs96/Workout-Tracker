const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  resistance: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resistance",
    },
  ],
  cardio: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cardio",
    },
  ],
});

const User = mongoose.model("Workout", WorkoutSchema);

module.exports = User;
