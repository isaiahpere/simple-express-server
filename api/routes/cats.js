const express = require("express");
const router = express.Router();

router.post("/:id", (req, res) => {
  res.json("created a new cat");
});

router.get("/", (req, res) => {
  res.json("You fetched all cats");
});

router.get("/:id", (req, res) => {
  res.json("You are seeing a single cat");
});

router.put("/:id", (req, res) => {
  res.josn("UPDATED a single cat");
});

router.delete("/:id", (req, res) => {
  res.json("DELETED a single cat");
});

module.exports = router;
