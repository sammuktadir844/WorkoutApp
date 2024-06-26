const express = require("express");

const router = express.Router();

//router.get("/", () => {});
//Get all workout
router.get("/", (req, res) => {
  res.json({ msg: "We are getting all workouts by this one" });
});

//Get all workout
router.get("/:id", (req, res) => {
  res.json({ msg: "We are gonna get single one" });
});

//Post a new workout
router.post("/", (req, res) => {
  res.json({ msg: "Post a new workout" });
});

//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

//Update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;
