const express = require("express");
const router = express.Router({ mergeParams: true }); // show all params in url

router.post("/meow", (req, res) => {
  const { id } = req.params;
  res.json(`the cat id ${id} meows`);
});

router.get("/jumps", (req, res) => {
  const { id } = req.params;
  res.json(`the cat id ${id} jumps`);
});

router.get("/runs", (req, res) => {
  const { id } = req.params;
  res.json(`the cat id ${id} runs`);
});

module.exports = router;
