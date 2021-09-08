const router = require("express").Router();
const db = require("../../models");

router.get("/", (req, res) => {
  res.send("API");
});

module.exports = router;
