const express = require("express");
const router = express.Router();

router.post("/:id", (req, res) => {
  res.json("created a new dog");
});

router.get("/", (req, res) => {
  res.json("You fetched all dogs");
});

router.get("/:id", (req, res) => {
  res.json("You are seeing a single dog");
});

router.put("/:id", (req, res) => {
  res.josn("UPDATED a single dog");
});

router.delete("/:id", (req, res) => {
  res.json("DELETED a single dog");
});

module.exports = router;
