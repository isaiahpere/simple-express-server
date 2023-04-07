const express = require("express");
const router = express.Router();

router.post("/:id", (req, res) => {
  res.send("created a new dog");
});

router.get("/", (req, res) => {
  res.send("You fetched all dogs");
});

router.get("/:id", (req, res) => {
  res.send("You are seeing a single dog");
});

router.put("/:id", (req, res) => {
  res.send("UPDATED a single dog");
});

router.delete("/:id", (req, res) => {
  res.send("DELETED a single dog");
});

module.exports = router;
