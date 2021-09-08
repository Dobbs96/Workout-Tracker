const router = require("express").Router();
const db = require("../../models");

// GET /api/workouts
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then((workouts) => {
      workouts.forEach((workout) => {
        var total = 0;
        workout.exercises.forEach((e) => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });

      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT api/workouts

// POST api/workouts

// GET api/workouts/range

module.exports = router;
